"use client";

import React from 'react'
import { siteConfig } from '@/lib/siteConfig';

const ClientFooter = () => {
  return (
    <div className="flex justify-center mt-3 text-sm">
     <div>
      <a href={siteConfig.socials.github} className="text-sm ml-3 underline" target="_blank">Github</a> <a href={siteConfig.socials.linkedin} className=" text-sm ml-1 underline" target="_blank">LinkedIn</a>
      <div className='mt-2 flex'>
      <p>Email:</p>
      <a href={`mailto:${siteConfig.email_personal}`} className="ml-2 text-[var(--muted)]">{siteConfig.email_personal}</a>
      </div>
    </div>      
    </div>
  )
}

export default ClientFooter