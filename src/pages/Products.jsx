import { ArrowRight, Factory } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import ProductCard from '../components/home/ProductCard'
import { products } from '../data/products'

const Products = () => {
  return (
    <main className="bg-[#0B1120] text-white">
      {/* Hero */}
      <section className="border-b border-slate-800 bg-[#080D18] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Our Products
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Industrial Machines
              <span className="block text-[#5A9E43]">
                Built for Performance
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
              Explore our range of engineered machinery and automation solutions
              designed for demanding industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Featured Machines
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Our Engineering Solutions
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Machinery developed for specialized manufacturing, automation,
                and industrial production requirements.
              </p>
            </div>

            <NavLink
              to="/contact"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#5A9E43]"
            >
              Need a Custom Machine?
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>

          {/* Product Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">
            <div className="relative flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="absolute -right-8 -top-12 opacity-[0.03]">
                <Factory size={190} />
              </div>

              <div className="relative">
                <p className="text-sm font-semibold sm:text-base">
                  Looking for a machine built around your process?
                </p>

                <p className="mt-2 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
                  Tell us about your application and requirements. We can
                  discuss a suitable engineering solution.
                </p>
              </div>

              <NavLink
                to="/contact"
                className="group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#4d8b39] sm:w-auto"
              >
                Request a Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Products
