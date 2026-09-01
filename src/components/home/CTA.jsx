import { ArrowRight, Mail, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#080D18] px-6 py-20 text-white sm:py-24 lg:py-28">
      {/* Decorative Glow */}
      <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#5A9E43]/10 blur-3xl" />

      <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#5A9E43]/5 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">
          <div className="grid lg:grid-cols-5">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div className="px-6 py-12 sm:px-10 sm:py-14 lg:col-span-3 lg:px-14 lg:py-16">
              {/* Label */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#5A9E43]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                  Let's Work Together
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Have an Engineering
                <span className="block text-[#5A9E43]">Challenge?</span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Whether you need a custom machine, automation solution, or
                specialized manufacturing support, our team can help turn your
                requirements into a practical engineering solution.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <NavLink
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4d8b39]"
                >
                  Discuss Your Requirement
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </NavLink>

                <NavLink
                  to="/products"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-[#5A9E43] hover:text-[#5A9E43]"
                >
                  Explore Machines
                </NavLink>
              </div>
            </div>

            {/* =================================================
                RIGHT CONTACT PANEL
            ================================================== */}
            <div className="border-t border-slate-800 bg-[#0B1120] px-6 py-10 sm:px-10 lg:col-span-2 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
              <p className="text-sm font-semibold text-white">Get in touch</p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Speak with our team about your project or machine requirement.
              </p>

              <div className="mt-8 space-y-5">
                {/* Phone */}
                <NavLink
                  to="/contact"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43] transition group-hover:bg-[#5A9E43] group-hover:text-white">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Call us</p>

                    <p className="mt-1 text-sm font-medium text-slate-300 transition group-hover:text-[#5A9E43]">
                      +91 90822 4612
                    </p>
                  </div>
                </NavLink>

                {/* Email */}
                <NavLink
                  to="/contact"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43] transition group-hover:bg-[#5A9E43] group-hover:text-white">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email us</p>

                    <p className="mt-1 break-all text-sm font-medium text-slate-300 transition group-hover:text-[#5A9E43]">
                      Design@omnitechsystems.in
                    </p>
                  </div>
                </NavLink>
              </div>

              {/* Bottom Note */}
              <div className="mt-8 border-t border-slate-800 pt-6">
                <p className="text-xs leading-6 text-slate-500">
                  Custom engineering solutions for industrial applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
