/* @ds-bundle: {"format":3,"namespace":"VRExpertAIDesignSystem_93b250","components":[],"sourceHashes":{"ui_kits/website/components.jsx":"11774d2e6c62","ui_kits/website/logo-data.jsx":"c6d90fbf75ed","ui_kits/website/pages.jsx":"b095d427f4c1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VRExpertAIDesignSystem_93b250 = window.VRExpertAIDesignSystem_93b250 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/components.jsx
try { (() => {
/* ============================================================
   VR Expert Website UI Kit — Shared Components
   ============================================================ */

/* ── Color tokens ── */
const C = {
  orange: '#FF9057',
  orangeH: '#E58A59',
  orangeBorder: '#D27D4E',
  orangeL: '#FFF4EE',
  teal: '#00BABF',
  tealH: '#0BA0A4',
  tealL: '#C3F0ED',
  charcoal: '#363636',
  body: '#525252',
  muted: '#6B7280',
  navText: '#51525C',
  navLabel: '#6A7282',
  border: '#D0D5DD',
  borderS: '#EAECF0',
  borderCard: '#D0D0D0',
  borderInput: '#E8E8E8',
  borderBtn: '#CACACA',
  bg: '#F2F4F7',
  bgS: '#FBFBFB',
  bgMuted: '#F5F5F5',
  bgHover: '#F4F4F4',
  white: '#FFFFFF',
  footerBg: '#1F2023',
  footerBar: '#26272B',
  footerBorder: '#404040',
  ddBg: '#FAFAFA',
  ddBorder: '#F2F2F2',
  green: '#12B76A',
  red: '#D8232A',
  deleteRed: '#A90606'
};
window.C = C;

/* ── Headset SVG placeholder ── */
function Headset({
  size = 60,
  color = '#D0D5DD'
}) {
  const h = Math.round(size * 0.65);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: h,
    viewBox: "0 0 60 39",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "37",
    rx: "7",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "19.5",
    r: "8.5",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "43",
    cy: "19.5",
    r: "8.5",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.5 19.5h9",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 19.5h7.5M51.5 19.5H59",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }));
}
window.Headset = Headset;

/* ── Icon helper ── */
function Icon({
  d,
  size = 20,
  color = 'currentColor',
  sw = 1.5
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, Array.isArray(d) ? d.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p
  })) : /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
window.Icon = Icon;

/* ── Buttons ── */
function BtnPrimary({
  children,
  onClick,
  full,
  small,
  disabled
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => !disabled && setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      height: small ? 34 : 48,
      padding: small ? '0 14px' : '0 24px',
      width: full ? '100%' : undefined,
      background: disabled ? C.bg : h ? C.orangeH : C.orange,
      color: disabled ? '#B3B3B3' : '#fff',
      border: disabled ? `1px solid ${C.borderS}` : `1px solid ${C.orangeBorder}`,
      borderRadius: 4,
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: small ? 13 : 16,
      cursor: disabled ? 'not-allowed' : 'pointer',
      whiteSpace: 'nowrap',
      boxShadow: disabled ? 'none' : '0 1px 2px #fff, inset 0 -2px 0 rgba(10,13,18,0.05), inset 0 0 0 1px rgba(0,0,0,0.08)',
      transition: 'background 0.13s'
    }
  }, children);
}
window.BtnPrimary = BtnPrimary;
function BtnTealOutline({
  children,
  onClick,
  small
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      height: small ? 34 : 48,
      padding: small ? '0 14px' : '0 24px',
      background: h ? C.teal : '#fff',
      color: h ? '#fff' : C.teal,
      border: `1px solid ${C.teal}`,
      borderRadius: 4,
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: small ? 13 : 16,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      boxShadow: '0 1px 2px #fff, inset 0 -2px 0 rgba(10,13,18,0.05), inset 0 0 0 1px rgba(0,0,0,0.08)',
      transition: 'background 0.13s, color 0.13s'
    }
  }, children);
}
window.BtnTealOutline = BtnTealOutline;
function BtnGhost({
  children,
  onClick,
  small,
  teal
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      height: small ? 34 : 48,
      padding: small ? '0 14px' : '0 24px',
      background: h ? C.bgHover : '#fff',
      color: teal ? h ? C.tealH : C.teal : C.charcoal,
      border: `1px solid ${C.borderBtn}`,
      borderRadius: 4,
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: small ? 13 : 16,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      boxShadow: '0 1px 2px #fff, inset 0 -2px 0 rgba(10,13,18,0.05), inset 0 0 0 1px rgba(0,0,0,0.08)',
      transition: 'background 0.13s, color 0.13s'
    }
  }, children);
}
window.BtnGhost = BtnGhost;
function BtnText({
  children,
  onClick,
  color
}) {
  const [h, setH] = React.useState(false);
  const c = color || C.orange;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: h ? C.orangeL : 'none',
      border: 'none',
      color: c,
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 4,
      fontFamily: 'Inter,sans-serif',
      transition: 'background 0.13s'
    }
  }, children);
}
window.BtnText = BtnText;
function BtnReadMore({
  children,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 29,
      padding: '0 12px',
      background: '#fff',
      color: h ? C.teal : C.charcoal,
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      fontFamily: 'Inter,sans-serif',
      fontWeight: 500,
      fontSize: 14,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      boxShadow: '0 1px 2px #fff, inset 0 -2px 0 rgba(10,13,18,0.05), inset 0 0 0 1px rgba(0,0,0,0.08)',
      transition: 'color 0.13s'
    }
  }, children, /*#__PURE__*/React.createElement(Icon, {
    d: "M9 18l6-6-6-6",
    size: 12,
    sw: 2
  }));
}
window.BtnReadMore = BtnReadMore;

/* ── AI Expert / VR Expert brand mark — actual logo image ── */
function BrandMark({
  size = 36,
  variant = 'orange'
}) {
  const src = variant === 'white' ? window.LOGO_WHITE || '../../assets/Logo Icon - White - VRX.png' : window.LOGO_ORANGE || '../../assets/Logo Icon - Orange - VRX.png';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "VR Expert",
    style: {
      width: size,
      height: size,
      objectFit: 'contain',
      flexShrink: 0,
      display: 'block'
    }
  });
}
window.BrandMark = BrandMark;

