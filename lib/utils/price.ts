// Convert USD prices to Ghana Cedi (GHS)
// Approximate conversion: 1 USD = 15 GHS (this is an example rate, adjust as needed)
const USD_TO_GHS = 15

export const convertToGHS = (usdPrice: string): string => {
  // Extract numeric value from price string like "$395.00"
  const numericValue = parseFloat(usdPrice.replace("$", "").replace(",", ""))
  const ghsValue = numericValue * USD_TO_GHS
  return `₵${ghsValue.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export const formatGHS = (amount: number): string => {
  return `₵${amount.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export const parsePrice = (priceString: string): number => {
  // Handle both $ and ₵ formats
  return parseFloat(priceString.replace(/[₵$,]/g, ""))
}

