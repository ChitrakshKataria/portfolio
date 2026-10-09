"use client";

import React from 'react'
import { usePathname } from 'next/navigation';

const ClientSeperator = () => {
  const pathname = usePathname()
  if (pathname === "/experiments" || pathname.startsWith("/experiments/")) return null
  return (
      <p className="text-1xl my-4">.</p>
  )
}

export default ClientSeperator