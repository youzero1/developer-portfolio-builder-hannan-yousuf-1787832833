import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({ title = 'bash', children, className }: TerminalWindowProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-line bg-[#0a0c10]/90 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line/80 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-muted">{title}</span>
      </div>
      <div className="px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:px-5 sm:text-[13px]">
        {children}
      </div>
    </div>
  );
}
