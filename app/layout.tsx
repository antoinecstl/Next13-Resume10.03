"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef, createContext } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}