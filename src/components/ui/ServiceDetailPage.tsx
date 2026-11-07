import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'
import PageCTA from './PageCTA'
import PageMeta from './PageMeta'
import { PROJECTS } from '../../data/projects'
import type { ProcessStep } from '../../data/company'

interface ServiceDetailPageProps {
  eyebrow: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  heading: string
  body: string
  bullets: string[]
  ctaEyebrow: string
  ctaHeading: string
  ctaSubtext: string
  ctaImage?: string
  reverse?: boolean
  background?: 'white' | 'soft'
  /** Project ids from PROJECTS that showcase this scope. */
  relatedProjectIds?: string[]
  /** Optional numbered process to render between the intro and related work. */
  process?: { heading: string; intro: string; steps: ProcessStep[] }
}

export default function ServiceDetailPage({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  heading,
  body,
  bullets,
  ctaEyebrow,
  ctaHeading,
  ctaSubtext,
  ctaImage,
  reverse = false,
  background = 'soft',
  relatedProjectIds = [],
  process,
}: ServiceDetailPageProps) {
  const soft = background === 'soft'
  const baseBg = soft ? 'ox-section-soft' : 'bg-white'
  const altBg = soft ? 'bg-white' : 'ox-section-soft'
  const related = relatedProjectIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p) => p !== undefined)

  return (
    <div className={`${soft ? 'bg-[#f5f7fb]' : 'bg-white'} pt-20`}>
      <PageMeta title={title} description={subtitle} />

      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <span className="ox-eyebrow">{eyebrow}</span>
            <h1 className="ox-title-xl">{title}</h1>
            <p className="ox-subtitle mx-auto mt-4 max-w-2xl">{subtitle}</p>
          </FadeIn>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction={reverse ? 'left' : 'right'} className={reverse ? 'lg:order-2' : ''}>
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
                <img src={image} alt={imageAlt} className="h-[430px] w-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction={reverse ? 'right' : 'left'} className={reverse ? 'lg:order-1' : ''}>
              <h2 className="ox-title-lg">{heading}</h2>
              <p className="ox-body mt-5">{body}</p>
              <ul className="mt-7 space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle size={20} className="mt-0.5 shrink-0 text-[var(--navy)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="ox-btn-primary mt-8">
                Request a Bid <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {process && (
        <section className={`ox-section ${altBg}`}>
          <div className="ox-container">
            <FadeIn className="mb-12 max-w-2xl">
              <span className="ox-eyebrow">How We Work</span>
              <h2 className="ox-title-lg">{process.heading}</h2>
              <p className="ox-body mt-4">{process.intro}</p>
            </FadeIn>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {process.steps.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.06} className="h-full">
                  <li className="ox-card flex h-full flex-col p-6">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-bold text-white">
                      {step.num}
                    </span>
                    <h3 className="text-base font-bold leading-snug text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{step.desc}</p>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className={`ox-section ${process ? baseBg : altBg}`}>
          <div className="ox-container">
            <FadeIn className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="ox-eyebrow">Related Work</span>
                <h2 className="ox-title-lg">Projects with this scope.</h2>
              </div>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--navy)] transition hover:gap-3"
              >
                View full gallery <ArrowRight size={16} />
              </Link>
            </FadeIn>
            <div className="grid auto-rows-[240px] gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((project, i) => (
                <FadeIn key={project.id} delay={i * 0.08}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="group relative block h-full overflow-hidden rounded-xl shadow-[var(--shadow-sm)]"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d24]/90 to-transparent p-6 text-white">
                      <span className="block text-lg font-bold">{project.title}</span>
                      {project.productLine && (
                        <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                          {project.productLine}
                        </span>
                      )}
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTA eyebrow={ctaEyebrow} heading={ctaHeading} subtext={ctaSubtext} image={ctaImage ?? image} />
    </div>
  )
}
