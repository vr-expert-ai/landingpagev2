/* ============================================================
   Sections 1 — "AI glasses at work" hotspots · Definition · Types
   ============================================================ */
const C = window.C;
const AIX = window.AIX;
const { Container, Band, SectionHead, Eyebrow, ArrowLink, useInView } = AIX;

/* ---- AI glasses at work — annotated hotspots ----------------- */
const HOTSPOTS = [
  { id: 'camera', x: 80, y: 27, title: 'Camera', body: 'A 12 MP camera at the hinge captures exactly what the wearer sees — feeding remote experts and the on-board AI.' },
  { id: 'display', x: 66, y: 35, title: 'In-lens display', body: 'Guidance, checklists and virtual screens appear directly in the line of sight, hands-free.' },
  { id: 'assist', x: 74, y: 31, title: 'Remote assist', body: 'Stream a first-person view to a specialist who annotates the live feed and guides the fix.' },
  { id: 'voice', x: 86, y: 35, title: 'Voice AI', body: 'Speakers and mics along the temple run a vision-aware assistant — ask a question, trigger an action, no touchscreen.' },
  { id: 'translate', x: 17, y: 51, title: 'Live translation', body: 'Speech and on-site signage are captioned and translated in real time, right in view.' },
];

const AR_CAPTIONS = [
  { top: '20%', left: '5%', jp: 'そのバルブを締めてください', en: 'Tighten that valve' },
  { top: '63%', left: '9%', jp: '圧力は正常です', en: 'Pressure is normal' },
];

function ARCaption({ c, emphasised }) {
  return (
    <div style={{ position: 'absolute', top: c.top, left: c.left, maxWidth: 190, padding: '9px 12px', borderRadius: 8,
      background: 'rgba(18,19,22,0.62)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 8px 22px rgba(0,0,0,0.35)',
      opacity: emphasised ? 1 : 0.82, transform: emphasised ? 'scale(1.04)' : 'scale(1)', transition: 'all .25s ease-out', pointerEvents: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#12B76A', boxShadow: '0 0 8px #12B76A' }} />
        <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)' }}>LIVE · 日本語 → EN</span>
      </div>
      <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.6)', marginBottom: 2 }}>{c.jp}</div>
      <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{c.en}</div>
    </div>
  );
}

