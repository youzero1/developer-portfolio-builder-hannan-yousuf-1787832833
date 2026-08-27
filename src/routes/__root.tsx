import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { TerminalWindow } from '@/components/ui/TerminalWindow';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
      {/* background texture */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-accent2/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      </div>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 py-20">
      <TerminalWindow title="alex@portfolio: ~" className="w-full max-w-lg glow-ring">
        <p className="text-muted">
          <span className="text-accent">$</span> open {typeof window !== 'undefined'
            ? window.location.pathname
            : '/unknown'}
        </p>
        <p className="mt-2 text-red-400">bash: command not found</p>
        <p className="mt-4 text-slate-300">
          That page does not exist — but everything else is one click away.
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-mono text-[13px] text-ink transition-colors hover:bg-accent/85"
        >
          cd ~/home
        </Link>
      </TerminalWindow>
    </div>
  );
}
