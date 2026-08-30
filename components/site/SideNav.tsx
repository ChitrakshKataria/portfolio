"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideNav = () => {
    const pathname = usePathname()
  return (
    <div>
        <Link href="/" className='color-white-500'>Home</Link>
    </div>
  )
}

export default SideNav