/* (legacy AiExpertMark removed — was a Figma cover decoration, not the brand) */

/* ── Top announcement banner ── */
function AnnouncementBanner() {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.orange,
      color: '#fff',
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Experience our products at a lower cost."), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'rgba(255,255,255,0.18)',
      border: 'none',
      padding: '6px 12px',
      borderRadius: 4,
      color: '#fff',
      fontFamily: 'inherit',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Get 10% off now"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setVisible(false),
    style: {
      position: 'absolute',
      right: 24,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ["M6 6l12 12", "M18 6l-12 12"],
    size: 18,
    sw: 1.75
  })));
}
window.AnnouncementBanner = AnnouncementBanner;

/* ── Header ── */
function Header({
  page,
  setPage,
  cartCount
}) {
  const [hoveredNav, setHoveredNav] = React.useState(null);
  const primaryNav = [{
    key: 'shop',
    label: 'Glasses'
  }, {
    key: 'accessories',
    label: 'Accessories'
  }, {
    key: 'software',
    label: 'Software'
  }, {
    key: 'use-cases',
    label: 'Use Cases'
  }];
  const secondaryNav = [{
    key: 'about',
    label: 'About Us'
  }, {
    key: 'services',
    label: 'Services'
  }, {
    key: 'resources',
    label: 'Resources'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 200,
      boxShadow: '0 1px 4px rgba(16,24,40,0.06)'
    }
  }, /*#__PURE__*/React.createElement(AnnouncementBanner, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '14px 32px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setPage('home'),
    style: {
      cursor: 'pointer',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      color: '#171717'
    }
  }, "AI EXPERT")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      height: 44,
      borderRadius: 4,
      background: C.bgMuted,
      overflow: 'hidden',
      maxWidth: 540,
      marginLeft: 32
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search...",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      padding: '0 16px',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      color: '#171717',
      outline: 'none',
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 44,
      height: 44,
      border: 'none',
      cursor: 'pointer',
      background: C.orange,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ["M21 21l-4.35-4.35", "M11 4a7 7 0 110 14 7 7 0 010-14z"],
    size: 16,
    color: "#fff",
    sw: 2
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(BtnPrimary, {
    onClick: () => setPage('contact'),
    small: true
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ["M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"],
    size: 16,
    color: "#fff",
    sw: 2
  }), "Book a Demo"), /*#__PURE__*/React.createElement(BtnGhost, {
    onClick: () => setPage('business'),
    small: true,
    teal: true
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ["M3 21h18", "M5 21V7l8-4v18", "M19 21V11l-6-4"],
    size: 16,
    color: C.teal,
    sw: 2
  }), "Business portal"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: C.charcoal,
      display: 'flex',
      alignItems: 'center',
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ["M3 18v-6a9 9 0 0118 0v6", "M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"],
    size: 22,
    sw: 1.5
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('cart'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: C.charcoal,
      display: 'flex',
      alignItems: 'center',
      padding: 6,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ["M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z", "M3 6h18", "M16 10a4 4 0 01-8 0"],
    size: 22,
    sw: 1.5
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      minWidth: 18,
      height: 18,
      borderRadius: '50%',
      background: C.red,
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px'
    }
  }, cartCount))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '10px 32px 14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, primaryNav.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.key,
    onClick: () => setPage(item.key),
    onMouseEnter: () => setHoveredNav(item.key),
    onMouseLeave: () => setHoveredNav(null),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      fontWeight: 700,
      color: page === item.key ? C.orange : hoveredNav === item.key ? C.orange : C.navText,
      transition: 'color 0.12s',
      whiteSpace: 'nowrap'
    }
  }, item.label, /*#__PURE__*/React.createElement(Icon, {
    d: "M6 9l6 6 6-6",
    size: 14,
    sw: 1.5
  }))), secondaryNav.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.key,
    onClick: () => setPage(item.key),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      fontWeight: 500,
      color: page === item.key ? C.orange : C.navText,
      transition: 'color 0.12s',
      whiteSpace: 'nowrap'
    },
    onMouseEnter: e => e.currentTarget.style.color = C.orange,
    onMouseLeave: e => e.currentTarget.style.color = page === item.key ? C.orange : C.navText
  }, item.label))));
}
window.Header = Header;

