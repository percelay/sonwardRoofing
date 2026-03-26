import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import '@/styles/globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sonward Roofing & Construction LLC | Oklahoma City',
  description:
    'Family-owned and operated for over 30 years. Specializing in luxury roofing, high-end materials, and unparalleled craftsmanship in Oklahoma City and surrounding areas.',
  keywords: [
    'roofing Oklahoma City',
    'luxury roofing',
    'tile roofing',
    'slate roofing',
    'roof repair OKC',
    'Sonward Roofing',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
