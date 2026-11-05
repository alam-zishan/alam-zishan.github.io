// Edit this file to change your bio, links, and experience.

export const profile = {
  name: 'Alam Zishan',
  handle: 'az03',
  title: 'Platform Engineer',
  headline: 'Platform Engineer @ NVIDIA',
  bio: 'Building internal infrastructure tooling & leading agentic vulnerability scans across CUDA. Previously did driver releases.',
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
  summary?: string;
  points?: string[];
};

// Source: LinkedIn (linkedin.com/in/az03). Add bullets in `points`.
export const experience: Job[] = [
  {
    start: 'Jan 2025',
    end: 'now',
    role: 'Platform Engineer',
    company: 'NVIDIA',
    summary: 'Compute SW',
    points: [],
  },
  {
    start: 'May 2024',
    end: 'Aug 2024',
    role: 'Technical Program Manager Intern',
    company: 'NVIDIA',
    summary: 'Compute Software',
    points: [],
  },
  {
    start: 'Aug 2023',
    end: 'May 2024',
    role: 'Software Engineer Intern',
    company: 'Allegiant',
    summary: 'Mad Dogs Dev Team.',
    points: [],
  },
  {
    start: 'Jun 2023',
    end: 'Aug 2023',
    role: 'Civic Digital Fellow',
    company: 'Coding it Forward',
    points: [],
  },
  {
    start: 'May 2023',
    end: 'Aug 2023',
    role: 'Software Engineer Fellow',
    company: 'U.S. Census Bureau',
    summary: 'Commodity Flow Survey Team.',
    points: [],
  },
];

export const skills: string[] = [];
