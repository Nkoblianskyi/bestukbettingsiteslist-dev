import type React from "react"
import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bestukbettingsiteslist.com"),
  title: "Best UK Betting Sites List — Expert Rankings & Top Offers 2026",
  description:
    "bestukbettingsiteslist.com compares the top UK-licensed bookmakers: welcome bonuses, odds quality, features and payment methods — all in one place.",
  openGraph: {
    siteName: "bestukbettingsiteslist",
    url: "https://bestukbettingsiteslist.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${syne.variable} bg-background`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
