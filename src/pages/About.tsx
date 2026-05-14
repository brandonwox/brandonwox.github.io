import { Shield, Target, Users } from "lucide-react";
import PageCTA from "../components/ui/PageCTA";
import FadeIn from "../components/ui/FadeIn";

const VALUES = [
  {
    icon: <Users size={30} />,
    title: "Client First",
    desc: "We prioritize our clients' needs, ensuring transparent communication from start to finish.",
  },
  {
    icon: <Target size={30} />,
    title: "Precision Craft",
    desc: "Every cut, every seal, every installation is performed with meticulous attention to detail.",
  },
  {
    icon: <Shield size={30} />,
    title: "Lasting Quality",
    desc: "We source only the best materials to ensure our work stands the test of time and weather.",
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
              Building a legacy of quality and trust in Utah since 2015.
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
                Ox Glass began with a simple mission: to provide the highest
                quality glass and window solutions with an unwavering commitment
                to integrity. Over the years, we've grown from a small local
                shop into a premier provider for commercial projects and new
                construction across two states.
              </p>
              <p className="ox-body mt-4">
                We believe that every piece of glass we cut and every window we
                install is a reflection of our core values. Our team of
                experienced professionals treats every project with the
                precision and care it deserves.
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lg)]">
                <img
                  src="/images/people/img-2206-scaled-e1677517725844-1024x1024.jpg"
                  alt="Ox Glass team"
                  className="h-[430px] w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <FadeIn key={value.title} delay={(index + 1) * 0.1}>
                <div className="ox-card h-full p-8 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                  <div className="ox-icon-tile mx-auto mb-5 h-14 w-14">
                    {value.icon}
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

      <PageCTA
        eyebrow="About Ox Glass"
        heading="Ready to Work with Our Team?"
        subtext="Whether you're building a new development or managing a commercial project, our team is ready to help bring your vision to life."
        image="/images/people/img-2206-scaled-e1677517725844-1024x1024.jpg"
      />
    </div>
  );
}
