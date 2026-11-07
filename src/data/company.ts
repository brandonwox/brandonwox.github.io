// Single source of truth for Ox Glass company facts used across the site.
// Window-first language and installation (never manufacturing) framing per brand standards.

export interface CompanyLocation {
  city: string
  state: string
  label: string
  address?: string
  phones: string[]
  email: string
  isHeadquarters?: boolean
}

export interface CompanyValue {
  title: string
  desc: string
}

export interface Leader {
  name: string
  role: string
}

export interface FaqItem {
  question: string
  answer: string
}

export const COMPANY = {
  name: 'Ox Glass',
  legalName: 'Ox Glass LLC',
  motto: 'Integrity First, Service Always.',
  foundedYear: 2015,
  why: 'A company you can trust to provide a relentless attitude, quality products, and efficient work.',
  serviceArea: 'Utah',
}

export const STATS = [
  { val: '2015', label: 'Serving Utah Since' },
  { val: '40+', label: 'Team Members' },
  { val: '500+', label: 'Projects Completed' },
]

export const LOCATIONS: CompanyLocation[] = [
  {
    city: 'Lehi',
    state: 'UT',
    label: 'Lehi, UT',
    address: '305 South 850 East, Suite 108A, Lehi, UT 84043',
    phones: ['(385) 789-4974', '(801) 691-3532'],
    email: 'bids@ox-glass.com',
    isHeadquarters: true,
  },
]

export const VALUES: CompanyValue[] = [
  {
    title: 'Family',
    desc: 'We build a culture of honesty and a healthy work-life balance so our people show up at their best on every site.',
  },
  {
    title: 'Integrity',
    desc: 'We do what we say. Our values hold steady from the first bid through final walkthrough.',
  },
  {
    title: 'Relentlessness',
    desc: 'We push through obstacles and adversity to keep your project moving on schedule.',
  },
  {
    title: 'Efficiency',
    desc: 'We maximize results while minimizing waste — saving time, budget, and rework on every scope.',
  },
]

export const LEADERSHIP: Leader[] = [
  { name: 'Brady Williams', role: 'Chief Executive Officer' },
  { name: 'Jared Williams', role: 'Head of Estimating' },
  { name: 'Terry Thompson', role: 'Head of Production' },
]

export const FAQS: FaqItem[] = [
  {
    question: 'What areas does Ox Glass serve?',
    answer:
      'We serve new construction and commercial projects across Utah from our Lehi headquarters.',
  },
  {
    question: 'Can one crew handle windows, mirrors, storefront, and shower glass on the same project?',
    answer:
      'Yes. We are unique in the subcontracting industry because we can perform multiple scopes across different phases of the same project — windows first, then mirrors, storefront, and shower glass doors — without juggling extra subcontractors.',
  },
  {
    question: 'Do you work with builders and general contractors?',
    answer:
      'Builder and GC partnerships are our core business. Our 5-Point Value Engineering process is built to protect your timeline, budget, and final product quality from groundbreak to punch list.',
  },
  {
    question: 'Do you only do new construction?',
    answer:
      'Yes — our focus is new construction and commercial window and glass installation, covering windows, mirrors, storefront, and shower glass doors for builders and general contractors across Utah.',
  },
  {
    question: 'How do I get an estimate?',
    answer:
      'Send us your plans, unit counts, and schedule through our contact form or by email, and one of our estimators will get back to you with the right product and pricing for your build.',
  },
]

// Years in business, rounded down to the nearest five for a "10+" style label.
const yearsActive = new Date().getFullYear() - COMPANY.foundedYear
export const YEARS_LABEL = `${Math.max(5, Math.floor(yearsActive / 5) * 5)}+`

export interface ProcessStep {
  num: string
  title: string
  desc: string
}

// The 5-Point Value Engineering process, shared by Home, Windows, and New Construction.
export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Bid & Value Engineering',
    desc: 'Our pre-production team logs your project and sets a meeting with our lead estimator. We review plans, specs, and renderings and come back with RFIs, recommendations, and price comparisons before you commit to anything.',
  },
  {
    num: '02',
    title: 'Estimate & Award',
    desc: 'Once RFIs and addenda are settled, you get a complete cost estimate with clear scope and options to consider. When we are awarded the work, price and scope are confirmed before submittals begin.',
  },
  {
    num: '03',
    title: 'Submittals & Shop Drawings',
    desc: 'Our pre-production manager sends finalized submittals, then walks you through design, shop drawings, manufacturer testing, and layouts, so the product we order is exactly the product you approved.',
  },
  {
    num: '04',
    title: 'Production Planning',
    desc: 'Before product ships, we meet on site to plan dates, deliveries, machinery, and access. Material is ordered to match your schedule, and we confirm your start date a week before crews arrive.',
  },
  {
    num: '05',
    title: 'Installation & Closeout',
    desc: 'Foreman-led crews install with a field supervisor over every job and a progress report in your inbox each week. We finish with a punch walk and a closeout QC meeting, and we are not done until every opening is.',
  },
]