/* ── Trust strip ── */
function TrustStrip() {
  const items = [{
    icon: 'M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.11 3h3',
    label: 'Expert advice'
  }, {
    icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z',
    label: 'Pay by Invoice'
  }, {
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    label: '9.3/10 rating'
  }, {
    icon: 'M5 12h14M12 5l7 7-7 7',
    label: 'Worldwide Delivery'
  }, {
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    label: 'ISO 9001-2015'
  }, {
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    label: 'Free Trial'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: `1px solid ${C.borderS}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      height: 40
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      fontSize: 12,
      color: C.body
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: item.icon,
    size: 14,
    color: C.teal,
    sw: 1.5
  }), /*#__PURE__*/React.createElement("span", null, item.label)), i < items.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: C.borderS,
      flexShrink: 0
    }
  })))));
}
window.TrustStrip = TrustStrip;

/* ── Footer ── */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: C.footerBg,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '42px 24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, [{
    icon: 'M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72',
    title: 'Contact Us',
    detail: '+31 20 261 0088',
    link: true
  }, {
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
    title: 'Email',
    detail: 'info@vr-expert.com',
    link: true
  }, {
    icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z',
    title: 'Visit Us',
    detail: 'Amsterdam, Netherlands',
    link: false
  }].map((card, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${C.footerBorder}`,
      borderRadius: 4,
      padding: '16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: card.icon,
    size: 20,
    color: C.orange
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: '#fff'
    }
  }, card.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: card.link ? C.orange : '#A0A0AB',
      cursor: card.link ? 'pointer' : 'default'
    }
  }, card.detail)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${C.footerBorder}`,
      borderRadius: 4,
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 18,
      color: '#fff'
    }
  }, "Ready to get started?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#A0A0AB',
      marginTop: 4
    }
  }, "Talk to our team about your XR needs.")), /*#__PURE__*/React.createElement(BtnPrimary, null, "Book a Demo ", /*#__PURE__*/React.createElement(Icon, {
    d: "M5 12h14M13 6l6 6-6 6",
    size: 16,
    color: "#fff",
    sw: 2
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      paddingTop: 20,
      borderTop: '1px solid #333'
    }
  }, [['Products', ['VR Headsets', 'AR Headsets', 'Accessories', 'Software', 'Enterprise Solutions']], ['Company', ['About Us', 'Careers', 'Partners', 'Press']], ['Resources', ['Knowledge Base', 'Blog', 'Success Stories', 'FAQ']], ['Support', ['Contact Support', 'Shipping & Returns', 'Warranty', 'Terms & Conditions']]].map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: C.navLabel,
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      marginBottom: 16
    }
  }, title), links.map(link => /*#__PURE__*/React.createElement("div", {
    key: link,
    style: {
      fontSize: 14,
      color: '#D0D5DD',
      padding: '5px 0',
      cursor: 'pointer',
      transition: 'color 0.12s',
      lineHeight: 1.6
    },
    onMouseEnter: e => e.currentTarget.style.color = C.orange,
    onMouseLeave: e => e.currentTarget.style.color = '#D0D5DD'
  }, link)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.footerBar,
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 14,
      color: '#fff',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 VR Expert BV \xB7 Privacy Policy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5', 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z', 'M17.5 6.5h.01M2 7a5 5 0 015-5h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5z'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background 0.15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
  }, /*#__PURE__*/React.createElement(Icon, {
    d: d,
    size: 16,
    color: "#D0D5DD"
  })))))));
}
window.Footer = Footer;

/* ── Breadcrumbs ── */
function Breadcrumbs({
  items,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 20
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
    d: "M9 18l6-6-6-6",
    size: 16,
    color: "#A0A0AB",
    sw: 1.5
  }), i < items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: C.muted,
      cursor: 'pointer'
    },
    onClick: () => onNavigate && onNavigate(item.page),
    onMouseEnter: e => e.currentTarget.style.color = C.orange,
    onMouseLeave: e => e.currentTarget.style.color = C.muted
  }, item.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: C.charcoal
    }
  }, item.label))));
}
window.Breadcrumbs = Breadcrumbs;

/* ── Pill Tabs ── */
function PillTabs({
  tabs,
  activeIndex,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: '#EBEBEB',
      borderRadius: 4,
      padding: 8,
      gap: 0,
      overflowX: 'auto'
    }
  }, tabs.map((tab, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onChange(i),
    style: {
      padding: '8px 20px',
      borderRadius: 4,
      border: 'none',
      background: i === activeIndex ? '#fff' : 'transparent',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      fontWeight: 700,
      color: '#3F3F46',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background 0.15s'
    }
  }, tab)));
}
window.PillTabs = PillTabs;

/* ── Quantity selector ── */
function QuantitySelector({
  value,
  onChange,
  small
}) {
  const sz = small ? 36 : 44;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      overflow: 'hidden',
      boxShadow: '0 1px 2px rgba(16,24,40,0.05)',
      height: sz
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(Math.max(1, value - 1)),
    style: {
      width: sz,
      height: sz,
      background: '#fff',
      border: 'none',
      borderRight: `1px solid ${C.border}`,
      cursor: 'pointer',
      fontSize: 18,
      color: C.charcoal,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onMouseEnter: e => e.currentTarget.style.background = C.bgHover,
    onMouseLeave: e => e.currentTarget.style.background = '#fff'
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: sz,
      height: sz,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      fontWeight: 500,
      color: '#696969'
    }
  }, String(value).padStart(2, '0')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(value + 1),
    style: {
      width: sz,
      height: sz,
      background: '#fff',
      border: 'none',
      borderLeft: `1px solid ${C.border}`,
      cursor: 'pointer',
      fontSize: 18,
      color: C.charcoal,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onMouseEnter: e => e.currentTarget.style.background = C.bgHover,
    onMouseLeave: e => e.currentTarget.style.background = '#fff'
  }, "+"));
}
window.QuantitySelector = QuantitySelector;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/logo-data.jsx
try { (() => {
/* Auto-generated: inlined brand logo data URIs for offline standalone */
window.LOGO_ORANGE = "data:image/png;base64,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";
window.LOGO_WHITE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAAFJCAYAAAD5SLSWAAAACXBIWXMAAAsSAAALEgHS3X78AAAKxElEQVR4nO3d3ZEctxmGUdCleykTKwQpEjMEhWBHYioS0xkwFDuCda1LTXG5gxl0T/+8AM6JAPOh5mn0TePDy8vLLwWA7315DeSLsQC88+tfzATgNoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSIAKgQSoEEiACoEEqBBIgAqBBKgQSICKH0op/zAcmM5vpZQfbft9r4H8e/ICgd19Esc2XrFhLq9x/Js9byOQMA9xXEkgYQ7iuIFAwvjEcSOBhLGJ4xMEEsYljk8SSBiTOO5AIGE84rgTgYSxiOOOBBLGIY47E0gYgzgeQCChf+J4EIGEvonjgQQS+iWOBxNI6JM4nkAgoT/ieBKBhL6I44kEEvohjicTSOiDOF5AICGfOF5EICGbOF5IICGXOF5MICGTOAYQSMgjjiF+KKX8MvsQHvhPKeVL9AoZiTgGeQ3kv2YfwgP/9hDhJOIYxis2ZBDHQAIJ1xPHUAIJ1xLHYAIJ1xHHXL+XUj4LJFxDHHO9xvFjcYKES4hjrq9xLAIJpxPHXG/iWAQSTiWOud7FsQgknEYcc92MYxFIOIU45qrGsQgkHE4cc92NYxFIOJQ45noYxyKQcBhxzNUUxyKQcAhxzNUcxyKQsDtxzLUqjkUgYVfimGt1HItAwm7EMdemOBaBhF2IY67NcSwCCU8Tx1xPxbEIJDxFHHM9HccikLCZOObaJY5FIGETccy1WxyLQMJq4phr1zgWgYRVxDHX7nEsAgnNxDHXIXEsAglNxDHXYXEsAgkPiWOuQ+NYBBLuEsdch8exCCRUiWOuU+JYBBJuEsdcp8WxCCS8I465To1jEUh4QxxznR7HIpDwlTjmuiSORSDh/8Qx12VxLAIJ4hjs0jgWgWRy4pjr8jgWgWRi4pgrIo5FIJmUOOaKiWMRSCYkjrmi4lgEksmIY664OBaBZCLimCsyjkUgmYQ45oqNYxFIJiCOuaLjWASSwYljrvg4FoFkYOKYq4s4FoFkUOKYq5s4FoFkQOKYq6s4FoFkMOKYq7s4FoFkIOKYq8s4FoFkEOKYq9s4FoFkAOKYq+s4FoGkc+KYq/s4FoGkY+KYa4g4FoGkU+KYa5g4FoGkQ+KYa6g4FoGkM+KYa7g4FoGkI+KYa8g4FoGkE+KYa9g4FoGkA+KYa+g4FoEknDjmGj6ORSAJJo65pohjEUhCiWOuaeJYBJJA4phrqjgWgSTMR3GM9d9Sym+z/WiBJMmnP04p5PmxlPK5lPLTTHsjkKT5KJKx/jpbJAWSRCKZa6pICiSpRDLXNJEUSJKJZK4pIimQpBPJXMNHUiDpgUjmGjqSAkkvRDLXsJEUSHoikrmGjKRA0huRzDVcJAWSHolkrqEiKZD0SiRzDRNJgaRnIplriEgKJL0TyVzdR1IgGYFI5uo6kgLJKEQyV7eRFEhGIpK5uoykQLKHT0Gf4hfJXN1FUiB51nKHzD9FkgZdRVIgecb3F2yJJC26iaRAslXt9kGRpEUXkRRItnh0NatI0iI+kgLJWq33VoskLaIjKZCssfZSf5GkRWwkBZJWa+O4EElaREZSIGmxNY4LkaRFXCQFkkeejeNCJGkRFUmB5J694rgQSVrERFIgqdk7jguRpEVEJAWSW46K40IkaXF5JAWS7x0dx4VI0uLSSAok3zorjguRpMVlkRRIFmfHcSGStLgkkgJJuTCOC5GkxemRFEiujuNCJGlxaiQFcm4pcVyIJC1Oi6RAzistjguRpMUpkRTIOaXGcSGStDg8kgI5n/Q4LkSSFodGUiDn0kscFyJJi8MiKZDz6C2OC5GkxSGRFMg59BrHhUjSYvdICuT4eo/jQiRpsWskBXJso8RxIZK02C2SAjmu0eK4EEla7BJJgRzTqHFciCQtno6kQI5n9DguRJIWT0VSIMcySxwXIkmLzZEUyHHMFseFSNJiUyQFcgyzxnEhkrRYHUmB7N/scVyIJC1WRVIg+yaOb4kkLZojKZD9EsfbRJIWTZEUyD6J430iSYuHkRTI/ohjG5Gkxd1ICmRfxHEdkaRFNZIC2Q9x3EYkaXEzkgLZB3F8jkjS4l0kBTKfOO5DJGnxJpICmU0c9yWStPgaSYHMJY7HEElavEbyZ4HMJI7HEkmaCGQecTyHSPKQQGYRx3OJJHcJZA5xvIZIUiWQGcTxWiLJTQJ5PXHMIJK8I5DXEscsIskbAnkdccz0GsmfQ1YmkhcTyGuIY67XIH0JWp1IXkggzyeOuX4PesX+lkheRCDPJY65UuO4EMkLCOR5xDFXehwXInkygTyHOObqJY4LkTyRQB5PHHP1FseFSJ5EII8ljrl6jeNCJE8gkMcRx1y9x3EhkgcTyGOIY65R4rgQyQMJ5P7EMddocVyI5EEEcl/imGvUOC5E8gACuR9xzDV6HBciuTOB3Ic45poljguR3JFAPk8cc80Wx4VI7kQgnyOOuWaN40IkdyCQ24ljrtnjuBDJJwnkNuKYSxzfEsknCOR64phLHG8TyY0Ech1xzCWO94nkBgLZThxziWMbkVxJINuIYy5xXEckV/jw8vLy0s1q4S1x3M5D/7FfnSDplTg+x0mygUDSI3Hch0g+IJD0Rhz3JZJ3CCQ9EcdjiGSFQNILcTyWSN4gkPRAHM8hkt8RSNKJ47lE8hsCSTJxvIZI/kEgSSWO15o+kkUgCSWOGaaPpECSRhyzTB1JgSSJOGaaNpICSQpxzDZlJAWSBOLYh+kiKZBcTRz7MlUkBZIriWOfpomkQHIVcezbFJEUSK4gjmMYPpICydnEcSxDR1IgOZM4jmnYSAokZxHHsQ0ZSYHkDOI4h+EiKZAcTRznMlQkBZIjieOchomkQHIUcZzbEJEUSI4gjpQRIimQ7E0c+VbXkRRI9iSO3NJtJAWSvYgj93QZSYFkD+JIi+4iKZA8SxxZo6tICiTPEEe26CaSAslW4sgzuoikQLKFOLKH+EgKJGuJI3uKjqRAsoY4coTYSAokrcSRI0VGUiBpIY6cIS6SAskj4siZoiIpkNwjjlwhJpICSY04cqWISAokt4gjCS6PpEDyPXEkyaWRFEi+JY4kuiySAslCHEl2SSQFkiKOdOL0SAok4khPTo2kQM5NHOnRaZEUyHmJIz07JZICOSdxZASHR1Ig5yOOjOTQSArkXMSRER0WSYGchzgyskMiKZBzEEdmsHskBXJ84shMdo2kQI5NHJnRbpEUyHGJIzPbJZICOSZxhB0iKZDjEUf401ORFMixiCO8tzmSAjkOcYS6TZEUyDGIIzy2OpIC2T9xhHarIimQfRNHWK85kgLZL3GE7ZoiKZB9Ekd43sNICmR/xBH2czeSAtkXcYT9VSMpkP0QRzjOzUgKZB/EEY73LpICmU8c4TxvIvmDwUcTRzjf1//ch5eXl19sQKzPsw8ALlPKT/8DSKVqAwLDTf0AAAAASUVORK5CYII=";
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/logo-data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages.jsx
try { (() => {
/* ============================================================
   VR Expert Website UI Kit — Page Components
   ============================================================ */

/* ── Product Data ── */
const FEATURED = [{
  id: 1,
  brand: 'Pico',
  name: 'Pico G3+',
  price: '€450',
  bullets: ['Suitable for clean rooms', 'More storage space']
}, {
  id: 2,
  brand: 'Pico',
  name: 'Pico 4 Ultra Enterprise',
  price: '€699',
  bullets: ['Official Pico Distributor', 'Mixed Reality functions']
}, {
  id: 3,
  brand: 'Meta',
  name: 'Meta Quest 3S 256 GB',
  price: '€389',
  bullets: ['Cheaper yet powerful alternative', 'Mixed reality possibilities']
}];
const ALL_PRODUCTS = [{
  id: 1,
  brand: 'Pico',
  name: 'Pico G3+',
  price: '€450',
  bullets: ['Suitable for clean rooms', 'More storage space']
}, {
  id: 2,
  brand: 'Pico',
  name: 'Pico 4 Ultra Enterprise',
  price: '€699',
  bullets: ['Official Pico Distributor', 'Mixed Reality']
}, {
  id: 3,
  brand: 'Meta',
  name: 'Meta Quest 3S 256 GB',
  price: '€389',
  bullets: ['Powerful alternative', 'Mixed reality']
}, {
  id: 4,
  brand: 'Meta',
  name: 'Meta Quest 3 512 GB',
  price: '€455',
  bullets: ['4K+ Display', '120Hz Refresh Rate']
}, {
  id: 5,
  brand: 'HTC',
  name: 'VIVE XR Elite',
  price: '€1.099',
  bullets: ['PC VR + standalone', 'Pancake lenses']
}, {
  id: 6,
  brand: 'Varjo',
  name: 'XR-4 Enterprise',
  price: '€8.990',
  bullets: ['Photorealistic passthrough', 'Eye tracking']
}, {
  id: 7,
  brand: 'Pico',
  name: 'Pico Neo 3 Pro',
  price: '€599',
  bullets: ['4K display', 'Snapdragon XR2']
}, {
  id: 8,
  brand: 'Pico',
  name: 'Pico G3',
  price: '€399',
  bullets: ['Snapdragon XR2 Chip', '128GB Storage']
}, {
  id: 9,
  brand: 'HTC',
  name: 'HTC Vive Focus 3',
  price: '€1.249',
  bullets: ['5K display', '120° FOV']
}];
const SUCCESS_STORIES = [{
  title: 'Damen Shipyards – RealWear HMT-1',
  cat: 'Remote support',
  date: '28 Oct 2021'
}, {
  title: 'Koenig & Bauer – RealWear HMT-1Z1',
  cat: 'Remote support',
  date: '27 Jun 2022'
}, {
  title: 'ScanModul – Vuzix M400',
  cat: 'Assisted Reality',
  date: '07 Mar 2022'
}, {
  title: 'Bayer – RealWear HMT-1',
  cat: 'Virtual greenhouse tours',
  date: '07 Mar 2022'
}, {
  title: '3Dimensions – Pico Neo 3 Pro',
  cat: 'VR Data Center',
  date: '01 Jun 2023'
}, {
  title: 'Fugro – RealWear HMT-1',
  cat: 'Remote Support',
  date: '03 Dec 2020'
}];
const TESTIMONIALS = [{
  quote: 'VR Expert offers us the capacity and flexibility to ship 1 to 1000\'s devices with the best customer services.',
  name: 'Camille Mulquin',
  org: 'uptale.io'
}, {
  quote: 'VRelax highly values having regular points of contact with VR Expert who are involved in what we do.',
  name: 'Stefan Vogelzang',
  org: 'vrelax.com'
}, {
  quote: 'VR Expert has proven to be a good partner for large business customers where large-scale delivery is required.',
  name: 'Louis Zantema',
  org: 'reducept.com'
}];
const CLIENTS = ['Ford', 'IBM', 'Fugro', 'Telekom', 'Huawei', 'Coca-Cola', 'Porsche', 'PwC', 'Mercedes', 'Adidas'];

/* ── Home Page ── */
function HomePage({
  setPage,
  onAddToCart,
  setSelectedProduct
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: '#1a1a1a url(../../assets/hero-ai-glasses.png) center/cover no-repeat',
      minHeight: 500
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1280,
      margin: '0 auto',
      padding: '120px 32px 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 540,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#DB7C48',
      letterSpacing: '0.02em',
      marginBottom: 14
    }
  }, "Step Beyond the Screen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.1,
      marginBottom: 18,
      letterSpacing: '-0.015em'
    }
  }, "Experience Reality in a Whole New Dimension"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.6,
      marginBottom: 36,
      maxWidth: 480
    }
  }, "Discover next-generation AI Glasses, immersive accessories, and powerful virtual experiences designed for gaming, entertainment, learning, and the future of digital interaction."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(BtnPrimary, {
    onClick: () => setPage('shop')
  }, "Explore Products", /*#__PURE__*/React.createElement(Icon, {
    d: "M5 12h14M13 6l6 6-6 6",
    size: 16,
    color: "#fff",
    sw: 2
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('contact'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: 48,
      padding: '0 24px',
      background: '#fff',
      color: C.orange,
      border: 'none',
      borderRadius: 4,
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: 16,
      cursor: 'pointer',
      letterSpacing: '-0.005em'
    }
  }, "Book a Demo"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '56px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: C.teal,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Featured Products"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: 32,
      color: C.charcoal,
      letterSpacing: '-0.01em'
    }
  }, "Built for Immersive Experiences"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: '#EBEBEB',
      borderRadius: 4,
      padding: 8
    }
  }, ['New Arrivals', 'Best Seller', 'Under $500'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '8px 14px',
      background: i === 0 ? '#fff' : 'transparent',
      borderRadius: 3,
      fontSize: 13,
      fontWeight: 700,
      color: '#3F3F46',
      cursor: 'pointer'
    }
  }, t)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: C.muted,
      lineHeight: 1.6,
      maxWidth: 540,
      marginTop: -12,
      marginBottom: 28
    }
  }, "Premium AI Glasses equipment engineered for stunning visuals, responsive interaction, and limitless virtual exploration."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, FEATURED.slice(0, 4).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      background: '#fff',
      border: `1px solid ${C.borderS}`,
      borderRadius: 8,
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgba(16,24,40,0.04)',
      transition: 'box-shadow 0.15s, transform 0.15s',
      display: 'flex',
      flexDirection: 'column'
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = '0 8px 18px rgba(16,24,40,0.10)',
    onMouseLeave: e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(16,24,40,0.04)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F5F5F5',
      height: 148,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onClick: () => {
      setSelectedProduct(p);
      setPage('product');
    }
  }, /*#__PURE__*/React.createElement(Headset, {
    size: 94,
    color: "#B3B3B3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      fontSize: 11,
      fontWeight: 600,
      color: C.teal,
      border: `1px solid ${C.teal}`,
      padding: '2px 10px',
      borderRadius: 4
    }
  }, "AI Glasses"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: 14,
      color: C.charcoal,
      lineHeight: 1.3,
      minHeight: 36
    },
    onClick: () => {
      setSelectedProduct(p);
      setPage('product');
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: C.charcoal
    }
  }, p.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 11,
      color: C.muted
    }
  }, "excl. VAT")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${C.border}`,
      borderRadius: 4,
      overflow: 'hidden',
      height: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 30,
      height: 30,
      border: 'none',
      background: '#fff',
      cursor: 'pointer',
      color: C.charcoal
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 24,
      textAlign: 'center',
      fontSize: 13,
      fontWeight: 500,
      color: C.body
    }
  }, "02"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 30,
      height: 30,
      border: 'none',
      background: '#fff',
      cursor: 'pointer',
      color: C.charcoal
    }
  }, "+")), /*#__PURE__*/React.createElement(BtnPrimary, {
    small: true,
    onClick: () => onAddToCart(p)
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ["M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z", "M3 6h18", "M16 10a4 4 0 01-8 0"],
    size: 13,
    color: "#fff",
    sw: 2
  }), "Add to cart")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(BtnTealOutline, {
    onClick: () => setPage('shop')
  }, "View More Products ", /*#__PURE__*/React.createElement(Icon, {
    d: "M5 12h14M13 6l6 6-6 6",
    size: 14,
    sw: 2
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '72px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: C.orange,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Explore Our Collection"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: 28,
      color: C.charcoal,
      letterSpacing: '-0.01em',
      marginBottom: 6
    }
  }, "Shop by Category"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: C.muted,
      lineHeight: 1.6,
      maxWidth: 580,
      marginBottom: 24
    }
  }, "Discover next-generation AI Glasses, AI smart glasses, accessories, and immersive technology for gaming, productivity, training, and everyday experiences."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, [{
    title: 'AI Glasses',
    img: '../../assets/category-glasses.png'
  }, {
    title: 'Accessories',
    img: '../../assets/category-accessories.png'
  }, {
    title: 'Software & Services',
    img: '../../assets/category-glasses.png'
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      background: '#F5F5F5',
      borderRadius: 8,
      padding: '24px 24px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      cursor: 'pointer',
      transition: 'transform 0.15s'
    },
    onClick: () => setPage('shop'),
    onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-3px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter,sans-serif',
      fontWeight: 700,
      fontSize: 18,
      color: C.charcoal
    }
  }, c.title), /*#__PURE__*/React.createElement(BtnPrimary, {
    small: true
  }, "Shop Now"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160,
      marginTop: 'auto',
      overflow: 'hidden',
      background: `url(${c.img}) center bottom/contain no-repeat`
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 22,
      color: C.charcoal
    }
  }, "Success Stories"), /*#__PURE__*/React.createElement(BtnTealOutline, {
    small: true
  }, "Read full story ", /*#__PURE__*/React.createElement(Icon, {
    d: "M5 12h14M13 6l6 6-6 6",
    size: 14,
    color: C.teal,
    sw: 2
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, SUCCESS_STORIES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: `1px solid ${C.borderS}`,
      borderRadius: 8,
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgba(16,24,40,0.04)',
      transition: 'box-shadow 0.15s'
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(16,24,40,0.10)',
    onMouseLeave: e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(16,24,40,0.04)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: 110,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Headset, {
    size: 60,
    color: "#C8CDD5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.teal,
      fontWeight: 600,
      marginBottom: 6
    }
  }, s.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 14,
      color: C.charcoal,
      lineHeight: 1.35,
      marginBottom: 8
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.muted
    }
  }, s.date), /*#__PURE__*/React.createElement(BtnReadMore, null, "Read more"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '48px auto 0',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 22,
      color: C.charcoal,
      marginBottom: 20
    }
  }, "Companies We Work With"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, CLIENTS.map(name => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      padding: '12px 20px',
      background: C.bgS,
      border: `1px solid ${C.borderS}`,
      borderRadius: 6,
      fontSize: 13,
      fontWeight: 600,
      color: C.muted
    }
  }, name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      marginTop: 48,
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 22,
      color: C.charcoal,
      marginBottom: 24
    }
  }, "Client testimonials"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      borderRadius: 8,
      padding: '20px 22px',
      border: `1px solid ${C.borderS}`,
      boxShadow: '0 1px 3px rgba(16,24,40,0.04)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: C.body,
      lineHeight: 1.7,
      marginBottom: 14,
      fontStyle: 'italic'
    }
  }, "\"", t.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: C.charcoal
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.teal,
      fontWeight: 500
    }
  }, t.org)))))));
}
window.HomePage = HomePage;

