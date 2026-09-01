import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ product }) => {
  if (!product) {
    return null
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-[#5A9E43]/50 hover:shadow-xl hover:shadow-black/20">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#0B1120]/90 px-3 py-1.5 text-xs font-medium text-[#5A9E43] backdrop-blur-md sm:left-5 sm:top-5">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
          {product.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
          {product.description}
        </p>

        {/* Bottom Link */}
        <div className="mt-auto pt-6">
          <NavLink
            to={`/products/${product.id}`}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#5A9E43]"
          >
            View Machine
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
            />
          </NavLink>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
