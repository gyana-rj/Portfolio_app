'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#work' },
  { label: 'contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/70 backdrop-blur-md'
          : 'border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="text-xl font-bold tracking-tight">
          gyana.
        </a>
        <ul className="flex items-center gap-5 text-[15px] text-muted-foreground">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
