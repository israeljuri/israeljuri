import { GitHub } from '~/Components/icons/github';
import { LinkedIn } from '~/Components/icons/linkedin';
import { XformerlyTwitter } from '~/Components/icons/twitter';
import { JavaScript } from '~/Components/icons/javascript';
import { TypeScript } from '~/Components/icons/typescript';
import { React } from '~/Components/icons/react';
import { Nextjs } from '~/Components/icons/nextjs';
import { TailwindCSS } from '~/Components/icons/tailwind-css';
import { Shadcnui } from '~/Components/icons/shadcn';
import { ReactRouter } from '~/Components/icons/react-router';
import { Cloudflare } from '~/Components/icons/cloudflare';
import { Prisma } from '~/Components/icons/prisma';
import { DrizzleORM } from '~/Components/icons/drizzle';
import { Zod } from '~/Components/icons/zod';
import { CloudflareWorkers } from '~/Components/icons/cloudflare-workers';
import { BetterAuth } from '~/Components/icons/better-auth';
import { ReactQuery } from '~/Components/icons/react-query';
import { Hono } from '~/Components/icons/hono';

export const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const socials = {
  github: {
    icon: <GitHub />,
    href: 'https://github.com/israelJuri',
    name: 'github',
  },
  twitter: {
    icon: XformerlyTwitter,
    href: 'https://twitter.com/israelJuri',
  },
  linkedin: {
    icon: LinkedIn,
    href: 'https://linkedin.com/israelJuri',
  },
};

export const techstack = [
  {
    name: 'JavaScript',
    icon: <JavaScript />,
    level: 4,
    tags: ['frontend', 'backend', 'language'],
  },
  {
    name: 'TypeScript',
    icon: <TypeScript />,
    level: 4,
    tags: ['frontend', 'language'],
  },
  {
    name: 'React',
    icon: <React />,
    level: 4,
    tags: ['frontend', 'library'],
  },
  {
    name: 'React Router',
    icon: <ReactRouter />,
    level: 4,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'Next.js',
    icon: <Nextjs />,
    level: 4,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'Tailwind CSS',
    icon: <TailwindCSS />,
    level: 4,
    tags: ['frontend', 'css'],
  },

  {
    name: 'Shadcn UI',
    icon: <Shadcnui />,
    level: 4,
    tags: ['frontend', 'css'],
  },
  {
    name: 'Zod',
    icon: <Zod />,
    level: 4,
    tags: ['tool', 'validation'],
  },
  {
    name: 'React Query',
    icon: <ReactQuery />,
    level: 4,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'Hono',
    icon: <Hono />,
    level: 4,
    tags: ['backend', 'framework'],
  },
  {
    name: 'Cloudflare Workers',
    icon: <CloudflareWorkers />,
    level: 4,
    tags: ['backend', 'framework'],
  },
  {
    name: 'Cloudflare',
    icon: <Cloudflare />,
    level: 4,
    tags: ['backend', 'database', 'framework'],
  },
  {
    name: 'Drizzle',
    icon: <DrizzleORM />,
    level: 4,
    tags: ['backend', 'database', 'tool'],
  },
  {
    name: 'Better Auth',
    icon: <BetterAuth />,
    level: 4,
    tags: ['backend', 'authentication', 'framework'],
  },
];

export const tags = [
  'all',
  'frontend',
  'backend',
  'language',
  'framework',
  'css',
  'tool',
  'database',
  'authentication',
];

export const experiences = {
  technoville: {
    logo: 'technoville.png',
    company: 'Technoville',
    position: 'Frontend Engineer',
    duration: '2022 - Present',
    type: 'Remote - Adhoc',
    description:
      'I started my journey hacking together websites using HTML, CSS and JavaScript. That curiosity quickly grew into a deep interest in building thoughtful, user-focused interfaces.',
  },
  dfet: {
    logo: 'dfet.png',
    company: 'De-Future Elite Technology',
    position: 'Frontend Engineer',
    duration: '1 year',
    type: 'Remote - Contract',
    description:
      'I started my journey hacking together websites using HTML, CSS and JavaScript. That curiosity quickly grew into a deep interest in building thoughtful, user-focused interfaces.',
  },
  theraswift: {
    logo: 'theraswift.png',
    company: 'TheraSwift Rx',
    position: 'Full Stack Engineer',
    duration: '2 years',
    type: 'Hybrid - Contract',
    description:
      'I started my journey hacking together websites using HTML, CSS and JavaScript. That curiosity quickly grew into a deep interest in building thoughtful, user-focused interfaces.',
  },
  linxcom: {
    logo: 'linxcom.png',
    company: 'Linxcom Tecnology Institutes',
    position: 'Full Stack Engineer',
    duration: '2 years',
    type: 'Contract - Onsite',
    description:
      'I started my journey hacking together websites using HTML, CSS and JavaScript. That curiosity quickly grew into a deep interest in building thoughtful, user-focused interfaces.',
  },
};

export const projects = [
  {
    id: 1,
  },
];
