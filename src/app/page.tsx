'use client';

import { useState } from 'react';
import { posts, tools, users, type Post } from '@/data/posts';

export default function Home() {
  const [toolFilter, setToolFilter] = useState<string | null>(null);
  const [tried, setTried] = useState<Set<number>>(new Set());

  const toolList = Object.values(tools);
  const filtered = toolFilter ? posts.filter((p) => p.tools.includes(toolFilter)) : posts;

  const toggleTried = (id: number) => {
    setTried((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-bg border-b border-line">
        <div className="max-w-[760px] mx-auto px-6 py-4 flex items-center justify-between">
          <a className="font-serif font-bold text-2xl tracking-tight inline-flex items-baseline gap-0.5 cursor-pointer">
            nook<span className="text-accent text-sm font-medium tracking-wide">.ai</span>
          </a>
          <nav className="flex gap-2 items-center font-sans">
            <button className="text-sm font-medium px-3.5 py-2 rounded-md border border-line hover:bg-chip transition">
              Entrar
            </button>
            <button className="text-sm font-medium px-3.5 py-2 rounded-md bg-ink text-bg hover:bg-neutral-800 transition">
              + Compartilhar
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-[760px] mx-auto px-6 pt-10 pb-20">
        {/* Hero */}
        <section className="text-center pt-6 pb-10 border-b border-line mb-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-3">
            seu cantinho de descobertas com IA
          </h1>
          <p className="text-lg text-muted max-w-md mx-auto">
            workflows, prompts e experimentos que outras pessoas testaram. tente, adapte, conta como foi.
          </p>
        </section>

        {/* Tool filter */}
        <section className="mb-6">
          <div className="font-sans text-[11px] uppercase tracking-wider text-muted font-semibold mb-2">
            Ferramenta
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <Chip active={toolFilter === null} onClick={() => setToolFilter(null)}>
              Todas
            </Chip>
            {toolList.map((t) => (
              <Chip key={t.id} active={toolFilter === t.id} onClick={() => setToolFilter(t.id)}>
                <span>{t.icon}</span> {t.name}
              </Chip>
            ))}
          </div>
        </section>

        {/* Category filter */}
        <section className="mb-6">
          <div className="font-sans text-[11px] uppercase tracking-wider text-muted font-semibold mb-2">
            Categoria
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <Chip active>Em alta</Chip>
            <Chip>Novos</Chip>
            <Chip>Mais testados</Chip>
            <Chip>Workflow</Chip>
            <Chip>Prompt</Chip>
            <Chip>Áudio</Chip>
            <Chip>Estudo</Chip>
          </div>
        </section>

        {/* Posts */}
        <section>
          {filtered.length === 0 ? (
            <p className="text-muted text-center py-8 font-sans">
              Nenhum post com essa ferramenta ainda. Que tal ser o primeiro? 🌱
            </p>
          ) : (
            filtered.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                tried={tried.has(post.id)}
                onToggleTried={() => toggleTried(post.id)}
                onSelectTool={setToolFilter}
              />
            ))
          )}
        </section>

        <footer className="mt-20 pt-8 border-t border-line text-center font-sans text-sm text-muted">
          nook.ai · feito com cuidado · em construção
        </footer>
      </main>
    </div>
  );
}

function Chip({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-sans text-[13px] px-3 py-1.5 rounded-full whitespace-nowrap border transition inline-flex items-center gap-1 ${
        active
          ? 'bg-ink text-bg border-ink'
          : 'bg-chip text-ink border-transparent hover:border-line'
      }`}
    >
      {children}
    </button>
  );
}

function PostCard({
  post,
  tried,
  onToggleTried,
  onSelectTool,
}: {
  post: Post;
  tried: boolean;
  onToggleTried: () => void;
  onSelectTool: (t: string) => void;
}) {
  const u = users[post.author];
  const tryCount = post.tries.length + (tried ? 1 : 0);

  return (
    <article className="flex gap-4 py-6 border-b border-line">
      {/* Tried column */}
      <div className="flex-shrink-0 w-16 flex flex-col items-center gap-1 pt-1">
        <button
          onClick={onToggleTried}
          className={`w-14 h-14 rounded-xl border flex flex-col items-center justify-center gap-px transition ${
            tried
              ? 'bg-tried-soft border-tried text-tried'
              : 'bg-bg border-line hover:border-tried'
          }`}
        >
          <span className="text-lg">{tried ? '✓' : '✋'}</span>
          <span className="font-sans text-[13px] font-semibold">{tryCount}</span>
        </button>
        <span className="font-sans text-[10px] text-muted uppercase tracking-wider font-semibold">
          tentei
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <div className="font-sans text-[13px] text-muted mb-1.5 flex flex-wrap gap-1.5 items-center">
          <a className="text-ink font-medium hover:text-accent cursor-pointer">{u.name}</a>
          <span>·</span>
          {post.tools.map((t) => (
            <button
              key={t}
              onClick={() => onSelectTool(t)}
              className="inline-flex items-center gap-1 bg-accent-soft text-accent px-2 py-0.5 rounded-full text-xs font-medium hover:bg-accent hover:text-white transition"
            >
              {tools[t].icon} {tools[t].name}
            </button>
          ))}
          <span className="bg-chip text-ink px-2 py-0.5 rounded-full text-[11px] font-medium">
            {post.tag}
          </span>
          <span> · {post.date}</span>
        </div>
        <h3 className="text-xl font-semibold leading-snug tracking-tight mb-1.5">{post.title}</h3>
        <p className="text-muted text-[15px] leading-snug line-clamp-2">{post.excerpt}</p>
        <div className="font-sans text-[13px] text-muted mt-2.5 flex gap-4 items-center">
          <span>↗ compartilhar</span>
          <span>🔖 salvar</span>
        </div>
      </div>
    </article>
  );
}
