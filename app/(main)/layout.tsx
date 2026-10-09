import type { Metadata } from "next";
import "../globals.css";
import SideNav from '@/components/site/ClientSideNav'
import { siteConfig } from "@/lib/siteConfig";
import ClientFooter from "@/components/site/ClientFooter"
import ClientSeperator from "@/components/site/ClientSeperator";


export const metadata: Metadata = {
  title:  siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="flex w-full max-w-[850px] flex-col gap-10 sm:flex-row sm:items-center sm:gap-16 lg:gap-24">
            <SideNav />

            <div className="w-full min-w-0 max-w-[600px] text-center">
              { children }
              <ClientSeperator />
              <ClientFooter />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
