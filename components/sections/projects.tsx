
import { Reveal } from '@/components/motion/reveal';
import { projects } from '@/lib/projects';

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
                        aria-label={`${p.title} source code on GitHub`}
                        className={btn}
                      >
                        Code
                      </a>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} live site`}
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
