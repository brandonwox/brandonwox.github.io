import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo+wordmark.png";
import { LOCATIONS } from "../../data/company";

const SERVICES = [
  { label: "Windows", to: "/windows" },
  { label: "Mirrors", to: "/mirrors" },
  { label: "Storefronts", to: "/storefronts" },
  { label: "Shower Glass Doors", to: "/shower-glass-doors" },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const OFFICES = LOCATIONS.map((loc) => ({
  city: loc.label,
  address: loc.address ?? "",
  phone: loc.phones[0],
  email: loc.email,
}));

export default function Footer() {
  return (
    <footer className="bg-[#080d24] text-white">
      <div className="ox-container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="inline-flex">
              <img src={logo} alt="Ox Glass" className="h-9 w-auto" />
            </Link>
            <p className="mt-5 text-lg font-semibold text-white">
              Integrity First, Service Always.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
              Window installation specialists delivering premium products and
              superior installation for new construction projects across Utah.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/62 transition hover:text-white"
                  >
                    <ArrowRight
                      size={12}
                      className="transition group-hover:translate-x-0.5"
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {OFFICES.map((office) => (
            <div key={office.city}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white">
                {office.city}
              </h3>
              <ul className="space-y-4 text-sm leading-6 text-white/62">
                <li className="flex gap-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-white" />
                  <span>{office.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="mt-1 shrink-0 text-white" />
                  <a
                    className="transition hover:text-white"
                    href={`tel:${office.phone.replace(/\D/g, "")}`}
                  >
                    {office.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="mt-1 shrink-0 text-white" />
                  <a
                    className="transition hover:text-white"
                    href={`mailto:${office.email}`}
                  >
                    {office.email}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="ox-container flex flex-col gap-2 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ox Glass LLC. All rights reserved.</p>
          <p>Integrity First, Service Always.</p>
        </div>
      </div>
    </footer>
  );
}