/* ── Shop Page ── */
function ShopPage({
  setPage,
  setSelectedProduct,
  onAddToCart
}) {
  const [search, setSearch] = React.useState('');
  const filtered = ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Home',
      page: 'home'
    }, {
      label: 'VR Headsets'
    }],
    onNavigate: setPage
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 24,
      color: C.charcoal
    }
  }, "VR Headsets ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: C.muted,
      fontWeight: 400
    }
  }, "(", filtered.length, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 36,
      borderRadius: 4,
      background: C.bgMuted,
      overflow: 'hidden',
      width: 220
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Search products\u2026",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      padding: '0 14px',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      color: '#171717',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: ["M21 21l-4.35-4.35", "M11 4a7 7 0 110 14 7 7 0 010-14z"],
    size: 16,
    color: "#A0A0AB",
    sw: 1.5
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 200,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: `1px solid ${C.borderS}`,
      borderRadius: 8,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 14,
      color: C.charcoal,
      marginBottom: 12,
      paddingBottom: 10,
      borderBottom: `1px solid ${C.borderS}`
    }
  }, "Brand"), ['Pico', 'Meta', 'HTC', 'Varjo', 'Sony', 'Apple'].map(b => /*#__PURE__*/React.createElement("label", {
    key: b,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '5px 0',
      cursor: 'pointer',
      fontSize: 13,
      color: C.body
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      accentColor: C.orange,
      cursor: 'pointer'
    }
  }), " ", b)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 14,
      color: C.charcoal,
      margin: '16px 0 12px',
      paddingBottom: 10,
      borderBottom: `1px solid ${C.borderS}`
    }
  }, "Categories"), ['Standalone VR', 'PC VR', 'Meta VR', 'Pico VR', 'HTC VR'].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      fontSize: 13,
      color: C.body,
      padding: '4px 0',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    onMouseEnter: e => e.currentTarget.style.color = C.teal,
    onMouseLeave: e => e.currentTarget.style.color = C.body
  }, c, " ", /*#__PURE__*/React.createElement(Icon, {
    d: "M9 18l6-6-6-6",
    size: 14,
    color: "currentColor",
    sw: 1.5
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      background: '#fff',
      border: `1px solid ${C.borderS}`,
      borderRadius: 8,
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 1px 3px rgba(16,24,40,0.04)',
      transition: 'box-shadow 0.15s'
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(16,24,40,0.10)',
    onMouseLeave: e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(16,24,40,0.04)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: 130,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onClick: () => {
      setSelectedProduct(p);
      setPage('product');
    }
  }, /*#__PURE__*/React.createElement(Headset, {
    size: 70,
    color: "#C8CDD5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: C.teal,
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, p.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 14,
      color: C.charcoal,
      lineHeight: 1.3
    },
    onClick: () => {
      setSelectedProduct(p);
      setPage('product');
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: C.charcoal,
      marginTop: 4
    }
  }, p.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 400,
      color: C.muted
    }
  }, "excl. VAT")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BtnPrimary, {
    small: true,
    onClick: () => onAddToCart(p)
  }, "Add to Cart"), /*#__PURE__*/React.createElement(BtnReadMore, {
    onClick: () => {
      setSelectedProduct(p);
      setPage('product');
    }
  }, "Details")))))))));
}
window.ShopPage = ShopPage;

