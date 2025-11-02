"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/images/banner-large-image3.jpg",
    title: "Timeless Elegance",
    description:
      "Sed condimentum ipsum, ultrices in aliquam ac hendrerit diam praesent. Ac dui convallis elit odio eget a commodo.",
  },
  {
    id: 2,
    image: "/images/banner-large-image2.jpg",
    title: "Unmatched Craftsmanship",
    description:
      "Sed condimentum ipsum, ultrices in aliquam ac hendrerit diam praesent. Ac dui convallis elit odio eget a commodo.",
  },
  {
    id: 3,
    image: "/images/banner-large-image1.jpg",
    title: "100% Genuine Leather",
    description:
      "Sed condimentum ipsum, ultrices in aliquam ac hendrerit diam praesent. Ac dui convallis elit odio eget a commodo.",
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen mt-20 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded hover:opacity-90 transition font-semibold uppercase">
                Shop Collection
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
