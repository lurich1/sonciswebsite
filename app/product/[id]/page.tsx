import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductClient from "./product-client"

// Generate static params for all products (required for static export)
export function generateStaticParams() {
  const allProductIds = [1, 2, 3, 4, 5, 6]
  return allProductIds.map((id) => ({
    id: id.toString(),
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const productId = Number(id)

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      <ProductClient productId={productId} />
      <Footer />
    </main>
  )
}

