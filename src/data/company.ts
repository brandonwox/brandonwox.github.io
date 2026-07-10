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
