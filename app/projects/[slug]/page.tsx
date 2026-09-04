import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import { getReadmeFromGH } from "@/components/server/githubRestAPI";
import { siteConfig } from "@/lib/siteConfig";
import ReactMarkdown from "react-markdown";


export default async function dynamicProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
    const params = await props.params
    const slug = params.slug
    const project = getProjectBySlug(slug)

    if(!project) {
        notFound()
    }

    const readme = await getReadmeFromGH(siteConfig.ghUser, project.slug)

  return (
    <div>
      <p className="text-[var(--muted)]">{project.date}</p>
      <h1 className="text-2xl">{project.title}</h1>
      <ReactMarkdown>{readme}</ReactMarkdown>


    </div>
  );
}
