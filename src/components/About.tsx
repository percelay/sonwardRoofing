import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

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
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left */}
          <div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-neutral-900 mb-6 pl-4 border-l-4 border-red-500">
              Oklahoma City&apos;s Roofing Company Since 1982
            </h2>

            <p className="font-sans text-neutral-600 text-base leading-relaxed mb-6">
              With four decades of experience in the Oklahoma City metro, we have become
              a trusted partner for some of the region&apos;s premier luxury home builders.
              We understand that a high-end custom build requires more than just a standard
              roof; it demands meticulous craftsmanship, architectural precision, and a
              seamless integration with complex designs. By collaborating closely with
              elite builders from the initial planning stages through final inspection,
              we ensure that every custom residence is crowned with a roofing system that
              is as durable as it is visually stunning. Our commitment to quality and our
              deep understanding of luxury materials make us the first choice for
              homeowners and builders who refuse to compromise on excellence.
            </p>

            <p className="font-sans text-neutral-600 text-base leading-relaxed mb-6">
              Many roofing companies come from out of state after storms and disappear
              when problems arise. We&apos;ve been right here in Oklahoma City for over
              40 years — we&apos;re your neighbors, and we stand behind our work.
            </p>

            {/* Insurance */}
            <div className="bg-neutral-100 border-l-4 border-red-500 px-5 py-4 mb-4">
              <p className="font-heading font-bold text-sm text-neutral-800 mb-1 uppercase tracking-wide">
                Insurance Claim Specialists
              </p>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                We work directly with your insurance company to make sure your claim
                is accurate and you get all that is due to you.
              </p>
            </div>

            {/* Leak */}
            <div className="bg-neutral-100 border-l-4 border-neutral-400 px-5 py-4 mb-8">
              <p className="font-heading font-bold text-sm text-neutral-800 mb-1 uppercase tracking-wide">
                Leak Repair Specialists
              </p>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                We are experts in locating the small and big problems — and solving
                the problems that no one else can. We regularly get calls from
                homeowners who hired a fly-by-night company first. We come in and
                fix the mess.
              </p>
            </div>

            <a
              href="tel:4058434448"
              className="inline-block bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-sm font-semibold px-6 py-3 transition-colors duration-200"
            >
              Schedule a Free Inspection
            </a>
          </div>

          {/* Right */}
          <div>
            <div className="relative aspect-[4/3] mb-6">
              <Image
                src="/images/niceroofingjobhero.jpg"
                alt="Sonward Construction roofing crew at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 bg-neutral-900 text-white px-4 py-3">
                <span className="font-heading font-bold text-2xl text-red-400">40+</span>
                <span className="font-sans text-xs text-neutral-400 block">Years Serving OKC</span>
              </div>
            </div>

            <p className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-500 mb-3">
              Roofing Materials We Install
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {shingleTypes.map((type) => (
                <li key={type} className="flex items-start gap-2">
                  <CheckCircle size={13} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-neutral-600">{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
