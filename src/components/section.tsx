import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
        light
          ? "border-white/15 bg-white/5 text-brand-sky-400"
          : "border-brand-navy-900/10 bg-brand-navy-900/5 text-brand-navy-800",
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left")}>
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-brand-navy-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("max-w-2xl text-lg text-balance", light ? "text-white/70" : "text-muted-foreground")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
