import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { experience } from '@/lib/content';
import { formatRange } from '@/lib/utils';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title="Where I have been working"
      subtitle="Seven years across product teams and studios, most recently leading full-stack work end to end."
    >
      <div className="relative">
        {/* accent rail */}
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/70 via-line to-transparent sm:left-[11px]" />

        <ol className="space-y-7">
          {experience.map((entry) => (
            <li key={entry.id} className="reveal relative pl-9 sm:pl-14">
              <span className="absolute left-0 top-6 flex h-4 w-4 items-center justify-center rounded-full border border-accent/60 bg-ink sm:h-6 sm:w-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
              </span>

              <Card className="p-6" hover>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{entry.role}</h3>
                    <p className="mt-1 font-mono text-[13px] text-accent">{entry.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[11px] text-muted">
                      {formatRange(entry.start, entry.end)}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] text-muted">
                      <Icon name="pin" className="h-3 w-3" />
                      {entry.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {entry.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate-300/85"
                    >
                      <span className="mt-[2px] font-mono text-accent2">–</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
