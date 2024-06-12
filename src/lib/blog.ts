import { getCollection } from 'astro:content';

export interface Blog {
  // BlogPostCollection
  title: string;
  description: string;
  tags: string[];
  date: string;
  // Additional properties
  slug: string;
  body: string;
}

export async function getAllPosts(): Promise<Blog[]> {
  const posts = await getCollection('posts'); // 設定ファイルで指定したキーを設定
  return (
    posts
      // @ts-ignore
      .map((blog) => ({ ...blog.data, slug: blog.slug, body: blog.body }))
      // @ts-ignore
      .sort((a, z) => new Date(z.date).getTime() - new Date(a.date).getTime())
  );
}
