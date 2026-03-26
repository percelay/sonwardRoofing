import Image from 'next/image'
import { Shield, Clock, Star } from 'lucide-react'

const highlights = [
  { icon: Shield, label: 'Fully Insured & Certified' },
  { icon: Clock, label: 'Prompt Service, On Time' },
  { icon: Star, label: 'Over 40 Years of Experience' },
]

export default function About() {
  return (
    <section id="about" className="bg-parchment-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            {/* Primary image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/roofingjob.webp"
                alt="Sonward Roofing crew — premium craftsmanship in Oklahoma City"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Inset accent image */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 w-48 h-40 lg:w-64 lg:h-52 overflow-hidden border-4 border-parchment-50 shadow-2xl">
              <Image
                src="/images/roofingtileoptions.png"
                alt="Luxury tile and slate roofing material options"
                fill
                className="object-cover object-center"
                sizes="280px"
              />
            </div>

            {/* Years badge */}
            <div className="absolute -top-6 -left-4 lg:-left-8 bg-slate-900 text-white px-6 py-5 shadow-2xl">
              <div className="font-serif text-4xl font-light text-gold-400 leading-none">40+</div>
              <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-parchment-300 mt-1">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold-500" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 font-medium">
                About Sonward
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 mb-8 leading-tight">
              A Legacy of Craftsmanship{' '}
              <em className="italic text-slate-600">Since 1982</em>
            </h2>

            <p className="font-sans font-light text-muted text-base lg:text-[17px] leading-relaxed mb-8">
              Founded in 1982, Sonward Roofing &amp; Construction LLC brings over
              three decades of experience to the Oklahoma City metro and
              surrounding areas. As a fully insured and certified, family-owned
              and locally operated business, customer service is our number one
              priority.
            </p>
            <p className="font-sans font-light text-muted text-base lg:text-[17px] leading-relaxed mb-10">
              We pride ourselves on being on time, providing prompt service, and
              delivering thorough quality assurance and personal attention.
              Whether working directly with homeowners or partnering with
              high-end builders, you can rest comfortably knowing only the
              best-trained technicians are installing or repairing your roof.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border-l-2 border-gold-400 pl-4"
                >
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className="text-gold-500 shrink-0"
                  />
                  <span className="font-sans text-xs font-light tracking-wide text-slate-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="tel:4058434448"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-parchment-100 font-sans text-xs font-light tracking-[0.2em] uppercase px-7 py-4 transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
