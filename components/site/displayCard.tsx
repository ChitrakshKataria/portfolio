import Link from "next/link";
import React from "react";


const DisplayCard = ({ // Drilling the information through:
  title = "Example title",
  company="Example company",
  date = "20 Jun - 31 Jun",
  description = "Example description ",
}) => {
  return (
    <Link href="/">  {/* Add a dynamic rout here later on  */}
      <div className="w-full border px-8 py-7 text-left">
        <div className="flex items-center justify-between gap-8">
          <div><p>{date}</p></div>
          <div className="text-left">
            <h2 className="font-mono text-[15px] font-bold leading-none]">
              {title}
            </h2>
            <p className="mt-3 font-mono text-[15px] leading-normal">{description}</p></div>
          <span className="shrink-0 font-mono text-[15px] hover:underline">View</span>
        </div>
      </div>
    </Link>
  );
};

export default DisplayCard;
