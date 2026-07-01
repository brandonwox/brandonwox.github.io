import { Combine, Hammer, Heart, ShieldCheck, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import PageCTA from "../components/ui/PageCTA";
import FadeIn from "../components/ui/FadeIn";
import { COMPANY, STATS, VALUES } from "../data/company";

const VALUE_ICONS = [
  <Heart size={28} key="heart" />,
  <ShieldCheck size={28} key="shield" />,
  <Zap size={28} key="zap" />,
  <Target size={28} key="target" />,
];

const DIFFERENTIATORS = [
  {
    icon: <Combine size={26} />,
    title: "Multiple scopes, one partner",
    desc: "We are unique in the subcontracting industry: windows, mirrors, storefront, and shower glass doors handled across different phases of the same project — fewer subs to coordinate, tighter scheduling.",
  },
  {
    icon: <Hammer size={26} />,
    title: "Installation specialists",
    desc: "We are a window and glass installation company. We source premium product lines and focus our craft on getting them installed cleanly, on schedule, and to spec.",
  },
  {
    icon: <Users size={26} />,
    title: "A remodel team for homeowners",
    desc: "In 2023 we launched our Remodel Department, bringing the same quality and follow-through to homeowners — not just builders.",
  },
];

export default function About() {
  return (
    <div className="bg-white pt-20">
      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <span className="ox-eyebrow">Who We Are</span>
            <h1 className="ox-title-xl">About Ox Glass</h1>
            <p className="ox-subtitle mx-auto mt-4 max-w-2xl">
              Building a legacy of quality and trust in Utah since{" "}
              {COMPANY.foundedYear}.
            </p>
          </FadeIn>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="right">
              <span className="ox-eyebrow">Our Story</span>
              <h2 className="ox-title-lg">
                Built around workmanship, accountability, and steady
                follow-through.
              </h2>
              <p className="ox-body mt-6">
                Ox Glass was founded in {COMPANY.foundedYear} as a trusted leader
                in new-construction window installation across Utah. We started
                with a simple mission: deliver the best quality window and glass
                products with superior installation at the most competitive
                price.
              </p>
              <p className="ox-body mt-4">
                Over the years we grew from a local shop into a premier installer
                for commercial and new construction projects, expanding our scope
                to mirrors, shower doors, and storefronts. In 2023 we opened a
                Remodel Department, bringing that same standard to homeowners as
                well as builders.
              </p>
              <p className="ox-body mt-4 font-semibold text-slate-800">
                Our why: {COMPANY.why}
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
                <img
                  src="/images/general/ox_SKP2022_31-768x1024.jpg"
                  alt="The Ox Glass installation team on a new construction jobsite"
                  className="h-[430px] w-full object-cover object-bottom"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-16">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[rgba(26,43,109,0.08)] bg-[rgba(26,43,109,0.08)] shadow-[var(--shadow-sm)] sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white px-6 py-8 text-center">
                  <strong className="block font-[var(--font-display)] text-4xl font-bold text-[var(--navy)]">
                    {stat.val}
                  </strong>
                  <span className="mt-2 block text-xs font-bold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="ox-section ox-section-soft">
        <div className="ox-container">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <span className="ox-eyebrow mx-auto w-fit">Our Core Values</span>
            <h2 className="ox-title-lg">What we stand on</h2>
            <p className="ox-body mx-auto mt-4">
              Four values guide how we hire, how we schedule, and how we finish
              every job.
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="ox-card h-full p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                  <div className="ox-icon-tile mb-5 h-14 w-14">
                    {VALUE_ICONS[index]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mb-14 max-w-2xl">
            <span className="ox-eyebrow">What Sets Us Apart</span>
            <h2 className="ox-title-lg">More than a single-scope sub.</h2>
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-[rgba(26,43,109,0.08)] bg-white p-8 shadow-[var(--shadow-sm)]">
                  <div className="ox-icon-tile mb-5 h-12 w-12">{item.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-[0.96rem] leading-7 text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ox-section ox-section-soft">
        <div className="ox-container">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="ox-eyebrow mx-auto w-fit">Quality You Can Trust</span>
            <h2 className="ox-title-lg">Premium products, superior installation.</h2>
            <p className="ox-body mx-auto mt-4">
              We install proven, high-quality window and glass products and focus
              our craft on getting them in cleanly, on schedule, and to spec — so
              every project performs and looks the part for years to come.
            </p>
            <Link to="/services" className="ox-btn-outline mt-10">
              Explore Our Services
            </Link>
          </FadeIn>
        </div>
      </section>

      <PageCTA
        eyebrow="About Ox Glass"
        heading="Ready to Work with Our Team?"
        subtext="Whether you're building a new development, managing a commercial project, or remodeling your home, our team is ready to help bring your vision to life."
        image="/images/people/img-2206-scaled-e1677517725844-1024x1024.jpg"
      />
    </div>
  );
}
