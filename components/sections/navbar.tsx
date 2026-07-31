'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/motion/magnetic';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-sand/80 backdrop-blur-md border-b border-border/60 py-3'
          : 'py-5'
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <button
          onClick={() => go('#top')}
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sand text-xs font-bold">
            GS
          </span>
          <span className="hidden sm:inline">Gyana Ranjan Sahoo</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => go(item.href)}
                className="rounded-full px-4 py-2 text-lg font-medium text-ink-muted transition-colors hover:bg-cream hover:text-ink"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Magnetic className="hidden md:block" strength={0.4}>
          <button
            onClick={() => go('#contact')}
            className="inline-flex items-center rounded-full bg-ink px-5 py-2 text-lg font-semibold text-sand transition hover:bg-ink/90"
          >
            Start a project
          </button>
        </Magnetic>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-md text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-sand/95 backdrop-blur border-t border-border/60"
          >
            <ul className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => go(item.href)}
                    className="block w-full rounded-md px-3 py-2.5 text-left text-lg font-medium text-ink-muted hover:bg-cream hover:text-ink"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go('#contact')}
                  className="mt-2 block w-full rounded-md bg-ink px-3 py-2.5 text-left text-lg font-semibold text-sand"
                >
                  Start a project
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
