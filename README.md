# Portfolio

Personal portfolio site for Forrest Lasiter — IT professional & homelab engineer.
Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing your content

**You only need to edit one file:** [`src/data/profile.ts`](src/data/profile.ts).
Change the text, add experience/projects, and update your links there. Anything
marked `// TODO` is a placeholder waiting for real details.

To add a downloadable résumé: drop a `resume.pdf` into the `public/` folder and
set `resumePdf: '/resume.pdf'` in `src/data/profile.ts`.

## Running it locally

```bash
npm install      # first time only
npm run dev      # start a local preview at http://localhost:4321
```

```bash
npm run build    # produce the static site in dist/
npm run preview  # preview the production build
```

## Publishing (when you're ready)

The repo is **private** while you build it up. The site does NOT go public until
you do both of these:

1. In `astro.config.mjs`, set `site` and `base` to match your repo (instructions
   are in the comments of that file).
2. On GitHub: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.

After that, every push to `main` auto-builds and deploys via
`.github/workflows/deploy.yml`.

> Note: GitHub Pages serves a **public** website. Publishing Pages from a private
> repo requires a paid GitHub plan. The simplest free path is to make the repo
> public at the moment you're ready to share it.
