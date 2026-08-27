import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'sm';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-mono font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-ink hover:bg-accent/85 hover:shadow-[0_12px_34px_-14px_rgba(52,211,153,0.8)]',
  secondary:
    'border border-line bg-elevated/60 text-slate-200 hover:border-accent/60 hover:text-accent',
  ghost: 'text-muted hover:text-accent',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-3.5 py-2 text-xs',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsButton extends CommonProps {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = 'primary', size = 'md', className, icon, ariaLabel } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in props && props.href) {
    const external = props.external ?? /^https?:|^mailto:/.test(props.href);
    return (
      <a
        href={props.href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        {icon}
      </a>
    );
  }

  const { onClick, type = 'button', disabled } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
      {icon}
    </button>
  );
}
