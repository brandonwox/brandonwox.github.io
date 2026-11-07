import {
  ArrowRight,
  Building2,
  CheckCircle,
  Construction,
  HomeIcon,
  Layers,
  Square,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/ui/FadeIn'
import PageMeta from '../components/ui/PageMeta'

const SERVICES = [
  {
    icon: <HomeIcon size={24} />,
    title: 'Windows',
    eyebrow: 'Window Installation',
    desc: 'Window packages for multifamily, mixed-use, and single-family new construction. Our estimators compare product lines across our manufacturer network, pre-production handles submittals and ordering, and our own foreman-led crews install.',
    features: [
      'Multifamily, mixed-use, and single-family packages',
      'Product options compared across our manufacturer network',
      'Submittals, shop drawings, and ordering handled in-house',
      'Foreman-led crews with a field supervisor on every job',
    ],
    to: '/windows',
    img: '/images/general/ventanas-dng_95-1-1024x576.jpg',
  },
  {
    icon: <Square size={24} />,
    title: 'Mirrors',
    eyebrow: 'Commercial Mirrors',
    desc: 'Custom mirror installations for apartment and hotel units, gyms, and commercial spaces of every scale. Our team handles measurement, finish coordination, and installation for a precise fit.',
    features: [
      'Custom shapes and sizes',
      'Frameless and framed options',
      'Commercial and hospitality grade',
      'On-site measuring and installation',
    ],
    to: '/mirrors',
    img: '/images/general/ox_SKP2022_10.jpg',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Storefronts',
    eyebrow: 'Commercial Exteriors',
    desc: 'Premium glass storefronts that make an impression. From retail to office, our systems combine curb appeal with structural integrity and energy efficiency.',
    features: [
      'Full-height glass entries',
      'Aluminum storefront framing and entrances',
      'ADA-compliant hardware',
      'Energy-code compliant glass',
    ],
    to: '/storefronts',
    img: '/images/projects/bloomington/bloomington-photo-4.png',
  },
  {
    icon: <Layers size={24} />,
    title: 'Shower Glass Doors',
    eyebrow: 'Residential & Commercial',
    desc: 'Sleek, frameless and semi-frameless shower enclosures crafted from premium tempered glass. Custom configurations for any bathroom layout.',
    features: [
      'Frameless and semi-frameless designs',
      'Tempered safety glass',
      'Custom hardware finishes',
      'Professional installation',
    ],
    to: '/shower-glass-doors',
    img: '/images/general/3ba35739-9e4e-4125-b362-6d2fafe54dcf.jpg',
  },
  {
    icon: <Construction size={24} />,
    title: 'New Construction',
    eyebrow: 'Builder Partnerships',
    desc: 'Our 5-Point Value Engineering process keeps your project on schedule, on budget, and to spec. We partner with builders from groundbreak to punch list, often carrying several scopes on the same build.',
    features: [
      'On-site consultation and planning',
      '5-Point Value Engineering process',
      'Schedule-aligned procurement',
      'Schedule-aligned installation',
    ],
    to: '/new-construction',
    img: '/images/projects/85 north/85-north-photo-1.png',
  },
]

export default function Services() {
  return (
    <div className="bg-[#f5f7fb] pt-20">
      <PageMeta
        title="Services"
        description="Window, mirror, storefront, and shower glass door installation for new construction and commercial projects across Utah."
      />
      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <span className="ox-eyebrow">What We Do</span>
            <h1 className="ox-title-xl">Our Services</h1>
            <p className="ox-subtitle mx-auto mt-4 max-w-2xl">
              From window packages to storefronts, mirrors, and shower glass, Ox Glass delivers craftsmanship you can see, backed by careful coordination and a decade of new construction installation experience.
            </p>
          </FadeIn>

          <div className="space-y-16">
            {SERVICES.map((svc, index) => (
              <FadeIn key={svc.title} delay={0.05}>
                <article className="grid items-center gap-10 rounded-2xl bg-white p-5 shadow-[var(--shadow-md)] lg:grid-cols-2 lg:p-8">
                  <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img src={svc.img} alt={svc.title} loading="lazy" className="h-[380px] w-full object-cover" />
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-lg bg-[#080d24] px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-lg">
                      {svc.icon}
                      {svc.eyebrow}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="ox-eyebrow">{svc.eyebrow}</span>
                    <h2 className="ox-title-lg">{svc.title}</h2>
                    <p className="ox-body mt-5">{svc.desc}</p>
                    <ul className="mt-7 space-y-3">
                      {svc.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-[var(--text-secondary)]">
                          <CheckCircle size={19} className="mt-0.5 shrink-0 text-[var(--navy)]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={svc.to} className="ox-btn-primary mt-8">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#080d24] py-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="ox-container relative text-center">
          <FadeIn>
            <span className="ox-eyebrow ox-eyebrow-on-dark">Get Started</span>
            <h2 className="mx-auto max-w-2xl font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/68">
              Our team is ready to walk you through the right products for your build, on time and on budget.
            </p>
            <Link to="/contact" className="ox-btn-light mt-8">
              Request a Bid <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
