import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  DollarSign,
  Home as HomeIcon,
  Layers,
  ShieldCheck,
  Square,
  Timer,
  Truck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "../components/ui/FadeIn";
import { PROJECTS } from "../data/projects";

const SERVICES = [
  {
    icon: <HomeIcon size={22} />,
    title: "Windows",
    desc: "Energy-efficient window packages selected, coordinated, and installed for demanding commercial schedules.",
    to: "/windows",
    img: "/images/projects/sanctuary/099ccdfeb3508144c5e52b2852d50625c-f1308115592rd-w2048_h1536.webp",
    fit: "New construction, multifamily, and commercial exterior scopes",
  },
  {
    icon: <Square size={22} />,
    title: "Mirrors",
    desc: "Custom-cut mirror systems with clean measurements, finish coordination, and dependable installation.",
    to: "/mirrors",
    img: "/images/projects/sanctuary/3-Feb 25 2026 03_08pm-HY5T.jpg",
    fit: "Hospitality, fitness, tenant improvement, and residential amenity spaces",
  },
  {
    icon: <Building2 size={22} />,
    title: "Storefronts",
    desc: "Storefront systems built for curb appeal, daily use, weather performance, and clear project handoff.",
    to: "/storefronts",
    img: "/images/projects/victory heights/3e481033-8f0c-49d6-9cea-b222bcbd7be2.jpg",
    fit: "Retail entries, leasing offices, mixed-use buildings, and commercial suites",
  },
  {
    icon: <Layers size={22} />,
    title: "Shower Glass Doors",
    desc: "Tempered shower enclosures measured and installed with the precision finish work requires.",
    to: "/shower-glass-doors",
    img: "/images/general/3ba35739-9e4e-4125-b362-6d2fafe54dcf.jpg",
    fit: "Apartments, hotels, model units, and high-volume residential builds",
  },
];

const HERO_STATS = [
  { val: "15+", label: "Years Experience" },
  { val: "50+", label: "Employees" },
  { val: "500+", label: "Projects Completed" },
];

const SOLUTION_STATS = [
  { val: "500+", label: "completed projects" },
  { val: "15+", label: "years in the field" },
  { val: "50+", label: "team members" },
];

const SPEED_PROOF_POINTS = [
  {
    icon: <Truck size={24} />,
    title: "White-Glove Speed",
  },
  {
    icon: <Timer size={24} />,
    title: "Rapid Turnaround",
  },
  {
    icon: <BadgeCheck size={24} />,
    title: "Highest Quality",
  },
];

const TRUST_POINTS = [
  {
    icon: <ClipboardCheck size={22} />,
    title: "Documented Scope Control",
    desc: "Plans, measurements, product details, and install expectations stay aligned before crews arrive.",
  },
  {
    icon: <CalendarCheck size={22} />,
    title: "Schedule-Driven Installs",
    desc: "Field teams coordinate around active construction schedules, site access, and trade sequencing.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Accountable Finish Quality",
    desc: "Every opening, panel, and enclosure is handled with punch-list readiness in mind.",
  },
];

const VALUE_PROPS = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Premium Products",
    desc: "We source high-quality window and glass products selected for lasting commercial performance.",
  },
  {
    icon: <Layers size={24} />,
    title: "Superior Installation",
    desc: "Our certified crews treat every install like a signature project with precision and care every time.",
  },
  {
    icon: <DollarSign size={24} />,
    title: "Competitive Pricing",
    desc: "Our estimators work to find the right solution for your budget with no surprises or hidden costs.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Integrity First",
    desc: "We do what we say. Our motto is the standard we hold ourselves to every day.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Consultation & Assessment",
    desc: "We meet on-site to review plans, specifications, and builder timelines.",
  },
  {
    num: "02",
    title: "Value Engineering",
    desc: "Our 5-Point system identifies optimal products, cost savings, and performance gains.",
  },
  {
    num: "03",
    title: "Product Coordination",
    desc: "Window and glass packages are coordinated around specifications, schedule, and site readiness.",
  },
  {
    num: "04",
    title: "Scheduled Installation",
    desc: "Coordinated with your construction schedule and active jobsite requirements.",
  },
  {
    num: "05",
    title: "Final Walk-Through",
    desc: "We inspect every unit, address punch-list items, and earn your signature.",
  },
];

