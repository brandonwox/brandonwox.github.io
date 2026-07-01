import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { FaqItem } from '../../data/company'

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-[rgba(26,43,109,0.08)] bg-white shadow-[var(--shadow-sm)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-[rgba(26,43,109,0.03)] lg:px-8"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-bold text-slate-950 lg:text-lg">{item.question}</span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(26,43,109,0.08)] text-[var(--navy)] transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                <Plus size={18} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[0.98rem] leading-7 text-[var(--text-secondary)] lg:px-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
