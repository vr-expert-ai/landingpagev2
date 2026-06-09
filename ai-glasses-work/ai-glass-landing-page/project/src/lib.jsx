/* ============================================================
   AI Glasses for Business — shared lib
   tokens · hooks · UI primitives · page data
   Everything is published on window.AIX for the section files.
   ============================================================ */
const C = window.C;
const AIX = (window.AIX = window.AIX || {});

/* ---- accent (driven by Tweaks via the --aix-accent CSS var) ---- */
const ACCENT = 'var(--aix-accent, #FF9057)';
const ACCENT_SOFT = 'var(--aix-accent-soft, rgba(255,144,87,0.14))';
AIX.ACCENT = ACCENT;
AIX.ACCENT_SOFT = ACCENT_SOFT;

/* ---------------------------------------------------------------
   Hooks
   --------------------------------------------------------------- */
function useReducedMotion() {
  const [rm, setRm] = React.useState(
    () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  React.useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fn = (e) => setRm(e.matches);
    mq.addEventListener ? mq.addEventListener('change', fn) : mq.addListener(fn);
    return () => (mq.removeEventListener ? mq.removeEventListener('change', fn) : mq.removeListener(fn));
  }, []);
  return rm;
}
AIX.useReducedMotion = useReducedMotion;

/* Reveal-on-scroll: returns [ref, inView] and fires once.
   Uses scroll+resize listeners (not IntersectionObserver, which is unreliable
   in some embedded preview contexts) with an immediate mount check. */
function useInView(opts) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (seen) return;
    const el = ref.current;
    if (!el) return;
    const ratio = (opts && opts.ratio) || 0.85;
    let raf = 0;
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * ratio && r.bottom > 0) { setSeen(true); cleanup(); }
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    let fallback = 0;
    const cleanup = () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    check();
    // Safety net: reveal even if no scroll event ever arrives (degenerate envs).
    fallback = setTimeout(() => setSeen(true), 3200);
    return cleanup;
  }, [seen]);
  return [ref, seen];
}
AIX.useInView = useInView;

/* Count-up that runs when `active` flips true; respects reduced motion. */
function useCountUp(target, active, duration) {
  const rm = useReducedMotion();
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    if (rm) { setVal(target); return; }
    let raf, start, done = false;
    const dur = duration || 1400;
    const tick = (t) => {
      if (done) return;
      if (start == null) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else { done = true; setVal(target); }
    };
    raf = requestAnimationFrame(tick);
    // Fallback: guarantee the final value lands even if rAF is throttled.
    const fb = setTimeout(() => { if (!done) { done = true; setVal(target); } }, dur + 600);
    return () => { cancelAnimationFrame(raf); clearTimeout(fb); done = true; };
  }, [active, target, rm]);
  return val;
}
AIX.useCountUp = useCountUp;

/* ---------------------------------------------------------------
   Layout primitives
   --------------------------------------------------------------- */
function Container({ children, style, narrow }) {
  return (
    <div style={{ maxWidth: narrow ? 920 : 1280, margin: '0 auto', padding: '0 32px', ...style }}>
      {children}
    </div>
  );
}
AIX.Container = Container;

/* A page band. All white per brand direction; subtle hairline separates them. */
function Band({ id, children, dark, tone, style }) {
  return (
    <section id={id} data-screen-label={id} style={{ background: '#FFFFFF', padding: '40px 0', position: 'relative', borderTop: '1px solid #F2F2F2', ...style }}>
      {children}
    </section>
  );
}
AIX.Band = Band;

/* Eyebrow — small uppercase kicker with a short accent rule. */
function Eyebrow({ children, dark }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span style={{ width: 24, height: 2, background: ACCENT, display: 'inline-block' }} />
      <span style={{
        fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: dark ? '#FF9057' : ACCENT, whiteSpace: 'nowrap',
      }}>{children}</span>
    </div>
  );
}
AIX.Eyebrow = Eyebrow;

