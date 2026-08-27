import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { skillGroups } from '@/lib/content';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="skills"
      title="The toolkit I reach for"
      subtitle="Grouped by where it sits in the stack — no invented percentages, just what I use in real work."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.id} className="reveal p-6" hover>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 font-mono text-sm text-accent">
                {group.glyph}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{group.caption}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
