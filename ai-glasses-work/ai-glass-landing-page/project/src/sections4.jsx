/* ============================================================
   Sections 4 — Find-your-AI-glasses wizard · Recommended products
   ============================================================ */
const C = window.C;
const AIX = window.AIX;
const { Container, Band, SectionHead, ArrowLink } = AIX;

/* ---- 10. Guided selector wizard ------------------------------ */
const WIZARD = [
  { q: 'What’s the primary task?', key: 'task', options: [
    { label: 'Remote support & inspection', v: 'monocular' },
    { label: 'Logistics & pick-by-vision', v: 'monocular' },
    { label: 'Design, data & virtual screens', v: 'binocular' },
    { label: 'AI assistant & translation', v: 'audio' },
  ] },
  { q: 'Where is the work done?', key: 'env', options: [
    { label: 'Industrial / hands-free / outdoors', v: 'rugged' },
    { label: 'Office, travel or mixed', v: 'office' },
  ] },
  { q: 'Do you need a display?', key: 'display', options: [
    { label: 'Yes — rich overlays & screens', v: 'binocular' },
    { label: 'Yes — one glanceable screen', v: 'monocular' },
    { label: 'No — voice & camera only', v: 'audio' },
  ] },
  { q: 'How many will you deploy?', key: 'scale', options: [
    { label: 'Pilot (1–10)', v: 'pilot' },
    { label: 'Team (10–50)', v: 'team' },
    { label: 'Fleet (50+)', v: 'fleet' },
  ] },
];

