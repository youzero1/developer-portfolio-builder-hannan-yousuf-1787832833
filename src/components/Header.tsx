import { useEffect, useMemo, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { useActiveSection } from '@/hooks/useActiveSection';
import { profile } from '@/lib/content';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const firstName = profile.name.split(' ')[0]?.toLowerCase() ?? 'dev';

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-line/80 bg-ink/85 backdrop-blur-md shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]'
          : 'border-b border-transparent bg-ink/40 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-mono text-sm text-white">
          <span className="text-accent">{firstName}</span>
          <span className="text-muted">@portfolio</span>
          <span className="text-muted">:~$</span>
          <span className="cursor-blink ml-1 text-accent">_</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'font-mono text-[12.5px] transition-colors',
                active === item.id ? 'text-accent' : 'text-muted hover:text-slate-200',
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-accent/50 bg-accent/10 px-3.5 py-2 font-mono text-[12.5px] text-accent transition-colors hover:bg-accent/20"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-lg border border-line p-2 text-slate-300 transition-colors hover:text-accent md:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-line/70 bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-transparent',
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                'rounded-lg px-3 py-2.5 font-mono text-sm transition-colors',
                active === item.id
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted hover:bg-white/[0.04] hover:text-slate-200',
              )}
            >
              <span className="mr-2 text-accent/60">›</span>
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg border border-accent/50 bg-accent/10 px-3 py-2.5 text-center font-mono text-sm text-accent"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
