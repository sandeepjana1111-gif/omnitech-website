import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Factory,
  Settings2,
} from 'lucide-react'
import { NavLink, useParams } from 'react-router-dom'

import { products } from '../data/products'

const ProductDetails = () => {
  const { id } = useParams()

  const product = products.find((item) => item.id === id)

  // Invalid product ID
  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#0B1120] px-6 text-white">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5A9E43]/10 text-[#5A9E43]">
            <Factory size={30} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#5A9E43]">
            Product Not Found
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Machine Not Available
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            The machine you are looking for could not be found. Please return to
            our products page and select a machine.
          </p>

          <NavLink
            to="/products"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-[#5A9E43] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4d8b39]"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Products
          </NavLink>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#0B1120] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="border-b border-slate-800 bg-[#080D18] px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Back */}
          <NavLink
            to="/products"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-[#5A9E43]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Products
          </NavLink>

          {/* Category */}
          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#5A9E43]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
              {product.category}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {product.title}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
            {product.description}
          </p>
        </div>
      </section>

      {/* =====================================================
          PRODUCT CONTENT
      ====================================================== */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Product Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[350px] w-full rounded-xl object-cover sm:h-[480px]"
                />
              </div>

              {/* Category Badge */}
              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-[#0B1120]/90 px-4 py-2 text-xs font-medium text-[#5A9E43] backdrop-blur-md">
                {product.category}
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Machine Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {product.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  'Application-specific machine design',
                  'Industrial-grade construction',
                  'Designed for reliable operation',
                  'Customizable according to requirements',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#5A9E43]"
                    />

                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <NavLink
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#4d8b39]"
                >
                  Request a Quote
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </NavLink>

                <NavLink
                  to="/products"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-[#5A9E43] hover:text-[#5A9E43]"
                >
                  View Other Machines
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING FEATURES
      ====================================================== */}
      <section className="bg-[#080D18] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
              Engineering Focus
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Designed Around the
              <span className="text-[#5A9E43]"> Application</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Settings2,
                title: 'Custom Configuration',
                description:
                  'Machine configuration can be adapted to specific production and process requirements.',
              },
              {
                icon: Factory,
                title: 'Industrial Application',
                description:
                  'Developed for demanding production environments where reliability and consistency matter.',
              },
              {
                icon: CheckCircle2,
                title: 'Quality Focus',
                description:
                  'Engineering decisions are focused on dependable operation and practical implementation.',
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-[#111827] p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#0B1120] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-[#111827] px-6 py-12 text-center sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
              Custom Requirements
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Need This Machine Customized?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Tell us about your application and production requirements. We can
              discuss possible configurations and engineering solutions.
            </p>

            <NavLink
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-[#5A9E43] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#4d8b39]"
            >
              Discuss Your Requirement
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

export default ProductDetails
