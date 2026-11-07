import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  HardHat,
  PencilRuler,
  Warehouse,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/ui/FadeIn'
import FaqAccordion from '../components/ui/FaqAccordion'
import PageCTA from '../components/ui/PageCTA'
import PageMeta from '../components/ui/PageMeta'
import { PROJECTS } from '../data/projects'
import { COMPANY, LOCATIONS, PROCESS_STEPS, YEARS_LABEL } from '../data/company'
import type { FaqItem } from '../data/company'

const HERO_STATS = [
  { val: `${COMPANY.foundedYear}`, label: 'Installing Windows Since' },
  { val: '40+', label: 'Team Members' },
  { val: '500+', label: 'Projects Completed' },
]

const WINDOWS_FIRST_POINTS = [
  `Founded in ${COMPANY.foundedYear} as a new-construction window installer`,
  'Window scopes led by dedicated estimators and field supervisors',
  'Crews that install multifamily, mixed-use, and single-family packages',
  'Headquartered in Lehi, serving builders across Utah',
]

const TEAMS = [
  {
    icon: <PencilRuler size={24} />,
    title: 'Estimating',
    desc: 'Estimators who live in plans and unit mixes. They build window bids that hold up and flag the problems that would have cost you later.',
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: 'Pre-Production',
    desc: 'Coordinators who move your package from award to job-ready: submittals, design confirmations, ordering, and scheduling.',
  },
  {
    icon: <HardHat size={24} />,
    title: 'Field Crews',
    desc: 'Installers led by foremen, with field supervisors over every project. They are the reason our name is on the building.',
  },
  {
    icon: <Warehouse size={24} />,
    title: 'Warehouse',
    desc: 'Warehouse technicians who receive, stage, and deliver product so crews are never standing around waiting on windows.',
  },
]

// Real jobsite photos of window packages in progress and complete.
const FIELD_SHOTS = [
  {
    src: '/images/general/ventanas-dng_132-1-1024x576.jpg',
    alt: 'Windows set across a multifamily building mid-construction',
    wide: true,
  },
  {
    src: '/images/general/16a5e58c-da00-41bc-9845-e9be44c14333.jpg',
    alt: 'New windows installed in a framed hotel building before siding',
  },
  {
    src: '/images/general/ventanas-dng_34-1-1024x576.jpg',
    alt: 'Multifamily building with windows installed and exterior finishes underway',
  },
  {
    src: '/images/general/3c8add5d-d61f-4a7d-842a-e10512deb82d.jpg',
    alt: 'Four-story apartment building with every window set',
  },
  {
    src: '/images/general/ventanas-dng_3-1-1024x452.jpg',
    alt: 'Wide view of a framed multifamily building with windows installed on every floor',
    wide: true,
  },
]

// Projects where Ox Glass carried the window scope.
const WINDOW_PROJECT_IDS = [
  'sanctuary',
  'ridgeview',
  'momentum',
  'citizen',
  'bloomington',
  'sloane',
]

const WINDOW_PROJECTS = WINDOW_PROJECT_IDS.map((id) =>
  PROJECTS.find((p) => p.id === id),
).filter((p) => p !== undefined)

const WINDOW_FAQS: FaqItem[] = [
  {
    question: 'Do you supply the windows, or just install them?',
    answer:
      'Both. We are an installation company, not a manufacturer, but we carry the whole package. Our estimators compare product lines and pricing from our manufacturer network, our pre-production team handles submittals and ordering, and our own crews install what we deliver.',
  },
  {
    question: 'What kinds of projects do you install windows on?',
    answer:
      'Our focus is new construction: multifamily communities, mixed-use buildings, and townhome and single-family developments for builders and general contractors across Utah.',
  },
  {
    question: 'How do you keep a window package on schedule?',
    answer:
      'Planning starts before product ships. We hold an on-site production planning meeting, order material to match your schedule, and confirm your start date a week ahead. During production, foreman-led crews install with a field supervisor over the job, and you get a progress report every week.',
  },
  {
    question: 'How do I get a window bid?',
    answer: `Send us your plans, unit counts, and schedule through our contact form or at ${LOCATIONS[0].email}. Our pre-production team will set up a meeting with an estimator and come back with product options and pricing for your build.`,
  },
]

const Eyebrow = ({
  children,
  onDark = false,
}: {
  children: string
  onDark?: boolean
}) => (
  <span className={`ox-eyebrow ${onDark ? 'ox-eyebrow-on-dark' : ''}`}>
    {children}
  </span>
)