function HotspotScene() {
  const [active, setActive] = React.useState('camera');
  const [hover, setHover] = React.useState(null);
  const sel = HOTSPOTS.find((h) => h.id === active) || HOTSPOTS[0];
  return (
    <Band id="at-work">
      <Container>
        <SectionHead eyebrow="Hardware"
          title="What are The Applications?"
          intro="Hover a point for the name; click it to read what it does." />
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,340px) 1fr', gap: 28, alignItems: 'stretch' }} className="aix-hotspot-grid">
          {/* detail rail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 8, padding: 22,
              boxShadow: '0px 1px 3px rgba(16,24,40,0.08)', minHeight: 184 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: AIX.ACCENT, color: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 700, lineHeight: 1 }}>+</span>
                <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 20, color: '#363636' }}>{sel.title}</span>
              </div>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, lineHeight: 1.6, color: '#525252', margin: '0 0 16px' }}>{sel.body}</p>
              <ArrowLink href="#use-cases">See it in use</ArrowLink>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {HOTSPOTS.map((h) => (
                <button key={h.id} onClick={() => { setActive(h.id); setHover(null); }}
                  onMouseEnter={() => setHover(h.id)} onMouseLeave={() => setHover(null)}
                  style={{ padding: '8px 13px', borderRadius: 4, cursor: 'pointer', fontFamily: 'Inter,sans-serif',
                    fontSize: 13, fontWeight: 600, transition: 'all .15s',
                    border: `1px solid ${active === h.id ? AIX.ACCENT : (hover === h.id ? AIX.ACCENT : C.borderInput)}`,
                    background: active === h.id ? 'var(--aix-accent-soft, rgba(255,144,87,0.14))' : '#fff',
                    color: active === h.id ? '#363636' : '#6B7280' }}>{h.title}</button>
              ))}
            </div>
          </div>

          {/* image with pins + AR captions */}
          <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', minHeight: 380,
            border: `1px solid ${C.borderInput}`, background: '#1A1B1E' }}>
            <img src="assets/hero-ai-glasses.png" alt="A professional wearing AI glasses with data displayed in the lenses"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />

            {/* AR live-translation captions in the open space */}
            {AR_CAPTIONS.map((c, i) => <ARCaption key={i} c={c} emphasised={(hover || active) === 'translate'} />)}

            {HOTSPOTS.map((h) => {
              const isActive = active === h.id;
              const isHover = hover === h.id;
              const on = isActive || isHover;
              const flip = h.x > 55; // place label to the left for right-side pins
              return (
                <button key={h.id} onClick={() => { setActive(h.id); setHover(null); }} aria-label={h.title} aria-pressed={isActive}
                  onMouseEnter={() => setHover(h.id)} onMouseLeave={() => setHover(null)}
                  style={{ position: 'absolute', left: `${h.x}%`, top: `${h.y}%`, transform: 'translate(-50%,-50%)',
                    width: on ? 34 : 26, height: on ? 34 : 26, borderRadius: '50%', cursor: 'pointer', padding: 0, zIndex: on ? 8 : 4,
                    background: isActive ? AIX.ACCENT : (isHover ? '#fff' : 'rgba(255,255,255,0.9)'), color: isActive ? '#fff' : '#363636',
                    border: isActive ? '2px solid #fff' : '2px solid rgba(255,255,255,0.75)',
                    boxShadow: isActive ? '0 0 0 6px var(--aix-accent-soft, rgba(255,144,87,0.32))' : (isHover ? '0 0 0 5px rgba(255,255,255,0.22), 0 2px 8px rgba(0,0,0,0.35)' : '0 2px 8px rgba(0,0,0,0.35)'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700,
                    lineHeight: 1, transition: 'background .16s, box-shadow .16s, color .16s' }}>
                  <span style={{ transform: isActive ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
                  {/* title label — child of the pin, so it can never detach */}
                  {on &&
                  <span style={{ position: 'absolute', top: '50%', [flip ? 'right' : 'left']: 'calc(100% + 12px)',
                    transform: 'translateY(-50%)', background: '#fff', borderRadius: 6, padding: '6px 10px', whiteSpace: 'nowrap',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.28)', pointerEvents: 'none', zIndex: 9 }}>
                    <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, color: '#363636' }}>{h.title}</span>
                    {!isActive &&
                    <span style={{ display: 'block', fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#9AA1AC', marginTop: 1 }}>Click to read</span>}
                  </span>}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </Band>
  );
}
window.HotspotScene = HotspotScene;

/* ---- Definition — interactive Smart / AR / assisted / AI ----- */
const DEFN = [
  { k: 'Smart glasses', tag: 'The umbrella term', body: 'Any glasses with on-board electronics — from audio-only to full display. The broad term most buyers use.', best: 'Naming the whole category' },
  { k: 'AR glasses', tag: 'World-locked 3D', body: 'Overlay 3D content anchored to the real world. The most immersive end of the range.', best: 'Design review · spatial data · AR' },
  { k: 'Assisted reality', tag: 'A glanceable screen', body: 'A single flat screen in the periphery — simple, rugged, hands-free. The right info in view, no 3D.', best: 'Frontline · field service · hazardous sites' },
  { k: 'AI glasses', tag: 'A camera that understands', body: 'Add an assistant that sees what you see — answering, translating and guiding on command.', best: 'Hands-free help · translation · capture' },
];

function Definition() {
  const [sel, setSel] = React.useState(3);
  const d = DEFN[sel];
  return (
    <Band id="what-are">
      <Container>
        <SectionHead eyebrow="Know the difference"
          title="Smart, AR, assisted or AI?"
          intro="They overlap — but they aren't the same. Pick one to see what it means and what it's for." />
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,300px) 1fr', gap: 20, alignItems: 'stretch' }} className="aix-hotspot-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DEFN.map((row, i) => {
              const on = i === sel;
              return (
                <button key={row.k} onClick={() => setSel(i)} style={{ textAlign: 'left', cursor: 'pointer',
                  padding: '14px 16px', borderRadius: 6, transition: 'all .15s',
                  background: on ? 'var(--aix-accent-soft, rgba(255,144,87,0.12))' : '#fff',
                  border: `1px solid ${on ? AIX.ACCENT : C.borderInput}`,
                  boxShadow: on ? '0px 1px 3px rgba(16,24,40,0.08)' : 'none' }}>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 16, color: '#363636' }}>{row.k}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12.5, color: on ? AIX.ACCENT : '#6B7280', marginTop: 2 }}>{row.tag}</div>
                </button>
              );
            })}
          </div>
          <div key={d.k} style={{ background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 10, padding: 'clamp(24px,3vw,36px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', animation: 'aixFade .3s ease-out' }}>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.teal, marginBottom: 10 }}>{d.tag}</div>
            <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 'clamp(24px,2.6vw,32px)', color: '#363636', marginBottom: 14 }}>{d.k}</div>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 17, lineHeight: 1.6, color: '#525252', margin: '0 0 20px', maxWidth: 560 }}>{d.body}</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, alignSelf: 'flex-start',
              background: 'var(--aix-accent-soft, rgba(255,144,87,0.12))', borderRadius: 6, padding: '10px 14px' }}>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 700, color: AIX.ACCENT, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Best for</span>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 14.5, fontWeight: 500, color: '#363636' }}>{d.best}</span>
            </div>
          </div>
        </div>
      </Container>
    </Band>
  );
}
window.Definition = Definition;

