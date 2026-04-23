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
  title: 'Sonward Construction LLC | Roofing Experts Serving Greater Oklahoma City',
  description:
    'Family-owned and locally operated roofing company serving Oklahoma City, Norman, Edmond, Yukon, Moore, Mustang, Tuttle, Kingfisher, and surrounding areas. Roofing, repairs, storm damage, insurance claims, gutters, siding, and more. Serving OKC since 1982.',
  keywords: [
    'roofing Oklahoma City',
    'roof repair OKC',
    'storm damage roofing',
    'insurance claim roofing',
    'leak repair specialist',
    'Sonward Construction',
    'roofing Norman OK',
    'roofing Edmond OK',
    'family owned roofing Oklahoma',
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
