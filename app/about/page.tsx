import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BookOpen, ShoppingBag, Gift, Globe } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Book An Appointment",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: ShoppingBag,
    title: "Pick Up In Store",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: Gift,
    title: "Special Packaging",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: Globe,
    title: "Free Global Returns",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-96 mt-20 overflow-hidden">
        <Image
          src="/images/banner-large-image1.jpg"
          alt="About Us"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white uppercase">About Us</h1>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-16 h-16 mx-auto mb-4 text-primary" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Beginning Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded overflow-hidden">
              <Image
                src="/images/banner-large-image2.jpg"
                alt="The Beginning of Our Journey"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">The Beginning of Our Journey</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sed condimentum ipsum, ultrices in aliquam ac hendrerit diam praesent. Ac dui convallis elit odio eget
                a commodo. At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus. At imperdiet
                dui accumsan sit amet nulla risus est ultricies quis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Who Are We?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sed condimentum ipsum, ultrices in aliquam ac hendrerit diam praesent. Ac dui convallis elit odio eget
                a commodo. At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus. At imperdiet
                dui accumsan sit amet nulla risus est ultricies quis.
              </p>
            </div>
            <div className="relative h-96 rounded overflow-hidden">
              <Image
                src="/images/banner-large-image3.jpg"
                alt="Who Are We"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

