import type { Metadata } from 'next'
import { Barlow, Inter } from 'next/font/google'
import '@/styles/globals.css'

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
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
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
