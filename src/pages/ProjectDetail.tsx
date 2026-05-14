import { ArrowLeft, Building2, CheckCircle } from 'lucide-react'
import { type ReactElement } from 'react'
import { Link, useParams } from 'react-router-dom'
import FadeIn from '../components/ui/FadeIn'
import { PROJECTS } from '../data/projects'

interface ProjectFact {
  icon: ReactElement
  label: string
  value: string | number
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="bg-[#f5f7fb] pt-20">
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
            {project.location && <p className="ox-subtitle mt-3">{project.location}</p>}
          </FadeIn>

          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn direction="right">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
                <img src={project.coverImage} alt={project.title} className="max-h-[560px] w-full object-cover" />
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
                  <p className="italic leading-8 text-[var(--text-secondary)]">
                    Detailed information for this project has not been provided yet.
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
              <FadeIn key={img} delay={index * 0.06}>
                <div className="overflow-hidden rounded-xl shadow-[var(--shadow-sm)]">
                  <img
                    src={img}
                    alt={`${project.title} - photo ${index + 1}`}
                    className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
