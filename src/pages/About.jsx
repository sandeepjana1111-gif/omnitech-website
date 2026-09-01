import {
  ArrowRight,
  BadgeCheck,
  Cog,
  Factory,
  Lightbulb,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const capabilities = [
  {
    icon: Cog,
    title: 'Custom Machine Development',
    description:
      'Purpose-built machinery developed around specific production processes and application requirements.',
  },
  {
    icon: Factory,
    title: 'Industrial Manufacturing',
    description:
      'Practical manufacturing solutions for specialized machines, components, and industrial assemblies.',
  },
  {
    icon: Lightbulb,
    title: 'Engineering & R&D',
    description:
      'Engineering support for developing concepts, improving processes, and solving specialized technical challenges.',
  },
  {
    icon: ShieldCheck,
    title: 'Automation Solutions',
    description:
      'Automation systems designed to improve productivity, consistency, and process control.',
  },
]

const About = () => {
  return (
    <main className="bg-[#0B1120] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="border-b border-slate-800 bg-[#080D18] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                About Omnitech
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Engineering Solutions
              <span className="block text-[#5A9E43]">Built for Industry</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
              Omnitech Systems develops custom machinery, automation solutions,
              and engineering systems for specialized industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY INTRODUCTION
      ====================================================== */}
      <section className="overflow-hidden px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] p-2">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
                  alt="Industrial engineering and manufacturing"
                  className="h-[360px] w-full rounded-xl object-cover sm:h-[480px]"
                />
              </div>

              <div className="absolute -bottom-5 right-4 rounded-xl border border-slate-700 bg-[#111827]/95 px-5 py-4 shadow-2xl backdrop-blur-md sm:-right-5 sm:px-6 sm:py-5">
                <p className="text-2xl font-bold text-[#5A9E43] sm:text-3xl">
                  Engineering
                </p>

                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Driven by Application
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#5A9E43]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                  Who We Are
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Practical Engineering
                <span className="block text-[#5A9E43]">
                  For Real Applications
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
                <p>
                  Omnitech Systems focuses on developing practical engineering
                  solutions for specialized industrial requirements.
                </p>

                <p>
                  Our approach combines machine design, manufacturing,
                  automation, and engineering knowledge to create solutions that
                  are built around the application.
                </p>

                <p>
                  From individual machines to integrated systems, our goal is to
                  provide dependable solutions that support efficient and
                  consistent industrial operations.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Application-Focused Engineering',
                  'Custom Machine Solutions',
                  'Industrial Automation',
                  'Practical Manufacturing',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <BadgeCheck size={18} className="shrink-0 text-[#5A9E43]" />

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="bg-[#080D18] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43]">
                <Target size={24} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43]">
                Our Mission
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Solve Industrial Problems Through Engineering
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Our mission is to develop practical, reliable, and
                application-specific engineering solutions that help industrial
                operations improve their processes and productivity.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43]">
                <Lightbulb size={24} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43]">
                Our Vision
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Build Better Solutions Through Innovation
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                We aim to become a trusted engineering partner for industries
                seeking customized machinery, automation, and specialized
                manufacturing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Our Capabilities
              </span>
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              What We
              <span className="text-[#5A9E43]"> Do</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Our capabilities cover the complete engineering journey, from
              understanding an application to designing and developing a
              practical industrial solution.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon

              return (
                <div
                  key={capability.title}
                  className="group rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5A9E43]/50 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43] transition duration-300 group-hover:bg-[#5A9E43] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {capability.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#080D18] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-[#111827] px-6 py-12 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
              Work With Us
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have an Engineering Requirement?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Let's discuss your application and explore a custom engineering
              solution for your requirements.
            </p>

            <NavLink
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-[#5A9E43] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4d8b39]"
            >
              Discuss Your Requirement
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
