import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 px-5 py-20 sm:py-24', className)}>
      <div className="mx-auto max-w-6xl">
        <header className="reveal max-w-2xl">
          <p className="font-mono text-xs text-accent">
            <span className="text-muted">~/</span>
            {eyebrow}
            <span className="cursor-blink text-accent">_</span>
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>}
          <div className="divider-gradient mt-7 max-w-[10rem]" />
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
