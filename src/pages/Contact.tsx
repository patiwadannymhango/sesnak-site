import { useState, type FormEvent } from "react";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { ProfileDownload } from "../components/ProfileDownload";
import { site } from "../data/content";
import { images } from "../data/images";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: site.phones,
    href: `tel:${site.phones[0].replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [site.address.line1, site.address.line2, site.address.country],
    href: "https://www.google.com/maps?q=Solwezi,+North-Western+Province,+Zambia",
  },
];

export function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Tell us what the site needs"
        body="Reach the head office directly, or send a requisition below — trade, numbers, duration and site rules — and we'll route it to the right desk."
        image={images.workTwoCrew}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {contactCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/20 hover:shadow-xl"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy-900 text-white transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <card.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-navy-900">{card.title}</h3>
                  <div className="mt-2 space-y-0.5">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-slate-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-5">
            <ProfileDownload />
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Requisition Form"
                title="Send your labour or workshop request"
                body="This opens a pre-filled email in your mail app addressed to our head office — nothing is sent from our servers, so you stay in control of what goes out."
              />
              <Reveal delay={0.14}>
                <div className="mt-8">
                  <RequisitionForm />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg shadow-navy-900/5">
                <iframe
                  title="Map showing Solwezi, North-Western Province, Zambia"
                  src="https://www.google.com/maps?q=Solwezi,+North-Western+Province,+Zambia&output=embed"
                  className="h-80 w-full grayscale-[15%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-navy-950 p-7 text-white">
                  <h3 className="font-display text-lg font-bold text-gold-400">Head Office</h3>
                  <p className="mt-2 text-sm text-white/70">
                    {site.address.line1}, {site.address.line2}, {site.address.country}
                  </p>
                  <div className="mt-4 flex flex-col gap-1 text-sm text-white/80">
                    <span>CEO: Mr Ernest Muwowo</span>
                    <span>Manager: Mr Zulu</span>
                    <span>Human Resources: Mr Fred Kasonda</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}

function RequisitionForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [tradeInfo, setTradeInfo] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Labour / Workshop Requisition — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Trade / Numbers / Duration: ${tradeInfo}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" value={name} onChange={setName} required placeholder="Your name" />
        <Field
          label="Company / Site"
          value={company}
          onChange={setCompany}
          placeholder="Mine or contractor"
        />
      </div>
      <Field label="Phone Number" value={phone} onChange={setPhone} placeholder="+260 ..." />
      <Field
        label="Trade, Numbers & Duration"
        value={tradeInfo}
        onChange={setTradeInfo}
        placeholder="e.g. 3 coded welders, 2 weeks, day shift"
      />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-navy-900">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Site rules, induction requirements, anything else we should know"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20"
        />
      </div>
      <Button type="submit" variant="primary" icon={false} className="w-full sm:w-auto">
        <span className="flex items-center gap-2">
          Send Requisition
          <Send size={16} />
        </span>
      </Button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-900">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20"
      />
    </div>
  );
}
