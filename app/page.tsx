import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <section>
      <h1 className="mb-1 text-2xl font-bold">{siteConfig.name}</h1>
      <h2 className="mb-6 text-sm">{siteConfig.current}</h2>
      <p className="text-sm">{siteConfig.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur minima error autem possimus, nesciunt illo, adipisci expedita voluptatibus cum neque unde eaque </p> 
    </section> 
  );
}
