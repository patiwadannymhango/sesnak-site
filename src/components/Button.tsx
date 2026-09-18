import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_8px_30px_-8px_rgba(201,162,39,0.6)] hover:shadow-[0_12px_36px_-6px_rgba(201,162,39,0.7)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-navy-900 border border-navy-900/15 hover:border-navy-900/30 hover:-translate-y-0.5",
  ghost: "text-white border border-white/30 hover:bg-white/10 hover:-translate-y-0.5",
};

export function Button({
  to,
  href,
  download,
  onClick,
  variant = "primary",
  children,
  icon = true,
  className = "",
  type = "button",
}: {
  to?: string;
  href?: string;
  download?: string | boolean;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  icon?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={!download && href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
