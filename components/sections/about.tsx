import { Code2, Server, Database, Cloud, GitBranch, Layers } from 'lucide-react';
import { RevealText } from '@/components/motion/reveal-text';
import { DrawUnderline } from '@/components/motion/draw-underline';

const capabilities = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    body: 'Type-safe React + Next.js apps with thoughtful interaction design and accessible, responsive interfaces.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    icon: Server,
    title: 'Backend Architecture',
    body: 'REST and real-time APIs with Node.js, Express, and WebSocket protocols built for scale and observability.',
    tags: ['Node.js', 'Express', 'WebSockets'],
  },
  {
    icon: Database,
    title: 'Data Layer',
    body: 'Relational and document stores modeled with Prisma — schema design, migrations, and query performance.',
    tags: ['PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    body: 'Cloud deployment on AWS with auto scaling groups for elastic capacity, Nginx reverse proxies, and containerized workloads packaged with Docker for repeatable, resilient releases.',
    tags: ['AWS EC2/S3', 'Auto Scaling Groups', 'Docker', 'Containers', 'Nginx'],
  },
  {
    icon: GitBranch,
    title: 'Delivery',
    body: 'CI/CD pipelines via GitHub Actions — lint, test, build, and ship on every push with zero-touch deploys.',
    tags: ['GitHub Actions', 'CI/CD'],
  },
  {
    icon: Layers,
    title: 'Systems Thinking',
    body: '500+ day LeetCode streak shaping a disciplined approach to data structures, algorithms, and edge cases.',
    tags: ['DSA', 'Problem Solving'],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="label-caps">About</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <RevealText
                words={[
                  { text: 'A' },
                  { text: 'disciplined' },
                  { text: 'builder' },
                  { text: 'across' },
                  { text: 'the' },
                  { text: 'stack.' },
                ]}
              />
            </h2>
            <DrawUnderline className="mt-3 block max-w-[220px] text-ink/25" />
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-ink-muted leading-relaxed">
              Final-year Computer Engineering student (Class of 2027) focused on
              scalable backend architectures and seamless user experiences.
              Graduate of the 100xDevs Full Stack Web Development Cohort,
              maintaining a 500+ day problem-solving streak on LeetCode. I care
              about clean abstractions, reliable infrastructure, and shipping
              products that feel good to use.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group bg-cream p-8 transition-colors hover:bg-sand"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sand">
                <c.icon size={18} />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {c.title}
              </h3>
              <p className="mt-2.5 text-base text-ink-muted leading-relaxed">
                {c.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-sand px-2.5 py-1 text-sm font-medium text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
