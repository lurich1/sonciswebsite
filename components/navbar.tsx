"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Heart, ShoppingCart, Search } from "lucide-react"
import SearchModal from "./search-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background text-foreground z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/photo_2025-11-02_05-35-41-removebg-preview.png" 
              alt="Soncis" 
              width={120} 
              height={40} 
              className="h-10 w-auto" 
              sizes="(max-width: 640px) 100px, 120px"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="/shop" className="hover:text-primary transition">
              Shop
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Blog
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-primary transition"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
            <Link href="/wishlist" className="hover:text-primary transition inline-flex" aria-label="Wishlist">
              <Heart size={24} />
            </Link>
            <Link href="/cart" className="hover:text-primary transition inline-flex" aria-label="Cart">
              <ShoppingCart size={24} />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-primary">
              Home
            </Link>
            <Link href="/shop" className="block py-2 hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="block py-2 hover:text-primary">
              About
            </Link>
            <Link href="#" className="block py-2 hover:text-primary">
              Blog
            </Link>
            <Link href="#" className="block py-2 hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  )
}
