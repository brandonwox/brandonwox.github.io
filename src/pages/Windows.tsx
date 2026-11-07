import {
  ArrowRight,
  Camera,
  CheckCircle,
  ClipboardCheck,
  HardHat,
  PencilRuler,
  Video,
  Warehouse,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/ui/FadeIn'
import FaqAccordion from '../components/ui/FaqAccordion'
import PageCTA from '../components/ui/PageCTA'
import { PROJECTS } from '../data/projects'
import { COMPANY, LOCATIONS } from '../data/company'
import type { FaqItem } from '../data/company'

/*
 * Media placeholder: renders a visible "add photo/video here" slot whose
 * description doubles as the shot list for the real media to be added later.
 * Swap each <MediaSlot> for an <img> / <video> once the real asset exists.
 */
function MediaSlot({
  type,
  description,
  className = '',
  dark = false,
  compact = false,
}: {
  type: 'photo' | 'video'
  description: string
  className?: string
  dark?: boolean
  compact?: boolean
}) {
  const Icon = type === 'video' ? Video : Camera
  return (
    <div
      role="img"
      aria-label={`Placeholder — add ${type}: ${description}`}
      className={`flex flex-col items-center justify-center gap-2.5 rounded-2xl border-2 border-dashed text-center ${
        compact ? 'p-4' : 'p-8'
      } ${
        dark
          ? 'border-white/30 bg-white/5 text-white/75'
          : 'border-[rgba(26,43,109,0.3)] bg-[rgba(26,43,109,0.04)] text-[var(--text-secondary)]'
      } ${className}`}
    >
      <Icon
        size={compact ? 22 : 30}
        className={dark ? 'text-white/60' : 'text-[var(--navy)]'}
      />
      <span
        className={`text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
          dark ? 'text-white/60' : 'text-[var(--navy)]'
        }`}
      >
        Add {type} here
      </span>
      <p className={`max-w-sm leading-6 ${compact ? 'text-xs' : 'text-sm'}`}>
        {description}
      </p>
    </div>
  )
}

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

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Bid & Value Engineering',
    desc: 'Our pre-production team logs your project and sets a meeting with our lead estimator. We review plans, specs, and renderings through our 5-Point Value Engineering process and come back with RFIs, recommendations, and price comparisons — before you commit to anything.',
  },
  {
    num: '02',
    title: 'Estimate & Award',
    desc: 'Once RFIs and addenda are settled, you get a complete cost estimate with clear scope and options to consider. When we are awarded the work, price and scope are confirmed before submittals begin.',
  },
  {
    num: '03',
    title: 'Submittals & Shop Drawings',
    desc: 'Our pre-production manager sends finalized submittals, then walks you through design, shop drawings, manufacturer testing, and layouts — so the windows we order are exactly the windows you approved.',
  },
  {
    num: '04',
    title: 'Production Planning',
    desc: 'Before product ships, we meet on site to plan dates, deliveries, machinery, and access. Material is ordered to match your schedule, and we confirm your start date a week before crews arrive.',
  },
  {
    num: '05',
    title: 'Installation & Closeout',
    desc: 'Foreman-led crews set windows with a field supervisor over every job and a progress report in your inbox each week. We finish with a punch walk and a closeout QC meeting — and we are not done until every opening is.',
  },
]

const TEAMS = [
  {
    icon: <PencilRuler size={24} />,
    title: 'Estimating',
    desc: 'Estimators who live in plans and unit mixes. They build window bids that hold up — and flag the problems that would have cost you later.',
    shot: 'An Ox Glass estimator at a desk reviewing plans or doing a window takeoff — screens and drawings visible.',
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: 'Pre-Production',
    desc: 'Coordinators who move your package from award to job-ready: submittals, design confirmations, ordering, and scheduling.',
    shot: 'A coordinator working through submittals or order paperwork, or on a call with a builder.',
  },
  {
    icon: <HardHat size={24} />,
    title: 'Field Crews',
    desc: 'Installers led by foremen, with field supervisors over every project. They are the reason our name is on the building.',
    shot: 'A foreman and crew setting a window together on site — hard hats and Ox gear visible.',
  },
  {
    icon: <Warehouse size={24} />,
    title: 'Warehouse',
    desc: 'Warehouse technicians who receive, stage, and deliver product so crews are never standing around waiting on windows.',
    shot: 'Windows racked and staged in the Ox warehouse, or being loaded onto a delivery truck.',
  },
]

