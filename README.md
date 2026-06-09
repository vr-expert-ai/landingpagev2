# AI Glasses for Business — Landing Page

Exported from [Claude](https://claude.ai/design) as an HTML/CSS/JS prototype. The
page is a single-file React app that loads React + Babel from a CDN and transpiles
its JSX (`src/*.jsx`) in the browser.

## Project layout

```
ai-glasses-work/ai-glass-landing-page/
├── README.md                       # handoff notes for a coding agent
├── chats/                          # the design conversation (intent lives here)
└── project/
    ├── AI Glasses for Business.html   # entry point
    ├── src/*.jsx                       # React components (Babel-transpiled in-browser)
    ├── ds/                             # design system (fonts, colors, type)
    ├── assets/                         # images + hero video
    └── uploads/                        # source material (plan doc, original video)
```

## Running it locally

The page **must be served over HTTP** — opening the `.html` directly with
`file://` will not work, because the browser blocks loading the JSX modules and
fetching the hero video.

```powershell
cd "ai-glasses-work/ai-glass-landing-page/project"
python -m http.server 8000
# then open http://localhost:8000/AI%20Glasses%20for%20Business.html
```

(Any static server works — `npx serve`, etc.)

## Notes

- **CDN dependencies:** React/ReactDOM are the *development* builds and Babel
  transpiles in the browser. That's fine for a prototype/demo but should be
  pre-built (Vite/Next, etc.) before production.
- **Hero video:** the hero looks for `assets/glasses-spin.mp4`; this repo wires
  the uploaded clip to that path so the scroll-scrubbed hero works.
- **Hotspot image:** the "What are The Applications?" section references
  `assets/hero-ai-glasses.png`, which was not included in the export. Until a
  real image is supplied it falls back to a dark panel with the hotspot pins.
