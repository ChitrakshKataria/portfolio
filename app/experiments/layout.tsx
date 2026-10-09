import type { Metadata } from "next";
import "../globals.css";
import { siteConfig } from "@/lib/siteConfig";


export const metadata: Metadata = {
  title:  siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
        <body>
            <div className="grid min-h-screen w-full grid-cols-[repeat(auto-fit,minmax(min(100%,280px),360px))] auto-rows-min content-center justify-center gap-6 p-6 [&>*]:rounded-xl [&>*]:border [&>*]:border-[var(--muted) [&>*]:p-3">{ children }</div>            
        </body>
    </html>

  );
}
