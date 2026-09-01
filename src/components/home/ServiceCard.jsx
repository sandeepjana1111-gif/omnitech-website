import { ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  if (!service) {
    return null
  }

  const Icon = service.icon

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5A9E43]/50 hover:shadow-xl hover:shadow-black/20 sm:p-7">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43] transition duration-300 group-hover:bg-[#5A9E43] group-hover:text-white">
        {Icon && <Icon size={24} />}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="mt-6 text-lg font-semibold leading-snug text-white sm:text-xl">
          {service.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
          {service.description}
        </p>

        {/* Link */}
        <div className="mt-auto pt-6">
          <NavLink
            to="/contact"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#5A9E43]"
          >
            Discuss Requirement
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

export default ServiceCard
