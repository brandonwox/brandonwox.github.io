import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo+wordmark.png'
import { LOCATIONS } from '../../data/company'

const HQ = LOCATIONS[0]

const SERVICE_LINKS = [
  { label: 'Windows', to: '/windows' },
  { label: 'Mirrors', to: '/mirrors' },
  { label: 'Storefronts', to: '/storefronts' },
  { label: 'Shower Glass Doors', to: '/shower-glass-doors' },
  { label: 'New Construction', to: '/new-construction' },
]

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', children: SERVICE_LINKS },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const SERVICE_PATHS = ['/services', ...SERVICE_LINKS.map((s) => s.to)]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative inline-flex h-12 items-center text-sm font-semibold transition-colors',
    isActive ? 'text-white' : 'text-white/72 hover:text-white',
  ].join(' ')

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition',
    isActive
      ? 'bg-[var(--navy)] text-white'
      : 'text-slate-800 hover:bg-slate-100 hover:text-[var(--navy)]',
  ].join(' ')

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const servicesActive = SERVICE_PATHS.includes(pathname)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(servicesActive)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close the desktop dropdown on Escape or when focus leaves it (keyboard users).
  useEffect(() => {
    if (!servicesOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [servicesOpen])

  const solidNav = scrolled || !isHome

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
          solidNav
            ? 'border-white/10 bg-[#0b102d]/95 shadow-[0_12px_40px_rgba(7,12,34,0.22)] backdrop-blur-xl'
            : 'border-white/10 bg-[#0b102d]/82 backdrop-blur-md',
        ].join(' ')}
      >
        <div className="ox-container flex h-20 items-center justify-between">
          <Link to="/" className="inline-flex items-center" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="Ox Glass" className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onBlur={(e) => {
                    if (!servicesRef.current?.contains(e.relatedTarget as Node)) {
                      setServicesOpen(false)
                    }
                  }}
                >
                  <div className="inline-flex h-12 items-center gap-1">
                    <NavLink
                      to={item.to}
                      className={() => navLinkClass({ isActive: servicesActive })}
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="inline-flex h-8 w-6 items-center justify-center text-white/72 transition-colors hover:text-white"
                      aria-label="Open services menu"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen((v) => !v)}
                      onFocus={() => setServicesOpen(true)}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="absolute left-1/2 top-full w-64 -translate-x-1/2 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-[0_24px_60px_rgba(7,12,34,0.18)]"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                      >
                        <NavLink
                          to="/services"
                          end
                          className={({ isActive }) =>
                            [
                              'mb-1 block rounded-lg border-b border-slate-100 px-4 py-3 text-sm font-bold transition',
                              isActive
                                ? 'bg-[rgba(26,43,109,0.08)] text-[var(--navy)]'
                                : 'text-slate-900 hover:bg-slate-100 hover:text-[var(--navy)]',
                            ].join(' ')
                          }
                          onClick={() => setServicesOpen(false)}
                        >
                          All Services
                        </NavLink>
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              [
                                'block rounded-lg px-4 py-3 text-sm font-semibold transition',
                                isActive
                                  ? 'bg-[rgba(26,43,109,0.08)] text-[var(--navy)]'
                                  : 'text-slate-700 hover:bg-slate-100 hover:text-[var(--navy)]',
                              ].join(' ')
                            }
                            onClick={() => setServicesOpen(false)}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-md bg-[var(--navy)] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(26,43,109,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--navy-light)] md:inline-flex"
            >
              Request a Bid
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-slate-950/55 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
                <img src={logo} alt="Ox Glass" className="h-8 w-auto brightness-0" />
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-800"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                {NAV_LINKS.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <div className="flex items-center gap-1">
                        <NavLink
                          to={item.to}
                          end
                          className={({ isActive }) =>
                            `${mobileLinkClass({ isActive })} flex-1`
                          }
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </NavLink>
                        <button
                          type="button"
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          aria-label={mobileServicesOpen ? 'Hide services' : 'Show services'}
                          aria-expanded={mobileServicesOpen}
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            className="overflow-hidden pl-3"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                          >
                            {item.children.map((child) => (
                              <NavLink
                                key={child.to}
                                to={child.to}
                                className={({ isActive }) =>
                                  [
                                    'mt-1 block rounded-lg px-4 py-2.5 text-sm font-semibold transition',
                                    isActive
                                      ? 'bg-[rgba(26,43,109,0.08)] text-[var(--navy)]'
                                      : 'text-slate-600 hover:bg-slate-100 hover:text-[var(--navy)]',
                                  ].join(' ')
                                }
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={mobileLinkClass}
                      end={item.to === '/'}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}
              </nav>

              <div className="border-t border-slate-200 p-5">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center rounded-md bg-[var(--navy)] px-6 py-3 text-sm font-bold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Bid
                </Link>
                <p className="mt-4 text-center text-sm text-slate-500">
                  {HQ.label}:{' '}
                  <a
                    className="font-semibold text-[var(--navy)]"
                    href={`tel:${HQ.phones[0].replace(/\D/g, '')}`}
                  >
                    {HQ.phones[0]}
                  </a>
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
