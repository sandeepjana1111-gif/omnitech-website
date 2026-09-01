import { ArrowRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
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
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let's Build the Right
              <span className="block text-[#5A9E43]">Engineering Solution</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
              Tell us about your machine, automation, or manufacturing
              requirement and our team can discuss a suitable engineering
              solution.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}
            <div className="lg:col-span-2">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#5A9E43]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Discuss Your
                <span className="block text-[#5A9E43]">Requirement</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                Whether you are developing a new machine, improving an existing
                process, or looking for an automation solution, get in touch
                with our team.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">
                {/* Phone */}
                <NavLink
                  to="/contact"
                  className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-[#111827] p-5 transition hover:border-[#5A9E43]/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#5A9E43]/10 text-[#5A9E43] transition group-hover:bg-[#5A9E43] group-hover:text-white">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Phone</p>

                    <p className="mt-1 text-sm font-medium text-slate-300 transition group-hover:text-[#5A9E43]">
                      +91 90822 4612
                    </p>
                  </div>
                </NavLink>

                {/* Email */}
                <NavLink
                  to="/contact"
                  className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-[#111827] p-5 transition hover:border-[#5A9E43]/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#5A9E43]/10 text-[#5A9E43] transition group-hover:bg-[#5A9E43] group-hover:text-white">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email</p>

                    <p className="mt-1 break-all text-sm font-medium text-slate-300 transition group-hover:text-[#5A9E43]">
                      Design@omnitechsystems.in
                    </p>
                  </div>
                </NavLink>

                {/* Location */}
                <NavLink
                  to="/contact"
                  className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-[#111827] p-5 transition hover:border-[#5A9E43]/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#5A9E43]/10 text-[#5A9E43] transition group-hover:bg-[#5A9E43] group-hover:text-white">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Location</p>

                    <p className="mt-1 text-sm font-medium text-slate-300">
                      India
                    </p>
                  </div>
                </NavLink>

                {/* Working Hours */}
                <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-[#111827] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#5A9E43]/10 text-[#5A9E43]">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Working Hours</p>

                    <p className="mt-1 text-sm font-medium text-slate-300">
                      Monday – Saturday
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                CONTACT FORM
            ================================================== */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                    Send an Enquiry
                  </p>

                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Tell Us About Your Project
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Share a few details about your requirement and we'll get
                    back to you.
                  </p>
                </div>

                <form className="mt-8 space-y-5">
                  {/* Name + Company */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#5A9E43]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-lg border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#5A9E43]"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#5A9E43]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91"
                        className="w-full rounded-lg border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#5A9E43]"
                      />
                    </div>
                  </div>

                  {/* Requirement */}
                  <div>
                    <label
                      htmlFor="requirement"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Requirement
                    </label>

                    <select
                      id="requirement"
                      defaultValue=""
                      className="w-full rounded-lg border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-slate-400 outline-none transition focus:border-[#5A9E43]"
                    >
                      <option value="" disabled>
                        Select your requirement
                      </option>

                      <option value="machine-design">
                        Machine Design & Manufacturing
                      </option>

                      <option value="automation">Industrial Automation</option>

                      <option value="rd">R&D Consultancy</option>

                      <option value="contract">Contract Manufacturing</option>

                      <option value="hydraulic">Hydraulic Systems</option>

                      <option value="pneumatic">Pneumatic Systems</option>

                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Project Details
                    </label>

                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Tell us about your machine, process, production requirements, or project..."
                      className="w-full resize-none rounded-lg border border-slate-700 bg-[#0B1120] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#5A9E43]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4d8b39]"
                  >
                    Send Enquiry
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-[#080D18] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-[#111827] px-6 py-12 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
              Custom Engineering
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have a Specific Machine Requirement?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Our engineering approach is focused on understanding the
              application and developing a practical solution around it.
            </p>

            <NavLink
              to="/products"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-[#5A9E43] hover:text-[#5A9E43]"
            >
              Explore Our Machines
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

export default Contact
