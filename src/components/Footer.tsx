import Link from 'next/link'
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Premium Roof Installation & Replacement',
  'Expert Roof Repair & Maintenance',
  'Storm Evaluations & Insurance Assistance',
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950">

      {/* Contact band */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: CTA */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gold-500" />
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 font-medium">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                Ready to Protect{' '}
                <em className="italic text-gold-300">Your Investment?</em>
              </h2>
              <p className="font-sans font-light text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Contact us today for a free consultation. We&apos;re prompt, professional, and dedicated to your satisfaction.
              </p>
              <a
                href="tel:4058434448"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-slate-900 font-sans text-xs font-medium tracking-[0.18em] uppercase px-8 py-4 transition-all duration-300"
              >
                <Phone size={14} strokeWidth={2} />
                Call (405) 843-4448
              </a>
            </div>

            {/* Right: Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gold-500 mb-1">
                  <MapPin size={14} strokeWidth={1.5} />
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium">Address</span>
                </div>
                <p className="font-sans font-light text-slate-300 text-sm leading-relaxed">
                  3333 NW 63rd St.<br />
                  Oklahoma City, OK 73116
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gold-500 mb-1">
                  <Phone size={14} strokeWidth={1.5} />
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium">Phone</span>
                </div>
                <a
                  href="tel:4058434448"
                  className="font-sans font-light text-slate-300 text-sm hover:text-gold-400 transition-colors duration-300"
                >
                  (405) 843-4448
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gold-500 mb-1">
                  <Clock size={14} strokeWidth={1.5} />
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium">Service</span>
                </div>
                <p className="font-sans font-light text-slate-300 text-sm leading-relaxed">
                  Prompt service,<br />prompt scheduling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl font-light tracking-[0.2em] text-white">
              SONWARD
            </span>
            <span className="font-sans text-[9px] font-light tracking-[0.28em] text-gold-500 uppercase mt-0.5">
              Roofing &amp; Construction
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[11px] font-light tracking-[0.16em] uppercase text-slate-500 hover:text-gold-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Services list */}
          <div className="hidden xl:flex flex-col gap-1.5">
            {services.map((s) => (
              <span key={s} className="font-sans text-[11px] font-light text-slate-600">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Legal line */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-[11px] font-light text-slate-600">
            &copy; {new Date().getFullYear()} Sonward Roofing &amp; Construction LLC. All rights reserved.
          </p>
          <p className="font-sans text-[11px] font-light text-slate-700">
            Oklahoma City, OK &middot; Fully Insured &amp; Certified
          </p>
        </div>
      </div>
    </footer>
  )
}
