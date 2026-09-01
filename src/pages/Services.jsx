import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cog,
  Factory,
  Lightbulb,
  Settings,
  Wrench,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const services = [
  {
    icon: Cog,
    title: 'Machine Design & Manufacturing',
    description:
      'Custom machine design and manufacturing solutions developed around specific production requirements.',
  },
  {
    icon: Lightbulb,
    title: 'R&D Consultancy',
    description:
      'Engineering research and development support to transform concepts into practical industrial solutions.',
  },
  {
    icon: Factory,
    title: 'Contract Manufacturing',
    description:
      'Manufacturing support for specialized components, assemblies, and industrial equipment.',
  },
  {
    icon: Bot,
    title: 'Automation Solutions',
    description:
      'Industrial automation systems designed to improve productivity, consistency, and process efficiency.',
  },
  {
    icon: Settings,
    title: 'Hydraulic Systems',
    description:
      'Hydraulic solutions engineered for demanding industrial applications and specialized machinery.',
  },
  {
    icon: Wrench,
    title: 'Pneumatic Systems',
    description:
      'Pneumatic systems developed for efficient and reliable industrial processes.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We study your application, production process, and engineering requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We develop a practical machine or system concept around your requirements.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'The approved solution is manufactured and assembled with attention to quality and precision.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'The completed solution is tested and prepared for implementation.',
  },
]

const Services = () => {
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
                Our Services
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Engineering Solutions
              <span className="block text-[#5A9E43]">
                Built Around Your Needs
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
              From machine design and manufacturing to automation and
              specialized engineering systems, we develop practical solutions
              for industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Our Engineering
              <span className="text-[#5A9E43]"> Capabilities</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              We combine engineering expertise, manufacturing capability, and
              automation knowledge to develop solutions for specialized
              industrial requirements.
            </p>
          </div>

          {/* Service Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5A9E43]/50 hover:shadow-xl hover:shadow-black/20 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43] transition duration-300 group-hover:bg-[#5A9E43] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-snug sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>

                  <NavLink
                    to="/contact"
                    className="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-[#5A9E43]"
                  >
                    Discuss Requirement
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </NavLink>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ====================================================== */}
      <section className="bg-[#080D18] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] p-2">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
                alt="Industrial engineering"
                className="h-[360px] w-full rounded-xl object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-[#0B1120]/90 p-5 backdrop-blur-md sm:bottom-8 sm:left-8">
              <p className="text-2xl font-bold text-[#5A9E43] sm:text-3xl">
                Application
              </p>

              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Focused Engineering
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Our Approach
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Practical Engineering.
              <span className="block text-[#5A9E43]">Reliable Results.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
              Every project starts with understanding the application. We focus
              on developing solutions that are practical to manufacture,
              operate, maintain, and integrate.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Application-focused engineering',
                'Custom machine development',
                'Industrial-grade solutions',
                'Focus on reliability and maintainability',
                'Flexible customization',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="shrink-0 text-[#5A9E43]" />

                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <NavLink
              to="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-lg bg-[#5A9E43] px-6 py-3 text-sm font-semibold transition hover:bg-[#4d8b39]"
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

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Our Process
              </span>

              <span className="h-px w-10 bg-[#5A9E43]" />
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              From Concept to
              <span className="text-[#5A9E43]"> Solution</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              A structured engineering process helps turn industrial
              requirements into practical solutions.
            </p>
          </div>

          {/* Process Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5A9E43]/50 sm:p-7"
              >
                <span className="text-4xl font-bold text-[#5A9E43]/25 transition group-hover:text-[#5A9E43]/40">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#080D18] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-[#111827] px-6 py-12 text-center sm:px-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
              Start Your Project
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have an Engineering Requirement?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Tell us about your machine, automation, or manufacturing
              requirement and let's discuss the right solution.
            </p>

            <NavLink
              to="/contact"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#4d8b39] sm:w-auto"
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

export default Services