/* Section header block. */
function SectionHead({ eyebrow, title, intro, dark, align, maxIntro }) {
  const center = align === 'center';
  return (
    <div style={{ maxWidth: center ? 720 : 800, margin: center ? '0 auto' : undefined, textAlign: center ? 'center' : 'left', marginBottom: 28 }}>
      {eyebrow && <div style={{ display: center ? 'flex' : 'block', justifyContent: 'center' }}><Eyebrow dark={dark}>{eyebrow}</Eyebrow></div>}
      <h2 style={{
        fontFamily: 'Poppins,sans-serif', fontWeight: 700, letterSpacing: '-0.02em',
        fontSize: 'clamp(23px, 2.2vw, 30px)', lineHeight: 1.12, margin: 0,
        color: dark ? '#fff' : '#363636', textWrap: 'balance',
      }}>{title}</h2>
      {intro && (
        <p style={{
          fontFamily: 'Inter,sans-serif', fontSize: 16, lineHeight: 1.55, marginTop: 12, marginBottom: 0,
          color: dark ? 'rgba(255,255,255,0.72)' : '#525252', maxWidth: maxIntro || (center ? 600 : 660),
          marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined, textWrap: 'pretty',
        }}>{intro}</p>
      )}
    </div>
  );
}
AIX.SectionHead = SectionHead;

/* Arrow-right inline icon. */
function Arrow({ size = 16, color = 'currentColor', sw = 2 }) {
  return <window.Icon d={["M5 12h14", "M13 6l6 6-6 6"]} size={size} color={color} sw={sw} />;
}
AIX.Arrow = Arrow;

/* Text link with arrow — uses teal per the kit's "Read full story" pattern. */
function ArrowLink({ children, color, onClick, href }) {
  const [h, setH] = React.useState(false);
  const c = color || C.teal;
  return (
    <a href={href || '#'} onClick={(e) => { if (!href) e.preventDefault(); onClick && onClick(e); }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: c, fontFamily: 'Inter,sans-serif',
        fontWeight: 600, fontSize: 15, textDecoration: 'none', cursor: 'pointer' }}>
      {children}
      <span style={{ display: 'inline-flex', transform: h ? 'translateX(3px)' : 'none', transition: 'transform .2s ease-out' }}>
        <Arrow size={16} color={c} />
      </span>
    </a>
  );
}
AIX.ArrowLink = ArrowLink;

/* ---------------------------------------------------------------
   PAGE DATA  (illustrative figures — flagged in-page where shown)
   --------------------------------------------------------------- */

AIX.TYPES = [
  { id: 'binocular', name: 'Binocular display (AR)', short: 'Stereoscopic overlays',
    body: 'Two micro-displays project spatial overlays and floating virtual screens into your field of view — for guided assembly, design review and immersive data.',
    examples: 'XReal · Rokid Max' },
  { id: 'monocular', name: 'Monocular (assisted reality)', short: 'One hands-free screen',
    body: 'A single, glanceable display anchored to the periphery. Built for rugged, voice-first guided workflows where the user keeps both hands and full situational awareness.',
    examples: 'RealWear · Vuzix M400' },
  { id: 'audio', name: 'Audio + camera AI', short: 'Voice assistant & capture',
    body: 'No display — an on-board camera, mics and voice AI for hands-free capture, real-time translation and an assistant that sees what you see.',
    examples: 'Ray-Ban-class · Rokid' },
  { id: 'desktop', name: 'Virtual desktop', short: 'Private big screens',
    body: 'Lightweight display glasses that turn any seat into a multi-monitor workstation — private, portable knowledge work for travelling teams.',
    examples: 'XReal Air · Rokid' },
];

