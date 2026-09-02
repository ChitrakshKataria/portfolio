import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title = "Project title",
  description = "Project description goes here",
}) => {
  return (
    <Link href="/">  {/* Add a dynamic rout here later on  */}
      <div className="w-full border border-[#2a2a2a] bg-[#0b0b0d] px-8 py-7 text-left">
        <div className="flex items-center justify-between gap-8">
          <div className="text-left">
            <h2 className="font-mono text-[15px] font-bold leading-none]">
              {title}
            </h2>
            <p className="mt-3 font-mono text-[15px] leading-normal">{description}</p></div>

          <a href="#" className="shrink-0 font-mono text-[15px] text-[#60a5fa] hover:underline">View</a>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
