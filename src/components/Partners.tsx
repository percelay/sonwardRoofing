import Image from 'next/image'

const partners = [
  {
    name: 'Malarkey',
    logo: '/images/malarkeylogo.jpg',
    href: 'https://www.malarkeyroofing.com',
    width: 140,
    height: 60,
  },
  {
    name: 'CertainTeed',
    logo: null,
    href: 'https://www.certainteed.com',
    width: 140,
    height: 60,
  },
  {
    name: 'GAF',
    logo: '/images/GAF_logo.svg',
    href: 'https://www.gaf.com',
    width: 80,
    height: 60,
  },
  {
    name: 'IKO',
    logo: '/images/ikologo.jpg',
    href: 'https://www.iko.com',
    width: 100,
    height: 60,
  },
  {
    name: 'Owens Corning',
    logo: '/images/owenscorninglogo.webp',
    href: 'https://www.owenscorning.com',
    width: 160,
    height: 60,
  },
  {
    name: 'DaVinci',
    logo: '/images/davincilogo.webp',
    href: 'https://www.davinciroofscapes.com',
    width: 140,
    height: 60,
  },
]

export default function Partners() {
  return (
    <section id="partners" className="bg-slate-900 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14 lg:mb-18">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-500" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 font-medium">
              Trusted Partners
            </span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
            Industry&apos;s Best Materials
          </h2>
          <p className="font-sans font-light text-slate-400 text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            We buy from local suppliers and partner with the industry&apos;s best
            to provide luxury designer products.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-slate-700/60">
          {partners.map((partner, i) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${partner.name}`}
              className="group flex items-center justify-center px-6 py-10 border-t border-l border-slate-700/60 hover:bg-slate-800 transition-all duration-300 first:border-l-0 [&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(-n+3)]:border-t-0 lg:[&:nth-child(-n+6)]:border-t-0 [&:nth-child(2n+1)]:border-l-0 sm:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(6n+1)]:border-l-0"
            >
              {partner.logo ? (
                <div className="relative opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} roofing products`}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain max-h-12 w-auto"
                  />
                </div>
              ) : (
                <span className="font-serif text-xl font-light text-slate-400 group-hover:text-gold-400 tracking-wide transition-colors duration-300">
                  {partner.name}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Supporting image strip */}
        <div className="mt-12 relative h-40 lg:h-52 overflow-hidden">
          <Image
            src="/images/davinci tiles slate.jpg"
            alt="DaVinci luxury slate tile roofing detail"
            fill
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <p className="font-serif text-xl lg:text-2xl font-light italic text-parchment-200 text-center px-6">
              &ldquo;Only the best-trained technicians are installing or repairing your roof.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
