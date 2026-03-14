import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import HeroBackground from "@/components/HeroBackground";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrambleText from "@/components/ScrambleText";
import Marquee from "@/components/Marquee";

const MARQUEE_ITEMS = [
  'AI Consulting',
  'Custom LLMs',
  'Automation',
  'Agent Workflows',
  'Product Design',
  'Retrieval Pipelines',
  'Strategy',
  'Engineering',
];

const STATS = [
  { to: 40, suffix: '+', label: 'Projects shipped' },
  { to: 3,  suffix: '×', label: 'Average ROI' },
  { to: 12, suffix: '',  label: 'Industries served' },
  { to: 98, suffix: '%', label: 'Client satisfaction' },
];

const SERVICES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/></svg>
    ),
    title: 'AI Consulting',
    body: 'Opportunity mapping, roadmaps, and implementation plans aligned to measurable outcomes.',
    tag: 'Strategy',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    title: 'Custom Models',
    body: 'Fine-tuned LLMs and retrieval pipelines trained and evaluated on your domain data.',
    tag: 'LLM / RAG',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Automation',
    body: 'Agent workflows and systems integration that reduce toil and dramatically increase throughput.',
    tag: 'Agents',
  },
];

const WORK = [
  {
    tag: 'LLM · Research',
    title: 'Autonomous Research Assistant',
    body: 'Reduced analyst workload by 70% through intelligent document synthesis and source tracking.',
    gradient: 'from-white/10',
    speed: -0.06,
  },
  {
    tag: 'Enterprise · AI',
    title: 'Intelligent Document Platform',
    body: 'End-to-end contract analysis pipeline deployed for a Fortune 500 legal team.',
    gradient: 'from-[rgba(11,92,255,0.22)]',
    speed: 0.06,
  },
  {
    tag: 'Data · Agents',
    title: 'Predictive Analytics Dashboard',
    body: 'Real-time forecasting agents integrated seamlessly into an existing BI stack.',
    gradient: 'from-white/10',
    speed: -0.04,
  },
];

const TESTIMONIALS = [
  { quote: '"A premium experience from strategy to launch. Flawless execution."', author: 'VP Product', company: 'Fintech' },
  { quote: '"They made our AI feel effortless — and our users genuinely love it."', author: 'Head of Design', company: 'SaaS' },
  { quote: '"The quality and polish set a completely new bar for our team."', author: 'CTO', company: 'Healthcare' },
];

