import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Note: `slug` is reserved by Astro for slug generation and must NOT appear in the schema.
  // We still allow `slug` in frontmatter via `.passthrough()` and read it at runtime.
  schema: z
    .object({
      title: z.string(),
      date: z.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      heroImage: z.string().optional()
    })
    .passthrough()
});

export const collections = { blog };
