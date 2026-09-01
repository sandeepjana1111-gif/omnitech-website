import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 'industrial-automation-system',
    title: 'Industrial Automation System',
    category: 'Automation',
    description:
      'A customized automation solution designed to improve production efficiency, consistency, and process control.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'custom-machine-development',
    title: 'Custom Machine Development',
    category: 'Machine Development',
    description:
      'A purpose-built industrial machine developed around a specialized manufacturing application.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'manufacturing-solution',
    title: 'Manufacturing Solution',
    category: 'Manufacturing',
    description:
      'An integrated engineering and manufacturing solution created to support a demanding production environment.',
    image:
      'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=1600&auto=format&fit=crop',
  },
]

const Projects = () => {
  return (
    <section className="bg-[#080D18] px-6 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================== */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Our Projects
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Engineering Projects
              <span className="block text-[#5A9E43]">Built to Perform</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              A selection of engineering, automation, and manufacturing
              solutions developed around real industrial applications.
            </p>
          </div>

          <NavLink
            to="/projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-[#5A9E43]"
          >
            View All Projects
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </div>

        {/* =================================================
            PROJECT GRID
        ================================================== */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-slate-800 bg-[#111827] px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-white sm:text-base">
              Have a similar engineering requirement?
            </p>

            <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
              Let's discuss your application and develop a solution around it.
            </p>
          </div>

          <NavLink
            to="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4d8b39] sm:w-auto"
          >
            Start Your Project
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Projects
