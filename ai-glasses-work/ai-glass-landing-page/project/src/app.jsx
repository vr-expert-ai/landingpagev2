/* ============================================================
   App — assembles the AI Glasses for Business landing page
   ============================================================ */
const C = window.C;
const AIX = window.AIX;
const {
  useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakSlider, TweakToggle,
} = window;

const ACCENTS = {
  orange: { accent: '#FF9057', soft: 'rgba(255,144,87,0.14)', glow: 'rgba(255,144,87,0.34)' },
  teal:   { accent: '#00BABF', soft: 'rgba(0,186,191,0.13)',  glow: 'rgba(0,186,191,0.34)' },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "orange",
  "videoMode": "scrub",
  "heroSize": 76,
  "calmMotion": false
}/*EDITMODE-END*/;

/* ---- Demo / quote modal -------------------------------------- */
function LeadModal({ mode, onClose }) {
  const [f, setF] = React.useState({ name: '', email: '', company: '', note: '' });
  const [err, setErr] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const isQuote = mode === 'quote';
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = 'Required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) er.email = 'Enter a valid email';
    if (!f.company.trim()) er.company = 'Required';
    setErr(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  const field = (k, label, type, ph) => (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, color: '#363636', marginBottom: 6 }}>{label}</span>
      <input type={type || 'text'} value={f[k]} onChange={set(k)} placeholder={ph}
        style={{ width: '100%', height: 44, padding: '0 14px', borderRadius: 4, border: `1px solid ${err[k] ? C.red : C.border}`,
          fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#363636', outline: 'none', background: '#fff', boxSizing: 'border-box' }}
        onFocus={(e) => e.target.style.borderColor = AIX.ACCENT.includes('var') ? '#FF9057' : AIX.ACCENT}
        onBlur={(e) => e.target.style.borderColor = err[k] ? C.red : C.border} />
      {err[k] && <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: C.red, marginTop: 4, display: 'block' }}>{err[k]}</span>}
    </label>
  );
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(20,21,24,0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'aixFade .2s ease-out' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 12, width: 'min(520px,100%)', maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 24px 48px rgba(0,0,0,0.3)', padding: 'clamp(24px,4vw,40px)', position: 'relative' }}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}>
          <window.Icon d={["M6 6l12 12", "M18 6l-12 12"]} size={22} sw={1.8} />
        </button>
        {!sent ? (
          <form onSubmit={submit}>
            <AIX.Eyebrow>{isQuote ? 'Volume quote' : 'Book a demo'}</AIX.Eyebrow>
            <h3 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 26, color: '#363636', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
              {isQuote ? 'Request a volume quote' : 'Book a hands-on demo'}
            </h3>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, lineHeight: 1.55, color: '#525252', margin: '0 0 24px' }}>
              {isQuote ? 'Tell us what you’re deploying and an XR specialist will scope pricing with you.' : 'See the devices in action and talk through your use case with an expert.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {field('name', 'Full name', 'text', 'Jane Doe')}
              {field('email', 'Work email', 'email', 'jane@company.com')}
              {field('company', 'Company', 'text', 'Acme Industries')}
              <label style={{ display: 'block' }}>
                <span style={{ display: 'block', fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, color: '#363636', marginBottom: 6 }}>
                  {isQuote ? 'What & how many?' : 'Your use case'} <span style={{ color: '#B3B3B3', fontWeight: 400 }}>(optional)</span></span>
                <textarea value={f.note} onChange={set('note')} rows={3}
                  placeholder={isQuote ? 'e.g. 40× RealWear Navigator 520 for field service' : 'e.g. remote support for field engineers'}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 4, border: `1px solid ${C.border}`, resize: 'vertical',
                    fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#363636', outline: 'none', boxSizing: 'border-box' }} />
              </label>
              <window.BtnPrimary full>{isQuote ? 'Request quote' : 'Book demo'}</window.BtnPrimary>
            </div>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(18,183,106,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <window.Icon d="M5 13l4 4L19 7" size={32} color={C.green} sw={2.5} />
            </div>
            <h3 style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 24, color: '#363636', margin: '0 0 8px' }}>Thanks, {f.name.split(' ')[0]}!</h3>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15.5, lineHeight: 1.6, color: '#525252', margin: '0 0 24px' }}>
              An XR specialist will be in touch shortly{f.company ? ` about ${f.company}` : ''}. (Demo — no message was actually sent.)
            </p>
            <window.BtnPrimary onClick={onClose}>Close</window.BtnPrimary>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- Toast --------------------------------------------------- */
