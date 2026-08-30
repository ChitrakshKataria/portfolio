import type { Metadata } from "next";
import "./globals.css";
import SideNav from '../components/site/SideNav'
import { siteConfig } from "@/lib/siteInfo";


export const metadata: Metadata = {
  title:  siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex item-center justify-center">
          <div className="flex items-center gap-32">
            <SideNav />

            <div className="w-[600px]">
              { children }
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
