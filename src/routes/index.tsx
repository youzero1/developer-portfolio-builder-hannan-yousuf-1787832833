import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#08090b] text-emerald-400">
      <p className="font-mono text-sm tracking-widest">loading portfolio…</p>
    </div>
  );
}
