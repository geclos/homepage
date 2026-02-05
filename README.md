# Homepage

Astro-based personal site with an MDX blog.

## Getting started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

## Git hooks

This repo uses a `pre-push` hook (via Husky) to run `npm run check` + `npm run build` before pushing.

To bypass in a pinch:
- `git push --no-verify`
- `HUSKY=0 git push`

## Add a blog post

Add a new `.mdx` file to `src/content/blog` with frontmatter:

```mdx
---
title: "Post title"
date: 2026-02-05
description: "Optional summary"
tags: ["optional", "tags"]
heroImage: "/img/hero.jpg"
slug: "optional-custom-slug"
---

Your content here.
```
