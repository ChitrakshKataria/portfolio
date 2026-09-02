import ProjectCard from "@/components/site/projectCard";

export default function projects() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Project Page</h1>
      <p className="mt-6">A list of all the projects i have worked on</p>
      <div className="my-6 h-[1px] w-full bg-[#2a2a2a]" />
      
      <ProjectCard />
    </div>
  );
}
