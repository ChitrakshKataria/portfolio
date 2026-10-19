
import Link from "next/link";

interface DisplayCardProps {
  title?: string;
  company?: string;
  date?: string;
  description?: string;
  ghLink?: string;
  scolarLink?: string;
  arXiv?: string;
}

export default function DisplayCard({
  title = "",
  company = "",
  date = "",
  description = "",
  ghLink = "",
  scolarLink = "",
  arXiv = "",
}: DisplayCardProps) {
  const links = [
    { label: "GitHub", href: ghLink },
    { label: "Google Scholar", href: scolarLink },
    { label: "arXiv", href: arXiv },
  ].filter((link) => link.href.trim());

  return (
    <div
      className="
        group block w-full
        rounded-xl border border-gray-200
        bg-[var(--muted-bg)] p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-gray-400
        hover:shadow-lg
        dark:border-white/10
        dark:hover:border-white/25
        z-10
      "
    >
      <article className="flex h-full flex-col">
        {/* Date */}
        {date.trim() && (
          <div className="mb-5 text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400">
            {date}
          </div>
        )}

        {/* Title */}
        {title.trim() && (
          <h2 className="font-mono text-xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
            {title}
          </h2>
        )}

        {/* Company */}
        {company.trim() && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {company}
          </p>
        )}

        {/* Description */}
        {description.trim() && (
          <p className="mt-5 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}

        {/* External Links */}
        {links.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-gray-200 pt-4 dark:border-white/10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
              >
                {link.label} ↗
              </Link>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
