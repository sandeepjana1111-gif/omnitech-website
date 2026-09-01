import { Menu, X, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#080D18]/95 text-white backdrop-blur-md">
      {/* =====================================================
          TOP CONTACT BAR
      ====================================================== */}
      <div className="hidden border-b border-slate-800/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2.5">
          <NavLink
            to="/contact"
            className="flex items-center gap-2 text-xs text-slate-400 transition hover:text-[#5A9E43]"
          >
            <Phone size={14} />
            +91 90822 4612
          </NavLink>

          <NavLink
            to="/contact"
            className="flex items-center gap-2 text-xs text-slate-400 transition hover:text-[#5A9E43]"
          >
            <Mail size={14} />
            Design@omnitechsystems.in
          </NavLink>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <nav>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Omnitech Systems"
              className="h-11 w-11 object-contain"
            />

            <div className="leading-none">
              <h1 className="text-lg font-bold tracking-[0.08em]">OMNITECH</h1>

              <p className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-[#5A9E43]">
                SYSTEMS
              </p>
            </div>
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium transition ${
                    isActive
                      ? 'text-[#5A9E43]'
                      : 'text-slate-300 hover:text-[#5A9E43]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {isActive && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#5A9E43]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Quote Button */}
            <NavLink
              to="/contact"
              className="rounded-lg bg-[#5A9E43] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4d8b39]"
            >
              Request a Quote
            </NavLink>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-[#5A9E43] hover:text-[#5A9E43] lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================== */}
        {isOpen && (
          <div className="border-t border-slate-800 bg-[#080D18] lg:hidden">
            <div className="mx-auto max-w-7xl px-6 py-5">
              {/* Navigation Links */}
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `border-b border-slate-800/80 py-4 text-sm font-medium transition ${
                        isActive
                          ? 'text-[#5A9E43]'
                          : 'text-slate-300 hover:text-[#5A9E43]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Quote */}
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="mt-5 flex w-full items-center justify-center rounded-lg bg-[#5A9E43] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4d8b39]"
              >
                Request a Quote
              </NavLink>

              {/* Mobile Contact Information */}
              <div className="mt-6 space-y-3 border-t border-slate-800 pt-5">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-xs text-slate-400 transition hover:text-[#5A9E43]"
                >
                  <Phone size={15} className="text-[#5A9E43]" />
                  +91 90822 4612
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-xs text-slate-400 transition hover:text-[#5A9E43]"
                >
                  <Mail size={15} className="text-[#5A9E43]" />

                  <span className="break-all">Design@omnitechsystems.in</span>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
