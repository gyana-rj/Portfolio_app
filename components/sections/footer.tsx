'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Gyana Ranjan Sahoo
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/gyana-rj', label: 'GitHub' },
              {
                icon: Linkedin,
                href: 'https://linkedin.com/in/ranjangyana',
                label: 'LinkedIn',
              },
              { icon: Mail, href: 'mailto:gyanaranjansahoo174@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-cream text-ink-muted transition hover:border-ink/30 hover:text-ink"
              >
                <Icon size={16} />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-cream text-ink-muted transition hover:border-ink/30 hover:text-ink"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
