"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideNav = () => {
    const pathname = usePathname()
  return (
    <nav className="flex flex-col text-base">
        <Link href="/" className={ pathname === "/" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>Home</Link>
        <Link href="/" className={ pathname === "/blog" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>Blog</Link>
        <Link href="/" className={ pathname === "/projects" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>Projects</Link>
        <Link href="/" className={ pathname === "/experince" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>Experince</Link>
    </nav>
  )
}

export default SideNav