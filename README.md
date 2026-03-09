# jonnyarndt.github.io

Personal portfolio site — [jonnyarndt.github.io](https://jonnyarndt.github.io)

Built with **React + Vite + Tailwind CSS**, deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Updating Content

All site content (bio, skills, capabilities, certifications) lives in a single file:

```
src/data/content.js
```

Edit that file — no need to touch any component code.

## Deployment

Pushing to `main` automatically triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys it to GitHub Pages.

> **Note:** In your repository settings, set **Pages → Source** to **GitHub Actions**.