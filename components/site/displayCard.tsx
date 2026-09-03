import Link from "next/link";
import React from "react";

const DisplayCard = ({
  // reciving  the drilled information with default values:
  title = "Example title",
  company = "Example company",
  date = "20 Jun - 31 Jun",
  description = "Example description ",
  ghLink = "https://github.com/ChitrakshKataria", // default link to my gh PROFILE :) (I might remove this later on this page as its no longer needed)
  slug = "",
}) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="flex w-full items-center justify-between border px-3 text-left">
        <div className="flex flex-col items-start ">
          <div className="text-[var(--muted)] text-xs">
            <p className="mt-2">{date}</p>
          </div>
          <div className="text-left">
            <h2 className="font-mono text-[20px] font-bold leading-none]">
              {title}
            </h2>
            <p className="font-mono text-[15px] leading-normal mt-4 mb-3">
              {description}
            </p>
          </div>
        </div>
        <span className="flex justify-end item-center shrink-0 font-mono text-[15px] hover:underline hover:text-[var(--accent)]">
          View
        </span>
      </div>
    </Link>
  );
};

export default DisplayCard;