AIX.BRANDS = [
  { name: 'RealWear', tag: 'Rugged · voice-first', body: 'IP66 assisted-reality headsets built for frontline and hazardous sites. Fully hands-free, glove- and noise-proof.' },
  { name: 'Vuzix', tag: 'Waveguide optics', body: 'Enterprise smart glasses for logistics, remote help and pick-by-vision, with see-through waveguide displays.' },
  { name: 'XReal', tag: 'Spatial display', body: 'Lightweight binocular display glasses that turn any space into a private big screen for desktop and AR.' },
  { name: 'Rokid', tag: 'AI assistant', body: 'Compact AR glasses and AI assistants for field service, inspection and on-the-floor guidance.' },
];

AIX.USE_CASES = [
  { id: 'remote-support', label: 'Remote support', icon: ["M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72"],
    problem: 'An expert flies in every time a frontline issue needs eyes-on diagnosis — slow, expensive and rarely scalable.',
    solution: 'A technician streams their first-person view to a remote specialist, who annotates the live feed and talks them through the fix in real time.',
    stat: '−43%', statLabel: 'mean issue-resolution time', device: 'RealWear Navigator 520' },
  { id: 'live-translation', label: 'Live translation', icon: ["M5 8l6 6", "M4 14l6-6 2-3", "M2 5h12", "M7 2h1", "M22 22l-5-10-5 10", "M14 18h6"],
    problem: 'Cross-border crews and customers lose time and accuracy to language barriers on the floor.',
    solution: 'On-glass speech-to-text translates conversations and signage instantly, captioned in the wearer’s line of sight.',
    stat: '40+', statLabel: 'languages, captioned live', device: 'Rokid Glasses' },
  { id: 'ai-assistant', label: 'AI assistant', icon: ["M12 8V4H8", "M4 8h16v12H4z", "M2 14h2", "M20 14h2", "M9 13v2", "M15 13v2"],
    problem: 'Workers stop to look up manuals, part numbers and procedures, breaking flow and inviting error.',
    solution: 'A vision-aware assistant recognises the object in view and surfaces the right step, spec or checklist on demand — hands-free.',
    stat: '+30%', statLabel: 'first-time-fix rate', device: 'Vuzix M400' },
  { id: 'virtual-desktop', label: 'Virtual desktop', icon: ["M2 4h20v12H2z", "M8 20h8", "M12 16v4"],
    problem: 'Travelling staff are stuck on a single cramped laptop screen, hurting focus and privacy.',
    solution: 'Display glasses project multiple large, private virtual monitors anywhere — on a plane, in a cab, on site.',
    stat: '×2', statLabel: 'effective screen real-estate', device: 'XReal Air 2 Ultra' },
  { id: 'training', label: 'Training', icon: ["M22 10L12 5 2 10l10 5 10-5z", "M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"],
    problem: 'Classroom training doesn’t stick, and shadowing a senior tech ties up two people.',
    solution: 'New hires follow step-by-step visual guidance overlaid on the real task, learning by doing with an expert on call.',
    stat: '×3', statLabel: 'training throughput', device: 'RealWear Navigator 520' },
  { id: 'pick-by-vision', label: 'Pick-by-vision', icon: ["M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z", "M3.3 7L12 12l8.7-5", "M12 22V12"],
    problem: 'Paper pick-lists and handheld scanners slow warehouse throughput and add errors.',
    solution: 'The next pick location and quantity appear directly in the picker’s view, with barcode scanning built in — eyes up, hands free.',
    stat: '−27%', statLabel: 'pick error rate', device: 'Vuzix M400' },
];

AIX.STATS = [
  { value: 43, prefix: '−', suffix: '%', label: 'Issue-resolution time', sub: 'Remote support vs. on-site dispatch' },
  { value: 30, prefix: '+', suffix: '%', label: 'First-time-fix rate', sub: 'Guided AI assistance on frontline tasks' },
  { value: 3, prefix: '×', suffix: '', label: 'Training throughput', sub: 'Learn-by-doing vs. classroom shadowing' },
  { value: 27, prefix: '−', suffix: '%', label: 'Avoidable travel cost', sub: 'Specialist time reclaimed per quarter' },
];

