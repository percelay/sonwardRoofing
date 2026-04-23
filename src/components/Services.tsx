import Image from 'next/image'
import { Layers, Wrench, CloudLightning, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Layers,
    tag: 'Roofing & Re-Roofing',
    title: 'Roof Installation & Replacement',
    description:
      'We deliver meticulous craftsmanship for new constructions and complete re-roofs to keep your home protected for years to come. We offer a 5-year warranty on new roof installations.',
    types: [
      'Architectural Laminate Shingles',
      'Impact Rated (Class 3 & 4)',
      'Metal Roofing',
      'Flat Roofs — Fully Adhered TPO System',
      'Self-Adhered Modified Bitumen System',
    ],
    image: '/images/morehighendtiels.webp',
    imageAlt: 'Roofing materials — tile, shingle, and slate options',
  },
  {
    icon: Wrench,
    tag: 'Roof Repair & Maintenance',
    title: 'Expert Roof Repair & Maintenance',
    description:
      'Roof repairs and general roof maintenance — from the minor leaks to the most difficult to locate, we are the experts. Our highly trained professionals use only quality products. We offer a 3-year warranty on workmanship for repairs.',
    types: [
      'Free Inspections — determine needed repairs and extend the life of your roof',
    ],
    image: '/images/niceroofingjob.jpg',
    imageAlt: 'Expert roof repair work in Oklahoma City',
  },
  {
    icon: CloudLightning,
    tag: 'Storm Damage & Insurance Claims',
    title: 'Storm Evaluations & Insurance Assistance',
    description:
      'When hail or severe weather strikes, our responsive team handles storm evaluations, siding, gutters, and complete insurance claims. We are experts who work with your insurance company directly to make sure your claim is accurate, nothing has been omitted, and you get the most from your claim that you deserve.',
    types: [],
    image: '/images/roofingjobb.jpg',
    imageAlt: 'Storm damage roof evaluation and insurance claim assistance',
  },
]

const additionalServices = [
  'Guttering',
  'Skylights',
  'Windows',
  'Siding',
  'Soffit Repairs',
]

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-red-500" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-red-500 font-medium">
              What We Do
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-neutral-900 leading-tight">
            Services Built Around Your Home
          </h2>
        </div>

        {/* Main service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-neutral-200">
          {services.map(({ icon: Icon, tag, title, description, types, image, imageAlt }, i) => (
            <article
              key={title}
              className={`group flex flex-col bg-white hover:bg-neutral-50 transition-colors duration-500 ${
                i < services.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-neutral-200' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-neutral-950/25 group-hover:bg-neutral-950/15 transition-colors duration-500" />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-red-500/10 text-red-600">
                    <Icon size={15} strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-neutral-500 font-light">
                    {tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-light text-neutral-900 mb-3 leading-snug">
                  {title}
                </h3>

                <div className="w-7 h-px bg-red-400 mb-4" />

                <p className="font-sans font-light text-neutral-500 text-sm leading-relaxed mb-5">
                  {description}
                </p>

                {types.length > 0 && (
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {types.map((type) => (
                      <li key={type} className="flex items-start gap-2">
                        <CheckCircle size={12} strokeWidth={1.5} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs font-light text-neutral-500">{type}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Additional services strip */}
        <div className="mt-0 border border-t-0 border-neutral-200 bg-neutral-900">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 px-8 py-7">
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-neutral-400 shrink-0">
              We Also Handle
            </span>
            <div className="flex flex-wrap gap-3">
              {additionalServices.map((s) => (
                <span
                  key={s}
                  className="border border-neutral-600 text-neutral-300 font-sans text-xs font-light tracking-wide px-4 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="sm:ml-auto shrink-0 bg-red-500 hover:bg-red-600 text-white font-sans text-xs tracking-[0.18em] uppercase px-6 py-3 transition-all duration-300"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
