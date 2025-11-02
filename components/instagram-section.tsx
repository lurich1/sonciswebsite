import Image from "next/image"
import Link from "next/link"

const instaImages = [
  { id: 1, image: "/images/insta-item1.jpg" },
  { id: 2, image: "/images/insta-item2.jpg" },
  { id: 3, image: "/images/insta-item3.jpg" },
]

export default function InstagramSection() {
  return (
    <section className="py-8 bg-primary">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-white mb-8 uppercase">Follow us on Instagram</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {instaImages.map((item) => (
            <Link
              key={item.id}
              href="https://www.instagram.com/templatesjungle/"
              target="_blank"
              className="relative h-48 md:h-64 overflow-hidden group"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt="instagram"
                fill
                className="object-cover group-hover:scale-110 transition"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