/* ── Product Detail Page ── */
function ProductPage({
  product,
  onAddToCart,
  setPage
}) {
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  const [activeThumb, setActiveThumb] = React.useState(0);
  if (!product) return null;
  function handleAdd() {
    onAddToCart({
      ...product,
      qty
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }
  const tabLabels = ['Overview', 'Specifications', 'Accessories', 'Software', 'Related'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Home',
      page: 'home'
    }, {
      label: 'VR Headsets',
      page: 'shop'
    }, {
      label: product.name
    }],
    onNavigate: setPage
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      borderRadius: 10,
      border: `1px solid ${C.borderS}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 340,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Headset, {
    size: 160,
    color: "#BBBFC8"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setActiveThumb(i),
    style: {
      width: 72,
      height: 64,
      background: C.bg,
      borderRadius: 6,
      cursor: 'pointer',
      border: activeThumb === i ? `2px solid ${C.orange}` : `1px solid ${C.borderS}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Headset, {
    size: 36,
    color: "#C8CDD5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 64,
      background: C.bg,
      borderRadius: 6,
      cursor: 'pointer',
      border: `1px solid ${C.borderS}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 600,
      color: C.muted
    }
  }, "360\xB0"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: C.teal,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: 6
    }
  }, product.brand), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 26,
      color: C.charcoal,
      lineHeight: 1.25,
      marginBottom: 10
    }
  }, product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: C.charcoal,
      marginBottom: 4
    }
  }, product.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: C.muted
    }
  }, "excl. VAT")), /*#__PURE__*/React.createElement("ul", {
    style: {
      padding: '0 0 0 18px',
      margin: '12px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, (product.bullets || ['Official distributor', 'Fast delivery', 'Expert support']).map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14,
      color: C.body
    }
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: C.green,
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: "M20 6L9 17l-5-5",
    size: 14,
    color: C.green,
    sw: 2.5
  }), " In Stock"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bgS,
      border: `1px solid ${C.borderS}`,
      borderRadius: 8,
      padding: '14px 16px',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 14,
      color: C.charcoal,
      marginBottom: 10
    }
  }, "Services"), [{
    name: 'Installation Service Standalone VR',
    price: '€18 excl. VAT per device'
  }, {
    name: 'Business Support & VR Services – 1 Year',
    price: '€35 excl. VAT per device'
  }].map((s, i) => /*#__PURE__*/React.createElement("label", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      padding: '8px 0',
      borderTop: i > 0 ? `1px solid ${C.borderS}` : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      marginTop: 3,
      accentColor: C.orange,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: C.charcoal
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, s.price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 12,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(QuantitySelector, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(BtnPrimary, {
    onClick: handleAdd,
    full: true
  }, added ? '✓ Added!' : 'Add to Cart'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(BtnGhost, {
    teal: true
  }, /*#__PURE__*/React.createElement(Icon, {
    d: "M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.11 3h3",
    size: 16,
    color: C.teal
  }), "Talk to an expert"), /*#__PURE__*/React.createElement(BtnGhost, {
    teal: true
  }, /*#__PURE__*/React.createElement(Icon, {
    d: "M3 7a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7zM3 10h18M8 7V4a1 1 0 011-1h6a1 1 0 011 1v3",
    size: 16,
    color: C.teal
  }), "Book a trial")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      background: C.bg,
      borderRadius: 6,
      fontSize: 12,
      color: C.muted,
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Free shipping"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "30-day returns"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "2-year warranty"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Pay by invoice")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(PillTabs, {
    tabs: tabLabels,
    activeIndex: activeTab,
    onChange: setActiveTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0',
      fontSize: 14,
      color: C.body,
      lineHeight: 1.7,
      maxWidth: 740
    }
  }, activeTab === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 18,
      color: C.charcoal,
      marginBottom: 12
    }
  }, "Product Information"), /*#__PURE__*/React.createElement("p", null, "Designed for professional and enterprise use, this headset delivers an immersive mixed reality experience with high-resolution displays, advanced passthrough cameras, and enterprise-grade device management."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 14,
      color: C.charcoal,
      marginBottom: 8
    }
  }, "Pros"), ['Snapdragon XR2 Gen 2', '32MP color passthrough', 'Hand Tracking', 'Kiosk Mode', 'Wi-Fi 7', 'Android OS'].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 13,
      color: C.body,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.green,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "+"), " ", p))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 600,
      fontSize: 14,
      color: C.charcoal,
      marginBottom: 8
    }
  }, "Cons"), ['No integrated display port', 'No Eye Tracking'].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 13,
      color: C.body,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.red,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\u2212"), " ", p))))), activeTab === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 18,
      color: C.charcoal,
      marginBottom: 12
    }
  }, "Specifications"), [{
    section: 'Display & Optics',
    specs: [['Display Type', 'Micro-OLED'], ['Resolution', '1920×1080 per eye'], ['Refresh Rate', '120 Hz'], ['Field of View', '52° diagonal']]
  }, {
    section: 'Chipset & Connectivity',
    specs: [['Chipset', 'Snapdragon XR2 Gen 2'], ['RAM', '12GB'], ['Storage', '256GB'], ['Wi-Fi', 'Wi-Fi 7'], ['Bluetooth', '5.3']]
  }].map((group, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 0',
      borderBottom: `1px solid ${C.borderInput}`,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: gi === 0 ? "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" : "M4 4h16v16H4z",
    size: 18,
    color: C.teal
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: C.teal
    }
  }, group.section)), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, group.specs.map(([k, v], si) => /*#__PURE__*/React.createElement("tr", {
    key: si
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 14,
      padding: '8px 0',
      borderBottom: `1px solid #F2F2F2`,
      fontWeight: 500,
      color: C.charcoal,
      width: '45%'
    }
  }, k), /*#__PURE__*/React.createElement("td", {
    style: {
      fontSize: 14,
      padding: '8px 0',
      borderBottom: `1px solid #F2F2F2`,
      color: C.body
    }
  }, v)))))))), activeTab > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0',
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement(Headset, {
    size: 60,
    color: "#D0D5DD"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12
    }
  }, "This section is a placeholder.")))));
}
window.ProductPage = ProductPage;

