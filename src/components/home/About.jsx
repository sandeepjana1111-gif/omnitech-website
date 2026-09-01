import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <section className="overflow-hidden bg-[#0B1120] px-6 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* =================================================
              IMAGE
          ================================================== */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] p-2">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
                alt="Omnitech industrial engineering"
                className="h-[360px] w-full rounded-xl object-cover sm:h-[450px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 right-4 rounded-xl border border-slate-700 bg-[#111827]/95 px-5 py-4 shadow-2xl backdrop-blur-md sm:-right-5 sm:px-6 sm:py-5">
              <p className="text-2xl font-bold text-[#5A9E43] sm:text-3xl">
                Custom
              </p>

              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Engineering Solutions
              </p>
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                About Omnitech
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Engineering Solutions
              <span className="block text-[#5A9E43]">Built Around You</span>
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
              <p>
                Omnitech Systems develops custom machinery, automation systems,
                and engineering solutions for specialized industrial
                applications.
              </p>

              <p>
                We combine practical engineering with manufacturing and
                automation expertise to create solutions that are reliable,
                precise, and designed around the requirements of each
                application.
              </p>
            </div>

            {/* Points */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Custom Machine Development',
                'Industrial Automation',
                'Application-Focused Design',
                'Reliable Engineering',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-[#5A9E43]" />

                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <NavLink
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#5A9E43]"
            >
              Discover Omnitech
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
