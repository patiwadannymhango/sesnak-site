import { Link } from "react-router-dom";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "../data/content";
import { images } from "../data/images";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-noise"
        aria-hidden
      />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white overflow-hidden">
                <img src={images.logo} alt="Sesnak Limited logo" className="h-9 w-9 object-contain" />
              </span>
              <span className="font-display font-bold text-lg">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {site.descriptor}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.pillars.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70"
                >
                  {p}
                </span>
              ))}
            </div>
            <a
              href={site.profilePdf.url}
              download={site.profilePdf.filename}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              <Download size={16} />
              Download Company Profile (PDF)
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-400">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-400">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {site.pillars.map((p) => (
                <li key={p} className="text-sm text-white/70">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-400">
              Head Office
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-gold-400" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-gold-400" />
                <div className="flex flex-col">
                  {site.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Solwezi, North-Western Province &middot; Republic of Zambia</p>
        </div>
      </Container>
    </footer>
  );
}
