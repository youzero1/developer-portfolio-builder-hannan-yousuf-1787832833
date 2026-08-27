import type {
  CredentialEntry,
  ExperienceEntry,
  Profile,
  Project,
  SkillGroup,
  Testimonial,
} from '@/types/portfolio';

/**
 * Everything written on the site lives here.
 * Replace the placeholder values below with your real details.
 */
export const profile: Profile = {
  name: 'John Doe',
  roles: [
    'Full-Stack Developer',
    'React & TypeScript Specialist',
    'API Architect',
    'Cloud & DevOps Tinkerer',
  ],
  tagline:
    'I design and ship end-to-end web products — clean interfaces on the front, dependable APIs and data models underneath.',
  location: 'Berlin, Germany · Remote friendly',
  availability: 'Open to new projects',
  email: 'hello@example.com',
  focus: ['Product engineering', 'Design systems', 'API & data modelling'],
  yearsExperience: 7,
  projectsShipped: 34,
  technologies: 28,
  bio: [
    'I am a full-stack developer with seven years of experience turning rough product ideas into software people actually use. Most of my work sits where interface and infrastructure meet: component libraries and typed APIs, dashboards backed by carefully designed schemas, and the CI pipelines that keep it all shippable.',
    'On the front end I live in React and TypeScript, with a strong bias toward accessible markup, sensible state management, and design systems that keep teams consistent. On the back end I build services in Node and Python, model relational data properly, and treat observability as part of the feature rather than an afterthought.',
    'I care about the unglamorous parts — migrations that do not lose data, error states that explain themselves, and documentation the next developer can follow. I like small teams, tight feedback loops, and shipping in weeks rather than quarters.',
  ],
  currently:
    'Currently building internal developer tooling and mentoring two junior engineers.',
  socials: [
    { label: 'GitHub', href: 'https://github.com', handle: '@johndoe', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com', handle: '/in/johndoe', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:hello@example.com', handle: 'hello@example.com', icon: 'mail' },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    caption: 'Interfaces that stay fast and accessible as they grow.',
    glyph: '</>',
    skills: [
      'TypeScript',
      'React',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'Framer Motion',
      'Testing Library',
      'Storybook',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    caption: 'Typed, documented APIs with predictable failure modes.',
    glyph: '{ }',
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'Python',
      'FastAPI',
      'REST',
      'GraphQL',
      'tRPC',
      'WebSockets',
      'Zod',
    ],
  },
  {
    id: 'data',
    title: 'Database & Data',
    caption: 'Schemas designed once, migrated safely, queried efficiently.',
    glyph: '=>',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'MongoDB',
      'Redis',
      'Prisma',
      'Drizzle',
      'Supabase',
      'Elasticsearch',
    ],
  },
  {
    id: 'tooling',
    title: 'DevOps & Tooling',
    caption: 'Automated pipelines so releases are boring on purpose.',
    glyph: '$_',
    skills: [
      'Docker',
      'GitHub Actions',
      'AWS',
      'Vercel',
      'Terraform',
      'Nginx',
      'Sentry',
      'Grafana',
      'Playwright',
      'Git',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'atlas',
    title: 'Atlas Analytics',
    role: 'Lead full-stack developer',
    summary:
      'A self-serve analytics dashboard where product teams build funnels and cohort reports without writing SQL.',
    highlights: [
      'Query builder compiling visual rules into parameterised SQL',
      'Cut median dashboard load from 4.1s to 900ms with cursor pagination and caching',
      'Row-level permissions shared across API and UI from one policy definition',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    featured: true,
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    cover: ['#34d399', '#0ea5e9'],
    year: '2024',
  },
  {
    id: 'shipyard',
    title: 'Shipyard CI',
    role: 'Backend & infrastructure',
    summary:
      'A lightweight continuous-delivery service that runs containerised build pipelines and streams live logs.',
    highlights: [
      'Job scheduler handling 1.2k concurrent container builds',
      'Log streaming over WebSockets with replay from object storage',
      'Infrastructure defined in Terraform and reproducible per environment',
    ],
    tech: ['Node.js', 'Docker', 'AWS', 'Terraform', 'PostgreSQL', 'WebSockets'],
    featured: true,
    sourceUrl: 'https://github.com',
    cover: ['#22d3ee', '#6366f1'],
    year: '2023',
  },
  {
    id: 'ledgerlite',
    title: 'LedgerLite',
    role: 'Full-stack developer',
    summary:
      'Invoicing and expense tracking for freelancers, with recurring billing and multi-currency reporting.',
    highlights: [
      'Double-entry data model with immutable audit trail',
      'Stripe billing plus PDF invoice generation queued in the background',
      'Offline-first entry capture that syncs when the connection returns',
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://example.com',
    cover: ['#f59e0b', '#ef4444'],
    year: '2023',
  },
  {
    id: 'northstar',
    title: 'Northstar Design System',
    role: 'Frontend architect',
    summary:
      'An accessible component library and theming layer adopted by six product squads across a company.',
    highlights: [
      '48 components audited against WCAG 2.2 AA',
      'Token pipeline generating CSS variables and native theme files',
      'Visual regression suite catching regressions before review',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Playwright'],
    cover: ['#a78bfa', '#ec4899'],
    year: '2022',
  },
  {
    id: 'harbor',
    title: 'Harbor Realtime Chat',
    role: 'Full-stack developer',
    summary:
      'Team messaging with threaded conversations, presence, and searchable history across millions of messages.',
    highlights: [
      'Fan-out delivery with Redis pub/sub and per-room backpressure',
      'Full-text search over 8M messages with sub-200ms queries',
      'End-to-end tests covering reconnect and message-ordering edge cases',
    ],
    tech: ['Node.js', 'React', 'Redis', 'Elasticsearch', 'WebSockets', 'Docker'],
    sourceUrl: 'https://github.com',
    cover: ['#38bdf8', '#34d399'],
    year: '2022',
  },
  {
    id: 'orchard',
    title: 'Orchard CMS',
    role: 'Solo developer',
    summary:
      'A headless content platform with a block editor, scheduled publishing, and typed content APIs.',
    highlights: [
      'Schema-driven editor generating forms from content models',
      'GraphQL layer with per-field caching and preview tokens',
      'One-command Docker deployment for self-hosting',
    ],
    tech: ['TypeScript', 'GraphQL', 'NestJS', 'MongoDB', 'Next.js'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    cover: ['#4ade80', '#14b8a6'],
    year: '2021',
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack Developer',
    company: 'Northwind Labs',
    location: 'Berlin · Hybrid',
    start: '2022',
    end: 'Present',
    achievements: [
      'Led the rebuild of the customer dashboard, lifting weekly active usage by 38%',
      'Introduced a typed API contract shared by web, mobile, and internal tools',
      'Reduced cloud spend 24% by right-sizing services and adding caching layers',
      'Mentored four engineers through code review and pairing sessions',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Developer',
    company: 'Beacon Digital',
    location: 'Remote',
    start: '2020',
    end: '2022',
    achievements: [
      'Shipped twelve client products from discovery through launch',
      'Built the shared component library used across every client project',
      'Set up CI/CD with automated tests, cutting release time from days to minutes',
    ],
    tech: ['React', 'Next.js', 'Python', 'FastAPI', 'Docker'],
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Kite Studio',
    location: 'Munich',
    start: '2018',
    end: '2020',
    achievements: [
      'Converted design files into responsive, accessible interfaces for 20+ campaigns',
      'Improved Lighthouse performance scores from the 50s to the 90s across the portfolio',
      'Established the studio’s first automated accessibility checks',
    ],
    tech: ['JavaScript', 'React', 'Sass', 'Webpack'],
  },
];

export const credentials: CredentialEntry[] = [
  {
    id: 'cred-1',
    kind: 'degree',
    title: 'BSc Computer Science',
    institution: 'Technical University of Munich',
    year: '2018',
    detail: 'Focus on distributed systems and human–computer interaction',
  },
  {
    id: 'cred-2',
    kind: 'certification',
    title: 'AWS Certified Solutions Architect – Associate',
    institution: 'Amazon Web Services',
    year: '2023',
    verifyUrl: 'https://example.com',
  },
  {
    id: 'cred-3',
    kind: 'certification',
    title: 'Professional Scrum Developer I',
    institution: 'Scrum.org',
    year: '2022',
    verifyUrl: 'https://example.com',
  },
  {
    id: 'cred-4',
    kind: 'certification',
    title: 'Web Accessibility Specialist (WAS)',
    institution: 'IAAP',
    year: '2021',
    verifyUrl: 'https://example.com',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    quote:
      'John has a rare ability to move between the database and the design review without losing the thread. Our dashboard rebuild landed early and the code is still easy to work in a year later.',
    author: 'Priya Raman',
    role: 'Head of Product',
    company: 'Northwind Labs',
  },
  {
    id: 't-2',
    quote:
      'The clearest technical communicator I have worked with. Complex trade-offs came back as two options with honest costs, which made decisions genuinely easy.',
    author: 'Daniel Okafor',
    role: 'Engineering Manager',
    company: 'Beacon Digital',
  },
  {
    id: 't-3',
    quote:
      'We handed over a vague brief and got back a working product with tests, docs, and a deployment pipeline. Onboarding our own team took an afternoon.',
    author: 'Sofia Lindqvist',
    role: 'Founder',
    company: 'Ternary',
  },
];
