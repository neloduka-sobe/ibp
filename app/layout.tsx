import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/app/components/theme-provider"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Jerzy Łangowicz - Inżynieria Bezpieczeństwa Pożarowego",
  description:
    "Profesjonalne usługi w zakresie inżynierii bezpieczeństwa pożarowego. Oferujemy symulacje CFD, rzeczoznawstwo, doradztwo i projektowanie systemów przeciwpożarowych.",
  keywords:
    "inżynieria bezpieczeństwa pożarowego, symulacje CFD, rzeczoznawstwo pożarowe, doradztwo pożarowe, projektowanie systemów przeciwpożarowych",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