/* ---- Types / form factors ------------------------------------ */
function TypeCard({ t, onPick }) {
  const [h, setH] = React.useState(false);
  const accent = AIX.ACCENT.includes('var') ? '#FF9057' : AIX.ACCENT;
  const examples = (t.examples || '').split('·').map((s) => s.trim()).filter(Boolean);
  return (
    <button onClick={() => onPick && onPick(t.id)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ textAlign: 'left', cursor: 'pointer', background: '#fff', borderRadius: 8, padding: 22,
        display: 'flex', flexDirection: 'column', height: '100%',
        border: `1px solid ${h ? accent : C.borderInput}`,
        boxShadow: h ? '0px 12px 16px -4px rgba(16,24,40,0.10)' : 'none',
        transform: h ? 'translateY(-3px)' : 'none', transition: 'all .2s ease-out' }}>
      <div style={{ width: 46, height: 46, borderRadius: 8, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: h ? accent : 'var(--aix-accent-soft, rgba(255,144,87,0.14))', transition: 'background .2s' }}>
        <window.Headset size={28} color={h ? '#fff' : accent} />
      </div>
      <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
        textTransform: 'uppercase', color: C.teal, marginBottom: 6 }}>{t.short}</div>
      <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 18, color: '#363636', marginBottom: 10, lineHeight: 1.2 }}>{t.name}</div>
      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, lineHeight: 1.55, color: '#525252', margin: '0 0 14px', flex: 1 }}>{t.body}</p>
      {examples.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
          {examples.map((ex) => (
            <span key={ex} style={{ fontFamily: 'Inter,sans-serif', fontSize: 11.5, fontWeight: 600, color: '#525252',
              background: '#F2F4F7', borderRadius: 4, padding: '4px 8px' }}>{ex}</span>
          ))}
        </div>
      )}
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'Inter,sans-serif', fontWeight: 600,
        fontSize: 14, color: h ? accent : '#363636' }}>
        View these
        <span style={{ display: 'inline-flex', transform: h ? 'translateX(3px)' : 'none', transition: 'transform .2s' }}>
          <AIX.Arrow size={15} color={h ? accent : '#363636'} />
        </span>
      </span>
    </button>
  );
}

function Types({ onPick }) {
  return (
    <Band id="types">
      <Container>
        <SectionHead eyebrow="Form factors"
          title="The Form Factors"
          intro="Each suits a different job. Pick one to see the matching devices." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="aix-types-grid">
          {AIX.TYPES.map((t) => <TypeCard key={t.id} t={t} onPick={onPick} />)}
        </div>
      </Container>
    </Band>
  );
}
window.Types = Types;
