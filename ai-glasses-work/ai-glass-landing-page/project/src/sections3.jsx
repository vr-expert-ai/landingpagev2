/* ============================================================
   Sections 3 — Compare (devices) · ROI (stats + chart)
   ============================================================ */
const C = window.C;
const AIX = window.AIX;
const { Container, Band, SectionHead, Eyebrow, useInView, useCountUp, useReducedMotion } = AIX;

/* ---- Compare: spec table with images + selectable columns ---- */
/* Per-cell explanations — keyed by the exact value, only on the harder terms. */
const CELL_INFO = {
  'Monocular flip': 'A single flip-down screen on one eye that you can swing out of view when you don’t need it.',
  'Monocular waveguide': 'A see-through waveguide projects a screen onto a transparent lens — information floats over the real world.',
  'Binocular 1080p': 'Two 1080p displays, one per eye, giving full stereoscopic depth instead of a single flat screen.',
  'Monocular + AI': 'One glanceable screen paired with an on-board AI assistant that sees through the camera.',
  'Dual SLAM': 'Two tracking cameras map the space in real time, enabling 6-degrees-of-freedom positioning.',
  'Hot-swap, ~10 h': 'Hot-swap: change the battery without powering the device down — keeps running across back-to-back shifts.',
  'Swappable, ~2–10 h': 'Spare battery packs clip on and off, so runtime scales with how many you carry.',
  'Tethered': 'Powered through a cable to a phone or compute puck — no on-board battery, so it stays very light.',
  'Android (AOSP)': 'Open-source Android with no Google services — easier to lock down and enrol in a fleet MDM.',
  'NebulaOS / host': 'Runs XReal’s NebulaOS, or simply mirrors a connected host device (phone or PC).',
};

function bestByRow(devices) {
  const num = (s, re) => { const m = String(s).match(re); return m ? parseFloat(m[1]) : null; };
  const pick = (vals, dir) => {
    let bi = -1, bv = null;
    vals.forEach((v, i) => { if (v == null) return; if (bv == null || (dir === 'low' ? v < bv : v > bv)) { bv = v; bi = i; } });
    return bi;
  };
  return {
    weight: pick(devices.map((d) => num(d.weight, /(\d+)/)), 'low'),
    camera: pick(devices.map((d) => num(d.camera, /([\d.]+)\s*MP/i)), 'high'),
    battery: pick(devices.map((d) => num(d.battery, /(\d+)\s*h/i)), 'high'),
  };
}

