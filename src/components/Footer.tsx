import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const serviceAreas = [
  'Oklahoma City', 'Norman', 'Edmond', 'Yukon',
  'Moore', 'Mustang', 'Tuttle', 'Kingfisher',
]

const credentials = [
  'Fully Licensed & Insured',
  'Locally & Family Owned',
  '40+ Years of Experience',
  'Free Inspections',
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950">

      {/* Contact band */}
      <div className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: CTA */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-red-500" />
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-red-400 font-medium">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
                Ready to Get Started?
              </h2>
              <p className="font-sans font-light text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
                Call us or send an email for a free estimate. We&apos;re a local Oklahoma company — prompt, professional, and standing behind our work.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {credentials.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <ShieldCheck size={12} strokeWidth={1.5} className="text-red-500 shrink-0" />
                    <span className="font-sans text-xs font-light text-neutral-400">{c}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:4058434448"
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-sans text-xs font-medium tracking-[0.16em] uppercase px-6 py-3.5 transition-all duration-300"
                >
                  <Phone size={13} strokeWidth={2} />
                  (405) 843-4448
                </a>
                <a
                  href="mailto:info@sonwardconstruction.com"
                  className="flex items-center gap-2 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white font-sans text-xs font-light tracking-[0.16em] uppercase px-6 py-3.5 transition-all duration-300"
                >
                  <Mail size={13} strokeWidth={1.5} />
                  Email Us
                </a>
              </div>
            </div>

            {/* Right: contact details + areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-8">
                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-3">
                    <MapPin size={13} strokeWidth={1.5} />
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium">Address</span>
                  </div>
                  <p className="font-sans font-light text-neutral-300 text-sm leading-relaxed">
                    3333 NW 63rd St.<br />
                    Oklahoma City, OK 73116
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-3">
                    <Phone size={13} strokeWidth={1.5} />
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium">Phone</span>
                  </div>
                  <a
                    href="tel:4058434448"
                    className="font-sans font-light text-neutral-300 text-sm hover:text-red-400 transition-colors duration-300"
                  >
                    (405) 843-4448
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-3">
                    <Mail size={13} strokeWidth={1.5} />
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium">Email</span>
                  </div>
                  <a
                    href="mailto:info@sonwardconstruction.com"
                    className="font-sans font-light text-neutral-300 text-sm hover:text-red-400 transition-colors duration-300 break-all"
                  >
                    info@sonwardconstruction.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-3">
                    <Clock size={13} strokeWidth={1.5} />
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium">Service</span>
                  </div>
                  <p className="font-sans font-light text-neutral-300 text-sm">
                    Prompt service, prompt scheduling
                  </p>
                </div>
              </div>

              <div>
                <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-red-500 font-medium mb-3">
                  Areas We Serve
                </div>
                <ul className="flex flex-col gap-1.5">
                  {serviceAreas.map((area) => (
                    <li key={area} className="font-sans font-light text-neutral-400 text-sm">
                      {area}
                    </li>
                  ))}
                  <li className="font-sans font-light text-neutral-600 text-xs italic mt-1">
                    &amp; surrounding areas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/sonwardMainLogo.png"
              alt="Sonward Construction LLC"
              width={160}
              height={44}
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[11px] font-light tracking-[0.16em] uppercase text-neutral-600 hover:text-neutral-300 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div className="mt-6 pt-5 border-t border-neutral-800/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-sans text-[11px] font-light text-neutral-700">
            &copy; {new Date().getFullYear()} Sonward Construction LLC. All rights reserved.
          </p>
          <p className="font-sans text-[11px] font-light text-neutral-700">
            Oklahoma City, OK &middot; Fully Licensed &amp; Insured &middot; Serving OKC Since 1982
          </p>
        </div>
      </div>
    </footer>
  )
}
