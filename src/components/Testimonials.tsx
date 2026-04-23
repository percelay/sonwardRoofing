import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Sonward Construction replaced my roof after a hail storm demolished my house. The hail had damaged the roof, gutters, siding, and windows. Sonward construction took care of everything.',
    author: 'Mike G.',
  },
  {
    quote:
      'Called to get an estimate for our roof that had experienced damage. They came out to look at it and decided the damage was not excessive and limited to a single spot. Got some supplies out of his truck and repaired the roof right there. 100% would recommend as a respectable, trustworthy roofing company.',
    author: 'Manny Lanzner',
  },
  {
    quote:
      'A major hail storm blew through my neighborhood shattering all my rooftop skylights... Bobby and his crew from Sonward magically appeared in the driveway and had all the holes patched and watertight in less than 20 minutes. I never called them — they came to the hardest hit areas to check first on the people they had done work for in the past. Their integrity, ability, and customer loyalty are exceptional.',
    author: 'William Miller',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-800 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-10 pl-4 border-l-4 border-red-500">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map(({ quote, author }) => (
            <blockquote
              key={author}
              className="flex flex-col bg-neutral-900 border border-neutral-700 p-6"
            >
              <Quote size={20} className="text-red-500/60 mb-4 shrink-0" aria-hidden="true" />

              <p className="font-sans text-sm text-neutral-300 leading-relaxed flex-1 mb-5">
                {quote}
              </p>

              <cite className="font-heading font-bold text-xs uppercase tracking-wider text-red-400 not-italic">
                — {author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
