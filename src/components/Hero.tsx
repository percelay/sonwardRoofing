import Image from 'next/image'
import { Phone, ChevronDown, MapPin } from 'lucide-react'

const serviceAreas = [
  'Norman', 'Edmond', 'Yukon', 'Moore', 'Mustang', 'Tuttle', 'Kingfisher',
]

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/roofinghero.jpg"
        alt="Sonward Construction — trusted roofing in Oklahoma City since 1982"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-neutral-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-950/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-20">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-red-500" />
            <span className="font-sans text-[11px] font-light tracking-[0.28em] uppercase text-red-400">
              Family-Owned &amp; Locally Operated Since 1982
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-light text-white leading-[1.1] mb-7">
            <span className="block text-5xl sm:text-6xl lg:text-7xl">
              Oklahoma City&apos;s
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-red-400">
              Trusted Roofing
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl">
              Experts
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans font-light text-neutral-300 text-lg lg:text-xl leading-relaxed mb-4 max-w-xl">
            Family-owned and operated for over 40 years. We specialize in roofing,
            repairs, storm damage, and insurance claims — with the integrity and
            craftsmanship your home deserves.
          </p>

          {/* Service areas */}
          <div className="flex items-start gap-2 mb-10">
            <MapPin size={13} strokeWidth={1.5} className="text-red-400 mt-1 shrink-0" />
            <p className="font-sans text-[12px] font-light tracking-wide text-neutral-400">
              Serving Greater OKC &amp; surrounding areas:{' '}
              <span className="text-neutral-300">
                {serviceAreas.join(' · ')} &amp; more
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:4058434448"
              className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-sans text-xs font-medium tracking-[0.18em] uppercase px-7 py-4 transition-all duration-300"
            >
              <Phone size={14} strokeWidth={2} />
              Call (405) 843-4448
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 border border-neutral-400/60 hover:border-white text-neutral-200 hover:text-white font-sans text-xs font-light tracking-[0.18em] uppercase px-7 py-4 transition-all duration-300"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-500 hover:text-red-400 transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
