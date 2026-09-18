import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { leadership } from "../data/content";
import { images } from "../data/images";
import { CheckCircle2 } from "lucide-react";

const photoMap: Record<string, string> = {
  ceo: images.ceoMuwowo,
  manager: images.managerZulu,
  hr: images.hrKasonda,
};

export function Leadership() {
  return (
    <div>
      <PageHero
        eyebrow="Leadership"
        title="Three offices, named and accountable"
        body="Written roles are how companies last. No employee, client or partner has to guess who does what at SESNAK LIMITED."
        image={images.workOfficeFitout}
      />

      {leadership.map((leader, index) => (
        <LeaderSection key={leader.id} leader={leader} reversed={index % 2 === 1} />
      ))}

      <TogetherSection />
    </div>
  );
}

function LeaderSection({
  leader,
  reversed,
}: {
  leader: (typeof leadership)[number];
  reversed: boolean;
}) {
  return (
    <section className={`py-24 sm:py-28 ${reversed ? "bg-slate-50" : "bg-white"}`}>
      <Container>
        <div
          className={`grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal>
            <div className="sticky top-28">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
                <img
                  src={photoMap[leader.photoKey]}
                  alt={leader.name}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-2xl font-bold text-navy-900">{leader.name}</h3>
                <p className="mt-1 font-semibold text-gold-600">{leader.title}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-lg font-medium leading-relaxed text-navy-800">{leader.standing}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-slate-600">{leader.summary}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Principal Duties
                </h4>
                <ul className="mt-4 space-y-3">
                  {leader.duties.map((duty) => (
                    <li key={duty} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-600" />
                      <span className="text-sm leading-relaxed text-slate-700">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TogetherSection() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="One Leadership Set"
          title="They do not run three companies under one logo"
          light
          align="center"
        />
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-white/70 leading-relaxed">
            The CEO directs the Manager on operational performance — deployments met, vehicles
            fit, workshop jobs closed, client complaints closed — and directs Human Resources on
            the state of the workforce: contracts in order, contributions remitted, discipline
            consistent, recruitment equal to the work accepted. If those three offices pulled in
            different directions, the worker on the night shift would pay the price. This is why
            the roles are written down, not assumed.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
