import Image from 'next/image'

const partners = [
  { name: 'Malarkey',      logo: '/images/malarkeylogo.jpg',    href: 'https://www.malarkeyroofing.com' },
  { name: 'CertainTeed',   logo: null,                          href: 'https://www.certainteed.com' },
  { name: 'GAF',           logo: '/images/GAF_logo.svg',        href: 'https://www.gaf.com' },
  { name: 'IKO',           logo: '/images/ikologo.jpg',         href: 'https://www.iko.com' },
  { name: 'Owens Corning', logo: '/images/owenscorninglogo.webp', href: 'https://www.owenscorning.com' },
  { name: 'DaVinci',       logo: '/images/davincilogo.webp',    href: 'https://www.davinciroofscapes.com' },
  { name: 'Ludowici',      logo: '/ludowici.png',               href: 'https://ludowici.com/' },
  { name: 'Brava',         logo: '/brava.png',                  href: 'https://www.bravarooftile.com/' },
  { name: 'Ecostar',       logo: '/ecostar.png',                href: 'https://ecostarllc.com/' },
]

export default function Partners() {
  return (
    <section id="partners" className="bg-neutral-900 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <div className="mb-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-3 pl-4 border-l-4 border-red-500">
            Our Partners
          </h2>
          <p className="font-sans text-neutral-400 text-sm max-w-xl pl-5">
            We buy from local suppliers and partner with the industry&apos;s best. Reliable,
            time-tested, highest industry standard shingle and roofing products.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 lg:grid-cols-9 border border-neutral-700">
          {partners.map((partner, i) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
              className={`flex items-center justify-center px-4 py-8 hover:bg-neutral-800 transition-colors duration-200 ${
                i % 3 !== 0 ? 'border-l border-neutral-700' : ''
              } ${i >= 3 && i < 6 ? 'border-t border-neutral-700' : ''} ${
                i >= 6 ? 'border-t border-neutral-700' : ''
              }`}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={40}
                  className="object-contain max-h-9 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-200"
                />
              ) : (
                <span className="font-heading font-bold text-base text-neutral-500 hover:text-neutral-200 transition-colors duration-200">
                  {partner.name}
                </span>
              )}
            </a>
          ))}
        </div>

        <p className="font-sans text-xs text-neutral-600 mt-4">
          All products sourced through local Oklahoma suppliers whenever possible.
        </p>
      </div>
    </section>
  )
}
