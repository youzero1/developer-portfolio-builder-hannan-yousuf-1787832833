import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { TerminalWindow } from '@/components/ui/TerminalWindow';
import { useTypewriter } from '@/hooks/useTypewriter';
import { profile } from '@/lib/content';

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative px-5 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="reveal font-mono text-sm text-accent">
            <span className="text-muted">$</span> whoami
          </p>

          <h1 className="reveal mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>

          <p className="reveal mt-4 flex min-h-[2.25rem] items-center font-mono text-lg text-accent sm:text-2xl">
            <span className="mr-2 text-muted">&gt;</span>
            <span className="text-glow">{typed}</span>
            <span className="cursor-blink ml-0.5 inline-block w-[0.6ch] text-accent">▍</span>
          </p>

          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" external={false} icon={<Icon name="arrow-right" />}>
              View my work
            </Button>
            <Button href="#contact" external={false} variant="secondary">
              Get in touch
            </Button>
          </div>

          <div className="reveal mt-9 flex items-center gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="rounded-lg border border-line bg-elevated/60 p-2.5 text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
              >
                <Icon name={social.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
            <span className="ml-1 inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>
          </div>
        </div>

        <div className="reveal">
          <TerminalWindow title="john@portfolio: ~" className="glow-ring">
            <p className="text-muted">
              <span className="text-accent">$</span> cat profile.json
            </p>
            <pre className="mt-2 whitespace-pre-wrap text-slate-300">
              <span className="text-muted">{'{'}</span>
              {'\n  '}
              <span className="text-accent2">"role"</span>
              <span className="text-muted">: </span>
              <span className="text-accent">"Full-Stack Developer"</span>
              <span className="text-muted">,</span>
              {'\n  '}
              <span className="text-accent2">"location"</span>
              <span className="text-muted">: </span>
              <span className="text-accent">"{profile.location}"</span>
              <span className="text-muted">,</span>
              {'\n  '}
              <span className="text-accent2">"experience"</span>
              <span className="text-muted">: </span>
              <span className="text-amber-300">{profile.yearsExperience}</span>
              <span className="text-muted">,</span>
              {'\n  '}
              <span className="text-accent2">"stack"</span>
              <span className="text-muted">: [</span>
              <span className="text-accent">"TypeScript"</span>
              <span className="text-muted">, </span>
              <span className="text-accent">"React"</span>
              <span className="text-muted">, </span>
              <span className="text-accent">"Node"</span>
              <span className="text-muted">, </span>
              <span className="text-accent">"Postgres"</span>
              <span className="text-muted">],</span>
              {'\n  '}
              <span className="text-accent2">"focus"</span>
              <span className="text-muted">: </span>
              <span className="text-accent">"{profile.focus[0]}"</span>
              {'\n'}
              <span className="text-muted">{'}'}</span>
            </pre>
            <p className="mt-3 text-muted">
              <span className="text-accent">$</span> npm run build
              <span className="cursor-blink ml-1 text-accent">_</span>
            </p>
          </TerminalWindow>
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-16 hidden w-fit flex-col items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-accent sm:flex"
      >
        scroll down
        <Icon name="arrow-down" className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
