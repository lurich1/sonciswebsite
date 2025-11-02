"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart, ShoppingCart } from "lucide-react"
import { addToWishlist, isInWishlist } from "@/lib/wishlist"
import { addToCart } from "@/lib/cart"

const products = [
  {
    id: 1,
    name: "Vintage Leather Tote",
    price: "₵4,425.00",
    image: "/images/product-thumb-1.jpg",
    tags: ["newarrivals"],
  },
  { id: 2, name: "Executive Briefcase", price: "₵5,325.00", image: "/images/product-thumb-2.jpg", tags: ["bestsellers"] },
  {
    id: 3,
    name: "Minimalist Crossbody",
    price: "₵3,975.00",
    image: "/images/product-thumb-3.jpg",
    tags: ["bestsellers", "bestreviewed"],
  },
  { id: 4, name: "Explorer Backpack", price: "₵4,800.00", image: "/images/product-thumb-4.jpg", tags: ["newarrivals"] },
  { id: 5, name: "Evening Clutch", price: "₵2,925.00", image: "/images/product-thumb-5.jpg", tags: ["bestreviewed"] },
  {
    id: 6,
    name: "Weekender Duffle",
    price: "₵5,625.00",
    image: "/images/product-thumb-6.jpg",
    tags: ["bestsellers", "bestreviewed"],
  },
  { id: 7, name: "Vintage Messenger", price: "₵4,275.00", image: "/images/product-thumb-7.jpg", tags: ["bestreviewed"] },
  { id: 8, name: "Classic Satchel", price: "₵5,175.00", image: "/images/product-thumb-8.jpg", tags: ["bestsellers"] },
  {
    id: 9,
    name: "Professional Laptop Bag",
    price: "₵5,925.00",
    image: "/images/product-thumb-9.jpg",
    tags: ["bestsellers", "newarrivals"],
  },
  {
    id: 10,
    name: "Hobo Shoulder Bag",
    price: "₵4,125.00",
    image: "/images/product-thumb-10.jpg",
    tags: ["bestreviewed"],
  },
  {
    id: 11,
    name: "Belt Bag - Chestnut",
    price: "₵2,775.00",
    image: "/images/product-thumb-11.jpg",
    tags: ["bestreviewed"],
  },
  {
    id: 12,
    name: "Executive Portfolio",
    price: "₵4,125.00",
    image: "/images/product-thumb-13.jpg",
    tags: ["bestsellers"],
  },
]

export default function ProductGrid() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("bestsellers")
  const [wishlistItems, setWishlistItems] = useState<Set<number>>(new Set())
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set())

  const filteredProducts = products.filter((product) => product.tags.includes(activeFilter))

  useEffect(() => {
    const wishlist = products.filter((p) => isInWishlist(p.id))
    setWishlistItems(new Set(wishlist.map((p) => p.id)))
  }, [])

  const handleAddToWishlist = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault()
    e.stopPropagation()
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      stock: "In Stock",
    })
    setWishlistItems(new Set([...wishlistItems, product.id]))
    router.push("/wishlist")
  }

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setAddedItems(new Set([...addedItems, product.id]))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 2000)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-2">Featured Collection</h2>
          <p className="text-gray-600">Handmade leather bags for any occasion</p>
        </div>

        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {["bestsellers", "newarrivals", "bestreviewed"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`uppercase text-sm font-semibold transition ${
                activeFilter === filter ? "text-primary border-b-2 border-primary" : "text-gray-600 hover:text-primary"
              }`}
            >
              {filter === "bestsellers" ? "Best Sellers" : filter === "newarrivals" ? "New Arrivals" : "Best Reviewed"}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/product/${product.id}`} className="block">
                <div className="relative h-64 mb-4 overflow-hidden bg-gray-100 rounded">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={(e) => handleAddToWishlist(e, product)}
                      className={`p-2 rounded-full shadow transition ${
                        wishlistItems.has(product.id)
                          ? "bg-primary text-primary-foreground opacity-100"
                          : "bg-white hover:bg-gray-100 opacity-0 group-hover:opacity-100"
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart size={18} fill={wishlistItems.has(product.id) ? "currentColor" : "none"} />
                    </button>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className={`p-2 rounded-full shadow transition ${
                        addedItems.has(product.id)
                          ? "bg-green-600 text-white opacity-100"
                          : "bg-white hover:bg-gray-100 opacity-0 group-hover:opacity-100"
                      }`}
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
                <h3 className="text-sm font-semibold uppercase mb-2 line-clamp-2 text-foreground">{product.name}</h3>
                <p className="text-foreground font-medium">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
