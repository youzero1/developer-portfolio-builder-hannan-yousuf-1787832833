import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tag({ children, active = false, onClick, className }: TagProps) {
  const classes = cn(
    'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-colors duration-200',
    active
      ? 'border-accent/70 bg-accent/15 text-accent'
      : 'border-line bg-white/[0.03] text-muted',
    onClick && !active && 'hover:border-accent/50 hover:text-slate-200',
    className,
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} aria-pressed={active} className={classes}>
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
}
