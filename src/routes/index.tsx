import { createFileRoute } from '@tanstack/react-router';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Testimonials } from '@/components/sections/Testimonials';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  useScrollReveal();

  return (
    <div>
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Education />

      <Testimonials />

      <Contact />
    </div>
  );
}
