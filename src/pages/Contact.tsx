import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import FadeIn from '../components/ui/FadeIn'

const CONTACT_ITEMS = [
  {
    icon: <MapPin size={22} />,
    title: 'Headquarters',
    detail: (
      <>
        123 Glassworks Way
        <br />
        Salt Lake City, UT 84101
      </>
    ),
  },
  { icon: <Phone size={22} />, title: 'Phone', detail: '(801) 555-0192' },
  { icon: <Mail size={22} />, title: 'Email', detail: 'info@oxglass.com' },
  {
    icon: <Clock size={22} />,
    title: 'Business Hours',
    detail: (
      <>
        Monday - Friday: 8am - 5pm
        <br />
        Saturday - Sunday: Closed
      </>
    ),
  },
]

const fieldClass = 'ox-field'

export default function Contact() {
  return (
    <div className="bg-white pt-20">
      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--navy)]">
              <span className="h-0.5 w-7 rounded-full bg-[var(--navy)]" />
              Get in Touch
            </span>
            <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-tight text-slate-950">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Reach out by phone, email, or the form below and one of our estimators will get back to you.
            </p>
          </FadeIn>

          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn direction="right">
              <div className="rounded-2xl bg-[#080d24] p-8 text-white shadow-[var(--shadow-lg)] lg:p-10">
                <h2 className="mb-8 font-[var(--font-display)] text-3xl font-semibold">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {CONTACT_ITEMS.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                        {item.icon}
                      </div>
                      <div>
                        <strong className="mb-1 block text-sm font-bold uppercase tracking-[0.1em] text-white/72">
                          {item.title}
                        </strong>
                        <span className="leading-7 text-white/78">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <form
                className="rounded-2xl border border-[rgba(26,43,109,0.08)] bg-[#f7f9fd] p-8 shadow-[var(--shadow-md)] lg:p-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <h2 className="mb-6 font-[var(--font-display)] text-3xl font-semibold text-slate-950">
                  Send a Message
                </h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-800">
                      Full Name
                    </label>
                    <input type="text" id="name" className={fieldClass} placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-800">
                      Email Address
                    </label>
                    <input type="email" id="email" className={fieldClass} placeholder="john@example.com" />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="service" className="mb-2 block text-sm font-bold text-slate-800">
                    Service Needed
                  </label>
                  <select id="service" className={fieldClass}>
                    <option>Windows</option>
                    <option>New Construction</option>
                    <option>Mirrors</option>
                    <option>Storefronts</option>
                    <option>Commercial Projects</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${fieldClass} resize-y`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-8 py-4 text-sm font-bold text-white shadow-[var(--shadow-md)] transition hover:-translate-y-0.5 hover:bg-[var(--navy-light)]"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