/* With / without efficiency series (index, higher = better) */
AIX.COMPARE_METRICS = {
  'first-fix': { label: 'First-time-fix rate', unit: '%', with: [62, 68, 75, 81, 86, 90], without: [60, 61, 62, 63, 63, 64], delta: '+30%' },
  'resolution': { label: 'Resolution speed', unit: 'idx', with: [50, 62, 74, 83, 90, 96], without: [50, 52, 55, 56, 58, 59], delta: '+43%' },
  'training': { label: 'Training throughput', unit: 'idx', with: [40, 58, 76, 92, 108, 120], without: [40, 44, 48, 51, 54, 56], delta: '×3' },
};
AIX.COMPARE_WEEKS = ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6'];

AIX.DEVICES = [
  { name: 'RealWear Navigator 520', brand: 'RealWear', type: 'monocular', display: 'Monocular flip', camera: '48 MP', weight: '272 g', battery: 'Hot-swap, ~10 h', os: 'Android (AOSP)', bestFor: 'Hazardous & frontline', best: ['weight:false', 'camera:false'] },
  { name: 'Vuzix M400', brand: 'Vuzix', type: 'monocular', display: 'Monocular waveguide', camera: '12.8 MP', weight: '270 g', battery: 'Swappable, ~2–10 h', os: 'Android 11', bestFor: 'Logistics & pick-by-vision' },
  { name: 'XReal Air 2 Ultra', brand: 'XReal', type: 'binocular', display: 'Binocular 1080p', camera: 'Dual SLAM', weight: '83 g', battery: 'Tethered', os: 'NebulaOS / host', bestFor: 'Virtual desktop & AR' },
  { name: 'Rokid Glasses', brand: 'Rokid', type: 'audio', display: 'Monocular + AI', camera: '12 MP', weight: '49 g', battery: 'Integrated, ~4 h', os: 'RokidOS', bestFor: 'AI assistant & translation' },
];
AIX.COMPARE_ROWS = [
  ['display', 'Display'], ['camera', 'Camera'], ['weight', 'Weight', 'low'],
  ['battery', 'Battery'], ['os', 'OS'], ['bestFor', 'Best for'],
];

AIX.PRODUCTS = [
  { id: 'p-realwear', name: 'RealWear Navigator 520', tag: 'Frontline', spec: 'Rugged · IP66 · voice-first', slot: 'prod-realwear', type: 'monocular' },
  { id: 'p-vuzix', name: 'Vuzix M400', tag: 'Logistics', spec: 'Waveguide · 12.8 MP · Android 11', slot: 'prod-vuzix', type: 'monocular' },
  { id: 'p-xreal', name: 'XReal Air 2 Ultra', tag: 'Knowledge work', spec: 'Binocular 1080p · 83 g · 6DoF', slot: 'prod-xreal', type: 'binocular' },
  { id: 'p-rokid', name: 'Rokid Glasses', tag: 'AI assistant', spec: 'AI camera · translation · 49 g', slot: 'prod-rokid', type: 'audio' },
];

