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
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-neutral-900 shadow-xl shadow-neutral-950/50'
          : 'bg-gradient-to-b from-neutral-950/85 to-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/sonwardMainLogo.png"
              alt="Sonward Construction LLC"
              width={200}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs font-light tracking-[0.18em] uppercase text-neutral-300 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:4058434448"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-sans text-xs font-medium tracking-[0.14em] uppercase px-5 py-2.5 transition-all duration-300"
            >
              <Phone size={13} strokeWidth={1.5} />
              (405) 843-4448
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-1"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-neutral-900 border-t border-neutral-700`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-sm font-light tracking-widest uppercase text-neutral-300 hover:text-white transition-colors duration-300 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:4058434448"
            className="mt-2 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-sans text-xs tracking-widest uppercase py-3 transition-all duration-300"
          >
            <Phone size={13} />
            (405) 843-4448
          </a>
        </nav>
      </div>
    </header>
  )
}
