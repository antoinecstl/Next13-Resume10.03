"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

const navButtonStyles = "bg-zinc-800 focus:outline-none flex justify-center items-center rounded-lg h-11 w-20 md:w-60";
const hoverStyles = "hover:scale-110 hover:border hover:border-white transition-transform";
const activeButtonStyles = "bg-slate-300 text-zinc-900 focus:outline-none flex justify-center items-center rounded-lg h-11 w-20 md:w-60";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="fr">
      <body className={inter.className}>
        <nav className="p-4 sm:p-8 mb-1">
          <ul className="flex flex-row justify-evenly gap-4 font-semibold">
            {/* Accueil */}
            <li>
              <Link href="/" passHref>
                <button className={`${hoverStyles} ${pathname === '/' ? activeButtonStyles : navButtonStyles}`}>Accueil</button>
              </Link>
            </li>
            {/* CV */}
            <li>
              <Link href="/cv" passHref>
                <button className={`${hoverStyles} ${pathname === '/cv' ? activeButtonStyles : navButtonStyles}`}>CV</button>
              </Link>
            </li>
            {/* Portfolio */}
            <li>
              <Link href="/portfolio" passHref>
                <button className={`${hoverStyles} ${pathname === '/portfolio' ? activeButtonStyles : navButtonStyles}`}>Portfolio</button>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
