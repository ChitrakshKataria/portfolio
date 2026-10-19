
import DisplayCard from "@/components/site/displayCard";
import { projects } from "@/lib/projects";

export default function ProjectPage() {
  return (
    <div className="w-full md:w-[min(850px,calc(100vw-300px))] md:max-w-none">
      <h1 className="text-2xl font-bold">Project Page</h1>

      <p className="mt-6">
        A list of all the projects I have worked on.
      </p>

      <div className="my-6 h-px w-full bg-border" />

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <DisplayCard
            key={project.title}
            title={project.title}
            date={project.date}
            description={project.desc}
            ghLink={project.ghLink}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
}
