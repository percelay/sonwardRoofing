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

const serviceAreas = ['Oklahoma City', 'Norman', 'Edmond', 'Yukon', 'Moore', 'Mustang', 'Tuttle', 'Kingfisher']

const credentials = [
  'Fully Licensed & Insured',
  'Locally & Family Owned',
  '40+ Years of Experience',
  'Free Inspections',
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950">

      {/* Main contact block */}
      <div className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

            {/* CTA */}
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4 pl-4 border-l-4 border-red-500">
                Ready to Get Started?
              </h2>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
                Call us or email for a free estimate. Local. Prompt. Standing behind our work.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {credentials.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <ShieldCheck size={12} className="text-red-500 shrink-0" />
                    <span className="font-sans text-xs text-neutral-400">{c}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:4058434448"
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-sans text-sm font-semibold px-5 py-3 transition-colors duration-200"
                >
                  <Phone size={13} />
                  (405) 843-4448
                </a>
                <a
                  href="mailto:info@sonwardconstruction.com"
                  className="flex items-center gap-2 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white font-sans text-sm px-5 py-3 transition-colors duration-200"
                >
                  <Mail size={13} />
                  Email Us
                </a>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-7">
                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <MapPin size={13} />
                    <span className="font-heading font-bold text-xs uppercase tracking-wider">Address</span>
                  </div>
                  <p className="font-sans text-sm text-neutral-300 leading-relaxed">
                    3333 NW 63rd St.<br />Oklahoma City, OK 73116
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <Phone size={13} />
                    <span className="font-heading font-bold text-xs uppercase tracking-wider">Phone</span>
                  </div>
                  <a href="tel:4058434448" className="font-sans text-sm text-neutral-300 hover:text-red-400 transition-colors duration-200">
                    (405) 843-4448
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <Mail size={13} />
                    <span className="font-heading font-bold text-xs uppercase tracking-wider">Email</span>
                  </div>
                  <a href="mailto:info@sonwardconstruction.com" className="font-sans text-sm text-neutral-300 hover:text-red-400 transition-colors duration-200 break-all">
                    info@sonwardconstruction.com
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <Clock size={13} />
                    <span className="font-heading font-bold text-xs uppercase tracking-wider">Service</span>
                  </div>
                  <p className="font-sans text-sm text-neutral-300">
                    Prompt service, prompt scheduling
                  </p>
                </div>
              </div>

              <div>
                <p className="font-heading font-bold text-xs uppercase tracking-wider text-red-500 mb-3">Areas We Serve</p>
                <ul className="flex flex-col gap-1.5">
                  {serviceAreas.map((area) => (
                    <li key={area} className="font-sans text-sm text-neutral-400">{area}</li>
                  ))}
                  <li className="font-sans text-xs text-neutral-600 italic mt-1">&amp; surrounding areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <Link href="/">
            <Image
              src="/sonwardMainLogo.png"
              alt="Sonward Construction LLC"
              width={140}
              height={38}
              className="h-9 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-200"
            />
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-neutral-800 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
          <p className="font-sans text-xs text-neutral-700">
            &copy; {new Date().getFullYear()} Sonward Construction LLC. All rights reserved.
          </p>
          <p className="font-sans text-xs text-neutral-700">
            Oklahoma City, OK · Fully Licensed &amp; Insured · Serving OKC Since 1982
          </p>
        </div>
      </div>
    </footer>
  )
}
