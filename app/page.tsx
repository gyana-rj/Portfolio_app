import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { VelocityMarquee } from '@/components/motion/marquee';

const ticker = [
  'TypeScript',
  'Next.js',
  'Node.js',
  'WebSockets',
  'PostgreSQL',
  'Prisma',
  'Docker',
  'AWS',
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <section className="overflow-hidden border-y border-border bg-cream py-8">
          <VelocityMarquee items={ticker} baseVelocity={2.5} />
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
