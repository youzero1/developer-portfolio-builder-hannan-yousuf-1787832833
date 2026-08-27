import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { credentials } from '@/lib/content';

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="credentials"
      title="Education & certifications"
      subtitle="Formal study plus the certifications I keep current."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {credentials.map((entry) => (
          <Card key={entry.id} className="reveal p-5" hover>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent2">
                  {entry.kind === 'degree' ? 'degree' : 'certification'}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug text-white">
                  {entry.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-muted">{entry.institution}</p>
                {entry.detail && (
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-400">
                    {entry.detail}
                  </p>
                )}
                {entry.verifyUrl && (
                  <a
                    href={entry.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent transition-opacity hover:opacity-75"
                  >
                    Verify
                    <Icon name="external" className="h-3 w-3" />
                  </a>
                )}
              </div>
              <span className="shrink-0 rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-muted">
                {entry.year}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
