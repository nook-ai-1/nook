import { createSupabaseClient } from '@/lib/supabase';
import type { Post } from '@/data/posts';
import Feed from './Feed';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      id,
      author_id,
      title,
      excerpt,
      content,
      tools,
      tag,
      created_at,
      author:profiles ( id, username, display_name ),
      tries ( id )
    `
    )
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar posts:', error);
  }

  const posts: Post[] = (data ?? []).map((p: any) => ({
    id: p.id,
    author_id: p.author_id,
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    tools: p.tools ?? [],
    tag: p.tag,
    created_at: p.created_at,
    author: p.author,
    tries_count: Array.isArray(p.tries) ? p.tries.length : 0,
  }));

  return <Feed initialPosts={posts} />;
}
