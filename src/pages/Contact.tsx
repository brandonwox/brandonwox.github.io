import { useState, type FormEvent } from "react";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import PageMeta from "../components/ui/PageMeta";
import { LOCATIONS } from "../data/company";

const fieldClass = "ox-field";
const HQ = LOCATIONS[0];

const MAP_SRC =
  "https://www.google.com/maps?q=305%20South%20850%20East%2C%20Lehi%2C%20UT%2084043&output=embed";

const SERVICE_OPTIONS = [
  "Windows",
  "New Construction",
  "Mirrors",
  "Storefronts",
  "Shower Glass Doors",
  "Multiple Scopes",
  "Other",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // This is a static site with no backend, so the form composes an email to
  // the bids inbox in the visitor's mail app instead of silently doing nothing.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Website inquiry: ${service || "General"}${company ? ` - ${company}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company / Builder: ${company}` : null,
      `Service needed: ${service}`,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${HQ.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="bg-white pt-20">
      <PageMeta
        title="Contact Us"
        description={`Request a bid from Ox Glass. Call ${HQ.phones[0]}, email ${HQ.email}, or send your plans, unit counts, and schedule through our contact form.`}
      />
      <section className="ox-section">
        <div className="ox-container">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <span className="ox-eyebrow">Get in Touch</span>
            <h1 className="ox-title-xl">Request a Bid</h1>
            <p className="ox-subtitle mx-auto mt-4 max-w-2xl">
              Reach out by phone, email, or the form below and one of our
              estimators will get back to you. Send your plans, unit counts, and
              schedule and we'll match the right product to your build.
            </p>
          </FadeIn>

          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn direction="right">
              <div className="rounded-2xl bg-[#080d24] p-8 text-white shadow-[var(--shadow-lg)] lg:p-10">
                <h2 className="mb-8 font-[var(--font-display)] text-3xl font-semibold">
                  Our Office
                </h2>

                <div className="space-y-8">
                  {LOCATIONS.map((loc) => (
                    <div
                      key={loc.label}
                      className="border-b border-white/10 pb-8 last:border-0 last:pb-0"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                          {loc.label}
                        </span>
                        {loc.isHeadquarters && (
                          <span className="rounded-full bg-white/12 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white/80">
                            Headquarters
                          </span>
                        )}
                      </div>
                      <div className="space-y-3 text-sm leading-6 text-white/78">
                        {loc.address && (
                          <div className="flex gap-3">
                            <MapPin
                              size={18}
                              className="mt-0.5 shrink-0 text-white"
                            />
                            <span>{loc.address}</span>
                          </div>
                        )}
                        <div className="flex gap-3">
                          <Phone size={18} className="mt-0.5 shrink-0 text-white" />
                          <span className="flex flex-wrap gap-x-4">
                            {loc.phones.map((phone) => (
                              <a
                                key={phone}
                                href={`tel:${phone.replace(/\D/g, "")}`}
                                className="font-semibold transition hover:text-white"
                              >
                                {phone}
                              </a>
                            ))}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <Mail size={18} className="mt-0.5 shrink-0 text-white" />
                          <a
                            href={`mailto:${loc.email}`}
                            className="transition hover:text-white"
                          >
                            {loc.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Clock size={20} />
                    </div>
                    <div>
                      <strong className="mb-1 block text-sm font-bold uppercase tracking-[0.1em] text-white/72">
                        Business Hours
                      </strong>
                      <span className="leading-7 text-white/78">
                        Monday – Friday: 8am – 5pm
                        <br />
                        Saturday – Sunday: Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <form
                className="rounded-2xl border border-[rgba(26,43,109,0.08)] bg-[#f7f9fd] p-8 shadow-[var(--shadow-md)] lg:p-10"
                onSubmit={handleSubmit}
              >
                <h2 className="mb-2 font-[var(--font-display)] text-3xl font-semibold text-slate-950">
                  Send a Message
                </h2>
                <p className="mb-6 text-sm leading-6 text-[var(--text-secondary)]">
                  Submitting opens a pre-filled email to {HQ.email} in your mail
                  app. Attach plans there if you have them.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      className={fieldClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      className={fieldClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Company / Builder
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className={fieldClass}
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`${fieldClass} resize-y`}
                    placeholder="Tell us about your project: scope, unit counts, location, and schedule."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-8 py-4 text-sm font-bold text-white shadow-[var(--shadow-md)] transition hover:-translate-y-0.5 hover:bg-[var(--navy-light)]"
                >
                  Send Message <Send size={18} />
                </button>

                {sent && (
                  <div
                    role="status"
                    className="mt-5 flex items-start gap-3 rounded-lg border border-[rgba(26,43,109,0.12)] bg-white px-4 py-3 text-sm leading-6 text-slate-800"
                  >
                    <CheckCircle size={18} className="mt-1 shrink-0 text-[var(--navy)]" />
                    <span>
                      Your email app should have opened with your message ready to send.
                      If it didn't, email us directly at{" "}
                      <a className="font-semibold text-[var(--navy)]" href={`mailto:${HQ.email}`}>
                        {HQ.email}
                      </a>{" "}
                      or call{" "}
                      <a
                        className="font-semibold text-[var(--navy)]"
                        href={`tel:${HQ.phones[0].replace(/\D/g, "")}`}
                      >
                        {HQ.phones[0]}
                      </a>
                      .
                    </span>
                  </div>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn className="ox-container pb-24">
        <div className="overflow-hidden rounded-2xl border border-[rgba(26,43,109,0.08)] shadow-[var(--shadow-md)]">
          <iframe
            title="Ox Glass headquarters location in Lehi, Utah"
            src={MAP_SRC}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeIn>
    </div>
  );
}
