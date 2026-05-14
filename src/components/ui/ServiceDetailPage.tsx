import { CheckCircle } from 'lucide-react'
import FadeIn from './FadeIn'
import PageCTA from './PageCTA'

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
}: ServiceDetailPageProps) {
  return (
    <div className={`${background === 'soft' ? 'bg-[#f5f7fb]' : 'bg-white'} pt-20`}>
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
              <span className="ox-eyebrow">{eyebrow}</span>
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
            </FadeIn>
          </div>
        </div>
      </section>

      <PageCTA eyebrow={ctaEyebrow} heading={ctaHeading} subtext={ctaSubtext} image={ctaImage ?? image} />
    </div>
  )
}
