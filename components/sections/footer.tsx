import { ArrowUp } from 'lucide-react';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center justify-between border-t border-border pt-9 text-lg text-muted-foreground">
          <p>
            {site.name} · {new Date().getFullYear()}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Back to the top <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
