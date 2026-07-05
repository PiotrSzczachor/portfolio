# Piotr Szcząchor — Portfolio website

Standalone static website — no framework, no build step, no dependencies.
Host it anywhere that serves static files (any web hosting, GitHub Pages,
Cloudflare Pages, Netlify, S3, nginx…).

## Files

```
index.html    — all content and markup (English text lives here)
styles.css    — all styling; design tokens are CSS variables in :root
script.js     — EN/PL language toggle (Polish dictionary + localStorage)
assets/       — photo, company/university logos, CV PDF
```

## How things work

- **Design tokens** — colors and fonts are CSS custom properties at the top
  of `styles.css` (`--accent`, `--bg`, `--surface`, …). Change the accent
  color in one place.
- **Language toggle** — English is the source text in `index.html`. Every
  translatable element has a `data-i18n="key"` attribute; `script.js`
  captures the English on load and swaps to the Polish strings from the
  `PL` dictionary when PL is selected. Choice persists in `localStorage`.
  To add/change a translation: add `data-i18n` to the element and a
  matching key to `PL`.
- **Responsive** — layout uses flex/grid with `auto-fit` columns and
  `clamp()` sizes; the only media query hides nav links below 820px.
- **SEO** — meta description/keywords, Open Graph tags, and a JSON-LD
  `Person` schema in `<head>` (update the `url` field when you pick your
  final domain).

## Adding a portfolio entry

Copy the `<a class="card card--hover portfolio-card">` block in the
`#portfolio` section, change logo/name/description/URL, and add PL strings
for its `data-i18n` keys.

## Fonts

Loaded from Google Fonts (Space Grotesk + IBM Plex Mono). For a fully
offline/self-hosted setup, download the WOFF2 files and replace the
`<link>` with `@font-face` rules.
