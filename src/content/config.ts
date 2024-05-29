import { z, defineCollection } from 'astro:content';

const BlogPostCollection = defineCollection({
  schema: z.object({
    title: z.string().max(100).min(1),
    tags: z.array(z.string()).max(5).min(1),
    date: z.string().regex(/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/)
  })
});

export const collections = {
  posts: BlogPostCollection
};
