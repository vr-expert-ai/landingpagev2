/* ============================================================
   Hero — scroll-scrubbed spinning video on a clean white stage
   ============================================================ */
const C = window.C;
const AIX = window.AIX;
const { Container, useReducedMotion } = AIX;

function Hero({ videoMode, onExplore, onDemo }) {
  const rm = useReducedMotion();
  const scrub = videoMode !== 'loop' && !rm;
  const wrapRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const videoColRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [centerShift, setCenterShift] = React.useState(0);
  const [videoSrc, setVideoSrc] = React.useState('assets/glasses-spin.mp4');
  const [vReady, setVReady] = React.useState(false);
  const durRef = React.useRef(7.04);
  const targetRef = React.useRef(0);

  /* Load the clip as an in-memory blob — the preview server ignores Range
     requests, so an object URL is what makes seeking/scrubbing reliable. */
  React.useEffect(() => {
    let url,alive = true;
    fetch('assets/glasses-spin.mp4').
    then((r) => r.blob()).
    then((b) => {if (!alive) return;url = URL.createObjectURL(b);setVideoSrc(url);}).
    catch(() => {});
    return () => {alive = false;if (url) URL.revokeObjectURL(url);};
  }, []);

  /* keep video seekable + know its duration */
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => {durRef.current = v.duration || 7.04;};
    const onReady = () => setVReady(true);
    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('loadeddata', onReady);
    v.addEventListener('canplay', onReady);
    if (v.readyState >= 1) onMeta();
    if (v.readyState >= 2) onReady();
    if (scrub) {
      v.pause();
      // start a fraction in — the very first frame is a black intro before the white-bg glasses
      const kick = () => {try {v.currentTime = 0.45;} catch (e) {}setVReady(true);};
      v.addEventListener('loadeddata', kick, { once: true });
    } else {
      const p = v.play();if (p && p.catch) p.catch(() => {});
    }
    // safety net: poll in case loadeddata/canplay fired before listeners attached
    const poll = setInterval(() => {
      if (v.readyState >= 2) {onMeta();onReady();if (scrub && v.currentTime < 0.4) {try {v.currentTime = 0.45;} catch (e) {}}clearInterval(poll);}
    }, 250);
    return () => {clearInterval(poll);v.removeEventListener('loadedmetadata', onMeta);v.removeEventListener('loadeddata', onReady);v.removeEventListener('canplay', onReady);};
  }, [scrub, videoSrc]);

  /* scroll → progress → video.currentTime, rAF-throttled (no perpetual loop) */
  React.useEffect(() => {
    if (!scrub) return;
    let ticking = false;
    const compute = () => {
      ticking = false;
      const wrap = wrapRef.current;
      if (!wrap) return;
      const total = wrap.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / total)) : 0;
      setProgress(p);
      // how far to slide the video so its centre lands on the viewport centre
      const col = videoColRef.current;
      if (col) {
        const r = col.getBoundingClientRect();
        setCenterShift(window.innerWidth / 2 - (r.left + r.width / 2));
      }
      // skip the black intro frame: map progress into [0.4 .. dur-0.06]
      const startT = 0.4;
      targetRef.current = startT + p * (durRef.current - startT - 0.06);
      const v = videoRef.current;
      if (v && v.readyState >= 2 && Math.abs(targetRef.current - v.currentTime) > 0.01) {
        try {v.currentTime = targetRef.current;} catch (e) {}
      }
    };
    const onScroll = () => {if (!ticking) {ticking = true;requestAnimationFrame(compute);}};
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', compute);
    return () => {window.removeEventListener('scroll', onScroll);window.removeEventListener('resize', compute);};
  }, [scrub]);

  /* copy choreography driven by progress (0 → 1) — headline fades & lifts quickly,
     video drifts from the right toward centre and zooms in before you scroll past */
  const titleFade = scrub ? Math.max(0, 1 - progress / 0.28) : 1;
  const titleLift = scrub ? -progress * 80 : 0;
  const cueFade = scrub ? Math.max(0, 1 - progress * 3) : 1;
  const videoScale = scrub ? 1 + progress * 0.85 : 1;
  const videoShiftX = scrub ? centerShift * progress : 0;

  const stage =
  <div style={{ position: scrub ? 'sticky' : 'relative', top: 0, height: '100vh', overflow: 'hidden', background: '#fff' }}>
      <div className="aix-hero-row" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
      gap: 'clamp(20px,4vw,56px)', maxWidth: 1280, margin: '0 auto', padding: '64px clamp(24px,5vw,64px) 48px' }}>
        {/* copy — left, vertically centred to align with the animation */}
        <div className="aix-hero-copy" style={{ flex: '1 1 50%', textAlign: 'left', minWidth: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        opacity: titleFade, transform: `translateY(${titleLift}px)`, pointerEvents: titleFade < 0.15 ? 'none' : 'auto' }}>
          <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 10, marginBottom: 18,
          padding: '7px 14px', borderRadius: 999, border: `1px solid ${C.borderS}`, background: '#fff' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: AIX.ACCENT }} />
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#525252', whiteSpace: 'nowrap' }}>AI Glasses for Enterprise</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, letterSpacing: '-0.03em',
          lineHeight: 1.02, margin: 0, color: '#2A2B2E', textWrap: 'balance', fontSize: "32px" }}>
            AI Glasses for Business
          </h1>
          <p style={{ fontFamily: 'Inter,sans-serif', lineHeight: 1.55,
          color: '#525252', maxWidth: 480, margin: '16px 0 0', textWrap: 'pretty', fontSize: "14px" }}>
            Head-worn devices with a camera, display and voice AI — equipping frontline and knowledge teams to see guidance and get answers hands-free.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }} className="aix-hero-cta">
            <window.BtnPrimary onClick={onDemo}>Book a Demo <span style={{ display: 'inline-flex' }}><AIX.Arrow size={16} color="#fff" /></span></window.BtnPrimary>
            <window.BtnGhost onClick={onExplore}>Explore the range</window.BtnGhost>
          </div>
        </div>
        {/* video — right; drifts to centre + zooms as you scroll. multiply drops the white backdrop */}
        <div ref={videoColRef} style={{ flex: '1 1 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0, position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: `translateX(${videoShiftX}px) scale(${videoScale})`, transformOrigin: 'center center',
          transition: scrub ? 'none' : 'transform .3s', willChange: 'transform' }}>
            {/* fallback only painted until the clip is ready — unmounted (not faded) so a
               throttled CSS timeline can never leave it stuck visible over the video */}
            {!vReady &&
            <img src={AIX.GLASSES_IMG} alt="" aria-hidden="true"
          style={{ position: 'absolute', width: '70%', maxWidth: 440, height: 'auto', objectFit: 'contain',
            opacity: 0.92, pointerEvents: 'none' }} />}
            <video ref={videoRef} src={videoSrc} muted playsInline preload="auto" loop={!scrub} aria-label="AI glasses rotating"
          style={{ width: '100%', maxWidth: 'min(58vh, 500px)', aspectRatio: '1 / 1', objectFit: 'contain',
            opacity: vReady ? 1 : 0, transition: 'none',
            mixBlendMode: 'multiply', filter: 'saturate(1.05) contrast(1.02)' }} />
          </div>
        </div>
      </div>

      {/* scroll cue / scrub progress */}
      <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, opacity: cueFade,
      transition: 'opacity .2s linear', pointerEvents: 'none' }}>
        <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: '#9AA1AC' }}>
          {scrub ? 'Scroll to rotate' : 'Scroll to explore'}
        </span>
        <div style={{ width: 26, height: 42, borderRadius: 999, border: '1.5px solid #D0D5DD',
        display: 'flex', justifyContent: 'center', paddingTop: 7 }}>
          <span style={{ width: 3, height: 8, borderRadius: 2, background: '#9AA1AC',
          animation: rm ? 'none' : 'aixScrollDot 1.6s ease-in-out infinite' }} />
        </div>
      </div>

      {/* scrub progress bar removed per request (no orange line under hero) */}
    </div>;


  return (
    <div ref={wrapRef} style={{ height: scrub ? '240vh' : '100vh', position: 'relative' }}>
      {stage}
    </div>);

}
window.Hero = Hero;