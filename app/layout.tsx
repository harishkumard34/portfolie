import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "D. Harish Kumar | Full Stack AI Engineer & Agentic Developer",
  description:
    "Portfolio of D. Harish Kumar, a Full Stack AI Engineer specializing in building production-grade Agentic workflows, LangGraph pipelines, RAG systems, and scalable web applications.",
  keywords: [
    "Harish Kumar",
    "Agentic AI",
    "Full Stack Developer",
    "AI Engineer",
    "LangGraph",
    "LangChain",
    "RAG",
    "FastAPI",
    "React.js",
    "Spring Boot",
    "Madurai"
  ],
  authors: [{ name: "D. Harish Kumar" }],
  creator: "D. Harish Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://portfolie-eta.vercel.app/",
    title: "D. Harish Kumar | Full Stack AI Engineer",
    description: "Architecting autonomous AI systems, RAG pipelines, and highly scalable enterprise applications.",
    siteName: "D. Harish Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "D. Harish Kumar | Full Stack AI Engineer",
    description: "Architecting autonomous AI systems, RAG pipelines, and highly scalable enterprise applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
