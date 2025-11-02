"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NewsletterSection from "@/components/newsletter-section"
import { Trash2, Plus, Minus } from "lucide-react"
import { getCart, removeFromCart, updateCartItemQuantity, CartItem, parsePrice } from "@/lib/cart"

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setItems(getCart())
  }, [])

  // Sync cart from localStorage
  useEffect(() => {
    if (mounted) {
      setItems(getCart())
    }
  }, [mounted])

  const updateQuantity = (id: number, change: number) => {
    const item = items.find((i) => i.id === id)
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change)
      const updatedCart = updateCartItemQuantity(id, newQuantity)
      setItems(updatedCart)
    }
  }

  const removeItem = (id: number) => {
    const updatedCart = removeFromCart(id)
    setItems(updatedCart)
  }

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  const subtotal = items.reduce((sum, item) => {
    const price = parsePrice(item.price)
    return sum + price * item.quantity
  }, 0)

  const total = subtotal

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
            <span className="text-foreground">Cart</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase">Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">Your cart is empty</p>
              <Link
                href="/shop"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => {
                  const itemPrice = parsePrice(item.price)
                  const itemSubtotal = itemPrice * item.quantity

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-6 p-6 border border-border rounded-lg"
                    >
                      <div className="relative w-32 h-32 rounded overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold uppercase mb-2">{item.name}</h3>
                        <p className="text-muted-foreground mb-4">{item.price}</p>

                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm text-muted-foreground">Quantity:</span>
                          <div className="flex items-center gap-2 border border-border rounded">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-muted transition"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-2 min-w-[60px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 hover:bg-muted transition"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="font-semibold">
                            Subtotal: <span className="text-primary">₵{itemSubtotal.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 hover:text-destructive transition"
                            aria-label="Remove item"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Cart Totals */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 p-6 border border-border rounded-lg bg-muted/30">
                  <h2 className="text-xl font-bold uppercase mb-6">Cart Total</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₵{subtotal.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₵{total.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition font-semibold uppercase">
                      Update Cart
                    </button>
                    <Link
                      href="/shop"
                      className="block w-full text-center px-6 py-3 border border-border rounded hover:border-primary hover:text-primary transition font-semibold uppercase"
                    >
                      Continue Shopping
                    </Link>
                    <Link
                      href="/checkout"
                      className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition font-semibold uppercase"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}

