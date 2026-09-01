import { ArrowRight, CheckCircle2, Factory, Settings } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import ProjectCard from '../components/home/ProjectCard'

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
  {
    id: 'hydraulic-system-project',
    title: 'Hydraulic System Project',
    category: 'Hydraulic Systems',
    description:
      'A specialized hydraulic system engineered for reliable industrial machine operation.',
    image:
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'precision-production-machine',
    title: 'Precision Production Machine',
    category: 'Precision Engineering',
    description:
      'A precision-focused machine solution developed to improve repeatability and production performance.',
    image:
      'https://images.unsplash.com/photo-1581091870622-3e7e0b4c5f1a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'electromechanical-system',
    title: 'Electromechanical System',
    category: 'Electromechanical',
    description:
      'An integrated mechanical and electrical system developed for controlled industrial operation.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop',
  },
]

const industries = [
  'Industrial Manufacturing',
  'Automation & Robotics',
  'Refrigeration & HVAC',
  'Automotive',
  'Engineering & Fabrication',
  'Specialized Production',
]

const Projects = () => {
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
                Our Projects
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Engineering Projects
              <span className="block text-[#5A9E43]">
                That Solve Real Problems
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
              Explore examples of engineering, automation, and manufacturing
              solutions developed for specialized industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ====================================================== */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Featured Work
              </span>
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Selected
              <span className="text-[#5A9E43]"> Engineering Projects</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              A selection of engineering, automation, and manufacturing
              solutions developed around industrial applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING APPROACH
      ====================================================== */}
      <section className="bg-[#080D18] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] p-2">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
                alt="Industrial engineering project"
                className="h-[360px] w-full rounded-xl object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-[#0B1120]/90 p-5 backdrop-blur-md sm:bottom-8 sm:left-8">
              <p className="text-2xl font-bold text-[#5A9E43] sm:text-3xl">
                Custom
              </p>

              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Engineered Solutions
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Our Approach
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Every Project Starts
              <span className="block text-[#5A9E43]">With the Application</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
              We focus on understanding the process first and then developing an
              engineering solution around the actual requirements of the
              application.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Understand the application',
                'Define engineering requirements',
                'Develop the machine or system',
                'Manufacture and assemble',
                'Test and prepare for implementation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="shrink-0 text-[#5A9E43]" />

                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <NavLink
              to="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-lg bg-[#5A9E43] px-6 py-3 text-sm font-semibold transition hover:bg-[#4d8b39]"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#5A9E43]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
                Industries
              </span>

              <span className="h-px w-10 bg-[#5A9E43]" />
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Industries We
              <span className="text-[#5A9E43]"> Serve</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Our engineering capabilities can be adapted to different
              industrial environments and specialized processes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="group flex items-center gap-5 rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5A9E43]/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5A9E43]/10 text-[#5A9E43] transition duration-300 group-hover:bg-[#5A9E43] group-hover:text-white">
                  {index % 2 === 0 ? (
                    <Factory size={23} />
                  ) : (
                    <Settings size={23} />
                  )}
                </div>

                <div>
                  <h3 className="font-semibold">{industry}</h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Engineering solutions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#080D18] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-800 bg-[#111827] px-6 py-12 text-center sm:px-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A9E43] sm:text-sm">
              Start a Project
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have an Engineering Challenge?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Share your requirements with our team and let's explore the right
              engineering solution for your application.
            </p>

            <NavLink
              to="/contact"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#5A9E43] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#4d8b39] sm:w-auto"
            >
              Discuss Your Project
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

export default Projects
