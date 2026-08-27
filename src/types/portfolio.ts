export interface SocialLink {
  label: string;
  href: string;
  /** short monospace handle shown next to the icon */
  handle?: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'globe';
}

export interface Profile {
  name: string;
  roles: string[];
  tagline: string;
  location: string;
  availability: string;
  email: string;
  focus: string[];
  yearsExperience: number;
  projectsShipped: number;
  technologies: number;
  bio: string[];
  currently: string;
  resumeUrl?: string;
  socials: SocialLink[];
}

export interface SkillGroup {
  id: string;
  title: string;
  caption: string;
  glyph: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  tech: string[];
  featured?: boolean;
  liveUrl?: string;
  sourceUrl?: string;
  /** two tailwind color stops used for the card cover */
  cover: [string, string];
  year: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string | 'Present';
  achievements: string[];
  tech: string[];
}

export interface CredentialEntry {
  id: string;
  kind: 'degree' | 'certification';
  title: string;
  institution: string;
  year: string;
  detail?: string;
  verifyUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}
