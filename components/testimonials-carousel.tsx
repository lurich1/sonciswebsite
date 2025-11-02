"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    quote: "More than expected crazy soft, flexible and best fitted white simple denim shirt.",
    author: "casual way",
  },
  {
    id: 2,
    quote: "Best fitted white denim shirt more than expected crazy soft, flexible",
    author: "uptop",
  },
  {
    id: 3,
    quote: "Best fitted white denim shirt more white denim than expected flexible crazy soft.",
    author: "Denim craze",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">Reviews</h2>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`text-center transition-opacity duration-500 ${
                idx === current ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <p className="text-xl mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-sm uppercase font-semibold">{testimonial.author}</p>
            </div>
          ))}

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition ${idx === current ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
