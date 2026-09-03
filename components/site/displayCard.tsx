import Link from "next/link";
import React from "react";

const DisplayCard = ({
  // Drilling the information through:
  title = "Example title",
  company = "Example company",
  date = "20 Jun - 31 Jun",
  description = "Example description ",
}) => {
  return (
    <Link href="/">
      {" "}
      {/* Add a dynamic rout here later on  */}
        <div className="flex w-full items-center justify-between gap-8 border px-8 text-left">        <div className="flex flex-col items-start gap-2">
          <div className="text-[var(--muted)] text-xs">
            <p>{date}</p>
          </div>
          <div className="text-left">
            <h2 className="font-mono text-[15px] font-bold leading-none]">
              {title}
            </h2>
            <p className="mt-3 font-mono text-[15px] leading-normal">
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
