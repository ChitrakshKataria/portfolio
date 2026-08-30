import Image from "next/image";
import { siteConfig } from "@/lib/siteInfo";

export default function Home() {
  return ( 
    <section className="text-center">
      <h1 className="">{siteConfig.name}</h1>
    </section>
  );
}
