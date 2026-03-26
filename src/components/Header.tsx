'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900 shadow-xl shadow-slate-950/40'
          : 'bg-gradient-to-b from-slate-950/80 to-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="font-serif text-2xl font-light tracking-widest text-white"
              style={{ letterSpacing: '0.18em' }}
            >
              SONWARD
            </span>
            <span className="font-sans text-[10px] font-light tracking-[0.28em] text-gold-400 uppercase mt-0.5">
              Roofing &amp; Construction
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs font-light tracking-[0.18em] uppercase text-parchment-300 hover:text-gold-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:4058434448"
              className="flex items-center gap-2 border border-gold-500 bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-slate-900 font-sans text-xs font-medium tracking-[0.14em] uppercase px-5 py-2.5 transition-all duration-300"
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
        } bg-slate-900 border-t border-slate-700`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-sm font-light tracking-widest uppercase text-parchment-200 hover:text-gold-400 transition-colors duration-300 py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:4058434448"
            className="mt-2 flex items-center justify-center gap-2 border border-gold-500 text-gold-400 font-sans text-xs tracking-widest uppercase py-3 hover:bg-gold-500 hover:text-slate-900 transition-all duration-300"
          >
            <Phone size={13} />
            (405) 843-4448
          </a>
        </nav>
      </div>
    </header>
  )
}