AIX.PILLARS = [
  { icon: ["M9 12l2 2 4-4", "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], title: 'Official distributor', body: 'Authorised reseller for every major XR brand — genuine hardware, full manufacturer warranty, real roadmaps.' },
  { icon: ["M2 12h20", "M12 2a15 15 0 010 20", "M12 2a15 15 0 000 20"], title: 'Ships EU & US', body: 'Stock in the Netherlands and the United States, with worldwide delivery and regional invoicing.' },
  { icon: ["M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"], title: 'Configuration & services', body: 'MDM enrolment, kitting, software setup and pilot programmes — devices arrive ready for your team.' },
  { icon: ["M3 3v18h18", "M7 14l3-3 3 3 5-6"], title: 'Volume pricing', body: 'Fleet quotes, framework agreements and pay-by-invoice for procurement teams of any size.' },
];

AIX.STORIES = [
  { industry: 'Field service', result: 'Cut specialist call-outs by nearly half across 40 sites', body: 'A utilities operator equipped its first-line crews with assisted-reality headsets and a remote-expert desk.' },
  { industry: 'Logistics', result: 'Faster onboarding and fewer mis-picks in the DC', body: 'A 3PL rolled out pick-by-vision smart glasses across two distribution centres in a single quarter.' },
  { industry: 'Manufacturing', result: 'Standardised assembly guidance on the line', body: 'A tier-1 supplier replaced paper work-instructions with on-glass step-by-step guidance for new hires.' },
];

AIX.FAQS = [
  { q: 'What are AI glasses, in one sentence?', a: 'AI glasses are head-worn devices that put a camera, display and voice AI in a hands-free form factor — so frontline and knowledge workers can see guidance, capture context and get answers without reaching for a screen.' },
  { q: 'How are AI glasses different from smart glasses and AR glasses?', a: '“Smart glasses” is the broad buyer term; “AR glasses” specifically overlay 3D content on the world; “assisted reality” shows a flat, glanceable screen. AI glasses add an on-board assistant that understands what the camera sees. Most enterprise devices combine several of these.' },
  { q: 'Which AI glasses are best for frontline vs. office work?', a: 'Rugged, voice-first monocular devices (RealWear) suit hazardous and field environments; lightweight binocular display glasses (XReal) suit private virtual-desktop and design work; waveguide smart glasses (Vuzix) excel at logistics and remote support.' },
  { q: 'Can we deploy and manage a fleet centrally?', a: 'Yes. Devices enrol in standard Android MDM/EMM platforms. We can pre-configure, kit and lock down hardware before it ships, and support staged rollouts.' },
  { q: 'Do you offer volume pricing and pay-by-invoice?', a: 'We provide fleet quotes, framework agreements and invoice-based purchasing for procurement teams. Request a volume quote and an expert will scope it with you.' },
  { q: 'What does a pilot programme involve?', a: 'A typical pilot is a small device batch, a defined use case and success metrics over 4–8 weeks. We help set it up, then scope the rollout from the results.' },
  { q: 'Which software and platforms are supported?', a: 'Remote-assistance, workflow-guidance and translation platforms integrate with the major devices. We advise on the right software per use case and handle setup.' },
  { q: 'Do you ship internationally and handle support?', a: 'We ship worldwide from EU and US stock, with regional warranties and B2B support. Talk to an expert for lead times in your region.' },
];

/* SVG mini brand wordmark (placeholder until real logos land) */
function BrandWord({ name, dark }) {
  return (
    <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em',
      color: dark ? '#fff' : '#363636' }}>{name}</span>
  );
}
AIX.BrandWord = BrandWord;

/* Shopping-cart icon + colourful add-to-cart button */
function CartIcon({ size = 16, color = '#fff', sw = 1.8 }) {
  return (
    <window.Icon size={size} color={color} sw={sw} d={[
      'M5 5h2l1.6 9.6a1.5 1.5 0 001.5 1.3h7.8a1.5 1.5 0 001.5-1.2L21 8H7',
      'M10.5 20.5a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z',
      'M19 20.5a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z',
    ]} />
  );
}
AIX.CartIcon = CartIcon;

function AddToCart({ full, small, onClick, label }) {
  return (
    <window.BtnPrimary full={full} small={small} onClick={onClick}>
      <CartIcon size={small ? 15 : 17} color="#fff" />{label || 'Add to cart'}
    </window.BtnPrimary>
  );
}
AIX.AddToCart = AddToCart;

/* Info tooltip — a small (i) that reveals an explanation on hover/focus/tap.
   Renders into a body portal with fixed positioning so it can never be clipped
   by table overflow or out-stacked by sticky cells. */
