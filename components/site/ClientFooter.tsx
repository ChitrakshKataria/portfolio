"use client";

import React from 'react'
import { siteConfig } from '@/lib/siteConfig';
import { usePathname } from 'next/navigation';

const ClientFooter = () => {
  const pathname = usePathname()
  if (pathname === "/experiments" || pathname.startsWith("/experiments/")) return null
  return (
    <div className='flex min-h-full flex-col'>
    <div className="text-center mt-3 text-sm">
     <div>
      <div>
      <a href={siteConfig.socials.github} className="text-sm ml-3 text-[var(--accent)]" target="_blank">Github</a>
      <span>|</span>
      <a href={siteConfig.socials.googlescholar} className='text-sm ml-1 text-[var(--accent)]' target='_blank'>Google Scholar</a>
      <span>|</span>
      <a href={siteConfig.socials.orcid} className='text-sm ml-1 text-[var(--accent)]' target='_blank'>ORCID</a>
      <span>|</span>
      <a href={siteConfig.socials.linkedin} className="text-sm ml-1 z-10 text-[var(--accent)]" target="_blank">LinkedIn</a>
      </div>
      <div className='mt-2 text-center'>
      <span>Email:</span>
      <a href={`mailto:${siteConfig.email_personal}`} className="ml-2 text-[var(--muted)] z-10 underline text-[var(--accent)]">{siteConfig.email_personal}</a>
      </div>
    </div>      
    </div>
      <p className="fixed bottom-3 left-0 w-full text-center text-xs text-[var(--muted)] select-none z-0">EARLY BUILD - MAY NOT BE FULLY FUNCTIONAL</p>
      </div>
  )
}
export default ClientFooter