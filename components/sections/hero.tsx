'use client';

import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { RevealText, type Word } from '@/components/motion/reveal-text';
import { CountUp } from '@/components/motion/count-up';

const headline: Word[] = [
  { text: 'Full-stack' },
  { text: 'developer' },
  { text: 'crafting' },
  { text: 'reliable', className: 'text-ink-muted' },
  { text: 'systems', className: 'text-ink-muted' },
  { text: 'with' },
  { text: 'a' },
  { text: 'polished' },
  { text: 'product' },
  { text: 'layer.' },
];

const stats = [
  { k: '500+', v: 'Day LeetCode streak' },
  { k: '100xDevs', v: 'Cohort graduate' },
  { k: '13+', v: 'Technologies in stack' },
  { k: '2027', v: 'Engineering graduate' },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <span className="label-caps">Portfolio</span>
          <span className="h-px w-12 bg-border" />
          <span className="label-caps">2027</span>
        </div>

        <h1 className="mt-8 max-w-5xl text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          <RevealText words={headline} />
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg text-ink-muted leading-relaxed">
          I&apos;m Gyana Ranjan Sahoo — a final-year Computer Engineering
          student building scalable backend architectures and seamless user
          experiences, from real-time collaborative tools to production
          infrastructure.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() =>
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-sand transition hover:bg-ink/90"
          >
            View selected work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-6 py-3 text-sm font-medium text-ink transition hover:border-ink/30"
          >
            Get in touch
          </button>
        </div>

        {/* Snapshot stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="bg-cream p-6">
              <CountUp
                value={s.k}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              />
              <p className="mt-2 text-sm text-ink-muted">{s.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-2 text-sm text-ink-muted">
          <ArrowDown size={14} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
