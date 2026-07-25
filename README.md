# CHAOR MA KOK — Dubbing Studio website

Static marketing site for CHAOR MA KOK (เชาว์มะกอก), a Thai dubbing studio since 2001.
Plain HTML/CSS/JS — no build step, no dependencies.

## Pages
| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, showreel, services, workflow, About/CEO previews, contact |
| `about.html` | Company story, missions, team numbers, studio security |
| `ceo.html` | Founder profile + year-by-year directing credits |
| `chaormakok-dubbing-studio.html` | Redirect stub → `index.html` (keeps the old link alive) |

Shared: `site.css`, `site.js` (posters, 3D drum, TH/EN i18n), `assets/` (images).

## Run locally
Any static server, e.g.:

```bash
python -m http.server 8930
```

then open http://localhost:8930

## Deploy
Fully static — drop the folder on any static host (Vercel, Netlify, Cloudflare Pages,
or upload to the existing hosting). No environment variables or build command.

> SEO tags (`sitemap.xml`, canonical, Open Graph) are hard-coded to
> `https://chaormakok.com`. Update them if the final domain differs.
