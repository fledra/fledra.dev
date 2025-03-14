import { defineContentConfig, defineCollection, z } from '@nuxt/content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  date: z.date().optional(),
});

const projectSchema = commonSchema.extend({
  stack: z.array(z.string()).nonempty(),
  deployment: z.string().url().optional(),
});

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
      schema: commonSchema,
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: projectSchema,
    }),
    articles: defineCollection({
      type: 'page',
      source: 'articles/**/*.md',
      schema: commonSchema,
    }),
  },
});
