import DisplayCard from "@/components/site/displayCard";
import { projects } from "@/lib/projects";

export default function projectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Project Page</h1>
      <p className="mt-6">A list of all the projects i have worked on</p>
      <div className="my-6 h-[1px] w-full" />
      <div className="flex flex-col gap-y-5">
      {projects.map((project) => {
        return (
          <DisplayCard
            key={project.title}
            title={project.title}
            date={project.date}
            description={project.desc}
          />
        );
      })}
      </div>
    </div>
  );
}
