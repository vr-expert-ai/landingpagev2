/* ============================================================
   Sections 5 — Why VR Expert · Success stories · FAQ · Final CTA
   ============================================================ */
const C = window.C;
const AIX = window.AIX;
const { Container, Band, SectionHead, Eyebrow } = AIX;

/* ---- 12. Why VR Expert --------------------------------------- */
function WhyVRExpert() {
  return (
    <Band id="why">
      <Container>
        <SectionHead align="center" eyebrow="Why VR Expert"
          title="Why VR Expert"
          intro="Enterprises buy hardware from us because the support around it makes the rollout work." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="aix-types-grid">
          {AIX.PILLARS.map((p) => (
            <div key={p.title} style={{ background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 8, padding: 26 }}>
              <div style={{ width: 46, height: 46, borderRadius: 8, background: 'var(--aix-accent-soft,rgba(255,144,87,0.14))',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <window.Icon d={p.icon} size={24} color={AIX.ACCENT.includes('var') ? '#FF9057' : AIX.ACCENT} sw={1.8} />
              </div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 18, color: '#363636', marginBottom: 10 }}>{p.title}</div>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14.5, lineHeight: 1.55, color: '#525252', margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Band>
  );
}
window.WhyVRExpert = WhyVRExpert;

/* ---- 13. Success stories (carousel) -------------------------- */
function SuccessStories() {
  const stories = AIX.STORIES;
  const trackRef = React.useRef(null);
  const go = (d) => {
    const el = trackRef.current; if (!el) return;
    const card = el.querySelector('.aix-story-card');
    const step = card ? card.offsetWidth + 16 : 360;
    el.scrollBy({ left: d * step, behavior: 'smooth' });
  };
  return (
    <Band id="stories" tone="subtle">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
          <SectionHead eyebrow="Deployment stories"
            title="Rollouts in the field"
            intro="How teams put AI glasses to work. Full case studies on request." />
          <div style={{ display: 'flex', gap: 8, paddingBottom: 8 }}>
            {[-1, 1].map((d) => (
              <button key={d} onClick={() => go(d)} aria-label={d < 0 ? 'Previous' : 'Next'}
                style={{ width: 44, height: 44, borderRadius: 4, border: `1px solid ${C.border}`, background: '#fff', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#363636' }}
                onMouseEnter={(e) => e.currentTarget.style.background = C.bgHover}
                onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}>
                <window.Icon d={d < 0 ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} size={20} sw={2} />
              </button>
            ))}
          </div>
        </div>
        <div ref={trackRef} className="aix-stories-track" style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4, scrollbarWidth: 'none' }}>
          {stories.map((s, idx) => (
            <article key={idx} className="aix-story-card" style={{ flex: '0 0 calc(33.333% - 11px)', scrollSnapAlign: 'start', background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 10, overflow: 'hidden', minWidth: 0 }}>
              <div style={{ height: 150, background: '#1A1B1E', position: 'relative' }}>
                <img src={idx === 2 ? 'assets/article-ai-glasses.png' : idx === 1 ? 'assets/category-accessories.png' : 'assets/category-glasses.png'}
                  alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }} />
                <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0,0,0,0.55)', color: '#fff', backdropFilter: 'blur(4px)',
                  borderRadius: 4, padding: '5px 11px', fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600 }}>{s.industry}</span>
              </div>
              <div style={{ padding: 22 }}>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 18, color: '#363636', lineHeight: 1.3, marginBottom: 10 }}>{s.result}</div>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14.5, lineHeight: 1.55, color: '#525252', margin: '0 0 16px' }}>{s.body}</p>
                <AIX.ArrowLink href="#">Read full story</AIX.ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Band>
  );
}
window.SuccessStories = SuccessStories;

/* ---- 14. FAQ accordion --------------------------------------- */
function FAQItem({ item, open, onToggle }) {
  return (
    <div style={{ background: open ? '#fff' : '#fff', border: `1px solid ${open ? C.teal : C.borderInput}`, borderRadius: 4, overflow: 'hidden', transition: 'border-color .2s' }}>
      <button onClick={onToggle} aria-expanded={open}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 16.5, color: open ? C.teal : '#363636', lineHeight: 1.4 }}>{item.q}</span>
        <span style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s', color: open ? C.teal : '#99A1AF' }}>
          <window.Icon d="M6 9l6 6 6-6" size={20} sw={2} />
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 20px 20px', background: '#FBFBFB', animation: 'aixFade .25s ease-out' }}>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15.5, lineHeight: 1.65, color: '#525252', margin: '14px 0 0' }}>{item.a}</p>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <Band id="faq">
      <Container>
        <SectionHead align="center" eyebrow="FAQ"
          title="Questions buyers ask"
          intro="The practical answers procurement and operations teams need." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 920, margin: '0 auto' }}>
          {AIX.FAQS.map((f, i) => (
            <FAQItem key={i} item={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </Container>
    </Band>
  );
}
window.FAQ = FAQ;

/* ---- 15. Final CTA band -------------------------------------- */
function FinalCTA({ onDemo, onQuote }) {
  return (
    <Band id="cta" style={{ padding: '96px 0' }}>
      <Container>
        <div style={{ position: 'relative', background: 'radial-gradient(140% 150% at 82% 8%, #FFA877 0%, #FF9057 45%, #F07A3E 100%)',
          borderRadius: 14, padding: 'clamp(32px,5vw,64px)', overflow: 'hidden', boxShadow: '0px 18px 40px -12px rgba(240,122,62,0.45)' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: -90, right: -60, width: 340, height: 340, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 68%)' }} />
          <div aria-hidden="true" style={{ position: 'absolute', bottom: -120, left: -40, width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 68%)' }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 620 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 24, height: 2, background: 'rgba(255,255,255,0.8)' }} />
                <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)' }}>Ready when you are</span>
              </div>
              <h2 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, letterSpacing: '-0.02em',
                fontSize: 'clamp(34px,5vw,56px)', lineHeight: 1.02, margin: '0 0 18px', color: '#fff' }}>Equip your team.</h2>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                Book a hands-on demo, or send us your requirements for a volume quote. An XR specialist will scope it with you — hardware, software and rollout.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 240 }}>
              <button onClick={onDemo} style={{ height: 48, padding: '0 24px', borderRadius: 4, cursor: 'pointer', width: '100%',
                fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 16, background: '#fff', color: '#363636',
                border: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: '0 1px 2px rgba(16,24,40,0.12)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#FFF4EE'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}>
                Book a Demo <AIX.Arrow size={16} color="#363636" />
              </button>
              <button onClick={onQuote} style={{ height: 48, padding: '0 24px', borderRadius: 4, cursor: 'pointer', width: '100%',
                fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 16, background: 'rgba(255,255,255,0.12)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.55)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}>
                Request volume quote
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Band>
  );
}
window.FinalCTA = FinalCTA;
