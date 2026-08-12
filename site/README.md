# Personal Portfolio

A legacy static portfolio built with HTML, Sass, and a small JavaScript interaction layer. The repository is kept as a working reference for the original portfolio implementation rather than being reshaped into a modern framework project.

## Structure

- `index.html` — portfolio landing page.
- `about.html` — profile/about page.
- `single.html` — project detail page.
- `assets/js/app.js` — responsive navigation and decorative particle behavior.
- `assets/sass/` — maintained Sass source, organized into shared foundations, active layout styles, and page-specific styles.
- `dest/` — generated CSS/image output from the Gulp build.
- `js/` — generated/minified JavaScript output.
- `gulpfile.js` — build, asset-copy, cache-busting, and watch tasks.
- `docs/` — repository notes and supporting artwork.

## Development

Install dependencies and build the generated assets:

```bash
npm install
npm run build
```

The default Gulp task performs the build and then watches the authored Sass, JavaScript, and image sources.

## Source ownership

Edit source files under `assets/`. Treat `dest/`, `js/`, compiled CSS, and source maps as generated output unless the build pipeline explicitly requires otherwise. The Sass tree intentionally contains only partials that own real styles; empty page and layout placeholders have been removed.

## Maintenance notes

The HTML pages keep their original route and asset contracts. Refactors should preserve those public paths unless all linked pages and build outputs are migrated together.

Repository-specific documentation should be maintained by contributors. Automated README rewriting, generated repository reports, and editor-specific workspace files are not part of the application architecture.