const CLIENTS = ['Acme Corp', 'Meridian', 'Northfield', 'Vantage AI', 'Luminary', 'Axiom'];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <HeroBackground />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" aria-hidden />

        <div className="container-xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center relative z-10 w-full">
          <Reveal y={10}>
            <p className="text-[11px] uppercase tracking-[.28em] text-[color:var(--muted)] mb-6 font-mono">
              2ND STORY AGENCY
            </p>
          </Reveal>

          <Reveal y={20}>
            <h1 className="text-5xl sm:text-7xl md:text-[88px] font-semibold tracking-[-0.03em] leading-[1.02] max-w-[14ch] mx-auto">
              <ScrambleText text="Intelligence." duration={900} />
              <br />
              <ScrambleText text="Simplified." delay={300} duration={800} />
            </h1>
          </Reveal>

          <Reveal y={20}>
            <p className="text-base sm:text-lg text-[color:var(--muted)] mt-7 max-w-[52ch] mx-auto leading-relaxed">
              We design and build AI products that feel effortless — combining strategy,
              design, and engineering with precision.
            </p>
          </Reveal>

          <Reveal y={20}>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <MagneticButton
                href="#contact"
                className="rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors duration-200"
              >
                Start a project
              </MagneticButton>
              <MagneticButton
                href="#work"
                className="rounded-full px-6 py-3 text-sm text-[color:var(--muted)] border border-border hover:border-foreground hover:text-foreground transition-all duration-200"
              >
                See our work →
              </MagneticButton>
            </div>
          </Reveal>

          {/* Scroll hint */}
          <Reveal y={0}>
            <div className="mt-20 flex flex-col items-center gap-2 text-[color:var(--muted)] opacity-40">
              <div className="w-[1px] h-10 bg-current animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee ── */}
      <Marquee items={MARQUEE_ITEMS} />

      {/* ── Stats ── */}
      <section className="border-b border-border/80">
        <div className="container-xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ to, suffix, label }, i) => (
            <Reveal key={label} y={12} delayMs={i * 60}>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums">
                  <AnimatedCounter to={to} suffix={suffix} />
                </p>
                <p className="text-sm text-[color:var(--muted)] mt-2">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="border-b border-border/80">
        <div className="container-xl px-6 py-16 sm:py-24">
          <Reveal y={12}>
            <p className="text-[11px] uppercase tracking-[.24em] text-[color:var(--muted)] font-mono mb-3">What we do</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">Built for every stage</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map(({ icon, title, body, tag }, i) => (
              <Reveal key={title} y={16} delayMs={i * 80}>
                <TiltCard className="h-full rounded-2xl border border-border/80 p-6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-border transition-colors duration-300 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="h-10 w-10 rounded-xl bg-white/8 border border-border/60 flex items-center justify-center" aria-hidden>
                      {icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[color:var(--muted)] font-mono border border-border/60 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-[color:var(--muted)] leading-relaxed">{body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="border-b border-border/80">
        <div className="container-xl px-6 py-16 sm:py-24">
          <Reveal y={12}>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[.24em] text-[color:var(--muted)] font-mono mb-2">Selected work</p>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we&apos;ve built</h2>
              </div>
              <a href="#contact" className="hidden sm:block text-sm text-[color:var(--muted)] hover:text-foreground transition-colors duration-200">
                Work with us →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WORK.map(({ tag, title, body, gradient, speed }, i) => (
              <Reveal key={title} y={16} delayMs={i * 80}>
                <TiltCard className="h-full">
                  <Parallax
                    className={`aspect-[4/3] rounded-2xl border border-border/80 bg-gradient-to-b ${gradient} to-transparent overflow-hidden relative group`}
                    speed={speed}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_50%_0%,rgba(11,92,255,0.12),transparent_70%)]" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <span className="text-[10px] uppercase tracking-widest text-[color:var(--muted)] font-mono mb-2">{tag}</span>
                      <h3 className="text-base font-semibold mb-1">{title}</h3>
                      <p className="text-sm text-[color:var(--muted)] leading-snug">{body}</p>
                    </div>
                  </Parallax>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="border-b border-border/80">
        <div className="container-xl px-6 py-16 sm:py-24">
          <Reveal y={12}>
            <p className="text-[11px] uppercase tracking-[.24em] text-[color:var(--muted)] font-mono mb-2 text-center">Client voices</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-12">What clients say</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ quote, author, company }, i) => (
              <Reveal key={i} y={16} delayMs={i * 80}>
                <TiltCard className="h-full rounded-2xl border border-border/80 p-6 bg-white/[0.02] flex flex-col justify-between gap-6">
                  <p className="text-sm leading-relaxed">{quote}</p>
                  <footer>
                    <p className="text-sm font-medium">{author}</p>
                    <p className="text-xs text-[color:var(--muted)] mt-0.5">{company}</p>
                  </footer>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Client logos */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {CLIENTS.map((name, i) => (
              <Reveal key={name} y={8} delayMs={i * 40}>
                <div className="h-9 rounded-lg bg-white/[0.03] border border-border/60 flex items-center justify-center px-3 hover:bg-white/[0.06] transition-colors duration-200">
                  <span className="text-[11px] font-medium tracking-wide text-[color:var(--muted)]">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="border-b border-border/80">
        <div className="container-xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-14">
          <Reveal y={16}>
            <p className="text-[11px] uppercase tracking-[.24em] text-[color:var(--muted)] font-mono mb-3">About us</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-5">Built for clarity</h2>
            <p className="text-[color:var(--muted)] leading-relaxed">
              We focus on the essentials: crisp typography, generous spacing, and
              careful motion to make complex AI feel simple. Every decision is
              intentional — no feature bloat, no design noise.
            </p>
          </Reveal>
          <Reveal y={16} delayMs={80}>
            <div className="grid grid-cols-2 gap-6 text-sm h-full content-start">
              {[
                ['Clients', 'Startups → Enterprise'],
                ['Focus', 'AI UX, Agents, Platforms'],
                ['Engagements', 'Discovery → Build → Scale'],
                ['Footprint', 'Remote-first, worldwide'],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-border/80 pt-4">
                  <p className="text-[color:var(--muted)] text-xs uppercase tracking-widest font-mono mb-1">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact">
        <div className="container-xl px-6 py-20 sm:py-32 text-center">
          <Reveal y={12}>
            <p className="text-[11px] uppercase tracking-[.24em] text-[color:var(--muted)] font-mono mb-4">Get in touch</p>
          </Reveal>
          <Reveal y={20}>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-3">
              Let&apos;s make something great
            </h2>
          </Reveal>
          <Reveal y={16}>
            <p className="text-[color:var(--muted)] mb-12">Tell us about your project and timeline.</p>
          </Reveal>
          <Reveal y={12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
