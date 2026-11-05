// Posts live in src/pages/writing/*.md. Each needs frontmatter:
//   ---
//   layout: ../../layouts/Post.astro
//   title: My post
//   date: 2026-11-04
//   draft: false
//   ---

type PostModule = {
  frontmatter: { title: string; date: string; draft?: boolean; summary?: string };
  url?: string;
};

export function getPosts() {
  const mods = import.meta.glob<PostModule>('../pages/writing/*.md', { eager: true });
  return Object.values(mods)
    .filter((m) => !m.frontmatter.draft && m.url)
    .map((m) => ({ ...m.frontmatter, url: m.url as string, date: new Date(m.frontmatter.date) }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function fmtDate(d: Date) {
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
