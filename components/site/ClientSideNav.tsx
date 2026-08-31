"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideNav = () => {
    const pathname = usePathname()
  return (
    <nav className="flex flex-col text-right text-sm gap-y-2">
        <Link href="/" className={ pathname === "/" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>Home</Link>
        <Link href="/blog" className={ pathname === "/blog" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>Blog</Link>
        <Link href="/about" className={ pathname === "/about" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>About</Link>
        <Link href="/projects" className={ pathname === "/projects" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>Projects</Link>
        <Link href="/experince" className={ pathname === "/experince" ? "text-[var(--accent)]" : "text-[var(--foreground)]" }>Experince</Link>
    </nav>
  )
}

export default SideNav