import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "How to look outstanding in pastel",
    category: "Fashion",
    date: "Jul 11, 2022",
    image: "/images/post-image1.jpg",
    excerpt: "Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...",
  },
  {
    id: 2,
    title: "Top 10 fashion trend for summer",
    category: "Fashion",
    date: "Jul 11, 2022",
    image: "/images/post-image2.jpg",
    excerpt: "Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
  },
  {
    id: 3,
    title: "Crazy fashion with unique moment",
    category: "Fashion",
    date: "Jul 11, 2022",
    image: "/images/post-image3.jpg",
    excerpt: "Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold uppercase">Read Blog Posts</h2>
          <Link href="#" className="hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded bg-gray-100">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-sm text-gray-500 uppercase">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-lg font-semibold uppercase hover:text-gray-600 transition">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
