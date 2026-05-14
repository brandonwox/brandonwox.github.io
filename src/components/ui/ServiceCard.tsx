import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  to: string
  delay?: number
  imagePlaceholder?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  to,
  delay = 0,
  imagePlaceholder,
}: ServiceCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <motion.div
        className="group ox-card flex h-full flex-col overflow-hidden"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {imagePlaceholder && (
          <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#101a4a] to-[var(--navy)] text-xs font-bold uppercase tracking-[0.14em] text-white/40">
            {imagePlaceholder}
          </div>
        )}
        <div className="flex flex-1 flex-col p-7">
          <div className="ox-icon-tile mb-5 transition group-hover:bg-[var(--navy)] group-hover:text-white">
            {icon}
          </div>
          <h3 className="mb-3 text-xl font-bold text-slate-950">{title}</h3>
          <p className="mb-6 text-sm leading-7 text-[var(--text-secondary)]">{description}</p>
          <Link
            to={to}
            className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[var(--navy)] transition group-hover:gap-3"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </FadeIn>
  )
}
