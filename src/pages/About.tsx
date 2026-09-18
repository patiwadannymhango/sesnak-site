import { BadgeCheck, Building2, Gavel, ShieldCheck, Users2 } from "lucide-react";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { ProfileDownload } from "../components/ProfileDownload";
import { audiences, legalPoints, orgChain, operatingUnits } from "../data/content";
import { images } from "../data/images";

export function About() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="One organisation, built around a simple commercial truth"
        body="Mines need people. Those people need workshops, vehicles and administration behind them. SESNAK LIMITED exists to supply all of it, accountably."
        image={images.siteBuildingRed}
      />

      <WhoWeAre />
      <MarketPosition />
      <LegalStanding />
      <WhoWeServe />
      <OrgSection />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <ProfileDownload />
        </Container>
      </section>
    </div>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Solwezi's labour and technical services partner" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <Reveal>
                <p>
                  SESNAK LIMITED is a Zambian company based in Solwezi, the commercial and mining
                  centre of North-Western Province. The registered operating address is Solwezi
                  Lodge, Room 2. The company specialises in the hiring of labour to the mines and
                  to mine-support contractors — a core business strengthened by three technical
                  pillars in which we have built a practical reputation: boiler making, automotive
                  mechanics, and transport logistics.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  We exist to put the right people, with the right trade skill and the right
                  safety discipline, onto sites that cannot afford idle plant or empty shift
                  lines. Mining is a twenty-four-hour industry. A labour partner that arrives
                  late, sends the wrong trade, or ignores site rules is not a partner. SESNAK
                  LIMITED is built to be dependable.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p>
                  These four lines — labour hire, boiler making, automotive mechanics and
                  transport logistics — are not four separate companies. They are one
                  organisation. A fitter hired to a plant may need a fabricated part from our
                  workshop. A crew going on shift may need a serviced vehicle and a driver who
                  knows the route. The value of SESNAK LIMITED is that these needs are
                  coordinated from one management table.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
              <img
                src={images.workFabricationShop}
                alt="Fabricated aluminium components staged in the workshop"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function MarketPosition() {
  const points = [
    {
      icon: BadgeCheck,
      title: "Focused, Not Scattered",
      body: "We concentrate on mine labour hire rather than trying to be everything to everyone.",
    },
    {
      icon: Building2,
      title: "Workshop-Backed",
      body: "We keep real workshop capability so hired labour is never stranded without tools, parts or fabricated support.",
    },
    {
      icon: ShieldCheck,
      title: "Controlled Transport",
      body: "We run transport as a controlled, dispatched service — not as an informal side activity.",
    },
    {
      icon: Users2,
      title: "Visible Leadership",
      body: "CEO, Manager and Human Resources are each named and accountable, so a client always knows who to call.",
    },
  ];
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Position in the Market"
          title="What distinguishes a leading company in Solwezi"
          body="Not a slogan — whether a supervisor can call at night and receive a competent person the next morning; whether a damaged service vehicle returns to the road; whether a fabricated bracket fits the first time; and whether wages and statutory contributions are handled without confusion."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy-900/5 text-navy-800">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-5 font-display font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function LegalStanding() {
  return (
    <section className="bg-navy-950 py-24 text-white sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Legal & Civic Standing" title="An inspectable company" light />
            <Reveal delay={0.1}>
              <p className="mt-6 text-white/70 leading-relaxed">
                SESNAK LIMITED operates as a limited company under the laws of Zambia. We conduct
                business subject to statute and to the site rules of every mine or contractor
                that engages us — and we recognise the SESNAK LIMITED Workers' Union as the voice
                of organised labour within the enterprise.
              </p>
            </Reveal>
          </div>
          <StaggerGroup className="space-y-3">
            {legalPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Gavel size={18} className="mt-0.5 shrink-0 text-gold-400" />
                  <span className="text-sm text-white/80">{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Who We Serve" title="Clients who need people, kept moving" />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {audiences.map((a) => (
            <StaggerItem key={a.title}>
              <div className="h-full rounded-2xl bg-slate-50 p-7 transition-all duration-300 hover:bg-navy-900 hover:text-white group">
                <h3 className="font-display font-bold text-navy-900 group-hover:text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 group-hover:text-white/70">
                  {a.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

function OrgSection() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Are Organised"
          title="A clear chain, so nothing drifts"
          body="Supervisors, charge-hands, artisans, drivers and general workers report through the operating chain. They do not take employment instructions from clients that contradict company procedure."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="bg-navy-950 px-8 py-6 text-center text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-400">Chief Executive Officer</p>
              <p className="mt-1 font-display text-xl font-bold">{orgChain[0].name}</p>
              <p className="mt-1 text-sm text-white/60">{orgChain[0].scope}</p>
            </div>
            <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {orgChain.slice(1).map((o) => (
                <div key={o.office} className="px-8 py-6 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-600">{o.office}</p>
                  <p className="mt-1 font-display text-lg font-bold text-navy-900">{o.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{o.scope}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-200 border-t border-slate-200 sm:grid-cols-4">
              {operatingUnits.map((u) => (
                <div key={u} className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-navy-700">
                  {u}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
