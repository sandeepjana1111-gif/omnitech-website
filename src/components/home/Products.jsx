import { ArrowRight, Factory } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import ProductCard from './ProductCard'
import { products } from '../../data/products'

const Products = () => {
  return (
    <section className="bg-[#0B1120] px-6 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================== */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Our Machines
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Engineered Machine
              <span className="block text-[#5A9E43]">Solutions</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Explore our range of industrial machinery designed for precision,
              reliability, and demanding production applications.
            </p>
          </div>

          <NavLink
            to="/products"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#5A9E43]"
          >
            View All Machines
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </div>

        {/* =================================================
            FEATURED PRODUCTS
        ================================================== */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">
          <div className="relative flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Decorative Icon */}
            <div className="absolute -right-6 -top-10 opacity-[0.04]">
              <Factory size={180} />
            </div>

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5A9E43]/10 text-[#5A9E43]">
                  <Factory size={20} />
                </div>

                <p className="text-sm font-semibold text-white sm:text-base">
                  Looking for a custom machine?
                </p>
              </div>

              <p className="mt-3 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
                We can develop application-specific machinery around your
                production requirements.
              </p>
            </div>

            <NavLink
              to="/contact"
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4d8b39] sm:w-auto"
            >
              Discuss Your Requirement
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
