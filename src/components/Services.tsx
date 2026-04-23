import Image from 'next/image'
import { Layers, Wrench, CloudLightning, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Layers,
    tag: 'Roofing & Re-Roofing',
    title: 'Roof Installation & Replacement',
    description:
      'We deliver meticulous craftsmanship for new constructions and complete re-roofs to keep your home protected for years to come. 5-year warranty on new roof installations.',
    types: [
      'Architectural Laminate Shingles',
      'Impact Rated (Class 3 & 4)',
      'Metal Roofing',
      'Flat Roofs — Fully Adhered TPO System',
      'Self-Adhered Modified Bitumen System',
    ],
    image: '/images/morehighendtiels.webp',
    imageAlt: 'Roofing material options',
  },
  {
    icon: Wrench,
    tag: 'Repair & Maintenance',
    title: 'Expert Roof Repair & Maintenance',
    description:
      'Roof repairs and general roof maintenance — from the minor leaks to the most difficult to locate, we are the experts. Our highly trained professionals use only quality products. 3-year warranty on repair workmanship.',
    types: [
      'Free inspections to determine needed repairs and extend the life of your roof',
    ],
    image: '/images/niceroofingjob.jpg',
    imageAlt: 'Roof repair work',
  },
  {
    icon: CloudLightning,
    tag: 'Storm & Insurance',
    title: 'Storm Evaluations & Insurance Assistance',
    description:
      'When hail or severe weather strikes, we handle storm evaluations, siding, gutters, and complete insurance claims. We work with your insurance company directly to make sure your claim is accurate, nothing is omitted, and you get the most from your claim that you deserve.',
    types: [],
    image: '/images/roofingjobb.jpg',
    imageAlt: 'Storm damage roof evaluation',
  },
]

const additionalServices = ['Guttering', 'Skylights', 'Windows', 'Siding', 'Soffit Repairs']

export default function Services() {
  return (
    <section id="services" className="bg-neutral-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mb-10 pl-4 border-l-4 border-red-500">
          Our Services
        </h2>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-neutral-200">
          {services.map(({ icon: Icon, tag, title, description, types, image, imageAlt }, i) => (
            <article
              key={title}
              className={`flex flex-col bg-white ${
                i < services.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-neutral-200' : ''
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={14} className="text-red-500 shrink-0" />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {tag}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                  {title}
                </h3>

                <p className="font-sans text-sm text-neutral-500 leading-relaxed mb-4 flex-1">
                  {description}
                </p>

                {types.length > 0 && (
                  <ul className="flex flex-col gap-1.5 border-t border-neutral-100 pt-4">
                    {types.map((type) => (
                      <li key={type} className="flex items-start gap-2">
                        <CheckCircle size={12} className="text-red-500 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-neutral-500">{type}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Additional services */}
        <div className="border border-t-0 border-neutral-200 bg-neutral-900 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-400 shrink-0">
            We Also Handle
          </span>
          <div className="flex flex-wrap gap-2 flex-1">
            {additionalServices.map((s) => (
              <span
                key={s}
                className="border border-neutral-600 text-neutral-300 font-sans text-xs px-3 py-1"
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-red-500 hover:bg-red-600 text-white font-sans text-sm font-semibold px-5 py-2 transition-colors duration-200"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
