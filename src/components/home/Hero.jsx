import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#080D18] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
          alt="Industrial machinery"
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#080D18]/85" />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Green Glow */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#5A9E43]/10 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-3xl">
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5A9E43] sm:text-sm">
                Industrial Engineering Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering
              <span className="block text-[#5A9E43]">Machines</span>
              <span className="block">Built for Industry.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
              Omnitech Systems develops custom machinery, automation systems,
              and engineering solutions designed for demanding industrial
              applications.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <NavLink
                to="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4d8b39]"
              >
                Explore Machines
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-[#5A9E43] hover:text-[#5A9E43]"
              >
                Request a Quote
              </NavLink>
            </div>

            {/* Trust Points */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                'Custom Engineering',
                'Industrial Automation',
                'Application Focused',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-[#5A9E43]" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#111827]/70 p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop"
                alt="Industrial manufacturing equipment"
                className="h-[500px] w-full rounded-xl object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-[#080D18] via-transparent to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-[#0B1120]/90 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A9E43]">
                  Omnitech Systems
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  Precision Engineering & Industrial Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5A9E43]/40 to-transparent" />
    </section>
  )
}

export default Hero
