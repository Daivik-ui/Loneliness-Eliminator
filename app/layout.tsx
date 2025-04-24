import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Loneliness Eliminator 3000",
  description: "A sarcastic mental health & humor tool for Gen Z coping with loneliness through memes and chaos",
  openGraph: {
    title: "Loneliness Eliminator 3000",
    description: "A sarcastic mental health & humor tool for Gen Z coping with loneliness through memes and chaos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loneliness Eliminator 3000",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

