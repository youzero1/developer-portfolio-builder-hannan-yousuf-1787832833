import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { testimonials } from '@/lib/content';
import { initials } from '@/lib/utils';

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="testimonials"
      title="What colleagues say"
      subtitle="A few words from the people I have built things with."
    >
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="reveal flex min-w-[86%] snap-center flex-col p-6 sm:min-w-0"
            hover
          >
            <span
              aria-hidden
              className="font-mono text-3xl leading-none text-accent/70"
            >
              &ldquo;
            </span>
            <blockquote className="mt-3 flex-1 text-[13.5px] leading-relaxed text-slate-300/90">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line/70 pt-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-[11px] text-accent">
                {initials(testimonial.author)}
              </span>
              <span>
                <span className="block text-[13px] font-medium text-white">
                  {testimonial.author}
                </span>
                <span className="block font-mono text-[11px] text-muted">
                  {testimonial.role} · {testimonial.company}
                </span>
              </span>
            </figcaption>
          </Card>
        ))}
      </div>
    </Section>
  );
}
