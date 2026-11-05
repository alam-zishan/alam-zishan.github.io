# az03-site

Personal site. Astro static build, deployed to GitHub Pages. No server and no database.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Edit content

| What | Where |
|---|---|
| Bio, links, experience, skills | `src/data/profile.ts` |
| Projects (cards) | `src/data/projects.json` |
| Colors | top of `src/styles/global.css` |
| Blog posts | `src/pages/writing/<slug>.md` |
| Resume PDF (optional) | `public/resume.pdf`, then uncomment the link in `src/pages/resume.astro` |

### Project fields

- `status`: `live`, `wip`, `done`, or `paused`.
- `stat`: short live line, such as `badges 3/8 · 41h`. Empty hides it.
- `progress`: `0`–`100` for a progress bar, or `null` to hide it.
- `points`: bullets that show on the Projects page.

### New post

```md
---
layout: ../../layouts/Post.astro
title: Teaching an agent to play Pokémon
date: 2026-11-04
summary: One line for previews.
draft: false
---

Text here.
```

## Live data from the Mac mini

Agents update `src/data/projects.json`. Then `scripts/push-data.sh` commits and pushes it, and GitHub Actions redeploys.
Use a fine-grained token or a deploy key with write access to this repo only.

## Deploy

Push to `main`. In the repo, go to Settings → Pages and set Source to **GitHub Actions**.
