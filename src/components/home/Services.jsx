import {
  ArrowRight,
  Bot,
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
      'Custom machinery designed and developed around specific industrial applications and production requirements.',
  },
  {
    icon: Bot,
    title: 'Industrial Automation',
    description:
      'Automation systems designed to improve productivity, consistency, process control, and operational efficiency.',
  },
  {
    icon: Lightbulb,
    title: 'R&D Consultancy',
    description:
      'Engineering research and development support for transforming concepts into practical industrial solutions.',
  },
  {
    icon: Factory,
    title: 'Contract Manufacturing',
    description:
      'Manufacturing support for specialized components, assemblies, machines, and industrial equipment.',
  },
  {
    icon: Settings,
    title: 'Hydraulic Systems',
    description:
      'Reliable hydraulic solutions engineered for demanding industrial machinery and production environments.',
  },
  {
    icon: Wrench,
    title: 'Pneumatic Systems',
    description:
      'Pneumatic solutions developed for efficient, reliable, and application-specific industrial processes.',
  },
]

const Services = () => {
  return (
    <section className="bg-[#080D18] px-6 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================== */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Our Services
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Engineering Capabilities
              <span className="block text-[#5A9E43]">That Deliver Results</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              From custom machine development to industrial automation, we
              provide engineering solutions designed around your process and
              production requirements.
            </p>
          </div>

          <NavLink
            to="/services"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#5A9E43]"
          >
            View All Services
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </div>

        {/* =================================================
            SERVICE GRID
        ================================================== */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5A9E43]/50 hover:shadow-xl hover:shadow-black/20 sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43] transition duration-300 group-hover:bg-[#5A9E43] group-hover:text-white">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold leading-snug sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                {/* Link */}
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

        {/* =================================================
            BOTTOM STRIP
        ================================================== */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-slate-800 bg-[#111827] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-semibold text-white">
              Need a specialized engineering solution?
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Tell us about your application and requirements.
            </p>
          </div>

          <NavLink
            to="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4d8b39] sm:w-auto"
          >
            Start a Project
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Services
