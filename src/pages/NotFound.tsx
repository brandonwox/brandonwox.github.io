import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'

export default function NotFound() {
  return (
    <div className="bg-[#f5f7fb] pt-20">
      <PageMeta title="Page Not Found" />
      <section className="ox-section">
        <div className="ox-container max-w-2xl text-center">
          <span className="ox-eyebrow">404</span>
          <h1 className="ox-title-lg">We couldn't find that page.</h1>
          <p className="ox-subtitle mt-4">
            The link may be out of date. Head back to the homepage or browse our recent projects.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="ox-btn-primary">
              Back to Home <ArrowRight size={16} />
            </Link>
            <Link to="/gallery" className="ox-btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
