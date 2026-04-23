import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'

const serviceAreas = ['Norman', 'Edmond', 'Yukon', 'Moore', 'Mustang', 'Tuttle', 'Kingfisher']

export default function Hero() {
  return (
    <section className="relative min-h-[580px] h-screen max-h-[800px] flex items-center">
      <Image
        src="/images/roofinghero.jpg"
        alt="Sonward Construction — roofing in Oklahoma City"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-neutral-950/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-16">
        <div className="max-w-2xl">

          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-0.5 bg-red-500" />
            <span className="font-sans text-xs text-red-400 font-medium uppercase tracking-wider">
              Family-Owned &amp; Locally Operated Since 1982
            </span>
          </div>

          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
            Oklahoma City&apos;s<br />
            <span className="text-red-400">Trusted Roofing</span><br />
            Experts
          </h1>

          <p className="font-sans text-neutral-300 text-base lg:text-lg leading-relaxed mb-5 max-w-lg">
            Family-owned and operated for over 40 years. Roofing, repairs, storm damage,
            insurance claims — done right by people who live here.
          </p>

          <div className="flex items-center gap-2 mb-8">
            <MapPin size={13} className="text-neutral-400 shrink-0" />
            <span className="font-sans text-xs text-neutral-400">
              Serving OKC &amp; surrounding areas: {serviceAreas.join(' · ')} &amp; more
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:4058434448"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-sans text-sm font-semibold px-6 py-3 transition-colors duration-200"
            >
              <Phone size={14} />
              Call (405) 843-4448
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-neutral-400 hover:border-white text-neutral-200 hover:text-white font-sans text-sm px-6 py-3 transition-colors duration-200"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
