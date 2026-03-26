import Image from 'next/image'
import { Layers, Wrench, CloudLightning } from 'lucide-react'

const services = [
  {
    icon: Layers,
    tag: 'Residential & Luxury Roofing',
    title: 'Premium Roof Installation & Replacement',
    description:
      'Specializing in high-end luxury roofing, including tile, synthetic tile, and slate products. We deliver meticulous craftsmanship for new constructions and complete re-roofs to keep your home protected and beautiful for years to come.',
    image: '/images/morehighendtiels.webp',
    imageAlt: 'High-end luxury tile and slate roofing materials',
  },
  {
    icon: Wrench,
    tag: 'Roof Repair & Maintenance',
    title: 'Expert Roof Repair & Maintenance',
    description:
      'From minor leaks to flat roofs and metal roofs, our highly trained professionals use only quality products to ensure your project is done on time and within budget. We offer a 3-year warranty on workmanship for repairs and a 5-year warranty for new roofs.',
    image: '/images/niceroofingjob.jpg',
    imageAlt: 'Expert roof repair and maintenance work',
  },
  {
    icon: CloudLightning,
    tag: 'Storm Damage & Insurance Claims',
    title: 'Storm Evaluations & Insurance Assistance',
    description:
      'When hail or severe weather strikes, our responsive team handles storm evaluations, siding, gutters, and complete insurance claims. We work with you to seamlessly restore your property.',
    image: '/images/roofingjobb.jpg',
    imageAlt: 'Storm damage roof evaluation and insurance claim assistance',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold-500" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 font-medium">
              What We Do
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-tight">
            Services Built Around{' '}
            <em className="italic text-slate-500">Your Home</em>
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border">
          {services.map(({ icon: Icon, tag, title, description, image, imageAlt }, i) => (
            <article
              key={title}
              className={`group flex flex-col bg-surface hover:bg-parchment-100 transition-colors duration-500 ${
                i < services.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-border' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-52 lg:h-60 overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-500" />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-8">
                {/* Icon + tag */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-gold-500/10 text-gold-600">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-muted font-light">
                    {tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl lg:text-3xl font-light text-slate-900 mb-4 leading-snug">
                  {title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-gold-400 mb-5" />

                {/* Description */}
                <p className="font-sans font-light text-muted text-sm leading-relaxed flex-1">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-0 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7 border border-t-0 border-slate-800">
          <p className="font-sans font-light text-parchment-300 text-sm">
            Not sure what you need?{' '}
            <span className="text-gold-400">We&apos;ll assess it at no charge.</span>
          </p>
          <a
            href="#contact"
            className="shrink-0 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-slate-900 font-sans text-xs tracking-[0.18em] uppercase px-6 py-3 transition-all duration-300"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