function InfoTip({ text }) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState({ top: 0, left: 0, above: false });
  const btnRef = React.useRef(null);
  const W = 224;

  const place = React.useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const above = r.top > window.innerHeight - r.bottom;
    const cx = Math.min(window.innerWidth - W / 2 - 10, Math.max(W / 2 + 10, r.left + r.width / 2));
    setPos({ left: cx, top: above ? r.top - 10 : r.bottom + 10, above });
  }, []);

  const show = () => { place(); setOpen(true); };
  const hide = () => setOpen(false);

  React.useEffect(() => {
    if (!open) return;
    const onMove = () => place();
    window.addEventListener('scroll', onMove, true);
    window.addEventListener('resize', onMove);
    return () => { window.removeEventListener('scroll', onMove, true); window.removeEventListener('resize', onMove); };
  }, [open, place]);

  const tip = open && window.ReactDOM && window.ReactDOM.createPortal
    ? window.ReactDOM.createPortal(
        <span role="tooltip" style={{ position: 'fixed', top: pos.top, left: pos.left,
          transform: `translate(-50%, ${pos.above ? '-100%' : '0'})`,
          width: W, background: '#363636', color: '#fff', fontFamily: 'Inter,sans-serif', fontSize: 12, lineHeight: 1.45,
          fontWeight: 400, padding: '9px 11px', borderRadius: 6, boxShadow: '0 8px 22px rgba(0,0,0,0.32)', zIndex: 9999,
          textAlign: 'left', textTransform: 'none', letterSpacing: 0, whiteSpace: 'normal', pointerEvents: 'none' }}>
          {text}
          <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            [pos.above ? 'top' : 'bottom']: '100%',
            borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
            [pos.above ? 'borderTop' : 'borderBottom']: '6px solid #363636' }} />
        </span>, document.body)
    : null;

  return (
    <span style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: 6 }}>
      <button ref={btnRef} type="button" aria-label="What this means"
        onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); open ? hide() : show(); }}
        style={{ width: 16, height: 16, borderRadius: '50%', border: `1px solid ${C.border}`, background: '#fff', color: '#6B7280',
          fontFamily: 'Inter,sans-serif', fontSize: 10.5, fontWeight: 700, cursor: 'help', display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center', padding: 0, lineHeight: 1, fontStyle: 'italic' }}>i</button>
      {tip}
    </span>
  );
}
AIX.InfoTip = InfoTip;

/* No-background AI-glasses placeholder illustration (data URI) */
const GLASSES_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 240'>
<defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
<stop offset='0' stop-color='#d6ecff' stop-opacity='0.9'/><stop offset='1' stop-color='#eef7ff' stop-opacity='0.45'/></linearGradient></defs>
<path d='M58 98 L18 80' stroke='#3a3a3a' stroke-width='11' stroke-linecap='round' fill='none'/>
<path d='M422 98 L462 80' stroke='#3a3a3a' stroke-width='11' stroke-linecap='round' fill='none'/>
<path d='M214 106 q26 -18 52 0' stroke='#3a3a3a' stroke-width='11' fill='none' stroke-linecap='round'/>
<rect x='58' y='84' width='156' height='104' rx='30' fill='url(#g)' stroke='#3a3a3a' stroke-width='12'/>
<rect x='266' y='84' width='156' height='104' rx='30' fill='url(#g)' stroke='#3a3a3a' stroke-width='12'/>
<path d='M80 152 q18 -44 66 -52' stroke='#ffffff' stroke-width='7' fill='none' stroke-linecap='round' opacity='0.85'/>
<rect x='292' y='116' width='72' height='9' rx='4' fill='#FF9057'/>
<rect x='292' y='134' width='48' height='9' rx='4' fill='#00BABF'/>
</svg>`;
AIX.GLASSES_IMG = 'data:image/svg+xml,' + encodeURIComponent(GLASSES_SVG);
