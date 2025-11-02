import type { Metadata } from 'next'
import Navbar from "@/components/navbar"
import HeroBanner from "@/components/hero-banner"
import FeaturesGrid from "@/components/features-grid"
import CategoriesSection from "@/components/categories-section"
import ProductGrid from "@/components/product-grid"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import BlogSection from "@/components/blog-section"
import NewsletterSection from "@/components/newsletter-section"
import InstagramSection from "@/components/instagram-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Home',
  description: 'Discover premium leather goods and quality products at Soncis. Shop genuine leather bags, accessories, and more. Free worldwide shipping available.',
  openGraph: {
    title: 'Soncis - Premium Leather Goods & Quality Products',
    description: 'Discover premium leather goods and quality products at Soncis. Shop genuine leather bags, accessories, and more.',
    url: '/',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Soncis',
            description: 'Premium Leather Goods & Quality Products',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/images/photo_2025-11-02_05-35-41-removebg-preview.png`,
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
            },
          }),
        }}
      />
      <Navbar />
      <HeroBanner />
      <FeaturesGrid />
      <CategoriesSection />
      <ProductGrid />
      <TestimonialsCarousel />
      <BlogSection />
      <NewsletterSection />
      <InstagramSection />
      <Footer />
    </main>
  )
}