/* ── Cart Page ── */
function CartPage({
  cart,
  onRemove,
  setPage
}) {
  const total = cart.reduce((acc, item) => {
    const n = parseFloat((item.price || '0').replace(/[^0-9]/g, ''));
    return acc + (isNaN(n) ? 0 : n) * (item.qty || 1);
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Home',
      page: 'home'
    }, {
      label: 'My Cart'
    }],
    onNavigate: setPage
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 24,
      color: C.charcoal,
      marginBottom: 24
    }
  }, "My Cart (", cart.length, ")"), cart.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0',
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement(Headset, {
    size: 80,
    color: "#D0D5DD"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      marginBottom: 20,
      fontSize: 15
    }
  }, "Your cart is empty."), /*#__PURE__*/React.createElement(BtnPrimary, {
    onClick: () => setPage('shop')
  }, "Browse Products")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, cart.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: `0.53px solid #E5E7EB`,
      borderRadius: 4,
      padding: 16,
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      boxShadow: '0 0.53px 1.06px rgba(0,0,0,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 84,
      background: C.bg,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Headset, {
    size: 48,
    color: "#C8CDD5"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: C.charcoal
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(QuantitySelector, {
    value: item.qty || 1,
    onChange: v => {
      // update qty in-place (simplified)
    },
    small: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i),
    style: {
      width: 28,
      height: 28,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6",
    size: 18,
    color: C.deleteRed
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 500,
      fontSize: 20,
      color: C.charcoal
    }
  }, item.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#696969',
      letterSpacing: '-0.31px'
    }
  }, "excl. VAT"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: `1px solid ${C.borderS}`,
      borderRadius: 8,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Poppins,sans-serif',
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 14,
      paddingBottom: 12,
      borderBottom: `1px solid ${C.borderS}`
    }
  }, "Order Summary"), [['Subtotal', `€${total}`], ['Shipping', 'Free'], ['VAT (21%)', 'Included']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: C.body,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: l === 'Shipping' ? 600 : 400,
      color: l === 'Shipping' ? C.green : undefined
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700,
      fontSize: 15,
      paddingTop: 12,
      borderTop: `1px solid ${C.borderS}`,
      marginBottom: 16,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "\u20AC", total)), /*#__PURE__*/React.createElement(BtnPrimary, {
    full: true
  }, "Proceed to Checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(BtnText, {
    onClick: () => setPage('shop')
  }, "Continue Shopping")))));
}
window.CartPage = CartPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages.jsx", error: String((e && e.message) || e) }); }

})();
