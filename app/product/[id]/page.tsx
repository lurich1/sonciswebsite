"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NewsletterSection from "@/components/newsletter-section"
import { Heart, ShoppingCart, Plus, Minus, Share2, Check } from "lucide-react"
import { addToCart, getCart } from "@/lib/cart"
import { addToWishlist, isInWishlist } from "@/lib/wishlist"

const allProducts = [
  {
    id: 1,
    name: "Heritage Tote",
    price: "₵5,925.00",
    image: "/images/product-thumb-1.jpg",
    label: "BESTSELLER",
    description:
      "Crafted from 100% genuine leather, the Heritage Tote is a timeless classic that combines elegance with functionality. Perfect for daily use or special occasions.",
    details: [
      "100% Genuine Leather",
      "Hand-Stitched Perfection",
      "Adjustable Shoulder Strap",
      "Multiple Interior Pockets",
      "Lined with Premium Fabric",
    ],
    stock: "In Stock",
    sku: "HT-001",
  },
  {
    id: 2,
    name: "Milano Briefcase",
    price: "₵7,875.00",
    image: "/images/product-thumb-2.jpg",
    label: "LIMITED STOCK",
    description:
      "A professional briefcase designed for the modern executive. Features premium leather construction with ample space for documents and electronics.",
    details: [
      "Professional Design",
      "Laptop Compartment (up to 15 inches)",
      "Multiple Organization Pockets",
      "Premium Leather Exterior",
      "Secure Lock Mechanism",
    ],
    stock: "In Stock",
    sku: "MB-002",
  },
  {
    id: 3,
    name: "Safari Crossbody",
    price: "₵4,125.00",
    image: "/images/product-thumb-3.jpg",
    description:
      "Lightweight and versatile, the Safari Crossbody is perfect for adventure and everyday use. Made from durable materials with comfortable strap.",
    details: [
      "Lightweight Design",
      "Adjustable Crossbody Strap",
      "Water-Resistant Lining",
      "Front Zipper Pocket",
      "Durable Construction",
    ],
    stock: "In Stock",
    sku: "SC-003",
  },
  {
    id: 4,
    name: "Explorer Duffle",
    price: "₵6,750.00",
    image: "/images/product-thumb-4.jpg",
    label: "NEW ARRIVAL",
    description:
      "Spacious duffle bag perfect for travel and gym. Features multiple compartments and reinforced handles for durability.",
    details: [
      "Spacious Interior",
      "Reinforced Handles",
      "Multiple Compartments",
      "Durable Materials",
      "Easy to Clean",
    ],
    stock: "In Stock",
    sku: "ED-004",
  },
  {
    id: 5,
    name: "Executive Messenger",
    price: "₵5,775.00",
    image: "/images/product-thumb-5.jpg",
    description:
      "Classic messenger bag with modern features. Perfect balance of style and functionality for the professional on the go.",
    details: [
      "Classic Design",
      "Large Main Compartment",
      "Front Flap Closure",
      "Comfortable Shoulder Strap",
      "Premium Materials",
    ],
    stock: "In Stock",
    sku: "EM-005",
  },
  {
    id: 6,
    name: "Urban Belt Bag",
    price: "₵2,925.00",
    image: "/images/product-thumb-6.jpg",
    label: "TRAVEL ESSENTIAL",
    description:
      "Compact and stylish belt bag for everyday essentials. Hands-free convenience with modern aesthetic.",
    details: [
      "Compact Design",
      "Adjustable Belt",
      "Multiple Pockets",
      "Lightweight",
      "Modern Style",
    ],
    stock: "In Stock",
    sku: "UB-006",
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = Number(params.id)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const product = allProducts.find((p) => p.id === productId)

  useEffect(() => {
    const cart = getCart()
    setCartCount(cart.length)
    setIsWishlisted(isInWishlist(productId))
  }, [productId])

  if (!product) {
    return (
      <main className="min-h-screen bg-background pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-primary hover:underline">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

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

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setAddedToCart(true)
    setCartCount(getCart().length)

    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  }

  const updateQuantity = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            image: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${product.image}`,
            sku: product.sku,
            offers: {
              '@type': 'Offer',
              price: product.price.replace('₵', '').replace(',', ''),
              priceCurrency: 'GHS',
              availability: product.stock === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            },
          }),
        }}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            {" / "}
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            {" / "}
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden bg-muted rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.label && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold uppercase rounded ${getLabelColor(
                      product.label,
                    )}`}
                  >
                    {product.label}
                  </span>
                )}
                <button
                  onClick={() => {
                    if (product) {
                      addToWishlist({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        stock: product.stock,
                      })
                      setIsWishlisted(true)
                      router.push("/wishlist")
                    }
                  }}
                  className={`absolute top-4 right-4 p-3 rounded-full shadow transition ${
                    isWishlisted
                      ? "bg-primary text-primary-foreground"
                      : "bg-background hover:bg-muted"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-6">{product.price}</p>

              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
              </div>

              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">SKU:</span>
                  <span className="text-muted-foreground">{product.sku}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Stock Status:</span>
                  <span className="text-green-600">{product.stock}</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Quantity:</label>
                <div className="flex items-center gap-4 border border-border rounded w-fit">
                  <button
                    onClick={() => updateQuantity(-1)}
                    className="p-3 hover:bg-muted transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-3 min-w-[60px] text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(1)}
                    className="p-3 hover:bg-muted transition"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Product Details List */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 uppercase">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={`flex-1 px-8 py-4 rounded font-semibold uppercase transition flex items-center justify-center gap-3 ${
                    addedToCart
                      ? "bg-green-600 text-white"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      Add to Cart
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    handleAddToCart()
                    router.push("/cart")
                  }}
                  className="px-8 py-4 border-2 border-primary text-primary rounded font-semibold uppercase hover:bg-primary hover:text-primary-foreground transition"
                >
                  Buy Now
                </button>
              </div>

              {/* Share Button */}
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                <Share2 size={18} />
                <span className="text-sm uppercase">Share</span>
              </button>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 uppercase">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {allProducts
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group">
                    <div className="relative h-64 mb-4 overflow-hidden bg-muted rounded">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-300"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {relatedProduct.label && (
                        <span
                          className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold uppercase rounded ${getLabelColor(
                            relatedProduct.label,
                          )}`}
                        >
                          {relatedProduct.label}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold uppercase mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <p className="text-primary font-medium">{relatedProduct.price}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}

