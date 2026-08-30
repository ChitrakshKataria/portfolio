import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="mb-1 text-2xl font-bold">{siteConfig.name}</h1>
      <h2 className="mb-6 text-sm">{siteConfig.current}</h2>
      <p className="text-sm">{siteConfig.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur minima error autem possimus, nesciunt illo, adipisci expedita voluptatibus cum neque unde eaque </p> 
      <p className="text-1xl my-4">.</p>
      <a href="" className="text-sm ml-3 underline">Github</a> <a href="" className=" text-sm ml-1 underline">LinkedIn</a>
      <div className="flex justify-center mt-3 text-sm">
      <p>Email:</p>
      <a href={`mailto:${siteConfig.email_personal}`} className="ml-2 text-[var(--muted)]">{siteConfig.email_personal}</a>
      </div>      
    </section>
  );
}
