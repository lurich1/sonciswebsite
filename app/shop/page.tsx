"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Heart, ChevronDown, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { addToCart } from "@/lib/cart"
import { addToWishlist, isInWishlist } from "@/lib/wishlist"

// Note: Metadata must be in a separate file for client components
// Creating metadata via head or script tags instead

const allProducts = [
  {
    id: 1,
    name: "Heritage Tote",
    price: "₵5,925.00",
    image: "/images/product-thumb-1.jpg",
    label: "BESTSELLER",
  },
  {
    id: 2,
    name: "Milano Briefcase",
    price: "₵7,875.00",
    image: "/images/product-thumb-2.jpg",
    label: "LIMITED STOCK",
  },
  {
    id: 3,
    name: "Safari Crossbody",
    price: "₵4,125.00",
    image: "/images/product-thumb-3.jpg",
  },
  {
    id: 4,
    name: "Explorer Duffle",
    price: "₵6,750.00",
    image: "/images/product-thumb-4.jpg",
    label: "NEW ARRIVAL",
  },
  {
    id: 5,
    name: "Executive Messenger",
    price: "₵5,775.00",
    image: "/images/product-thumb-5.jpg",
  },
  {
    id: 6,
    name: "Urban Belt Bag",
    price: "₵2,925.00",
    image: "/images/product-thumb-6.jpg",
    label: "TRAVEL ESSENTIAL",
  },
  {
    id: 7,
    name: "Vintage Leather Tote",
    price: "₵4,425.00",
    image: "/images/product-thumb-7.jpg",
    label: "BESTSELLER",
  },
  {
    id: 8,
    name: "Executive Briefcase",
    price: "₵5,325.00",
    image: "/images/product-thumb-8.jpg",
  },
  {
    id: 9,
    name: "Minimalist Crossbody",
    price: "₵3,975.00",
    image: "/images/product-thumb-9.jpg",
    label: "NEW ARRIVAL",
  },
  {
    id: 10,
    name: "Explorer Backpack",
    price: "₵4,800.00",
    image: "/images/product-thumb-10.jpg",
    label: "LIMITED STOCK",
  },
  {
    id: 11,
    name: "Evening Clutch",
    price: "₵2,925.00",
    image: "/images/product-thumb-11.jpg",
  },
  {
    id: 12,
    name: "Weekender Duffle",
    price: "₵5,625.00",
    image: "/images/product-thumb-12.jpg",
    label: "BESTSELLER",
  },
  {
    id: 13,
    name: "Vintage Messenger",
    price: "₵4,275.00",
    image: "/images/product-thumb-13.jpg",
    label: "TRAVEL ESSENTIAL",
  },
  {
    id: 14,
    name: "Classic Satchel",
    price: "₵5,175.00",
    image: "/images/product-thumb-1.jpg",
  },
  {
    id: 15,
    name: "Professional Laptop Bag",
    price: "₵5,925.00",
    image: "/images/product-thumb-2.jpg",
    label: "NEW ARRIVAL",
  },
  {
    id: 16,
    name: "Hobo Shoulder Bag",
    price: "₵4,125.00",
    image: "/images/product-thumb-3.jpg",
  },
  {
    id: 17,
    name: "Belt Bag - Chestnut",
    price: "₵2,775.00",
    image: "/images/product-thumb-4.jpg",
    label: "LIMITED STOCK",
  },
  {
    id: 18,
    name: "Executive Portfolio",
    price: "₵4,125.00",
    image: "/images/product-thumb-5.jpg",
  },
]

const sortOptions = [
  "Default Sorting",
  "Price: Low to High",
  "Price: High to Low",
  "Newest First",
  "Oldest First",
]

export default function ShopPage() {
  const router = useRouter()
  const [sortBy, setSortBy] = useState("Default Sorting")
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set())
  const [wishlistItems, setWishlistItems] = useState<Set<number>>(new Set())
  const sortMenuRef = useRef<HTMLDivElement>(null)
  const itemsPerPage = 12
  const totalPages = Math.ceil(allProducts.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedProducts = allProducts.slice(startIndex, endIndex)

  useEffect(() => {
    // Load wishlist items on mount
    const wishlist = allProducts.filter((p) => isInWishlist(p.id))
    setWishlistItems(new Set(wishlist.map((p) => p.id)))
  }, [])

  const handleAddToCart = (e: React.MouseEvent, product: typeof allProducts[0]) => {
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

  const handleAddToWishlist = (e: React.MouseEvent, product: typeof allProducts[0]) => {
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
    // Navigate to wishlist page
    router.push("/wishlist")
  }

  // Close sort menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target as Node)) {
        setShowSortMenu(false)
      }
    }

    if (showSortMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showSortMenu])

  const getLabelColor = (label: string) => {
    switch (label) {
      case "BESTSELLER":
        return "bg-accent text-accent-foreground"
      case "LIMITED STOCK":
        return "bg-destructive text-destructive-foreground"
      case "NEW ARRIVAL":
        return "bg-primary text-primary-foreground"
      case "TRAVEL ESSENTIAL":
        return "bg-secondary text-secondary-foreground"
      default:
        return ""
    }
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Shop - Soncis',
            description: 'Browse our collection of premium leather goods',
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/shop`,
          }),
        }}
      />
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Header with results count and sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <p className="text-muted-foreground text-sm">
              Showing {startIndex + 1}-{Math.min(endIndex, allProducts.length)} of {allProducts.length} results
            </p>
            
            <div className="relative" ref={sortMenuRef}>
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:border-primary transition text-sm"
              >
                {sortBy}
                <ChevronDown size={16} className={showSortMenu ? "rotate-180" : ""} />
              </button>
              
              {showSortMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option)
                        setShowSortMenu(false)
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-muted transition ${
                        sortBy === option ? "text-primary font-semibold" : ""
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div key={product.id} className="group">
                <Link href={`/product/${product.id}`} className="block">
                  <div className="relative h-64 mb-4 overflow-hidden bg-muted rounded">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    {product.label && (
                      <span
                        className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold uppercase rounded ${getLabelColor(
                          product.label,
                        )}`}
                      >
                        {product.label}
                      </span>
                    )}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={(e) => handleAddToWishlist(e, product)}
                        className={`p-2 rounded-full shadow transition opacity-0 group-hover:opacity-100 ${
                          wishlistItems.has(product.id)
                            ? "bg-primary text-primary-foreground opacity-100"
                            : "bg-background hover:bg-muted"
                        }`}
                        aria-label="Add to wishlist"
                      >
                        <Heart size={18} fill={wishlistItems.has(product.id) ? "currentColor" : "none"} />
                      </button>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className={`p-2 rounded-full shadow transition opacity-0 group-hover:opacity-100 ${
                          addedItems.has(product.id)
                            ? "bg-green-600 text-white opacity-100"
                            : "bg-background hover:bg-muted"
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-border rounded-md hover:border-primary transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 border rounded-md transition ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-border rounded-md hover:border-primary transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

