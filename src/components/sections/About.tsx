import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { profile } from '@/lib/content';

const facts = [
  { label: 'location', value: profile.location },
  { label: 'availability', value: profile.availability },
  { label: 'focus', value: profile.focus.join(' · ') },
  { label: 'email', value: profile.email },
];

const stats = [
  { value: `${profile.yearsExperience}+`, label: 'Years building for the web' },
  { value: `${profile.projectsShipped}`, label: 'Projects shipped to production' },
  { value: `${profile.technologies}`, label: 'Technologies in regular use' },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="Full-stack, front to back"
      subtitle="A short introduction to how I work and what I care about."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal space-y-5">
          {profile.bio.map((paragraph, index) => (
            <p key={index} className="text-[15px] leading-relaxed text-slate-300/90">
              {paragraph}
            </p>
          ))}

          <div className="flex items-start gap-3 rounded-xl border border-accent/25 bg-accent/[0.06] p-4">
            <Icon name="spark" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p className="font-mono text-[13px] leading-relaxed text-accent">
              {profile.currently}
            </p>
          </div>
        </div>

        <div className="reveal space-y-5">
          <Card className="p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              quick facts
            </p>
            <dl className="mt-4 space-y-3.5">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-[11px] text-accent2">{fact.label}</dt>
                  <dd className="text-[13.5px] leading-snug text-slate-300">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-4 text-center" hover>
                <p className="font-mono text-2xl font-semibold text-accent text-glow">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] leading-snug text-muted">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
