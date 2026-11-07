import { ArrowLeft, ArrowRight, Building2, CheckCircle } from 'lucide-react'
import { type ReactElement } from 'react'
import { Link, useParams } from 'react-router-dom'
import FadeIn from '../components/ui/FadeIn'
import PageCTA from '../components/ui/PageCTA'
import PageMeta from '../components/ui/PageMeta'
import { PROJECTS } from '../data/projects'

interface ProjectFact {
  icon: ReactElement
  label: string
  value: string | number
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const index = PROJECTS.findIndex((p) => p.id === id)
  const project = index >= 0 ? PROJECTS[index] : undefined
  const prev = index > 0 ? PROJECTS[index - 1] : undefined
  const next = index >= 0 && index < PROJECTS.length - 1 ? PROJECTS[index + 1] : undefined

  if (!project) {
    return (
      <div className="bg-[#f5f7fb] pt-20">
        <PageMeta title="Project Not Found" />
        <section className="ox-section">
          <div className="ox-container text-center">
            <h1 className="ox-title-lg">Project not found.</h1>
            <Link to="/gallery" className="ox-btn-primary mt-8">
              Back to Gallery
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const factCandidates: Array<ProjectFact | null> = [
    project.generalContractor
      ? {
      icon: <Building2 size={20} />,
      label: 'General Contractor',
      value: project.generalContractor,
        }
      : null,
    project.productLine
      ? {
      icon: <CheckCircle size={20} />,
      label: 'Scope',
      value: project.productLine,
        }
      : null,
    project.windowsCount
      ? {
      icon: <CheckCircle size={20} />,
      label: 'Windows Installed',
      value: project.windowsCount,
        }
      : null,
    project.mirrorsCount
      ? {
      icon: <CheckCircle size={20} />,
      label: 'Mirrors Installed',
      value: project.mirrorsCount,
        }
      : null,
  ]
  const facts = factCandidates.filter((fact): fact is ProjectFact => fact !== null)

  return (
    <div className="bg-[#f5f7fb] pt-20">
      <PageMeta
        title={project.title}
        description={
          project.description?.[0] ??
          `${project.title}: window and glass installation by Ox Glass on a Utah new construction project.`
        }
      />
      <section className="ox-section">
        <div className="ox-container">
          <Link
            to="/gallery"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--navy)]"
          >
            <ArrowLeft size={16} /> Back to Gallery
          </Link>

          <FadeIn className="mb-12">
            <h1 className="ox-title-xl">{project.title}</h1>
            <p className="ox-subtitle mt-3">
              {[project.location, project.productLine ?? 'Window & Glass Installation'].filter(Boolean).join(' · ')}
            </p>
          </FadeIn>

          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn direction="right">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
                <img src={project.coverImage} alt={project.title} fetchPriority="high" className="max-h-[560px] w-full object-cover" />
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="ox-card p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-slate-950">Project Overview</h2>

                {project.description && project.description.length > 0 ? (
                  project.description.map((paragraph) => (
                    <p key={paragraph} className="mb-4 leading-8 text-[var(--text-secondary)]">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="leading-8 text-[var(--text-secondary)]">
                    Ox Glass provided window and glass installation for this
                    project, coordinating product delivery and field work around
                    the active construction schedule. Browse the gallery below for
                    a closer look at the finished installation.
                  </p>
                )}

                {facts.length > 0 && (
                  <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                    {facts.map((fact) => (
                      <div key={fact.label} className="flex items-start gap-3 text-sm text-slate-950">
                        <span className="mt-0.5 text-[var(--navy)]">{fact.icon}</span>
                        <span className="font-bold">
                          {fact.label}: <span className="font-normal text-[var(--text-secondary)]">{fact.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="ox-container">
          <FadeIn className="mb-12 text-center">
            <h2 className="ox-title-lg">Project Gallery</h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.images.map((img, index) => (
              <FadeIn key={img} delay={Math.min(index, 5) * 0.06}>
                <div className="overflow-hidden rounded-xl shadow-[var(--shadow-sm)]">
                  <img
                    src={img}
                    alt={`${project.title} - photo ${index + 1}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          <nav
            aria-label="More projects"
            className="mt-14 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                to={`/projects/${prev.id}`}
                className="group flex items-center gap-3 rounded-xl border border-[rgba(26,43,109,0.08)] p-4 transition hover:border-[var(--navy)]"
              >
                <ArrowLeft size={18} className="shrink-0 text-[var(--navy)] transition group-hover:-translate-x-1" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">Previous</span>
                  <span className="block font-bold text-slate-950">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/projects/${next.id}`}
                className="group flex items-center justify-end gap-3 rounded-xl border border-[rgba(26,43,109,0.08)] p-4 text-right transition hover:border-[var(--navy)]"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">Next</span>
                  <span className="block font-bold text-slate-950">{next.title}</span>
                </span>
                <ArrowRight size={18} className="shrink-0 text-[var(--navy)] transition group-hover:translate-x-1" />
              </Link>
            )}
          </nav>
        </div>
      </section>

      <PageCTA
        eyebrow="Your Project"
        heading="Planning something similar?"
        subtext="Send us your plans, unit counts, and schedule and one of our estimators will come back with product options and pricing."
        image={project.coverImage}
      />
    </div>
  )
}
