import { z, defineCollection } from 'astro:content';

const BlogPostCollection = defineCollection({
  schema: z.object({
    title: z.string().max(100).min(1),
    description: z.string().max(200).min(10),
    tags: z.array(z.string()).max(5).min(1),
    date: z.string().regex(/^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/),
    published: z.boolean()
  })
});

export const collections = {
  posts: BlogPostCollection
};
