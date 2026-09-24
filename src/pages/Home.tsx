import { motion } from "framer-motion";
import {
  Award,
  Clock3,
  HeartHandshake,
  MapPinned,
  ScrollText,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { Button } from "../components/Button";
import { CountUp } from "../components/CountUp";
import { PillarIcon, GoodIcon } from "../components/PillarIcon";
import { pillars, site, values, leadership, goods } from "../data/content";
import { images, galleryImages } from "../data/images";
import { Link } from "react-router-dom";

const valueIcons = [ShieldCheck, Clock3, Award, HeartHandshake, MapPinned, ScrollText];

export function Home() {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <PillarsSection />
      <GoodsTeaser />
      <AboutTeaser />
      <ValuesSection />
      <LeadershipTeaser />
      <GalleryStrip />
      <CtaBanner />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      <motion.div
        initial={{ scale: 1.12, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={images.heroMineSite}
          alt="Aerial view of mine site earthworks and plant"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent" />

      <Container className="relative pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 backdrop-blur-sm"
          >
            Solwezi &middot; North-Western Province &middot; Zambia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-4xl font-bold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Labour, Fabrication &amp; Supply for the Mining Industry — Built to Be Dependable.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            SESNAK LIMITED supplies skilled, safety-disciplined workers to Solwezi's mines and
            support contractors — backed by our own aluminium and fabrication workshops,
            controlled transport, and a supply line of mining consumables, so the labour promise
            is never left half-kept.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="primary">
              Request Labour
            </Button>
            <Button to="/services" variant="ghost">
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TrustStrip() {
  const stats = [
    { value: 4, suffix: "", label: "Core Service Lines" },
    { value: 3, suffix: "", label: "Leadership Offices" },
    { value: 7, suffix: "", label: "Step Deployment Cycle" },
  ];
  return (
    <section className="relative z-10 border-b border-slate-100 bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center sm:text-left">
                <div className="flex items-baseline justify-center gap-1 font-display text-3xl font-bold text-navy-900 sm:justify-start sm:text-4xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <div className="text-center sm:text-left">
              <div className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">24/7</div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
                Mine-Ready Dispatch
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="One organisation, four coordinated trades"
          body="A fitter hired to a plant may need a fabricated part from our workshop. A site office may need a window fitted before the crew moves in. SESNAK LIMITED coordinates it all from one management table."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <Link
                to={`/services#${pillar.id}`}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/20 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <PillarIcon icon={pillar.icon} size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{pillar.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{pillar.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-800 transition-colors group-hover:text-gold-600">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function GoodsTeaser() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Goods We Supply"
            title="Consumables, alongside the crew"
            body="Wear liners, pumps and valves, and HDPE pipe — sourced, stocked and delivered so a site doesn't stall waiting on a part."
          />
          <Link
            to="/services#goods"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-600 sm:inline-flex"
          >
            View all goods
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-3">
          {goods.map((good) => (
            <StaggerItem key={good.id}>
              <Link
                to={`/services#${good.id}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/20 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <GoodIcon icon={good.icon} size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{good.title}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{good.subtitle}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{good.summary}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-500/15 via-transparent to-navy-900/10" />
              <img
                src={images.teamPhoto}
                alt="The SESNAK LIMITED team outside the head office"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-navy-900/10"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-navy-900 px-6 py-5 text-white shadow-xl sm:block">
                <p className="font-display text-2xl font-bold text-gold-400">Solwezi</p>
                <p className="text-xs uppercase tracking-widest text-white/70">Home Base Since Founding</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Solwezi company, built for the realities of mine work"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Solwezi is the commercial and mining centre of North-Western Province — home to
                Kansanshi and the wider mineral belt that has turned this town into one of
                Zambia's most important industrial hubs. SESNAK LIMITED keeps its operating base
                at Solwezi Lodge, Room 2, because understanding shift patterns, induction rules,
                fatigue, and the pressure of shutdowns is not optional here. It is the daily
                machinery of production.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We concentrate on mine labour hire rather than trying to be everything to
                everyone — and back it with real workshop capability, controlled transport, and a
                visible leadership structure, so a client always knows who is accountable.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8">
                <Button to="/about" variant="secondary">
                  More About Sesnak
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-28">
      <div className="absolute" />
      <Container>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Six values that keep the labour promise honest"
          light
          align="center"
        />
        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <StaggerItem key={value.title}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-gold-500/30 hover:bg-white/[0.06]">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold-500/15 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{value.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function LeadershipTeaser() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Accountable Leadership"
          title="Three offices, one direction"
          body="Strategy, operations and people administration are each held by a named office, so no employee, client or partner has to guess who does what."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-3">
          {leadership.map((leader) => (
            <StaggerItem key={leader.id}>
              <Link
                to="/leadership"
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={images[leader.photoKey === "ceo" ? "ceoMuwowo" : leader.photoKey === "manager" ? "managerZulu" : "hrKasonda"]}
                    alt={leader.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy-900">{leader.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gold-600">{leader.title}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function GalleryStrip() {
  const shown = galleryImages.slice(0, 8);
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="On the Tools"
          title="Work you can see"
          body="A sample of our crews at work — fabrication, glazing, and site installation across current placements."
        />
      </Container>
      <div className="mt-14 overflow-hidden">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {shown.map((img, i) => (
              <Reveal key={img.alt} delay={(i % 4) * 0.06} className={i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
                <div className="group relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-navy-500/20 blur-3xl" />
      <Container className="relative">
        <div className="flex flex-col items-center gap-8 text-center">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-bold text-white text-balance sm:text-4xl">
              Need workers on site before the next shift starts?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-white/70">
              Call our head office in Solwezi, or send your requisition by email. Human
              Resources, the Manager and the CEO's office coordinate from one table — so your
              request does not get lost between departments.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="primary">
                Get in Touch
              </Button>
              <Button href={`tel:${site.phones[0].replace(/\s/g, "")}`} variant="ghost">
                Call {site.phones[0]}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
