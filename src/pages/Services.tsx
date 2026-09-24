import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { Button } from "../components/Button";
import { PillarIcon, GoodIcon } from "../components/PillarIcon";
import { pillars, processSteps, goods, site } from "../data/content";
import { images, pumpsValvesGallery } from "../data/images";
import { Check, ArrowUpRight } from "lucide-react";

const pillarImages = [
  images.workInstallerDrilling,
  images.workSlidingDoor,
  images.fabricationFlangeDetail,
  images.transportHaulRoad,
];

const goodsImages = [images.wearSolutions, images.pumpsValves, images.hdpePipes];

export function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Four trades, coordinated as one promise"
        body="Labour hire is the heart of the business. Aluminium installations, fabrication and transport exist so that the labour promise is never left half-kept — backed by a supply line of the goods a site actually consumes."
        image={images.workGlazingTeam}
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {pillars.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                {p.title}
              </a>
            ))}
            <a
              href="#goods"
              className="rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2 text-sm font-semibold text-gold-700 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
            >
              Goods We Supply
            </a>
          </div>
        </Container>
      </section>

      {pillars.map((pillar, index) => (
        <PillarSection key={pillar.id} pillar={pillar} image={pillarImages[index]} reversed={index % 2 === 1} />
      ))}

      <GoodsSection />
      <PumpsValvesGallerySection />
      <ProcessSection />
    </div>
  );
}

function PillarSection({
  pillar,
  image,
  reversed,
}: {
  pillar: (typeof pillars)[number];
  image: string;
  reversed: boolean;
}) {
  return (
    <section
      id={pillar.id}
      className={`scroll-mt-24 py-24 sm:py-28 ${reversed ? "bg-slate-50" : "bg-white"}`}
    >
      <Container>
        <div
          className={`grid items-center gap-14 lg:grid-cols-2 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
              <img src={image} alt={pillar.title} className="aspect-[4/3] w-full object-cover" />
              <div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-xl bg-navy-950/90 text-gold-400 backdrop-blur-sm">
                <PillarIcon icon={pillar.icon} size={26} />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Core Service
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">{pillar.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{pillar.summary}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 space-y-4 border-t border-slate-200 pt-6">
                {pillar.detail.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function GoodsSection() {
  return (
    <section id="goods" className="scroll-mt-24 bg-slate-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Goods We Supply"
          title="The consumables a mine site actually runs out of"
          body="Alongside labour and workshop capability, SESNAK LIMITED supplies the wear parts, fluid-control equipment and pipe that keep plant and reticulation running — sourced, stocked and delivered to site."
        />

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {goods.map((good, index) => (
            <StaggerItem key={good.id}>
              <div
                id={good.id}
                className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={goodsImages[index]}
                    alt={good.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-navy-950/90 text-gold-400 backdrop-blur-sm">
                    <GoodIcon icon={good.icon} size={22} />
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="font-display text-lg font-bold">{good.title}</h3>
                    <p className="text-xs uppercase tracking-wide text-white/70">{good.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm leading-relaxed text-slate-600">{good.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {good.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check size={15} className="mt-0.5 shrink-0 text-gold-600" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-slate-600">
              Need a quote, a spec sheet, or stock availability for a specific size or pressure class?
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                "Goods Enquiry — Wear Solutions / Pumps & Valves / HDPE Pipe"
              )}`}
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-gold-600"
            >
              Email a goods enquiry
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function PumpsValvesGallerySection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Pumps & Valves"
            title="A wide range, held in stock"
            body="Gate, butterfly and check valves; centrifugal and slurry pumps — across the diameters and duties a mine's water, process and dewatering lines actually run."
          />
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Pumps & Valves — Stock Enquiry")}`}
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-600 sm:inline-flex"
          >
            Ask what's in stock
            <ArrowUpRight size={15} />
          </a>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {pumpsValvesGallery.map((img, i) => (
            <StaggerItem key={img.alt} className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
              <div className="group relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How Labour Hire Works"
          title="A seven-step cycle, followed every time"
          body="Clean process is how good labour hire stays invisible: the client sees a full shift, the worker sees a fair engagement, and the file closes without dispute."
          light
          align="center"
        />

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold-500/30">
                <span className="font-display text-3xl font-bold text-gold-400">{step.step}</span>
                <h3 className="mt-3 font-display font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Button to="/contact" variant="primary">
              Start a Requisition
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
