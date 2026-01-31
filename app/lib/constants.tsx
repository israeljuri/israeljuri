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
    tags: ['frontend', 'backend', 'language'],
  },
  {
    name: 'TypeScript',
    icon: <TypeScript />,
    tags: ['frontend', 'language'],
  },
  {
    name: 'React',
    icon: <React />,
    tags: ['frontend', 'library'],
  },
  {
    name: 'React Router',
    icon: <ReactRouter />,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'Next.js',
    icon: <Nextjs />,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'Tailwind CSS',
    icon: <TailwindCSS />,
    tags: ['frontend', 'css'],
  },
  {
    name: 'Shadcn UI',
    icon: <Shadcnui />,
    tags: ['frontend', 'css'],
  },
  {
    name: 'Zod',
    icon: <Zod />,
    tags: ['tool', 'validation'],
  },
  {
    name: 'React Query',
    icon: <ReactQuery />,
    tags: ['frontend', 'framework'],
  },
  {
    name: 'Hono',
    icon: <Hono />,
    tags: ['backend', 'framework'],
  },
  {
    name: 'Cloudflare Workers',
    icon: <CloudflareWorkers />,
    tags: ['backend', 'framework'],
  },
  {
    name: 'Cloudflare',
    icon: <Cloudflare />,
    tags: ['backend', 'database', 'framework'],
  },
  {
    name: 'Drizzle',
    icon: <DrizzleORM />,
    tags: ['backend', 'database', 'tool'],
  },
  {
    name: 'Better Auth',
    icon: <BetterAuth />,
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
    type: 'Remote — Adhoc',
    description: `Turned mockups into intuitive user interfaces. Collaborating with the design and backend team to create a seamless user experience. Across the companys projects, Mostly working adhoc, I have been able to deliver high-quality results that meet the needs of the team.`,
  },
  dfet: {
    logo: 'dfet.png',
    company: 'De-Future Elite Technology',
    position: 'Frontend Engineer',
    duration: '1 year',
    type: 'Remote — Contract',
    description: `Worked as a contract frontend engineer for the team. At almost every project, single handedly came up with UI element designs and implemented them, while also working with the backend team to create a seamless user experience across the companys subsidiaries.`,
  },
  theraswift: {
    logo: 'theraswift.png',
    company: 'TheraSwift Rx',
    position: 'Full Stack Engineer',
    duration: '2 years',
    type: 'Hybrid — Contract',
    description: `From the ground up, I was able to build a fullstack desktop application that allowed the company to manage their prescriptions and appointments. Contributed also to other projects of the company.`,
  },
  linxcom: {
    logo: 'linxcom.png',
    company: 'Linxcom Tecnology Institutes',
    position: 'Instructor',
    duration: '2 years',
    type: 'Full time — Onsite',
    description: `An instructor at Linxcom Tecnology Institutes, I was able to teach students how to code and help them understand the basics of programming, helped some kickstart their journey into the world of programming, was of great help to the company in the growth of their students.`,
  },
};

export const about = [
  {
    paragraph: "You've found my portfolio and I am glad you're here.",
    audio: '/one.wav',
  },
  {
    paragraph:
      'I am a Nigerian based JavaScript lover who is passionate about solving real world problems with code.',
    audio: '/two.wav',
  },
  {
    paragraph:
      'I started my journey hacking together websites using HTML, CSS and JavaScript.',
    audio: '/three.wav',
  },
  {
    paragraph:
      'That curiosity quickly grew into a deep interest that is shaping me into a fullstack developer today.',
    audio: '/four.wav',
  },
  {
    paragraph:
      "I've had the privilege of working with some truly interesting individuals and startups over the past five years.",
    audio: '/five.wav',
  },
];


export const works = [
  
]