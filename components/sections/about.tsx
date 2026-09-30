import { Reveal } from '@/components/motion/reveal';

const skills = [
  {
    label: 'Frontend',
    body: 'Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3',
  },
  {
    label: 'Backend',
    body: 'Node.js, Express.js, REST APIs, WebSockets, Turborepo',
  },
  { label: 'Data', body: 'PostgreSQL, MongoDB, Prisma ORM, Drizzle ORM' },
  {
    label: 'Infrastructure',
    body: 'AWS EC2/S3, Auto Scaling Groups, Docker, Linux, Nginx, GitHub Actions CI/CD',
  },
  {
    label: 'Monitoring',
    body: 'Prometheus, Grafana, New Relic — metrics, dashboards, and alerting',
  },
  { label: 'Fundamentals', body: 'Data structures, algorithms, problem solving' },
];

const strong = 'font-semibold text-foreground';

export function About() {
  return (
    <section id="about" className="pt-24 sm:pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="label">about me.</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            {[
              <>
                Final-year <span className={strong}>Computer Engineering</span>{' '}
                student (Class of 2027) focused on{' '}
                <span className={strong}>scalable backend architectures</span>{' '}
                and seamless user experiences.
              </>,
              <>
                Graduate of the{' '}
                <span className={strong}>
                  100xDevs Full Stack Web Development &amp; DevOps
                </span>{' '}
                cohort.
              </>,
              <>
                Currently learning{' '}
                <span className={strong}>AI and AI agents</span> — exploring
                LLM-powered apps, tool use, and agentic workflows.
              </>,
              <>
                I care about clean abstractions, reliable infrastructure, and
                shipping products that feel good to use.
              </>,
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-muted-foreground/60">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="label">technical skills.</h2>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {skills.map((s) => (
              <div
                key={s.label}
                className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="text-[15px] font-medium">{s.label}:</dt>
                <dd className="text-[15px] text-muted-foreground">{s.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