export default function Windows() {
  return (
    <div className="bg-white">
      <PageMeta
        title="Window Installation"
        description="New construction window installation for multifamily, mixed-use, and single-family builders across Utah. Estimating, submittals, ordering, and foreman-led installation under one roof."
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#080d24] pb-20 pt-32 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/general/ventanas-dng_132-1-1024x576.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d24] via-[#080d24]/90 to-[#080d24]/60" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />

        <div className="ox-container relative z-10 w-full">
          <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)]">
            <FadeIn className="max-w-3xl">
              <Eyebrow onDark>Window Installation</Eyebrow>
              <h1 className="font-[var(--font-display)] text-[clamp(2.8rem,5.5vw,4.6rem)] font-bold leading-[1.06] drop-shadow-[0_6px_24px_rgba(0,0,0,0.28)]">
                The trade we built
                <br />
                our name on.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/84">
                Ox Glass started in {COMPANY.foundedYear} hanging windows on new
                construction across Utah. A decade and 500+ projects later,
                window installation is still the heart of our company: our
                biggest crews, our deepest experience, and most of the work we
                do every day.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="ox-btn-light">
                  Start Your Window Bid <ArrowRight size={18} />
                </Link>
                <a
                  href="#window-projects"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/55 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  See Window Projects
                </a>
              </div>

              <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label}>
                    <strong className="block text-3xl font-bold leading-none">
                      {stat.val}
                    </strong>
                    <span className="mt-2 block text-xs font-bold uppercase tracking-[0.08em] text-white/62">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left" className="hidden lg:block">
              <div className="overflow-hidden rounded-2xl border border-white/14 shadow-2xl">
                <video
                  src="/images/general/website%20install%20work.mp4"
                  className="h-[460px] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Ox Glass crews installing windows on an active job site"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Windows first */}
      <section className="ox-section">
        <div className="ox-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="right">
              <Eyebrow>Windows First</Eyebrow>
              <h2 className="ox-title-lg">
                A window company before anything else.
              </h2>
              <p className="ox-body mt-6">
                Plenty of glass companies treat windows as one line on a long
                list of services. For us it is the other way around. Ox Glass
                was founded as a new-construction window installation company,
                and everything we have added since, from mirrors to storefront
                to shower glass, was built on the back of our window work.
              </p>
              <p className="ox-body mt-4">
                That focus shows up on site. Our estimators think in unit
                counts and floor plans, our coordinators sequence deliveries
                around framing schedules, and our foremen have set windows on
                everything from townhome communities to mid-rise multifamily.
                Windows are not a side scope at Ox Glass. They are the standard
                we are known by.
              </p>
              <ul className="mt-7 space-y-3">
                {WINDOWS_FIRST_POINTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                  >
                    <CheckCircle
                      size={20}
                      className="mt-0.5 shrink-0 text-[var(--navy)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
                <img
                  src="/images/general/3c8add5d-d61f-4a7d-842a-e10512deb82d.jpg"
                  alt="Four-story multifamily building with every window installed by Ox Glass, crew on site"
                  loading="lazy"
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Full-bleed statement band */}
      <section className="relative overflow-hidden bg-[#080d24] py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="ox-container relative">
          <FadeIn>
            <Eyebrow onDark>On Every Job Site</Eyebrow>
            <p className="max-w-3xl font-[var(--font-display)] text-[clamp(1.8rem,3.5vw,2.9rem)] font-semibold leading-tight">
              Ten years in, we still treat every opening like our first.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/general/16a5e58c-da00-41bc-9845-e9be44c14333.jpg"
                alt="A full window package set across a framed building before exterior finishes"
                loading="lazy"
                className="h-[320px] w-full object-cover md:h-[440px]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="ox-section ox-section-soft">
        <div className="ox-container">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <FadeIn direction="right">
              <Eyebrow>How We Work</Eyebrow>
              <h2 className="ox-title-lg">How we run a window package.</h2>
              <p className="ox-body mt-5 max-w-2xl">
                No mystery, and no hand-offs into the void. Every window
                project at Ox Glass follows the same path, the one we have
                refined across a decade of new construction, so you always
                know what is happening and what comes next.
              </p>

              <ol className="mt-10 space-y-8">
                {PROCESS_STEPS.map((step, i) => (
                  <FadeIn key={step.num} delay={i * 0.06}>
                    <li className="grid grid-cols-[auto_1fr] gap-5">
                      <div className="flex flex-col items-center">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--navy)]/25 bg-white text-sm font-bold text-[var(--navy)] shadow-[var(--shadow-sm)]">
                          {step.num}
                        </span>
                        {i < PROCESS_STEPS.length - 1 && (
                          <span className="mt-2 w-px flex-1 bg-[var(--navy)]/15" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h3 className="pt-2 text-lg font-bold text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[0.96rem] leading-7 text-[var(--text-secondary)]">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  </FadeIn>
                ))}
              </ol>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="lg:sticky lg:top-28">
              <div className="grid gap-5">
                <figure className="overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-md)]">
                  <img
                    src="/images/general/ventanas-dng_117-1024x576.jpg"
                    alt="Finished multifamily building with a full window and storefront package"
                    loading="lazy"
                    className="h-[300px] w-full object-cover"
                  />
                  <figcaption className="px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--navy)]">
                    Closeout: every opening set and sealed
                  </figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-md)]">
                  <img
                    src="/images/general/ventanas-dng_111-1-1024x576.jpg"
                    alt="Completed apartment building exterior with windows and balcony doors installed"
                    loading="lazy"
                    className="h-[300px] w-full object-cover"
                  />
                  <figcaption className="px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[var(--navy)]">
                    The finish builders put their name next to
                  </figcaption>
                </figure>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <span className="ox-eyebrow mx-auto w-fit">Our People</span>
            <h2 className="ox-title-lg">
              One company. Four teams on every window job.
            </h2>
            <p className="ox-body mx-auto mt-4">
              More than 40 people touch a window package as it moves through
              Ox Glass, and every one of them works under the same roof, to
              the same standard: {COMPANY.motto}
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAMS.map((team, i) => (
              <FadeIn key={team.title} delay={i * 0.1}>
                <div className="ox-card flex h-full flex-col p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                  <div className="ox-icon-tile mb-5 h-14 w-14">{team.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-slate-950">
                    {team.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {team.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* In the field */}
      <section className="ox-section ox-section-soft">
        <div className="ox-container">
          <FadeIn className="mb-12 text-center">
            <span className="ox-eyebrow mx-auto w-fit">In The Field</span>
            <h2 className="ox-title-lg">Windows going in across Utah.</h2>
            <p className="ox-body mx-auto mt-4 max-w-2xl">
              Window packages in progress and complete on active Utah job
              sites, from framed buildings to final finishes.
            </p>
          </FadeIn>

          <div className="grid auto-rows-[240px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FIELD_SHOTS.map((shot, i) => (
              <FadeIn
                key={shot.src}
                delay={i * 0.08}
                className={shot.wide ? 'lg:col-span-2' : ''}
              >
                <div className="h-full overflow-hidden rounded-2xl shadow-[var(--shadow-sm)]">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Window projects */}
      <section id="window-projects" className="ox-section scroll-mt-20">
        <div className="ox-container">
          <FadeIn className="mb-12 text-center">
            <span className="ox-eyebrow mx-auto w-fit">Window Work</span>
            <h2 className="ox-title-lg">Window projects we've delivered.</h2>
            <p className="ox-body mx-auto mt-4 max-w-2xl">
              A few of the Utah projects where Ox Glass carried the window
              scope from bid to closeout.
            </p>
          </FadeIn>

          <div className="grid auto-rows-[260px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WINDOW_PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.08}>
                <Link
                  to={`/projects/${project.id}`}
                  className={`group relative block h-full overflow-hidden rounded-xl shadow-[var(--shadow-sm)] ${
                    i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <img
                    src={project.coverImage}
                    alt={`${project.title}, window installation by Ox Glass`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d24]/90 to-transparent p-6 text-white">
                    <span className="block text-lg font-bold">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                      {project.productLine ?? 'Window Installation'}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <Link to="/gallery" className="ox-btn-outline">
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="ox-section ox-section-soft">
        <div className="ox-container">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <FadeIn direction="right">
              <Eyebrow>Window Questions</Eyebrow>
              <h2 className="ox-title-lg">
                What builders ask us about windows.
              </h2>
              <p className="ox-body mt-5">
                The questions we hear most from general contractors and
                developers planning a window package. Don't see yours? Reach
                out and we'll walk you through it.
              </p>
              <Link to="/contact" className="ox-btn-primary mt-8">
                Ask Our Team <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <FaqAccordion items={WINDOW_FAQS} />
            </FadeIn>
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Windows"
        heading="Let's talk about your window package."
        subtext={`Send us your plans, unit counts, and schedule. One of our estimators will come back with the right product and pricing for your build. ${YEARS_LABEL} years of window packages behind every bid.`}
        image="/images/projects/momentum/momentum-window-photo-1.png"
      />
    </div>
  )
}