function Stepper({ step, total }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 32 }}>
      {Array.from({ length: total }).map((_, i) => {
        const done = i < step, active = i === step;
        return (
          <React.Fragment key={i}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, flexShrink: 0,
              background: done ? C.green : active ? '#fff' : '#fff',
              border: `1.5px solid ${done ? C.green : active ? AIX.ACCENT : '#EEE'}`,
              color: done ? '#fff' : active ? AIX.ACCENT : '#B3B3B3',
              boxShadow: active ? '0 0 0 4px var(--aix-accent-soft, rgba(255,144,87,0.22))' : 'none',
              opacity: !done && !active ? 0.7 : 1, transition: 'all .2s' }}>
              {done ? <window.Icon d="M5 12l5 5L20 7" size={15} color="#fff" sw={2.5} /> : i + 1}
            </div>
            {i < total - 1 && <div style={{ width: 'clamp(28px,7vw,72px)', height: 3, background: done ? C.green : '#F0F0F0', transition: 'background .2s' }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function recommend(answers) {
  const score = {};
  AIX.DEVICES.forEach((d) => { score[d.name] = 0; });
  const bump = (type, n) => AIX.DEVICES.forEach((d) => { if (d.type === type) score[d.name] += n; });
  if (answers.task) bump(answers.task, 2);
  if (answers.display) bump(answers.display, 2);
  if (answers.env === 'rugged') bump('monocular', 1.5);
  if (answers.env === 'office') { bump('binocular', 1.5); bump('audio', 0.5); }
  const ranked = AIX.DEVICES.slice().sort((a, b) => score[b.name] - score[a.name]);
  return ranked.slice(0, 2);
}

function SelectorWizard({ onDemo }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const done = step >= WIZARD.length;
  const recs = done ? recommend(answers) : [];

  const pick = (key, v) => { setAnswers((a) => ({ ...a, [key]: v })); setStep((s) => s + 1); };
  const restart = () => { setAnswers({}); setStep(0); };

  return (
    <Band id="selector">
      <Container>
        <SectionHead align="center" eyebrow="Find your glasses"
          title="Find The Right Glass for Your Business"
          intro="Tell us about the work and we’ll shortlist the right devices." />
        <div style={{ background: '#FBFBFB', border: `1px solid ${C.borderInput}`, borderRadius: 12, padding: 'clamp(24px,4vw,48px)' }}>
          {!done && <Stepper step={step} total={WIZARD.length} />}
          {!done ? (
            <div key={step} style={{ animation: 'aixFade .3s ease-out' }}>
              <div style={{ textAlign: 'center', fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 'clamp(20px,2.6vw,26px)', color: '#363636', marginBottom: 28 }}>
                {WIZARD[step].q}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: WIZARD[step].options.length > 2 ? '1fr 1fr' : '1fr', gap: 12, maxWidth: 620, margin: '0 auto' }} className="aix-wizard-opts">
                {WIZARD[step].options.map((o) => (
                  <button key={o.label} onClick={() => pick(WIZARD[step].key, o.v)}
                    style={{ padding: '18px 20px', textAlign: 'left', cursor: 'pointer', borderRadius: 6, background: '#fff',
                      border: `1px solid ${C.border}`, fontFamily: 'Inter,sans-serif', fontSize: 15.5, fontWeight: 600, color: '#363636',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, transition: 'all .15s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = AIX.ACCENT.includes('var') ? '#FF9057' : AIX.ACCENT; e.currentTarget.style.background = 'var(--aix-accent-soft, rgba(255,144,87,0.1))'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = '#fff'; }}>
                    {o.label}
                    <AIX.Arrow size={16} color="#B3B3B3" />
                  </button>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: 26 }}>
                {step > 0
                  ? <window.BtnText onClick={() => setStep((s) => s - 1)} color="#6B7280">← Back</window.BtnText>
                  : <window.BtnText onClick={onDemo} color="#6B7280">Not sure? Talk to an expert</window.BtnText>}
              </div>
            </div>
          ) : (
            <div style={{ animation: 'aixFade .3s ease-out' }}>
              <div style={{ textAlign: 'center', marginBottom: 28 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: C.green, fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 14, marginBottom: 8 }}>
                  <window.Icon d="M5 12l5 5L20 7" size={18} color={C.green} sw={2.5} /> Your match
                </div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 24, color: '#363636' }}>We’d start you with these</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="aix-wizard-opts">
                {recs.map((d, i) => (
                  <div key={d.name} style={{ background: '#fff', border: `1px solid ${i === 0 ? AIX.ACCENT : C.borderInput}`, borderRadius: 8, padding: 22, position: 'relative' }}>
                    {i === 0 && <div style={{ position: 'absolute', top: 14, right: 14, background: 'var(--aix-accent-soft,rgba(255,144,87,0.16))', color: AIX.ACCENT, fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 11, padding: '4px 9px', borderRadius: 4 }}>BEST FIT</div>}
                    <window.Headset size={46} color={C.border} />
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 17, color: '#363636', marginTop: 14, lineHeight: 1.25 }}>{d.name}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13.5, color: '#6B7280', margin: '6px 0 16px' }}>{d.bestFor}</div>
                    {answers.scale === 'fleet'
                      ? <window.BtnPrimary full small onClick={() => window.AIX.openQuote && window.AIX.openQuote()}>Request volume quote</window.BtnPrimary>
                      : <AIX.AddToCart full small onClick={() => window.AIX.addToCart && window.AIX.addToCart(1)} />}
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: 24 }}>
                <window.BtnText onClick={restart} color="#6B7280">↻ Start over</window.BtnText>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Band>
  );
}
window.SelectorWizard = SelectorWizard;

/* ---- 11. Recommended products -------------------------------- */
const PROD_FILTERS = [
  { label: 'All', v: 'all' },
  { label: 'Display (AR)', v: 'binocular' },
  { label: 'Assisted reality', v: 'monocular' },
  { label: 'AI assistant', v: 'audio' },
];

function ProductTile({ p }) {
  const [qty, setQty] = React.useState(1);
  return (
    <div style={{ background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', height: 176, background: '#fff', borderBottom: `1px solid ${C.borderInput}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={AIX.GLASSES_IMG} alt={`${p.name} — AI glasses`} style={{ width: '72%', height: 'auto', objectFit: 'contain' }} />
        <span style={{ position: 'absolute', top: 12, left: 12, background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 4,
          padding: '4px 10px', fontFamily: 'Inter,sans-serif', fontSize: 11.5, fontWeight: 700, color: C.teal, letterSpacing: '0.03em' }}>{p.tag}</span>
      </div>
      <div style={{ padding: 18, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 16.5, color: '#363636', lineHeight: 1.25 }}>{p.name}</div>
        <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13.5, color: '#6B7280', margin: '7px 0 16px', flex: 1 }}>{p.spec}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <window.QuantitySelector value={qty} onChange={setQty} small />
          <div style={{ flex: 1 }}><AIX.AddToCart full small onClick={() => window.AIX.addToCart && window.AIX.addToCart(qty)} /></div>
        </div>
        <div style={{ marginTop: 10, textAlign: 'center' }}><window.BtnText color="#6B7280" onClick={() => window.AIX.openQuote && window.AIX.openQuote()}>Request a quote</window.BtnText></div>
      </div>
    </div>
  );
}

function Products({ filter, setFilter }) {
  const fi = Math.max(0, PROD_FILTERS.findIndex((f) => f.v === filter));
  const list = filter === 'all' ? AIX.PRODUCTS : AIX.PRODUCTS.filter((p) => p.type === filter);
  const shown = list.length ? list : AIX.PRODUCTS;
  return (
    <Band id="products" tone="subtle">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
          <SectionHead eyebrow="Recommended" title="Pick your glasses"
            intro="Curated, deployment-ready devices. Filter by form factor, add to cart, or request a quote." />
          <div style={{ paddingBottom: 8, maxWidth: '100%', overflowX: 'auto' }}>
            <window.PillTabs tabs={PROD_FILTERS.map((f) => f.label)} activeIndex={fi} onChange={(i) => setFilter(PROD_FILTERS[i].v)} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="aix-types-grid">
          {shown.map((p) => <ProductTile key={p.id} p={p} />)}
        </div>
      </Container>
    </Band>
  );
}
window.Products = Products;
