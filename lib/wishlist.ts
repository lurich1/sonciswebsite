export interface WishlistItem {
  id: number
  name: string
  price: string
  image: string
  stock?: string
}

const WISHLIST_KEY = "soncis-wishlist"

export const getWishlist = (): WishlistItem[] => {
  if (typeof window === "undefined") return []
  const wishlist = localStorage.getItem(WISHLIST_KEY)
  return wishlist ? JSON.parse(wishlist) : []
}

export const addToWishlist = (item: WishlistItem) => {
  const wishlist = getWishlist()
  const existingItem = wishlist.find((wishlistItem) => wishlistItem.id === item.id)

  if (!existingItem) {
    wishlist.push(item)
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
  }
  
  return wishlist
}

export const removeFromWishlist = (id: number) => {
  const wishlist = getWishlist().filter((item) => item.id !== id)
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
  return wishlist
}

export const isInWishlist = (id: number): boolean => {
  const wishlist = getWishlist()
  return wishlist.some((item) => item.id === id)
}

export const clearWishlist = () => {
  localStorage.removeItem(WISHLIST_KEY)
}

