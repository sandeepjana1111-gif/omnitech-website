import {
  ArrowRight,
  BadgeCheck,
  Cog,
  Gauge,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const reasons = [
  {
    icon: Cog,
    title: 'Custom Engineering',
    description:
      'Solutions are developed around your specific machine, process, and production requirements.',
  },
  {
    icon: BadgeCheck,
    title: 'Precision Focused',
    description:
      'We prioritize accuracy, consistency, and practical engineering throughout the development process.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Solutions',
    description:
      'Industrial solutions designed with reliability, maintainability, and long-term operation in mind.',
  },
  {
    icon: Gauge,
    title: 'Performance Driven',
    description:
      'Our engineering approach focuses on improving productivity, efficiency, and process performance.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden bg-[#0B1120] px-6 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            MAIN CONTENT
        ================================================== */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Why Omnitech
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Engineering With
              <span className="block text-[#5A9E43]">Purpose</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              We focus on understanding the application first and then
              developing practical engineering solutions that deliver dependable
              performance in real industrial environments.
            </p>

            {/* Reasons */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon

                return (
                  <div
                    key={reason.title}
                    className="group rounded-xl border border-slate-800 bg-[#111827] p-5 transition duration-300 hover:border-[#5A9E43]/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5A9E43]/10 text-[#5A9E43] transition duration-300 group-hover:bg-[#5A9E43] group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-base font-semibold">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {reason.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <NavLink
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#5A9E43]"
            >
              Learn More About Us
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] p-2">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
                alt="Industrial engineering and machinery"
                className="h-[380px] w-full rounded-xl object-cover sm:h-[500px]"
              />
            </div>

            {/* Image Overlay */}
            <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-[#080D18]/90 via-transparent to-transparent" />

            {/* Floating Engineering Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#0B1120]/90 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5A9E43]/10 text-[#5A9E43]">
                  <Lightbulb size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Application Focused
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Designed around your requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            STATS
        ================================================== */}
        <div className="mt-16 grid grid-cols-2 border-y border-slate-800 sm:grid-cols-4">
          {[
            ['01', 'Engineering Focus'],
            ['02', 'Custom Solutions'],
            ['03', 'Industrial Applications'],
            ['04', 'Process Driven'],
          ].map(([number, label], index) => (
            <div
              key={number}
              className={`px-4 py-7 text-center sm:px-6 ${
                index < 3 ? 'border-r border-slate-800' : ''
              }`}
            >
              <p className="text-2xl font-bold text-[#5A9E43] sm:text-3xl">
                {number}
              </p>

              <p className="mt-2 text-xs text-slate-500 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
