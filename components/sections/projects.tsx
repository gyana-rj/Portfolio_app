
import { Reveal } from '@/components/motion/reveal';

const projects = [
  {
    title: 'App Forge — AI Mobile App Builder',
    stack: 'Next.js, React Native, TypeScript, Prisma, AWS, Docker',
    bullets: [
      'Engineered an AI-powered platform that transforms natural-language prompts into production-ready React Native (Expo) applications, streaming LLM-generated code into a live in-browser WebContainer preview.',
      'Architected a scalable Bun + Turborepo monorepo of four microservices (Next.js frontend, Express API, generation worker, AWS EC2 Auto Scaling orchestrator) secured with Clerk auth and a Prisma/PostgreSQL data layer.',
      'Containerized every service with Docker, automated multi-image CI/CD via GitHub Actions, and deployed across Vercel, Render, and Neon with a server-side Expo tunnel for instant on-device previews.',
    ],
    tags: ['Next.js', 'React Native', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS', 'Docker', 'Clerk', 'Turborepo'],
    github: 'https://github.com/gyana-rj/bolt-mobile-app',
    live: 'https://bolt-mobile-app-frontend.vercel.app',
  },
  {
    title: 'Sonexa — Social Music Streaming Platform',
    stack: 'Next.js, TypeScript, Prisma, PostgreSQL, Docker',
    bullets: [
      'Built a full-stack music streaming app with instant track search, YouTube/Spotify playback, and a creator dashboard for managing live queues.',
      'Implemented real-time listening rooms with synchronized playback, presence tracking, and community upvoting to shape the shared queue.',
      'Architected a pnpm + Turborepo monorepo with a shared Prisma DB package, containerized deployment, and GitHub Actions CI/CD for Docker builds.',
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker', 'Turborepo', 'GitHub Actions'],
    github: 'https://github.com/gyana-rj/Sonexa',
    live: 'https://sonexa-web.onrender.com/',
  },
  {
    title: 'Collaborative Real-Time Whiteboard',
    stack: 'React/Next.js, TypeScript, WebSockets, Prisma, Docker',
    bullets: [
      'Engineered a high-fidelity, touch-responsive collaborative canvas using the raw HTML5 Canvas API, optimizing client-side performance and frame rendering for seamless cross-device compatibility.',
      'Architected a custom WebSocket protocol to handle asynchronous events, ensuring state synchronization across clients with sub-50ms latency.',
    ],
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'HTML5 Canvas', 'Prisma', 'Docker'],
    github: 'https://github.com/gyana-rj/collaborative-whiteboard',
    live: 'https://www.collaborativewhiteboard.tech/',
  },
  {
    title: 'Freshly — Cross-Platform Grocery & Meal Planner',
    stack: 'React Native, Expo, TypeScript, PostgreSQL',
    bullets: [
      'Built a cross-platform (iOS, Android, Web) grocery list and meal planner app with Expo Router file-based routing and typed API routes, backed by Clerk authentication and secure token storage.',
      'Designed a PostgreSQL schema via Drizzle ORM on Neon’s serverless driver, exposing REST endpoints for item CRUD, bulk-clear operations, and category/spending insights.',
      'Implemented global state with Zustand and a NativeWind/Tailwind UI, and automated EAS builds/OTA updates and lint/typecheck CI/CD via GitHub Actions, with Sentry error tracking in production.',
    ],
    tags: ['React Native', 'Expo Router', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Clerk', 'Zustand', 'NativeWind', 'Sentry'],
    github: 'https://github.com/gyana-rj/freshly-expo',
    live: 'https://devgyana-freshly.expo.app',
  },
  {
    title: 'Second Brain',
    stack: 'React, Node.js, MongoDB',
    bullets: [
      'A content aggregation platform with efficient MongoDB data models to store, categorize, and query large volumes of user links.',
      'Includes a public sharing system using cryptographically secure URLs and secure auth pipelines.',
    ],
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/gyana-rj/Projects',
    live: null as string | null,
  },
  {
    title: 'Real-Time Chat Application',
    stack: 'React, Express, WebSockets',
    bullets: [
      'A bidirectional messaging platform using WebSockets for sub-100ms delivery, with concurrent state management across multiple client instances.',
      'Scalable backend that routes high volumes of active connections.',
    ],
    tags: ['React.js', 'TypeScript', 'WebSockets', 'Express.js'],
    github: 'https://github.com/gyana-rj/Projects',
    live: null as string | null,
  },
];

const btn =
  'inline-flex h-8 items-center rounded-md bg-foreground px-3 text-sm font-medium text-background transition hover:bg-foreground/85';

export function Projects() {
  return (
    <section id="work" className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="label">projects.</h2>
        </Reveal>

        <div className="mt-6 space-y-9">
          {projects.map((p) => {
            return (
              <Reveal key={p.title}>
                <article className="border-l border-border pl-5 transition-colors hover:border-foreground/60">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.stack}</p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btn}
                      >
                        Code
                      </a>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={btn}
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-[15px] text-muted-foreground">
                    {p.bullets.map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <span className="text-muted-foreground/60">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-secondary px-2 py-1 text-xs text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
