export interface CartItem {
  id: number
  name: string
  price: string
  image: string
  quantity: number
}

const CART_KEY = "soncis-cart"

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return []
  const cart = localStorage.getItem(CART_KEY)
  return cart ? JSON.parse(cart) : []
}

export const addToCart = (item: Omit<CartItem, "quantity">) => {
  const cart = getCart()
  const existingItem = cart.find((cartItem) => cartItem.id === item.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...item, quantity: 1 })
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  return cart
}

export const removeFromCart = (id: number) => {
  const cart = getCart().filter((item) => item.id !== id)
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  return cart
}

export const updateCartItemQuantity = (id: number, quantity: number) => {
  const cart = getCart()
  const item = cart.find((cartItem) => cartItem.id === id)
  if (item) {
    item.quantity = Math.max(1, quantity)
  }
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  return cart
}

export const clearCart = () => {
  localStorage.removeItem(CART_KEY)
}

// Helper to parse price (handles both $ and ₵)
export const parsePrice = (priceString: string): number => {
  return parseFloat(priceString.replace(/[₵$,]/g, ""))
}

