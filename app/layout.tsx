import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

// Brand fonts: serif for titles, sans for body
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

// SEO + OpenGraph metadata
export const metadata: Metadata = {
  title: "Ayoade Ventures — Natural Children’s Drinks Distributor",
  description:
    "Premium natural, low-sugar drinks — Mr Fruits & GoFresh. Wholesale cartons for retailers. Order via WhatsApp.",
  openGraph: {
    title: "Ayoade Ventures",
    description:
      "Natural non-carbonated drinks distributor. Order wholesale cartons via WhatsApp.",
    url: "https://ayoadeventures.com",
    siteName: "Ayoade Ventures",
    images: [
      {
        url: "/og-image.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Ayoade Ventures — Natural Children’s Drinks Distributor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle", // optional
    creator: "@yourhandle", // optional
  },
  icons: {
    icon: "/favicon.ico",
  },
}

// Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#FAFAFA] text-[#3D2C2E]">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
