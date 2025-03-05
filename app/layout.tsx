import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Antoine Castel",
  description: "Welcome to my professional portfolio.",
};

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