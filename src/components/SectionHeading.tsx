import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
              light ? "text-gold-400" : "text-gold-600"
            }`}
          >
            <span className={`h-px w-6 ${light ? "bg-gold-400" : "bg-gold-600"}`} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`mt-3 text-3xl sm:text-4xl font-bold text-balance ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-white/70" : "text-slate-600"}`}>
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
