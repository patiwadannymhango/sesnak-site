import { Download, FileText } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { site } from "../data/content";

export function ProfileDownload({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <Reveal>
      <div
        className={`flex flex-col items-center gap-8 rounded-2xl border p-8 text-center sm:flex-row sm:text-left sm:p-10 ${
          dark
            ? "border-white/10 bg-white/[0.03]"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <div
          className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${
            dark ? "bg-gold-500/15 text-gold-400" : "bg-navy-900 text-white"
          }`}
        >
          <FileText size={28} />
        </div>
        <div className="flex-1">
          <h3 className={`font-display text-xl font-bold ${dark ? "text-white" : "text-navy-900"}`}>
            Get the Full Company Profile
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/65" : "text-slate-600"}`}>
            Download the official 2026 SESNAK LIMITED corporate document — services, leadership,
            safety standards and letterhead — as a single PDF you can share, print or file.
          </p>
          <p className={`mt-2 text-xs font-medium uppercase tracking-wide ${dark ? "text-white/40" : "text-slate-400"}`}>
            {site.profilePdf.sizeLabel}
          </p>
        </div>
        <Button
          href={site.profilePdf.url}
          download={site.profilePdf.filename}
          icon={false}
          variant={dark ? "primary" : "secondary"}
          className="w-full shrink-0 sm:w-auto"
        >
          <span className="flex items-center gap-2">
            Download PDF
            <Download size={16} />
          </span>
        </Button>
      </div>
    </Reveal>
  );
}
