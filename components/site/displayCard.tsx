import Link from "next/link";
// AI Generated CSS

interface DisplayCardProps {
  title?: string;
  company?: string;
  date?: string;
  description?: string;
  ghLink?: string;
  slug?: string;
}

export default function DisplayCard({
  title = "Example title",
  company = "N/A",
  date = "20 Jun - 31 Jul",
  description = "Example description",
  ghLink = "https://github.com/ChitrakshKataria",
  slug = "",
}: DisplayCardProps) {
  return (
    <Link
      href={ghLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title}`}
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
      "
    >
      <article className="flex h-full flex-col">

        {/* Date and arrow */}
        <div className="mb-5 flex items-center justify-between">
          <span className="text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400">
            {date}
          </span>

          <span className="text-lg text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]">
            ↗
          </span>
        </div>

        {/* Title */}
        <h2 className="font-mono text-xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
          {title}
        </h2>

        {company !== "N/A" && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {company}
          </p>
        )}

        {/* Description */}
        <p className="mt-5 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-end border-t border-gray-200 pt-4 dark:border-white/10">
          <span className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]">
            View project ↗
          </span>
        </div>

      </article>
    </Link>
  );
}