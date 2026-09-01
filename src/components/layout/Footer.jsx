import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const services = [
    'Machine Design & Manufacturing',
    'Automation Solutions',
    'R&D Consultancy',
    'Contract Manufacturing',
    'Hydraulic Systems',
    'Pneumatic Systems',
  ]

  return (
    <footer className="border-t border-slate-800 bg-[#060B14] text-white">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <NavLink to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Omnitech Systems"
                className="h-11 w-11 object-contain"
              />

              <div className="leading-none">
                <h2 className="text-lg font-bold tracking-[0.08em]">
                  OMNITECH
                </h2>

                <p className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-[#5A9E43]">
                  SYSTEMS
                </p>
              </div>
            </NavLink>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Engineering, manufacturing, and automation solutions developed for
              specialized industrial applications.
            </p>

            <NavLink
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-[#5A9E43]"
            >
              Start a Conversation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </NavLink>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="w-fit text-sm text-slate-400 transition hover:text-[#5A9E43]"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {services.map((service) => (
                <NavLink
                  key={service}
                  to="/services"
                  className="w-fit text-sm leading-5 text-slate-400 transition hover:text-[#5A9E43]"
                >
                  {service}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <NavLink to="/contact" className="group flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#5A9E43]" />

                <span className="text-sm text-slate-400 transition group-hover:text-[#5A9E43]">
                  +91 90822 4612
                </span>
              </NavLink>

              {/* Email */}
              <NavLink to="/contact" className="group flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#5A9E43]" />

                <span className="break-all text-sm text-slate-400 transition group-hover:text-[#5A9E43]">
                  Design@omnitechsystems.in
                </span>
              </NavLink>

              {/* Location */}
              <NavLink to="/contact" className="group flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#5A9E43]" />

                <span className="text-sm text-slate-400 transition group-hover:text-[#5A9E43]">
                  India
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Omnitech Systems. All rights reserved.
          </p>

          <div className="flex gap-5">
            <NavLink to="/" className="transition hover:text-slate-300">
              Privacy Policy
            </NavLink>

            <NavLink to="/" className="transition hover:text-slate-300">
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
