import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { safetyPoints } from "../data/content";
import { images } from "../data/images";
import { AlertTriangle, HandMetal, ShieldAlert, Siren } from "lucide-react";

const icons = [ShieldAlert, HandMetal, Siren, AlertTriangle];

const nonNegotiables = [
  {
    title: "The Safety Release Rule",
    body: "A vehicle with defective brakes, dangerous steering, bald tyres on a mine road, failed lights at night, or a load restraint that cannot hold, will not be released — not for a driver in a hurry, not for a client who wants it ‘just for today.’",
  },
  {
    title: "Standing Stop-Authority",
    body: "The Manager has standing authority — not borrowed, not occasional — to stop a job that is unsafe and to take a vehicle off the road. The Chief Executive Officer backs that authority in full.",
  },
  {
    title: "Fatigue Is a Safety Risk",
    body: "Mine labour hire lives on night shift, so transport lives on night shift too. Rosters are built to allow rest — a driver pushed past a safe limit is the next incident, not a solution to a late crew.",
  },
  {
    title: "The Right to Refuse",
    body: "Pre-task talks, personal protective equipment, isolation where required, and the right to refuse unsafe work are part of employment with this company. Incidents are reported, not hidden to protect a statistic.",
  },
];

export function Safety() {
  return (
    <div>
      <PageHero
        eyebrow="Safety & Quality"
        title="No contract outweighs a person going home unharmed"
        body="Safety is judged first, on every deployment, every weld, every vehicle release and every night shift — not as a chapter for decoration."
        image={images.workInstallerDrilling}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Standard"
            title="Four commitments that hold the standard together"
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {safetyPoints.map((point, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={point.title}>
                  <div className="h-full rounded-2xl border border-slate-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-safety-500/10 text-safety-600">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 font-display font-bold text-navy-900">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Non-Negotiable"
            title="Rules that are not adjusted for a busy day"
            light
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {nonNegotiables.map((rule, i) => (
              <Reveal key={rule.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border-l-4 border-gold-500 bg-white/[0.04] p-7">
                  <h3 className="font-display font-bold text-gold-400">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{rule.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <img
                src={images.workGlassMeasure}
                alt="Artisans carefully measuring glass before cutting"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-navy-900/10"
              />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Quality Standard"
                title="Measure twice, cut once, weld to the procedure"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Quality means the person sent matches the requisition, the weld holds, the
                  vehicle is fit, and the invoice matches the work. Supervisors inspect. The
                  Manager samples. Human Resources audits files. The Chief Executive Officer asks
                  for evidence, not comfort.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  The company standard is simple to say and hard to fake: inspect before release,
                  and never send a piece the maker would refuse to stand under. Supervisors who
                  pass bad work to keep a date answer to the Manager — repeat failure of
                  workmanship is a Human Resources matter as well as a technical one.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
