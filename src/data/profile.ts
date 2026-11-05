// Edit this file to change your bio, links, and experience.

export const profile = {
  name: 'Alam Zishan',
  handle: 'az03',
  title: 'Platform Engineer',
  bio: 'Platform engineer at NVIDIA. I build internal infrastructure tooling and lead AI-assisted vulnerability scanning across the CUDA org. Outside work, I teach agents to do odd jobs and lift heavy things.',
  location: '', // e.g. 'San Jose, CA'
  links: [
    { label: 'github', href: 'https://github.com/alam-zishan' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/az03' },
    // { label: 'email', href: 'mailto:you@example.com' },
  ],
};

export type Job = {
  start: string;
  end: string;
  role: string;
  company: string;
  summary: string;
  points?: string[];
};

// TODO: replace placeholders with your real history.
export const experience: Job[] = [
  {
    start: '20XX',
    end: 'now',
    role: 'Platform Engineer',
    company: 'NVIDIA',
    summary: 'Infrastructure tooling, release platforms, and AI-assisted vulnerability scanning for CUDA.',
    points: [],
  },
  {
    start: '20XX',
    end: '20XX',
    role: 'Previous role',
    company: 'Company',
    summary: 'One line on what you shipped.',
    points: [],
  },
];

export const skills: string[] = [];
