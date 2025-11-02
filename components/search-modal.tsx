"use client"

import { useState, useEffect } from "react"
import { X, Search } from "lucide-react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const categories = ["Jackets", "T-shirts", "Handbags", "Accessories", "Cosmetics", "Dresses", "Jumpsuits"]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search
    console.log("Search:", searchQuery)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/90 flex items-start justify-center pt-20"
      onClick={onClose}
    >
      <div className="w-full max-w-3xl px-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-accent transition"
          aria-label="Close search"
        >
          <X size={32} />
        </button>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type and press enter"
              className="w-full px-6 py-4 pr-16 text-lg bg-muted/20 border-2 border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-accent transition"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
          </div>
        </form>

        <div className="mt-8">
          <p className="text-white/60 text-sm mb-4 uppercase">Browse Categories</p>
          <div className="flex flex-wrap gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  // Handle category click
                  console.log("Category:", category)
                }}
                className="text-white text-xl hover:text-accent transition uppercase"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

