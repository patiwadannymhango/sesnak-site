import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { Button } from "../components/Button";
import { PillarIcon } from "../components/PillarIcon";
import { pillars, processSteps } from "../data/content";
import { images } from "../data/images";
import { Check } from "lucide-react";

const pillarImages = [
  images.workInstallerDrilling,
  images.workFabricationShop,
  images.workSlidingDoor,
  images.workCorridorCrew,
];

export function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Four trades, coordinated as one promise"
        body="Labour hire is the heart of the business. Boiler making, automotive mechanics and transport logistics exist so that the labour promise is never left half-kept."
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
          </div>
        </Container>
      </section>

      {pillars.map((pillar, index) => (
        <PillarSection key={pillar.id} pillar={pillar} image={pillarImages[index]} reversed={index % 2 === 1} />
      ))}

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
