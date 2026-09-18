import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "../data/content";
import { images } from "../data/images";
import { Container } from "./Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span
            className={`grid h-11 w-11 place-items-center rounded-full bg-white shadow-md ring-1 transition-all overflow-hidden ${
              scrolled ? "ring-navy-900/10" : "ring-white/40"
            }`}
          >
            <img src={images.logo} alt="Sesnak Limited logo" className="h-9 w-9 object-contain" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className={`font-display font-bold tracking-tight text-base transition-colors ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            >
              {site.name}
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-slate-500" : "text-white/70"
              }`}
            >
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? scrolled
                      ? "text-navy-900"
                      : "text-white"
                    : scrolled
                    ? "text-slate-600 hover:text-navy-900"
                    : "text-white/75 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full ${
                        scrolled ? "bg-gold-500" : "bg-gold-400"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.phones[0].replace(/\s/g, "")}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            <Phone size={16} className="text-gold-500" />
            {site.phones[0]}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:-translate-y-0.5"
          >
            Request Labour
          </Link>
        </div>

        <button
          className={`lg:hidden grid h-10 w-10 place-items-center rounded-full transition-colors ${
            scrolled ? "text-navy-900" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-white shadow-lg"
          >
            <Container>
              <div className="flex flex-col py-4">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-3 text-base font-medium ${
                        isActive ? "text-navy-900 bg-navy-50" : "text-slate-600"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-3 rounded-full bg-navy-900 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Request Labour
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
