/* ============================================================
   Sections 2 — Shop by brand · Enterprise use-case explorer
   ============================================================ */
const C = window.C;
const AIX = window.AIX;
const { Container, Band, SectionHead, ArrowLink } = AIX;

/* ---- 6. Shop by brand ---------------------------------------- */
function Brands() {
  const [hover, setHover] = React.useState(null);
  return (
    <Band id="brands">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
          <SectionHead eyebrow="Shop by brand"
            title="Shop by brand"
            intro="Official distributor for every major XR maker." />
          <div style={{ paddingBottom: 8 }}><ArrowLink href="#products" color={AIX.ACCENT}>View all AI glasses</ArrowLink></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="aix-types-grid">
          {AIX.BRANDS.map((b) => {
            const on = hover === b.name;
            return (
              <a key={b.name} href="#products" onMouseEnter={() => setHover(b.name)} onMouseLeave={() => setHover(null)}
                style={{ background: '#fff', border: `1px solid ${on ? AIX.ACCENT : C.borderInput}`, borderRadius: 8,
                  padding: 24, textDecoration: 'none', display: 'flex', flexDirection: 'column', minHeight: 210,
                  boxShadow: on ? '0px 12px 16px -4px rgba(16,24,40,0.10)' : 'none',
                  transform: on ? 'translateY(-3px)' : 'none', transition: 'all .2s ease-out' }}>
                <div style={{ height: 40, display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                  <AIX.BrandWord name={b.name} />
                </div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em',
                  textTransform: 'uppercase', color: C.teal, marginBottom: 10 }}>{b.tag}</div>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14.5, lineHeight: 1.55, color: '#525252', margin: 0, flex: 1 }}>{b.body}</p>
                <div style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 7,
                  fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 14, color: on ? AIX.ACCENT : '#363636' }}>
                  View range
                  <span style={{ display: 'inline-flex', transform: on ? 'translateX(3px)' : 'none', transition: 'transform .2s' }}>
                    <AIX.Arrow size={15} color={on ? '#FF9057' : '#363636'} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </Band>
  );
}
window.Brands = Brands;

/* ---- 7. Use-case explorer ------------------------------------ */
function UseCaseExplorer() {
  const cases = AIX.USE_CASES;
  const [active, setActive] = React.useState(0);
  const c = cases[active];
  return (
    <Band id="use-cases">
      <Container>
        <SectionHead eyebrow="Enterprise use cases"
          title="Main Benefits of Each Use Case"
          intro="Pick a use case to see the problem, the fix, the impact and the device we'd recommend." />
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 28, alignItems: 'stretch' }} className="aix-usecase-grid">
          {/* rail */}
          <div role="tablist" aria-label="Use cases" style={{ display: 'flex', flexDirection: 'column', gap: 8 }} className="aix-usecase-rail">
            {cases.map((uc, i) => {
              const on = i === active;
              return (
                <button key={uc.id} role="tab" aria-selected={on} onClick={() => setActive(i)}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', cursor: 'pointer',
                    padding: '14px 16px', borderRadius: 6, transition: 'all .16s',
                    background: on ? '#fff' : 'transparent',
                    border: `1px solid ${on ? AIX.ACCENT : C.borderInput}`,
                    boxShadow: on ? '0px 1px 3px rgba(16,24,40,0.08)' : 'none',
                    color: on ? '#363636' : '#6B7280' }}>
                  <span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: 6, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', background: on ? 'var(--aix-accent-soft, rgba(255,144,87,0.14))' : '#F2F4F7' }}>
                    <window.Icon d={uc.icon} size={18} color={on ? (AIX.ACCENT.includes('var') ? '#FF9057' : AIX.ACCENT) : '#6B7280'} sw={1.7} />
                  </span>
                  <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 15 }}>{uc.label}</span>
                </button>
              );
            })}
          </div>

          {/* detail panel */}
          <div key={c.id} style={{ background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 10,
            padding: 'clamp(24px, 3vw, 40px)', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32,
            boxShadow: '0px 1px 3px rgba(16,24,40,0.06)', animation: 'aixFade .35s ease-out' }} className="aix-usecase-detail">
            <div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 'clamp(22px,2.4vw,28px)', color: '#363636', marginBottom: 22 }}>{c.label}</div>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: AIX.ACCENT, marginBottom: 7 }}>The problem</div>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, lineHeight: 1.6, color: '#525252', margin: 0 }}>{c.problem}</p>
              </div>
              <div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: C.teal, marginBottom: 7 }}>How AI glasses solve it</div>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, lineHeight: 1.6, color: '#525252', margin: 0 }}>{c.solution}</p>
              </div>
              <div style={{ marginTop: 26 }}><AIX.ArrowLink href="#products" color={C.teal}>Explore this use case</AIX.ArrowLink></div>
            </div>
            {/* stat + recommended device */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'var(--aix-accent-soft, rgba(255,144,87,0.14))', border: `1px solid ${C.borderInput}`, borderRadius: 8, padding: 22 }}>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 44, lineHeight: 1, color: '#363636', letterSpacing: '-0.02em' }}>{c.stat}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13.5, lineHeight: 1.45, color: '#6B7280', marginTop: 8 }}>{c.statLabel}</div>
              </div>
              <div style={{ background: '#FBFBFB', border: `1px solid ${C.borderInput}`, borderRadius: 8, padding: 22 }}>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#6B7280', marginBottom: 12 }}>Recommended device</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <window.Headset size={40} color={C.border} />
                  <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 16, color: '#363636', lineHeight: 1.25 }}>{c.device}</span>
                </div>
                <AIX.AddToCart full small onClick={() => window.AIX.addToCart && window.AIX.addToCart(1)} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Band>
  );
}
window.UseCaseExplorer = UseCaseExplorer;