function Toaster({ msg }) {
  if (!msg) return null;
  return (
    <div style={{ position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 1100,
      background: '#363636', color: '#fff', borderRadius: 6, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10,
      fontFamily: 'Inter,sans-serif', fontSize: 14.5, fontWeight: 500, boxShadow: '0 12px 28px rgba(0,0,0,0.3)', animation: 'aixToast .3s ease-out' }}>
      <window.Icon d="M5 13l4 4L19 7" size={18} color={C.green} sw={2.5} />{msg}
    </div>
  );
}

/* ---- App ----------------------------------------------------- */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [modal, setModal] = React.useState(null);
  const [cart, setCart] = React.useState(0);
  const [filter, setFilter] = React.useState('all');
  const [toast, setToast] = React.useState('');
  const toastRef = React.useRef(0);

  const a = ACCENTS[t.accent] || ACCENTS.orange;

  const notify = React.useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToast(''), 2400);
  }, []);
  const addToCart = React.useCallback((n) => { setCart((c) => c + (n || 1)); notify('Added to cart'); }, [notify]);
  React.useEffect(() => { AIX.notify = notify; AIX.addToCart = addToCart; }, [notify, addToCart]);

  const openDemo = () => setModal('demo');
  const openQuote = () => setModal('quote');
  AIX.openDemo = openDemo; AIX.openQuote = openQuote;
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: t.calmMotion ? 'auto' : 'smooth' }); };
  const pickType = (typeId) => { setFilter(typeId === 'desktop' ? 'binocular' : typeId); scrollTo('products'); };

  /* header nav → scroll / modal */
  const setPage = (key) => {
    if (key === 'contact') return openDemo();
    if (key === 'business') return openQuote();
    const map = { shop: 'products', 'use-cases': 'use-cases', accessories: 'products', software: 'compare', about: 'why', services: 'why', resources: 'faq', home: 'top' };
    if (key === 'home') return window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollTo(map[key] || 'products');
  };

  React.useEffect(() => {
    if (t.calmMotion) document.documentElement.style.scrollBehavior = 'auto';
  }, [t.calmMotion]);

  return (
    <div style={{ '--aix-accent': a.accent, '--aix-accent-soft': a.soft, '--aix-accent-glow': a.glow, '--aix-hero-size': `${t.heroSize}px`, background: '#fff' }}>
      <span id="top" />
      <window.Header page="business" setPage={setPage} cartCount={cart} />

      <window.Hero videoMode={t.calmMotion ? 'loop' : t.videoMode} onExplore={() => scrollTo('products')} onDemo={openDemo} />

      <window.Comparison />
      <window.ROI />
      <window.HotspotScene />
      <window.Types onPick={pickType} />
      <window.Brands />
      <window.UseCaseExplorer />
      <window.Definition />
      <window.SelectorWizard onDemo={openDemo} />
      <window.Products filter={filter} setFilter={setFilter} />
      <window.WhyVRExpert />
      <window.SuccessStories />
      <window.FAQ />
      <window.FinalCTA onDemo={openDemo} onQuote={openQuote} />
      <window.Footer />

      {modal && <LeadModal mode={modal} onClose={() => setModal(null)} />}
      <Toaster msg={toast} />

      <TweaksPanel>
        <TweakSection label="Brand accent" />
        <TweakColor label="Accent glow" value={t.accent === 'teal' ? '#00BABF' : '#FF9057'}
          options={['#FF9057', '#00BABF']} onChange={(v) => setTweak('accent', v === '#00BABF' ? 'teal' : 'orange')} />
        <TweakSection label="Hero video" />
        <TweakRadio label="Behaviour" value={t.videoMode} options={['scrub', 'loop']} onChange={(v) => setTweak('videoMode', v)} />
        <TweakSlider label="Headline size" value={t.heroSize} min={56} max={96} step={4} unit="px" onChange={(v) => setTweak('heroSize', v)} />
        <TweakSection label="Motion" />
        <TweakToggle label="Calm motion" value={t.calmMotion} onChange={(v) => setTweak('calmMotion', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
