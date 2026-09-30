import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/lib/site';

const btn =
  'inline-flex h-9 items-center rounded-md px-4 text-sm font-medium transition';

export function Hero() {
  return (
    <section id="top" className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="animate-fade-in text-muted-foreground">hi there👋, I&apos;m</p>
        <h1 className="mt-3 animate-slide-up text-4xl font-bold tracking-tight sm:text-5xl">
          Gyana Ranjan Sahoo
        </h1>
        <p className="mt-2 text-foreground/90">Full-Stack Developer</p>
        <p className="mt-1 text-foreground/90">
          Final-year CE student · 100xDevs graduate · Learning AI &amp; agents
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <a
            href="#contact"
            className={`${btn} bg-foreground text-background hover:bg-foreground/85`}
          >
            Contact
          </a>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} bg-foreground text-background hover:bg-foreground/85`}
            >
              Resume
            </a>
          )}
          {[
            { icon: Mail, href: `mailto:${site.email}`, label: 'Email' },
            { icon: Github, href: site.github, label: 'GitHub' },
            { icon: Linkedin, href: site.linkedin, label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-11 place-items-center rounded-md text-foreground/80 transition hover:bg-secondary hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
