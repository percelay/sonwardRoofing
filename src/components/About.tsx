import Image from 'next/image'
import { ShieldCheck, Droplets, CheckCircle } from 'lucide-react'

const shingleTypes = [
  'Architectural Laminate Shingles',
  'Impact Rated Class 3 & 4 Products',
  'Designer Shingles',
  'Metal Roofing',
  'Tile & Concrete Tile',
  'Slate & Synthetic Slate',
  'TPO Systems (Flat Roofs)',
  'Modified Bitumen Systems',
]

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-red-500" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-red-500 font-medium">
              About Sonward
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-neutral-900 leading-tight">
            Oklahoma City&apos;s Roofing Company Since 1982
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text content */}
          <div className="flex flex-col gap-10">

            {/* Founding paragraph */}
            <div>
              <p className="font-sans font-light text-neutral-600 text-base lg:text-[17px] leading-relaxed">
                Founded in 1982, Sonward Construction LLC brings over three decades of experience
                to the Oklahoma City metro and surrounding areas. As a fully licensed, insured,
                and certified, family-owned and locally operated business, customer service is our
                number one priority. We pride ourselves on being on time, providing prompt service,
                and delivering thorough quality assurance and personal attention — whether working
                directly with homeowners or partnering with high-end builders.
              </p>
            </div>

            {/* Insurance expertise callout */}
            <div className="border-l-4 border-red-500 pl-6 py-1">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={16} strokeWidth={1.5} className="text-red-500 shrink-0" />
                <span className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-neutral-700">
                  Insurance Claim Specialists
                </span>
              </div>
              <p className="font-sans font-light text-neutral-600 text-sm leading-relaxed">
                We work directly with your insurance company to make sure your claim is accurate
                and you get all that is due to you. You shouldn&apos;t have to navigate that process
                alone — we&apos;re in your corner from inspection to settlement.
              </p>
            </div>

            {/* Leak specialist callout */}
            <div className="border-l-4 border-neutral-300 pl-6 py-1">
              <div className="flex items-center gap-2 mb-2">
                <Droplets size={16} strokeWidth={1.5} className="text-neutral-500 shrink-0" />
                <span className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-neutral-700">
                  Leak Repair Specialists
                </span>
              </div>
              <p className="font-sans font-light text-neutral-600 text-sm leading-relaxed">
                We are leak repair specialists with many years of expertise in locating the small
                and big problems — and solving the problems that no one else can. We regularly
                get calls from homeowners who hired a fly-by-night company first. We come in and
                fix the mess.
              </p>
            </div>

            {/* Local callout */}
            <div className="bg-neutral-900 text-white px-6 py-5 flex flex-col gap-1">
              <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-red-400 font-medium">
                Why It Matters
              </span>
              <p className="font-sans font-light text-neutral-300 text-sm leading-relaxed">
                Many roofing companies come from out of state after storms and disappear when
                problems arise. Sonward has been right here in Oklahoma City for over 40 years.
                We&apos;re your neighbors — and we stand behind our work.
              </p>
            </div>
          </div>

          {/* Right: image + materials */}
          <div className="flex flex-col gap-8">

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/niceroofingjobhero.jpg"
                alt="Sonward Construction roofing crew at work in Oklahoma City"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Years badge */}
              <div className="absolute bottom-0 left-0 bg-neutral-900 text-white px-5 py-4">
                <div className="font-serif text-3xl font-light text-red-400 leading-none">40+</div>
                <div className="font-sans text-[9px] tracking-[0.22em] uppercase text-neutral-400 mt-1">
                  Years Serving OKC
                </div>
              </div>
            </div>

            {/* Materials we work with */}
            <div>
              <h3 className="font-sans text-[10px] tracking-[0.28em] uppercase text-neutral-500 font-medium mb-4">
                Roofing Materials We Install
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {shingleTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <CheckCircle size={13} strokeWidth={1.5} className="text-red-500 shrink-0" />
                    <span className="font-sans text-sm font-light text-neutral-600">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:4058434448"
              className="self-start bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-xs font-light tracking-[0.2em] uppercase px-7 py-4 transition-all duration-300"
            >
              Schedule a Free Inspection
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
