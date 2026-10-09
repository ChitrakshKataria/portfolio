import Link from "next/link";
import { experiments } from "@/lib/experiments";
// AI generated CSS
export default function Experiments() {
    return (
        <>
            {experiments.map((experiment, index) => (
                <article
                    key={experiment.ghLink}
                    className="
            group flex h-full flex-col
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
                    {/* Top section */}
                    <div className="mb-5 flex items-center justify-between">
                        <span className="text-xs font-medium tracking-widest text-gray-500 uppercase dark:text-gray-400">
                            Experiment {String(index + 1).padStart(3, "0")}
                        </span>

                        <span className="text-xl opacity-40 transition-opacity group-hover:opacity-100">
                            ◈
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold tracking-tight">
                        {experiment.title}
                    </h2>

                    {/* Date */}
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {experiment.date}
                    </p>

                    {/* Description */}
                    <p className="mt-5 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {experiment.desc}
                    </p>

                    {/* Footer */}
                    <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-white/10">
                        <Link
                            href={experiment.ghLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium transition-opacity hover:opacity-60"
                        >
                            GitHub ↗
                        </Link>

                        <Link
                            href={experiment.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium transition-opacity hover:opacity-60"
                        >
                            Live demo ↗
                        </Link>
                    </div>
                </article>
            ))}
        </>
    );
}