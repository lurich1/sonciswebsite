"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NewsletterSection from "@/components/newsletter-section"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("direct-bank")

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
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
            <span className="text-foreground">Checkout</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Billing Details Form */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 uppercase">Billing Details</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-semibold">
                        First Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-semibold">
                        Last Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-semibold">
                      Company Name (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block mb-2 text-sm font-semibold">
                      Country / Region <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="country"
                      required
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address1" className="block mb-2 text-sm font-semibold">
                      Street Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="address1"
                      placeholder="House number and street name"
                      required
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                      className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block mb-2 text-sm font-semibold">
                        Town / City <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        required
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block mb-2 text-sm font-semibold">
                        State <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="state"
                        required
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="fl">Florida</option>
                        <option value="ca">California</option>
                        <option value="ny">New York</option>
                        <option value="tx">Texas</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zip" className="block mb-2 text-sm font-semibold">
                        Zip Code <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="zip"
                        required
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-semibold">
                        Phone <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-semibold">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary & Payment */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Additional Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 uppercase">Additional Information</h2>
                  <textarea
                    placeholder="Order notes (optional)"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Cart Totals */}
                <div className="p-6 border border-border rounded-lg bg-muted/30">
                  <h2 className="text-xl font-bold uppercase mb-6">Cart Totals</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₵34,050.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₵34,050.00</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h2 className="text-xl font-bold uppercase mb-6">Payment Methods</h2>
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 p-4 border border-border rounded cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        value="direct-bank"
                        checked={paymentMethod === "direct-bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-semibold block mb-1">Direct Bank Transfer</span>
                        <span className="text-sm text-muted-foreground">
                          Make your payment directly into our bank account.
                        </span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-4 border border-border rounded cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        value="check"
                        checked={paymentMethod === "check"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-semibold block mb-1">Check Payments</span>
                        <span className="text-sm text-muted-foreground">
                          Please send a check to Store Name, Store Street, Store Town, Store State / County.
                        </span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-4 border border-border rounded cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-semibold block mb-1">Cash on Delivery</span>
                        <span className="text-sm text-muted-foreground">Pay with cash upon delivery.</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-4 border border-border rounded cursor-pointer hover:border-primary transition">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <span className="font-semibold block mb-1">PayPal</span>
                        <span className="text-sm text-muted-foreground">Pay via PayPal.</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition font-semibold uppercase text-lg">
                  Place an Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}

