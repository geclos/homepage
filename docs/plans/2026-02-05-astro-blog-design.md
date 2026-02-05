# Astro Blog + Datocat-Inspired Design

## Goals
- Add an MDX-based blog where new posts are added by dropping `.mdx` files into the repo.
- Keep the homepage minimal and place the blog under `/blog`.
- Mirror the visual language from Datocat: warm neutral background, refined serif headlines, restrained sans body text, thin separators, generous whitespace.
- Use Tailwind CSS for the design system and keep the site static and fast.

## Recommended Approach
- Use Astro with Content Collections + MDX for strong frontmatter validation and a clean blog index.
- Content lives in `src/content/blog/*.mdx`.
- Required frontmatter: `title`, `date`.
- Optional frontmatter: `description`, `tags`, `heroImage`, `slug`.
- Routes:
  - `/` minimal homepage
  - `/blog` blog index
  - `/blog/<slug>` individual posts

## Architecture
- `astro.config.mjs` with `@astrojs/mdx` and `@astrojs/tailwind`.
- `src/content/config.ts` defines the blog collection schema (Zod).
- `src/pages/blog/[slug].astro` generates static pages from the collection.
- `src/pages/blog/index.astro` lists posts, sorted by date.
- Layouts:
  - `BaseLayout.astro` for global head, fonts, and shell.
  - `BlogPostLayout.astro` for post-specific layout and metadata.

## Data Flow
- `getCollection('blog')` loads entries at build time.
- Blog index sorts by `date` descending.
- Slug resolution: `data.slug ?? entry.slug` (short, stable, SEO-friendly URLs).
- MDX content is rendered via `entry.render()` within the post layout.

## Design System
- Tailwind theme tokens for:
  - Warm off-white background
  - Ink-black text
  - Muted secondary text
  - Subtle border lines
  - One accent color for links and highlights
- Typography:
  - Serif display font for headings
  - Compact sans for body and UI
- Layout style:
  - Minimal homepage with a left-aligned editorial feel
  - Blog index with thin separators and small metadata labels
  - Blog posts with a large serif title and relaxed reading width

## Error Handling
- Frontmatter schema validation fails builds when required fields are missing or invalid.
- Unknown blog slugs return 404 at runtime.
- Optional fields render conditionally to avoid empty UI elements.

## Testing
- `astro check` and `astro build` to validate MDX and schema.
- Manual QA across homepage, blog index, and a sample post.
