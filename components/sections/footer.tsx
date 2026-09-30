import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>
          {site.name} · {new Date().getFullYear()}
        </p>
        <a href="#top" className="transition-colors hover:text-foreground">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
