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
      <article className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{readme}</ReactMarkdown>
      </article>


    </div>
  );
}
