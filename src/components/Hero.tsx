import Image from 'next/image'
import { Phone, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/roofinghero.jpg"
        alt="Premium roofing craftsmanship — Sonward Roofing Oklahoma City"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered overlays for depth and contrast */}
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-gold-400" />
            <span className="font-sans text-[11px] font-light tracking-[0.3em] uppercase text-gold-400">
              Oklahoma City&apos;s Premier Roofing Company
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-light text-white leading-[1.08] mb-7">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Elevating
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gold-300 italic">
              Oklahoma City&apos;s
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Roofs Since 1982
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans font-light text-parchment-200 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
            Family-owned and operated for over 30 years. We specialize in luxury
            roofing, high-end materials, and unparalleled craftsmanship to
            protect your greatest investment.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:4058434448"
              className="flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-slate-900 font-sans text-xs font-medium tracking-[0.18em] uppercase px-7 py-4 transition-all duration-300"
            >
              <Phone size={14} strokeWidth={2} />
              Call (405) 843-4448
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 border border-parchment-200/60 hover:border-gold-400 text-parchment-100 hover:text-gold-400 font-sans text-xs font-light tracking-[0.18em] uppercase px-7 py-4 transition-all duration-300"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-parchment-400/60 hover:text-gold-400 transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
