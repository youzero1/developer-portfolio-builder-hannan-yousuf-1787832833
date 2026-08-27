import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-line bg-surface/70 backdrop-blur-sm',
        hover &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-32px_rgba(52,211,153,0.55)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
