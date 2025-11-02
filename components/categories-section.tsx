import Image from "next/image"
import Link from "next/link"

const categories = [
  { id: 1, title: "For Men", image: "/images/category-banner-1.jpg" },
  { id: 2, title: "For Women", image: "/images/category-banner-2.jpg" },
  { id: 3, title: "For Accessories", image: "/images/category-banner-3.jpg" },
]

export default function CategoriesSection() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {categories.map((category) => (
          <div key={category.id} className="relative h-64 md:h-72 overflow-hidden group">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-end justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2 uppercase">{category.title}</h3>
              <Link href="#" className="text-white hover:underline">
                Shop it Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
