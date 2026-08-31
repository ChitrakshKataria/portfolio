import type { Metadata } from "next";
import "./globals.css";
import SideNav from '../components/site/ClientSideNav'
import { siteConfig } from "@/lib/siteConfig";
import ClientFooter from "../components/site/ClientFooter"
import ClientSeperator from "@/components/site/ClientSeperator";


export const metadata: Metadata = {
  title:  siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex item-center justify-center mr-30" >
          <div className="flex items-center gap-32">
            <SideNav />

            <div className="w-[600px] text-center">
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
