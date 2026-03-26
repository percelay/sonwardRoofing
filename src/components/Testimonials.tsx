import Image from 'next/image'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Sonward Construction replaced my roof after a hail storm demolished my house. The hail had damaged the roof, gutters, siding, and Windows. Sonward construction took care of everything.',
    author: 'Mike G.',
  },
  {
    quote:
      'Called to get an estimate for our roof that had experienced damage. They came out to look at it and decided the damage was not excessive and limited to a single spot. Got some supplies out of his truck and repaired the roof right there. 100% would recommend as a respectable, trustworthy roofing company.',
    author: 'Manny Lanzner',
  },
  {
    quote:
      'A major hail storm blew through my neighborhood shattering all my rooftop skylights... Bobby and his crew from Sonward magically appeared in the driveway and had all the holes patched and watertight in less than 20 minutes. I never called them... they came to the hardest hit areas to check first on the people they had done work for in the past. Their integrity, ability, and customer loyalty are exceptional.',
    author: 'William Miller',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-slate-800 py-24 lg:py-32 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/niceroofingjobhero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-500" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 font-medium">
              Testimonials
            </span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-tight">
            What Homeowners{' '}
            <em className="italic text-gold-300">Are Saying</em>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map(({ quote, author }, i) => (
            <blockquote
              key={author}
              className={`group relative flex flex-col bg-slate-900/60 border border-slate-700/50 hover:border-gold-500/40 p-8 lg:p-9 transition-all duration-500 ${
                i === 1 ? 'lg:-mt-4 lg:mb-4' : ''
              }`}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                strokeWidth={1}
                className="text-gold-500/50 mb-5 shrink-0"
                aria-hidden="true"
              />

              {/* Quote text */}
              <p className="font-sans font-light text-parchment-200 text-[15px] leading-relaxed flex-1 mb-7">
                {quote}
              </p>

              {/* Divider */}
              <div className="w-10 h-px bg-gold-500/60 mb-5" />

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <span className="font-serif text-xs text-gold-400 leading-none">
                    {author.charAt(0)}
                  </span>
                </div>
                <cite className="font-sans text-xs tracking-[0.15em] uppercase text-gold-400 not-italic font-light">
                  {author}
                </cite>
              </footer>

              {/* Hover accent bar */}
              <div className="absolute top-0 left-0 w-full h-px bg-gold-500/0 group-hover:bg-gold-500/60 transition-all duration-500" />
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
