import Image from 'next/image'

const partners = [
  {
    name: 'Malarkey',
    logo: '/images/malarkeylogo.jpg',
    href: 'https://www.malarkeyroofing.com',
  },
  {
    name: 'CertainTeed',
    logo: null,
    href: 'https://www.certainteed.com',
  },
  {
    name: 'GAF',
    logo: '/images/GAF_logo.svg',
    href: 'https://www.gaf.com',
  },
  {
    name: 'IKO',
    logo: '/images/ikologo.jpg',
    href: 'https://www.iko.com',
  },
  {
    name: 'Owens Corning',
    logo: '/images/owenscorninglogo.webp',
    href: 'https://www.owenscorning.com',
  },
  {
    name: 'DaVinci',
    logo: '/images/davincilogo.webp',
    href: 'https://www.davinciroofscapes.com',
  },
  {
    name: 'Ludowici',
    logo: '/ludowici.png',
    href: 'https://ludowici.com/',
  },
  {
    name: 'Brava',
    logo: '/brava.png',
    href: 'https://www.bravarooftile.com/',
  },
  {
    name: 'Ecostar',
    logo: '/ecostar.png',
    href: 'https://ecostarllc.com/',
  },
]

export default function Partners() {
  return (
    <section id="partners" className="bg-neutral-900 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-red-500" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-red-400 font-medium">
              Our Partners
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
            Trusted Materials, Trusted Names
          </h2>
          <p className="font-sans font-light text-neutral-400 text-sm lg:text-base leading-relaxed">
            We buy from local suppliers and partner with the industry&apos;s best. We don&apos;t just
            sell luxury — we install reliable, time-tested, highest industry standard shingle
            and roofing products.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 lg:grid-cols-9 border border-neutral-700/50">
          {partners.map((partner, i) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${partner.name}`}
              className={`group flex items-center justify-center px-5 py-9 hover:bg-neutral-800 transition-all duration-300 ${
                i % 3 !== 0 ? 'border-l' : ''
              } ${i >= 3 ? 'border-t' : ''} ${
                i % 9 !== 0 && i < 9 ? 'lg:border-l' : ''
              } border-neutral-700/50`}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={`${partner.name} — roofing products`}
                  width={110}
                  height={48}
                  className="object-contain max-h-10 w-auto opacity-50 grayscale group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="font-serif text-lg font-light text-neutral-500 group-hover:text-neutral-200 tracking-wide transition-colors duration-300">
                  {partner.name}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Divider message */}
        <div className="mt-10 border-t border-neutral-700/50 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans font-light text-neutral-500 text-sm max-w-lg">
            All products are sourced through local Oklahoma suppliers whenever possible.
            We stand behind every material we install.
          </p>
          <a
            href="#contact"
            className="shrink-0 border border-red-500/60 text-red-400 hover:bg-red-500 hover:text-white font-sans text-xs tracking-[0.18em] uppercase px-6 py-3 transition-all duration-300"
          >
            Ask About Materials
          </a>
        </div>
      </div>
    </section>
  )
}
