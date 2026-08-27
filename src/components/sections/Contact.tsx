import { ContactForm } from '@/components/ContactForm';
import { Icon } from '@/components/ui/Icon';
import { Section } from '@/components/ui/Section';
import { profile } from '@/lib/content';

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="contact"
      title="Let's build something"
      subtitle="Freelance work, a full-time role, or just a technical question — I am happy to hear about it."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal space-y-6">
          <p className="text-[14.5px] leading-relaxed text-slate-300/90">
            Tell me roughly what you are trying to build and where you are stuck. If it is a good
            fit I will come back with a plan and an honest estimate; if it is not, I will say so and
            point you somewhere better.
          </p>

          <div className="space-y-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface/70 px-4 py-3 transition-colors hover:border-accent/50"
              >
                <span className="text-accent">
                  <Icon name={social.icon} className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="block font-mono text-[11px] text-muted">{social.label}</span>
                  <span className="block font-mono text-[13px] text-slate-200">
                    {social.handle ?? social.href}
                  </span>
                </span>
                <Icon name="arrow-right" className="h-4 w-4 text-muted" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-[11.5px] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability} · {profile.location}
          </div>
        </div>

        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
