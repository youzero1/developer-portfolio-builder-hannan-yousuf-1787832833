import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Tag } from '@/components/ui/Tag';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden" hover>
      {/* cover */}
      <div className="relative h-28 overflow-hidden border-b border-line">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `linear-gradient(135deg, ${project.cover[0]}, ${project.cover[1]})`,
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        <span className="absolute bottom-3 left-4 font-mono text-[11px] text-white/85">
          {project.year}
        </span>
        {project.featured && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent backdrop-blur">
            <Icon name="spark" className="h-3 w-3" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 font-mono text-[11px] text-accent2">{project.role}</p>
        <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-[12.5px] leading-snug text-slate-300/85">
              <span className="mt-[3px] font-mono text-accent">▹</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {(project.liveUrl || project.sourceUrl) && (
          <div className="mt-6 flex items-center gap-4 border-t border-line/70 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-opacity hover:opacity-75"
              >
                Live demo
                <Icon name="external" className="h-3.5 w-3.5" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-slate-200"
              >
                Source
                <Icon name="github" className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
