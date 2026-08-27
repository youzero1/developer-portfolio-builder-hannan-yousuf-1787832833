import { Icon } from '@/components/ui/Icon';
import { profile } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  function toTop() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <footer className="border-t border-line/70 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-[11.5px] text-muted">
          <span className="text-accent">$</span> echo &quot;© {year} {profile.name} — built with
          care&quot;
        </p>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="rounded-lg border border-line p-2 text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Icon name={social.icon} className="h-4 w-4" />
            </a>
          ))}
          <button
            type="button"
            onClick={toTop}
            className="ml-1 inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 font-mono text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            Back to top
            <Icon name="arrow-up" className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
