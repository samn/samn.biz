# samn.biz

Personal site for Sam Neubardt, built with [Eleventy (11ty)](https://www.11ty.dev/) v3.

## Commands

```bash
npm run dev          # Local dev server with hot reload
npm run build        # Production build → _site/
npm run lint         # ESLint + Prettier check
npm run lint:fix     # Auto-fix lint issues
npm run format       # Prettier format all files
npm test             # Playwright integration tests (starts dev server automatically)
```

## Stack

- **SSG**: Eleventy 3 (`eleventy.config.mjs`)
- **Templates**: Nunjucks (`.njk`) for layouts and pages, Markdown for content
- **Styling**: Plain CSS (`src/css/style.css`) — no framework
- **Tests**: Playwright (`tests/site.spec.ts`)
- **Hosting**: Cloudflare Pages (static deploy from `_site/`)
- **CI/CD**: GitHub Actions for lint/test; Cloudflare Pages GitHub integration for deploys
- **Node**: 22 (see `mise.toml`)

## Project structure

```
src/
├── _data/site.json          # Global site metadata (title)
├── _includes/
│   ├── base.njk             # Base HTML layout (header, footer, meta)
│   └── post.njk             # Layout for individual posts/recipes
├── css/style.css            # All styles
├── recipes/                 # Recipe markdown content
│   ├── recipes.json         # Directory data: sets layout + tags for all recipes
│   ├── corn-biscotti.md
│   ├── pie-crust.md
│   └── pound-cake.md
├── index.njk                # Homepage — lists all content
├── about.njk                # About page
├── recipes.njk              # Recipes listing page
├── posts.njk                # Posts listing page
└── 404.njk                  # 404 page (→ /404.html for Cloudflare Pages)
```

## Content

- **Recipes** go in `src/recipes/` as `.md` files with `title` and `date` frontmatter. The directory data file (`recipes.json`) auto-applies the `post.njk` layout and `recipes`/`content` tags.
- **Posts** would go in a `src/posts/` directory with similar structure.
- Collections are tag-based: `collections.content` = all content, `collections.recipes` = recipes only.

## Design

- Rebeccapurple header with white navigation links
- Max-width 960px content area
- 18px base font size, Georgia serif body font
- Footer with copyright year and Creative Commons CC-BY-NC-SA-4.0 badge

## Deployment

Cloudflare Pages project `samn-biz` with GitHub integration (auto-deploys on push). Custom domain: `www2.samn.biz`.
