# Pathak & Associates – daily Instagram posts

Daily Supreme Court / High Court judgment carousels for @pathakandassociates.

- `template.html` – the approved 4-slide design (1080×1350). Slides render with `?s=1..4`.
- `assets/` – crest logo and royalty-free (Unsplash) legal photos.
- `posts/YYYY-MM-DD-slug/` – one folder per day: the slide HTML, `slide-1..4.jpg`, and the caption `.txt`.
- `render.mjs` – `npm install && npx playwright install --with-deps chromium && node render.mjs posts/<folder>/<file>.html`

For general information only; not legal advice or a solicitation of work.
