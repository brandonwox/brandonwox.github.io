import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

interface PageCTAProps {
  eyebrow?: string
  heading?: string
  subtext?: string
  image?: string
}

const PROOF_POINTS = [
  '15+ Years Experience',
  '500+ Projects Completed',
  'UT & MT Locations',
  'Window-First Installation',
]

export default function PageCTA({
  eyebrow = 'Work With Us',
  heading = 'Ready to Start Your Project?',
  subtext = 'Reach out by phone, email, or the form below — and one of our estimators will get back to you.',
  image = '/images/projects/cottonwood broadway/cb-4-scaled.jpg',
}: PageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#080d24] py-24 text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-28" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d24] via-[#101a4a]/92 to-[#1a2b6d]/78" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:56px_56px] opacity-40" />

      <div className="ox-container relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <FadeIn>
          <span className="ox-eyebrow ox-eyebrow-on-dark">{eyebrow}</span>
          <h2 className="max-w-2xl font-[var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">{subtext}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="ox-btn-light"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+18010000000"
              className="inline-flex items-center gap-3 rounded-md border border-white/20 px-5 py-3 text-left transition hover:bg-white/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-white/55">
                  Call Us Direct
                </span>
                <span className="block font-semibold">(801) 000-0000</span>
              </span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="left">
          <motion.div
            className="rounded-2xl border border-white/16 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {PROOF_POINTS.map((point, index) => (
              <div
                key={point}
                className={`flex items-center gap-3 py-4 ${index === 0 ? '' : 'border-t border-white/12'}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[var(--navy)]">
                  <CheckCircle size={18} />
                </span>
                <span className="font-semibold">{point}</span>
              </div>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