const FIELD_SHOTS: {
  type: 'photo' | 'video'
  description: string
  wide?: boolean
}[] = [
  {
    type: 'video',
    description:
      'Crane, lift, or crew moving windows up the building — the scale of a multifamily window package in motion.',
    wide: true,
  },
  {
    type: 'photo',
    description:
      'Close-up of hands leveling and shimming a window in the opening — level on the frame.',
  },
  {
    type: 'photo',
    description:
      'Installer flashing, foaming, or sealing around a freshly set window.',
  },
  {
    type: 'photo',
    description:
      'Field supervisor on a punch walk, checking an installed window with a builder.',
  },
  {
    type: 'photo',
    description:
      'Crew photo at the end of a building — the team in front of a wall of windows they just set.',
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
      'Both. We are an installation company — we do not manufacture windows — but we carry the whole package. Our estimators compare product lines and pricing from our manufacturer network, our pre-production team handles submittals and ordering, and our own crews install what we deliver.',
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
      {/* Hero */}
      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#080d24] pb-20 pt-32 text-white">
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
                window installation is still the heart of our company — our
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

              <div className="mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
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
              <MediaSlot
                type="video"
                dark
                className="min-h-[420px]"
                description="Wide video of an active jobsite: Ox Glass crews on lifts or scaffolding setting windows into a multifamily building, Ox branding visible. Muted autoplay loop, 15–30 seconds."
              />
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
                and everything we have added since — mirrors, storefront,
                shower glass — was built on the back of our window work.
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
              <MediaSlot
                type="photo"
                className="h-[500px]"
                description="An Ox Glass crew lifting a window into an opening — an action shot, close enough to see hands, the level on the frame, and branded gear. This is the 'who we are' photo for the page."
              />
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
            <MediaSlot
              type="photo"
              dark
              className="mt-10 min-h-[320px]"
              description="Building-wide photo taken mid-install: rows of freshly set windows across a framed multifamily facade — the scale of a full Ox Glass window package in one frame."
            />
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
                project at Ox Glass follows the same path — the one we have
                refined across a decade of new construction — so you always
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
              <MediaSlot
                type="video"
                className="min-h-[560px] bg-white"
                description="Video following one window from the warehouse to installed and sealed — staging, delivery, set, level, fasten, seal — or a timelapse of a crew setting a full floor. This sits beside the process steps, so it should show the process actually happening."
              />
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
              Ox Glass — and every one of them works under the same roof, to
              the same standard: {COMPANY.motto}
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAMS.map((team, i) => (
              <FadeIn key={team.title} delay={i * 0.1}>
                <div className="ox-card flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                  <MediaSlot
                    type="photo"
                    compact
                    className="m-3 h-44 rounded-xl"
                    description={team.shot}
                  />
                  <div className="flex flex-1 flex-col p-7 pt-4">
                    <div className="ox-icon-tile mb-4">{team.icon}</div>
                    <h3 className="mb-3 text-xl font-bold text-slate-950">
                      {team.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                      {team.desc}
                    </p>
                  </div>
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
            <h2 className="ox-title-lg">Our crews at work.</h2>
            <p className="ox-body mx-auto mt-4 max-w-2xl">
              The part of the job you cannot fake — real Ox Glass installers
              setting real windows on active Utah job sites.
            </p>
          </FadeIn>

          <div className="grid auto-rows-[240px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FIELD_SHOTS.map((shot, i) => (
              <FadeIn
                key={shot.description}
                delay={i * 0.08}
                className={shot.wide ? 'lg:col-span-2' : ''}
              >
                <MediaSlot
                  type={shot.type}
                  compact
                  className="h-full bg-white"
                  description={shot.description}
                />
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
                    alt={`${project.title} — window installation by Ox Glass`}
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
        subtext="Send us your plans, unit counts, and schedule — one of our estimators will come back with the right product and pricing for your build."
        image="/images/projects/momentum/momentum-window-photo-1.png"
      />
    </div>
  )
}
