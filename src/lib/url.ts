// Join a site path with the configured base, so links work on
// both https://user.github.io/ and https://user.github.io/repo/.
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}

export type Project = {
  slug: string;
  name: string;
  status: 'live' | 'wip' | 'done' | 'paused';
  summary: string;
  stat?: string;
  progress?: number | null; // 0..100
  points?: string[];
  link?: string;
};
