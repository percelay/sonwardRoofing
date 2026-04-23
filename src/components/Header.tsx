'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-neutral-900' : 'bg-neutral-950/80'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <Link href="/">
            <Image
              src="/sonwardMainLogo.png"
              alt="Sonward Construction LLC"
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="tel:4058434448"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-sans text-sm font-semibold px-4 py-2 transition-colors duration-200"
            >
              <Phone size={14} />
              (405) 843-4448
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-neutral-900 border-t border-neutral-700">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm text-neutral-300 hover:text-white py-2 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:4058434448"
              className="mt-3 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-sans text-sm font-semibold py-2.5 transition-colors duration-200"
            >
              <Phone size={14} />
              (405) 843-4448
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
