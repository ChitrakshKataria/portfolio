
import { research } from "@/lib/Reserch";
import DisplayCard from "@/components/site/displayCard";

export default function ResearchPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Research</h1>

      <p className="mt-6">
        A list of all the research papers I have worked on.
      </p>

      <div className="my-6 h-px w-full bg-border" />

      <div className="flex flex-col gap-y-5">
        {research.map((project) => (
          <DisplayCard
            key={project.title}
            title={project.title}
            company={project.company}
            date={project.date}
            description={project.desc}
            ghLink={project.ghLink}
            scolarLink={project.scolarLink}
            arXiv={project.arXiv}
            ssrn={project.ssrn}
          />
        ))}
      </div>
    </div>
  );
}
