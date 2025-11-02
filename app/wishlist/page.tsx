"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Heart, Trash2, ShoppingCart } from "lucide-react"
import { getWishlist, removeFromWishlist, WishlistItem } from "@/lib/wishlist"
import { addToCart } from "@/lib/cart"

export default function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setItems(getWishlist())
  }, [])

  useEffect(() => {
    if (mounted) {
      setItems(getWishlist())
    }
  }, [mounted])

  const removeItem = (id: number) => {
    const updatedWishlist = removeFromWishlist(id)
    setItems(updatedWishlist)
  }

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            {" / "}
            <Link href="#" className="hover:text-primary">
              Pages
            </Link>
            {" / "}
            <span className="text-foreground">Wishlist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase">Wishlist</h1>

          {/* Wishlist Table */}
          {items.length === 0 ? (
            <div className="text-center py-16">
              <Heart size={64} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground mb-4">Your wishlist is empty</p>
              <Link
                href="/shop"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 uppercase text-sm font-semibold">Product</th>
                    <th className="text-left py-4 px-4 uppercase text-sm font-semibold">Unit Price</th>
                    <th className="text-left py-4 px-4 uppercase text-sm font-semibold">Stock Status</th>
                    <th className="text-center py-4 px-4 uppercase text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-6 px-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-20 rounded overflow-hidden bg-muted flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="font-semibold uppercase">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-6 px-4 font-medium">{item.price}</td>
                      <td className="py-6 px-4">
                        <span className="text-green-600">{item.stock}</span>
                      </td>
                      <td className="py-6 px-4">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="px-4 py-2 border border-border rounded hover:border-primary hover:text-primary transition text-sm font-semibold uppercase flex items-center gap-2"
                          >
                            <ShoppingCart size={16} />
                            Add to Cart
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 hover:text-destructive transition"
                            aria-label="Remove from wishlist"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

