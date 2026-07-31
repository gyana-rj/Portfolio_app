'use client';

import { Code2, Database, Cloud, Github, ArrowUpRight } from 'lucide-react';
import { TiltCard } from '@/components/motion/tilt-card';
import { RevealText } from '@/components/motion/reveal-text';

const projects = [
  {
    stack: 'Next.js + Prisma + Docker',
    badge: 'New',
    title: 'App Forge',
    description:
      'An AI-assisted application builder containerized with Docker, using Prisma ORM and PostgreSQL data models to turn natural-language prompts into production-ready web apps with live preview streams.',
    impactLabel: 'HIGHLIGHT',
    impact: 'Prompt-to-app in seconds',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Docker', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/gyana-rj/bolt-mobile-app',
    live: 'https://bolt-mobile-app-frontend.vercel.app/',
  },
  {
    stack: 'Next.js + WebSockets',
    badge: 'Live',
    title: 'Collaborative Real-Time Whiteboard',
    description:
      'A high-performance collaborative whiteboard built from scratch on the raw HTML5 Canvas API, with a custom non-blocking WebSocket protocol for sub-50ms multi-client sync. Turborepo monorepo, fully containerized, deployed on Render.',
    impactLabel: 'HIGHLIGHT',
    impact: 'Sub-50ms sync across clients',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'Prisma', 'Docker'],
    github: 'https://github.com/gyana-rj/collaborative-whiteboard',
    live: 'https://www.collaborativewhiteboard.tech/',
  },
  {
    stack: 'React + MongoDB',
    badge: 'Full-stack',
    title: 'Second Brain',
    description:
      'A content aggregation platform with efficient MongoDB data models to store, categorize, and query large volumes of user links. Includes a public sharing system using cryptographically secure URLs and secure auth pipelines.',
    impactLabel: 'HIGHLIGHT',
    impact: 'Secure sharable collections',
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/gyana-rj/Projects',
    live: null,
  },
  {
    stack: 'React + WebSockets',
    badge: 'Real-time',
    title: 'Real-Time Chat Application',
    description:
      'A bidirectional messaging platform using WebSockets for sub-100ms delivery, with concurrent state management across multiple client instances and a scalable backend that routes high volumes of active connections.',
    impactLabel: 'HIGHLIGHT',
    impact: 'Sub-100ms message delivery',
    tags: ['React.js', 'TypeScript', 'WebSockets', 'Express.js'],
    github: 'https://github.com/gyana-rj/Projects',
    live: null,
  },
];

const capabilities = [
  {
    icon: Code2,
    title: 'Web & backend development',
    body: 'TypeScript, JavaScript, Node.js, Express.js, React.js, Next.js, HTML5, CSS3, and Tailwind CSS.',
  },
  {
    icon: Database,
    title: 'Databases & ORMs',
    body: 'PostgreSQL, MongoDB, Prisma ORM, and SQL modeling for reliable application data layers.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    body: 'Docker, AWS EC2 and S3, CI/CD with GitHub Actions, Git/GitHub, and Turborepo workflows.',
  },
];

const steps = [
  'Plan the application structure, feature scope, and deployment path before writing code.',
  'Build full-stack features with reusable components, clear APIs, and dependable data models.',
  'Package and automate delivery so the release process stays repeatable and low-risk.',
  'Refine the experience, performance, and maintainability until the product is production-ready.',
];

export function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl leading-[1.1]">
            <RevealText
              words={[
                { text: 'Selected' },
                { text: 'projects,' },
                { text: 'built' },
                { text: 'end' },
                { text: 'to' },
                { text: 'end.' },
              ]}
            />
          </h2>
          <p className="self-end text-ink-muted leading-relaxed">
            Real-time systems and full-stack products — from a collaborative
            whiteboard on the raw Canvas API to low-latency messaging and
            multiplayer game state. Each one shipped, containerized, and built
            for scale.
          </p>
        </div>

        {/* project cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title}>
              <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-cream p-6">
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-medium text-ink-muted">
                  {p.stack}
                </span>
                <span className="shrink-0 rounded-full border border-border bg-sand px-2.5 py-0.5 text-xs font-medium text-ink-muted">
                  {p.badge}
                </span>
              </div>

              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-base font-medium text-ink-muted leading-relaxed">
                {p.description}
              </p>

              {/* Impact */}
              <div className="mt-8">
                <span className="label-caps">{p.impactLabel}</span>
                <p className="mt-1.5 text-base font-semibold">{p.impact}</p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-sand px-3 py-1 text-sm font-semibold text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition hover:text-ink-muted"
                >
                  <Github size={16} />
                  Code
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-ink transition hover:text-ink-muted"
                  >
                    Live demo
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
              </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Bottom 2-up row */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* Capabilities — light */}
          <div className="rounded-2xl border border-border bg-cream p-8 sm:p-10">
            <span className="label-caps">Capabilities</span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              A focused stack with clear strengths.
            </h3>

            <div className="mt-8 space-y-7">
              {capabilities.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sand">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{c.title}</p>
                    <p className="mt-1 text-base text-ink-muted leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process — dark */}
          <div className="rounded-2xl bg-ink p-8 text-sand sm:p-10">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-sand/60">
              Process
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Reliable delivery comes from a disciplined process.
            </h3>

            <div className="mt-8 space-y-3">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl bg-sand/[0.07] p-4"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sand/10 text-sm font-medium text-sand/70">
                    {i + 1}
                  </span>
                  <p className="text-base text-sand/80 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