function CompareTable() {
  const devices = AIX.DEVICES;
  const rows = AIX.COMPARE_ROWS;
  const [sel, setSel] = React.useState(0);
  const best = bestByRow(devices);
  return (
    <div style={{ background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 780, fontFamily: 'Inter,sans-serif' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '16px 20px', background: '#fff', position: 'sticky', left: 0, zIndex: 2,
                fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 14, color: '#6B7280', borderBottom: `1px solid ${C.borderInput}`, verticalAlign: 'bottom' }}>Device</th>
              {devices.map((d, i) => {
                const on = sel === i;
                return (
                  <th key={d.name} onClick={() => setSel(i)} style={{ padding: '16px 14px 16px', textAlign: 'center', cursor: 'pointer', minWidth: 168,
                    borderBottom: `2px solid ${on ? AIX.ACCENT : C.borderInput}`, borderLeft: `1px solid ${C.borderS}`,
                    background: on ? 'var(--aix-accent-soft, rgba(255,144,87,0.10))' : '#fff', transition: 'background .15s' }}>
                    <img src={AIX.GLASSES_IMG} alt="" style={{ width: 88, height: 'auto', display: 'block', margin: '0 auto 8px' }} />
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 14.5, color: '#363636', lineHeight: 1.2 }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: C.teal, fontWeight: 600, marginTop: 3, marginBottom: 10 }}>{d.brand}</div>
                    <a href="#products" onClick={(e) => e.stopPropagation()}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, height: 28, padding: '0 12px', borderRadius: 4,
                        border: `1px solid ${C.border}`, background: '#fff', color: '#363636', textDecoration: 'none',
                        fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 12.5, whiteSpace: 'nowrap' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = C.bgHover; e.currentTarget.style.color = C.teal; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#363636'; }}>
                      View product <AIX.Arrow size={13} color="currentColor" />
                    </a>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map(([key, label], ri) => {
              const bestIdx = best[key] == null ? -1 : best[key];
              return (
                <tr key={key} style={{ background: ri % 2 ? '#FBFBFB' : '#fff' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: 13.5, color: '#363636', position: 'sticky', left: 0,
                    background: ri % 2 ? '#FBFBFB' : '#fff', zIndex: 2, borderBottom: `1px solid ${C.borderS}`, whiteSpace: 'nowrap' }}>
                    {label}
                  </td>
                  {devices.map((d, di) => {
                    const on = sel === di;
                    const isBest = di === bestIdx;
                    const info = CELL_INFO[d[key]];
                    return (
                      <td key={d.name} style={{ padding: '14px', fontSize: 13.5, lineHeight: 1.4, textAlign: 'center',
                        borderLeft: `1px solid ${C.borderS}`, borderBottom: `1px solid ${C.borderS}`,
                        background: isBest ? 'rgba(0,186,191,0.08)' : on ? 'var(--aix-accent-soft, rgba(255,144,87,0.07))' : 'transparent',
                        color: isBest ? '#1F7F7B' : '#525252', fontWeight: isBest ? 700 : 400 }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 0 }}>
                          {d[key]}{info && <AIX.InfoTip text={info} />}
                        </span>
                        {isBest && <span style={{ marginLeft: 5, fontSize: 10.5, color: C.teal, fontWeight: 700 }}>★ best</span>}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            <tr>
              <td style={{ padding: '16px 20px', position: 'sticky', left: 0, background: '#fff', zIndex: 2 }} />
              {devices.map((d, di) => (
                <td key={d.name} style={{ padding: '14px', textAlign: 'center', borderLeft: `1px solid ${C.borderS}`,
                  background: sel === di ? 'var(--aix-accent-soft, rgba(255,144,87,0.07))' : 'transparent' }}>
                  <AIX.AddToCart small onClick={() => window.AIX.addToCart && window.AIX.addToCart(1)} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Comparison() {
  return (
    <Band id="compare">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
          <SectionHead eyebrow="Compare"
            title="The Top Devices"
            intro="Tap a device to focus it; best-in-row specs are starred. Hover the (i) on a spec to see what the term means." />
          <div style={{ paddingBottom: 4 }}><AIX.ArrowLink href="#products" color={AIX.ACCENT}>See all glasses</AIX.ArrowLink></div>
        </div>
        <CompareTable />
      </Container>
    </Band>
  );
}
window.Comparison = Comparison;

/* ---- ROI: stat count-ups + interactive operations chart ------ */
function StatCard({ stat, active }) {
  const val = useCountUp(stat.value, active, 1500);
  const display = stat.value >= 10 ? Math.round(val) : (Math.round(val * 10) / 10).toFixed(val < stat.value ? 1 : 0);
  return (
    <div style={{ position: 'relative', background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 10, padding: '26px 24px', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: -50, right: -50, width: 150, height: 150, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--aix-accent-soft, rgba(255,144,87,0.16)) 0%, rgba(255,144,87,0) 70%)', opacity: active ? 1 : 0, transition: 'opacity .6s' }} />
      <div style={{ position: 'relative', fontFamily: 'Poppins,sans-serif', fontWeight: 700, letterSpacing: '-0.03em',
        fontSize: 'clamp(40px, 4vw, 56px)', lineHeight: 1, color: '#2A2B2E' }}>
        <span style={{ fontSize: '0.6em', verticalAlign: 'top', color: AIX.ACCENT }}>{stat.prefix}</span>{display}<span style={{ fontSize: '0.55em', color: AIX.ACCENT }}>{stat.suffix}</span>
      </div>
      <div style={{ position: 'relative', fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 16, color: '#363636', marginTop: 12 }}>{stat.label}</div>
      <div style={{ position: 'relative', fontFamily: 'Inter,sans-serif', fontSize: 13, lineHeight: 1.5, color: '#6B7280', marginTop: 5 }}>{stat.sub}</div>
    </div>
  );
}

function ROIChart() {
  const metrics = AIX.COMPARE_METRICS;
  const keys = Object.keys(metrics);
  const [mk, setMk] = React.useState(keys[1]);
  const m = metrics[mk];
  const weeks = AIX.COMPARE_WEEKS;
  const [ref, seen] = useInView({ ratio: 0.9 });
  const rm = useReducedMotion();

  const W = 640, H = 280, padL = 44, padR = 24, padT = 20, padB = 38;
  const all = m.with.concat(m.without);
  const maxV = Math.max.apply(null, all) * 1.08;
  const minV = Math.min.apply(null, all) * 0.9;
  const x = (i) => padL + (i * (W - padL - padR)) / (weeks.length - 1);
  const y = (v) => padT + (1 - (v - minV) / (maxV - minV)) * (H - padT - padB);
  const line = (arr) => arr.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const tabIdx = keys.indexOf(mk);

  return (
    <div style={{ background: '#fff', border: `1px solid ${C.borderInput}`, borderRadius: 10, padding: 'clamp(18px,2.2vw,28px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14, marginBottom: 18 }}>
        <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 18, color: '#363636' }}>With vs. without</div>
        <div style={{ maxWidth: '100%' }}>
          <window.PillTabs tabs={['First-fix', 'Speed', 'Training']} activeIndex={tabIdx} onChange={(i) => setMk(keys[i])} />
        </div>
      </div>
      <div ref={ref} style={{ position: 'relative' }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
          {[0, 0.25, 0.5, 0.75, 1].map((g) => {
            const gy = padT + g * (H - padT - padB);
            return <line key={g} x1={padL} y1={gy} x2={W - padR} y2={gy} stroke="#EAECF0" strokeWidth="1" />;
          })}
          {weeks.map((w, i) => (
            <text key={w} x={x(i)} y={H - 12} textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="12" fill="#6B7280">{w}</text>
          ))}
          <path d={line(m.without)} fill="none" stroke="#B3B3B3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 5" />
          <path d={line(m.with)} fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" pathLength="1"
            style={{ stroke: 'var(--aix-accent, #FF9057)', strokeDasharray: 1, strokeDashoffset: rm ? 0 : (seen ? 0 : 1), transition: rm ? 'none' : 'stroke-dashoffset 1.3s ease-out' }} />
          {seen && m.with.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="3.5" style={{ fill: 'var(--aix-accent, #FF9057)' }} />)}
        </svg>
        <div style={{ position: 'absolute', top: 4, right: 28, background: C.green, color: '#fff', borderRadius: 999,
          padding: '6px 14px', fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 14,
          boxShadow: '0 4px 12px rgba(18,183,106,0.35)', opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(-6px)', transition: 'all .5s .8s ease-out' }}>
          {m.delta} vs. without
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, marginTop: 14 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#525252' }}>
          <span style={{ width: 18, height: 3, background: 'var(--aix-accent,#FF9057)', borderRadius: 2 }} />With AI glasses</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#525252' }}>
          <span style={{ width: 18, height: 3, background: '#B3B3B3', borderRadius: 2 }} />Without</span>
      </div>
    </div>
  );
}

function ROI() {
  const [ref, seen] = useInView({ ratio: 0.92 });
  return (
    <Band id="roi">
      <Container>
        <SectionHead eyebrow="Operational ROI"
          title="What's the Return on AI Glasses"
          intro="Representative impact from frontline and field deployments. Figures are illustrative pending published, attributed data." />
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 20, alignItems: 'start' }} className="aix-2col">
          <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {AIX.STATS.map((s) => <StatCard key={s.label} stat={s} active={seen} />)}
          </div>
          <ROIChart />
        </div>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#9AA1AC', marginTop: 16, marginBottom: 0 }}>
          Illustrative figures — to be replaced with sourced, attributable deployment data before launch.
        </p>
      </Container>
    </Band>
  );
}
window.ROI = ROI;