const Eyebrow = ({
  children,
  onDark = false,
}: {
  children: string;
  onDark?: boolean;
}) => (
  <span className={`ox-eyebrow ${onDark ? "ox-eyebrow-on-dark" : ""}`}>
    {children}
  </span>
);

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-white">
      <section className="relative isolate flex min-h-[820px] items-center overflow-hidden bg-[#080d24] pb-20 pt-28 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/cottonwood broadway/cb-4-scaled.jpg"
            alt="Commercial glass installation"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d24]/96 via-[var(--navy)]/82 to-[#080d24]/36" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080d24]/65 to-transparent" />
        </div>

        <div className="ox-container relative z-10 w-full">
          <motion.div
            className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)]"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="max-w-3xl">
              <Eyebrow onDark>Commercial Glass Specialists</Eyebrow>
              <h1 className="font-[var(--font-display)] text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.04] drop-shadow-[0_6px_24px_rgba(0,0,0,0.28)]">
                Integrity First,
                <br />
                Service Always.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/84">
                Premium window and glass installation for new construction
                builders and commercial projects across Utah
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="ox-btn-light">
                  Contact Us <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/55 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Our Services
                </Link>
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
            </div>

            <div className="hidden min-h-[360px] items-center justify-center rounded-2xl border border-white/14 bg-white/10 p-12 shadow-2xl backdrop-blur-md lg:flex">
              <img
                src="/logo.png"
                alt="Ox Glass logo"
                className="w-full max-w-[240px] invert"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-28 lg:py-32">
        <div className="ox-container">
          <FadeIn className="mb-16 max-w-4xl">
            <Eyebrow>Fastest Window Install Teams</Eyebrow>
            <h2 className="font-[var(--font-display)] text-[clamp(2.25rem,4vw,3.7rem)] font-semibold leading-[1.08] text-slate-950">
              The fastest window crews on site. No quality tradeoff.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
              Ox Glass is built for builders who cannot afford slow window
              installs or sloppy closeout. We move fast because coordination,
              field rhythm, and quality checks are part of the same process.
            </p>
          </FadeIn>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.62fr)] lg:gap-12">
            <div className="space-y-6">
              <FadeIn delay={0.18}>
                <div className="overflow-hidden rounded-xl border border-[rgba(26,43,109,0.08)] bg-[#080d24] text-white shadow-[var(--shadow-md)]">
                  <div className="px-7 pt-7 pb-4">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/58">
                        Install performance graph
                      </span>
                      <strong className="mt-2 block text-2xl font-bold leading-tight">
                        Ox Glass finishes the job 3x quicker than anybody else.
                      </strong>
                    </div>
                  </div>

                  <svg
                    aria-hidden="true"
                    className="block h-[270px] w-full"
                    viewBox="0 0 680 270"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="ox-speed-fill"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="rgba(255,255,255,0.24)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 28 V232 H680"
                      fill="none"
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="1"
                    />
                    {[62, 108, 154, 200, 232].map((y) => (
                      <path
                        key={y}
                        d={`M0 ${y} H680`}
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                    ))}
                    <motion.path
                      d="M0 226 C130 222 245 216 340 207 C470 195 575 185 680 178"
                      fill="none"
                      stroke="rgba(255,255,255,0.44)"
                      strokeLinecap="butt"
                      strokeWidth="2"
                      initial={{ pathLength: reduceMotion ? 1 : 0 }}
                      whileInView={{
                        pathLength: reduceMotion ? 1 : [0, 0.35, 0.52, 1],
                      }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 7.8,
                        times: [0, 0.22, 0.68, 1],
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M0 238 C110 226 170 185 238 132 C330 60 450 25 680 10"
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="butt"
                      strokeWidth="3"
                      initial={{ pathLength: reduceMotion ? 1 : 0 }}
                      whileInView={{
                        pathLength: reduceMotion ? 1 : [0, 0.36, 0.5, 1],
                      }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 5.8,
                        times: [0, 0.2, 0.7, 1],
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M0 238 C110 226 170 185 238 132 C330 60 450 25 680 10 L680 232 H0 Z"
                      fill="url(#ox-speed-fill)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 5.8,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>

                  <div className="flex flex-wrap items-center gap-x-7 gap-y-3 px-7 pb-7 text-xs font-bold uppercase tracking-[0.1em]">
                    <span className="inline-flex items-center gap-2 text-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-white" />
                      Ox Glass
                    </span>
                    <span className="inline-flex items-center gap-2 text-white/48">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/44" />
                      Other window installers
                    </span>
                  </div>
                </div>
              </FadeIn>

              <div className="grid gap-5 sm:grid-cols-3">
                {SPEED_PROOF_POINTS.map((point, i) => (
                  <FadeIn key={point.title} delay={i * 0.08}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--navy)]">
                        {point.icon}
                      </div>
                      <h3 className="text-sm font-bold leading-snug text-slate-950">
                        {point.title}
                      </h3>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn direction="left" delay={0.15}>
              <div className="overflow-hidden rounded-xl border border-[rgba(26,43,109,0.08)] bg-white shadow-[var(--shadow-md)]">
                <video
                  src="/images/general/PXL_20230815_212827034.TS.mp4"
                  className="h-[360px] w-full object-cover lg:h-[420px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Ox Glass window installation video"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="ox-section">
        <div className="ox-container">
          <FadeIn>
            <div className="mb-12 grid items-end gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)]">
              <div>
                <Eyebrow>What We Do</Eyebrow>
                <h2 className="ox-title-lg">Commercial Glass Solutions</h2>
              </div>
              <p className="ox-body max-w-[620px]">
                Ox Glass supports builders, property teams, and commercial
                owners with window and glass scopes that need accurate
                estimating, reliable coordination, and clean installation in the
                field.
              </p>
            </div>
          </FadeIn>

          <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)]">
            <FadeIn
              direction="right"
              className="ox-card flex min-h-full flex-col overflow-hidden shadow-[var(--shadow-md)]"
            >
              <img
                src="/images/projects/sanctuary/099ccdfeb3508144c5e52b2852d50625c-f2701462556rd-w2048_h1536.webp"
                alt="Commercial glass installation on a multifamily project"
                className="h-80 w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-4 p-8">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--navy)]">
                  Built for active job sites
                </span>
                <h3 className="text-2xl font-bold leading-tight text-slate-950">
                  One partner for windows, mirrors, storefront, and shower glass
                  doors.
                </h3>
                <p className="leading-7 text-[var(--text-secondary)]">
                  Our team brings estimating, coordination, and installation
                  together so commercial window and glass packages move from
                  plan review to final walkthrough with fewer handoffs.
                </p>
                <div className="mt-auto grid grid-cols-3 gap-3 border-t border-slate-200 pt-5">
                  {SOLUTION_STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <strong className="text-2xl leading-none text-[var(--navy)]">
                        {stat.val}
                      </strong>
                      <span className="text-xs font-semibold uppercase leading-snug tracking-[0.06em] text-[var(--text-muted)]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {SERVICES.map((svc, i) => (
                <FadeIn key={svc.title} delay={i * 0.1}>
                  <Link
                    to={svc.to}
                    className="group ox-card ox-card-hover flex flex-col overflow-hidden hover:border-[rgba(26,43,109,0.18)]"
                  >
                    <div className="relative h-[165px] overflow-hidden">
                      <img
                        src={svc.img}
                        alt={svc.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-col p-5">
                      <div className="ox-icon-tile mb-4 transition duration-300 group-hover:bg-[var(--navy)] group-hover:text-white">
                        {svc.icon}
                      </div>
                      <h3 className="flex items-center justify-between text-lg font-bold text-slate-950">
                        {svc.title}
                        <ArrowRight
                          size={18}
                          className="-translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </h3>
                      <span className="mt-4 block border-t border-slate-100 pt-3 text-[0.68rem] font-bold uppercase leading-4 tracking-[0.06em] text-[var(--navy)]">
                        {svc.fit}
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ox-section ox-section-soft">
        <div className="ox-container">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <FadeIn direction="right" className="flex flex-col items-start">
              <Eyebrow>Built on Follow-Through</Eyebrow>
              <h2 className="ox-title-lg max-w-xl">
                A glass partner builders can trust from bid to closeout.
              </h2>
              <p className="ox-body mt-5 max-w-xl">
                Trust is earned before the finished photos. It starts with clear
                scope, realistic scheduling, and field crews who understand how
                their work affects the rest of the job.
              </p>
              <Link to="/about" className="ox-btn-outline mt-8 py-3">
                Learn About Ox Glass <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn
              direction="left"
              delay={0.15}
              className="overflow-hidden rounded-2xl border border-[rgba(26,43,109,0.08)] bg-white shadow-[var(--shadow-md)]"
            >
              <div className="grid grid-cols-[auto_1fr] items-center gap-5 bg-[var(--navy)] p-8 text-white">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white/10">
                  <Award size={28} />
                </div>
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-white/70">
                    Integrity First, Service Always
                  </span>
                  <strong className="block text-xl leading-snug">
                    Commercial glass work backed by process, people, and project
                    history.
                  </strong>
                </div>
              </div>

              <div className="flex flex-col">
                {TRUST_POINTS.map((point) => (
                  <div
                    key={point.title}
                    className="grid grid-cols-[auto_1fr] gap-4 border-b border-[rgba(26,43,109,0.08)] px-8 py-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(26,43,109,0.08)] text-[var(--navy)]">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-bold text-slate-950">
                        {point.title}
                      </h3>
                      <p className="text-[0.94rem] leading-6 text-[var(--text-secondary)]">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 bg-[rgba(26,43,109,0.05)] px-8 py-5 text-sm font-bold text-[var(--navy)]">
                <Users size={18} />
                <span>
                  Experienced teams serving commercial projects across Utah.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mb-12 text-center">
            <Eyebrow>Why Ox Glass</Eyebrow>
            <h2 className="ox-title-lg">Our Commitment to Excellence</h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPS.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="ox-card h-full p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                  <div className="ox-icon-tile mb-5">{value.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-slate-950">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ox-section ox-section-soft">
        <div className="ox-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn direction="right">
              <Eyebrow>New Construction Builders</Eyebrow>
              <h2 className="ox-title-lg">
                Our 5-Point Value Engineering Process
              </h2>
              <p className="ox-body mt-5 max-w-2xl">
                We have refined our process over two decades of new construction
                partnerships. Every project follows a clear framework designed
                to protect timeline, budget, and final product quality.
              </p>

              <div className="mt-8 space-y-5">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-bold text-white">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/new-construction" className="ox-btn-primary mt-10">
                Explore New Construction <ChevronRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
                <img
                  src="/images/projects/85 north/85-north-photo-1.png"
                  alt="New construction glass project"
                  className="h-[560px] w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-xl border border-white/15 bg-[var(--navy)]/78 p-4 text-sm font-bold text-white backdrop-blur-md">
                  <ShieldCheck size={20} />
                  5-Point Value Engineering
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mb-12 text-center">
            <Eyebrow>Recent Work</Eyebrow>
            <h2 className="ox-title-lg">Project Portfolio</h2>
            <p className="ox-body mx-auto mt-4 max-w-2xl">
              A look at recent new construction and commercial projects across
              Utah.
            </p>
          </FadeIn>

          <div className="grid auto-rows-[260px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 6).map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08}>
                <Link
                  to={`/projects/${item.id}`}
                  className={`group relative block h-full overflow-hidden rounded-xl shadow-[var(--shadow-sm)] ${
                    i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d24]/90 to-transparent p-6 text-white">
                    <span className="block text-lg font-bold">
                      {item.title}
                    </span>
                    {item.location && (
                      <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                        {item.location}
                      </span>
                    )}
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

      <section className="relative overflow-hidden bg-[#080d24] py-28 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="ox-container relative max-w-[900px] text-center">
          <FadeIn>
            <Eyebrow onDark>Our Promise</Eyebrow>
            <blockquote className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-semibold italic leading-tight">
              "We don't just install glass. We install confidence. Every
              project, every client, every time."
            </blockquote>
            <p className="mt-6 text-sm italic text-white/55">
              The Ox Glass Team
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
