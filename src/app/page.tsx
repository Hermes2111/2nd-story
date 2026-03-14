import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Parallax className="absolute inset-0 -z-10 opacity-[0.2]">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl" style={{ background: 'var(--accent-gradient)' }} />
        </Parallax>
        <div className="container-xl px-6 pt-24 pb-20 sm:pt-36 sm:pb-28 text-center">
          <Reveal y={12}>
            <p className="text-[13px] uppercase tracking-[.24em] text-[color:var(--muted)] mb-4">2ND STORY AGENCY</p>
          </Reveal>
          <Reveal y={16}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight max-w-[16ch] mx-auto">
              Intelligence. Simplified.
            </h1>
          </Reveal>
          <Reveal y={20}>
            <p className="text-base sm:text-lg text-[color:var(--muted)] mt-6 max-w-[60ch] mx-auto">
              We design and build AI products that feel effortless—combining strategy, design, and engineering with precision.
            </p>
          </Reveal>
          <Reveal y={24}>
            <div className="mt-10 flex items-center justify-center gap-3">
              <a href="#contact" className="rounded-full px-5 py-3 text-sm font-medium border border-border hover:border-foreground transition">Start a project</a>
              <a href="#work" className="text-sm text-[color:var(--muted)] hover:text-foreground transition">See our work →</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="border-y border-border/80">
        <div className="container-xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal y={16}>
              <div className="rounded-2xl border border-border/80 p-6 bg-white/[0.02]">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-4" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Consulting</h3>
                <p className="text-[color:var(--muted)]">Opportunity mapping, roadmaps, and implementation plans aligned to outcomes.</p>
              </div>
            </Reveal>
            <Reveal y={16} delayMs={80}>
              <div className="rounded-2xl border border-border/80 p-6 bg-white/[0.02]">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-4" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Models</h3>
                <p className="text-[color:var(--muted)]">Fine-tuned LLMs and retrieval pipelines tailored to your domain.</p>
              </div>
            </Reveal>
            <Reveal y={16} delayMs={140}>
              <div className="rounded-2xl border border-border/80 p-6 bg-white/[0.02]">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-4" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Automation</h3>
                <p className="text-[color:var(--muted)]">Agent workflows and systems integration to reduce toil and increase speed.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="container-xl px-6 py-16 sm:py-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected work</h2>
            <a href="#contact" className="text-sm text-[color:var(--muted)] hover:text-foreground transition">Work with us →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Parallax className="aspect-[4/3] rounded-3xl border border-border/80 bg-gradient-to-b from-white/10 to-transparent" speed={-0.06} />
            <Parallax className="aspect-[4/3] rounded-3xl border border-border/80 bg-gradient-to-b from-[rgba(11,92,255,0.2)] to-transparent" speed={0.06} />
            <Parallax className="aspect-[4/3] rounded-3xl border border-border/80 bg-gradient-to-b from-white/10 to-transparent" speed={-0.04} />
          </div>
          <div className="mt-6 text-sm text-[color:var(--muted)]">Big, immersive visuals. Minimal copy. Just like product showcases.</div>
        </div>
      </section>

      <section id="testimonials" className="border-y border-border/80">
        <div className="container-xl px-6 py-16 sm:py-24">
          <Reveal y={12}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-12">What clients say</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal y={16}>
              <blockquote className="rounded-2xl border border-border/80 p-6 bg-white/[0.02]">
                <p className="">“A premium experience from strategy to launch. Flawless execution.”</p>
                <footer className="mt-4 text-sm text-[color:var(--muted)]">VP Product, Fintech</footer>
              </blockquote>
            </Reveal>
            <Reveal y={16} delayMs={80}>
              <blockquote className="rounded-2xl border border-border/80 p-6 bg-white/[0.02]">
                <p>“They made our AI feel effortless—and our users love it.”</p>
                <footer className="mt-4 text-sm text-[color:var(--muted)]">Head of Design, SaaS</footer>
              </blockquote>
            </Reveal>
            <Reveal y={16} delayMs={140}>
              <blockquote className="rounded-2xl border border-border/80 p-6 bg-white/[0.02]">
                <p>“The quality and polish set a new bar for our team.”</p>
                <footer className="mt-4 text-sm text-[color:var(--muted)]">CTO, Healthcare</footer>
              </blockquote>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center opacity-80">
            <Reveal y={12}><div className="h-8 rounded-md bg-white/10" /></Reveal>
            <Reveal y={12} delayMs={60}><div className="h-8 rounded-md bg-white/10" /></Reveal>
            <Reveal y={12} delayMs={100}><div className="h-8 rounded-md bg-white/10" /></Reveal>
            <Reveal y={12} delayMs={140}><div className="h-8 rounded-md bg-white/10" /></Reveal>
            <Reveal y={12} delayMs={180}><div className="h-8 rounded-md bg-white/10" /></Reveal>
            <Reveal y={12} delayMs={220}><div className="h-8 rounded-md bg-white/10" /></Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-border/80">
        <div className="container-xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Built for clarity</h2>
            <p className="text-[color:var(--muted)]">We focus on essentials: crisp typography, generous spacing, and careful motion to make complex AI feel simple.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[color:var(--muted)]">Clients</p>
              <p className="mt-1">Startups → Enterprise</p>
            </div>
            <div>
              <p className="text-[color:var(--muted)]">Focus</p>
              <p className="mt-1">AI UX, Agents, Platforms</p>
            </div>
            <div>
              <p className="text-[color:var(--muted)]">Engagements</p>
              <p className="mt-1">Discovery → Build → Scale</p>
            </div>
            <div>
              <p className="text-[color:var(--muted)]">Footprint</p>
              <p className="mt-1">Remote-first</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container-xl px-6 py-20 sm:py-28 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s make something great</h2>
          <p className="text-[color:var(--muted)] mt-3">Tell us about your project and timeline.</p>
          <div className="mt-10" />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
