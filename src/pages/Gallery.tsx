import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/ui/FadeIn'
import { PROJECTS } from '../data/projects'

export default function Gallery() {
  return (
    <div className="bg-[#f5f7fb] pt-20">
      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <span className="ox-eyebrow">Our Work</span>
            <h1 className="ox-title-xl">Project Gallery</h1>
            <p className="ox-subtitle mx-auto mt-4 max-w-2xl">
              Explore recently completed window, mirror, storefront, and new construction projects across Utah.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.06}>
                <Link
                  to={`/projects/${item.id}`}
                  className="group ox-card ox-card-hover block overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d24]/45 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                    <ArrowRight size={18} className="text-[var(--navy)] transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
