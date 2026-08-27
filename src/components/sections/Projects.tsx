import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/lib/content';

const ALL = 'All';

export function Projects() {
  const [filter, setFilter] = useState<string>(ALL);

  const filters = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((project) => {
      project.tech.forEach((tech) => counts.set(tech, (counts.get(tech) ?? 0) + 1));
    });
    return [...counts.entries()]
      .filter(([, count]) => count > 1)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tech]) => tech);
  }, []);

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter],
  );

  return (
    <Section
      id="projects"
      eyebrow="projects"
      title="Selected work"
      subtitle="A mix of product work and things I built because the problem was interesting. Filter by technology to narrow it down."
    >
      <div className="reveal flex flex-wrap items-center gap-2">
        <Tag active={filter === ALL} onClick={() => setFilter(ALL)}>
          All · {projects.length}
        </Tag>
        {filters.map((tech) => (
          <Tag key={tech} active={filter === tech} onClick={() => setFilter(tech)}>
            {tech}
          </Tag>
        ))}
      </div>

      <p className="reveal mt-4 font-mono text-[11px] text-muted">
        showing {visible.length} of {projects.length} projects
        {filter !== ALL && (
          <>
            {' '}
            ·{' '}
            <button
              type="button"
              onClick={() => setFilter(ALL)}
              className="text-accent underline underline-offset-4"
            >
              clear filter
            </button>
          </>
        )}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
