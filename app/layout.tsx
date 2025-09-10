import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3, Playfair_Display } from "next/font/google"
import RoutePrefetcher from "@/components/route-prefetcher"
import "./globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Artha Business - Professional Repair & Maintenance Services",
  description:
    "Leading provider of repair and maintenance services for homes and businesses. Electrical work, office setups, bathroom renovations, and subscription maintenance plans.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${playfairDisplay.variable} antialiased`}>
      <body className="font-sans">
        <RoutePrefetcher />
        {children}
      </body>
    </html>
  )
}
