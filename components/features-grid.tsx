import { Heart, Package, MessageCircle, Zap, Globe, Leaf, RotateCcw, Sparkles } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "100% Genuine Leather",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: Package,
    title: "Hand-Stitched Perfection",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: MessageCircle,
    title: "Minimalist",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: Zap,
    title: "Functional Designs",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: Globe,
    title: "Ethically Crafted",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: Leaf,
    title: "Free Worldwide Shipping",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    icon: Sparkles,
    title: "Sustainable",
    description: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="text-foreground">
                <div className="py-4 md:py-6">
                  <Icon className="w-12 h-12 md:w-[75px] md:h-[75px] mb-2 md:mb-3 text-accent" strokeWidth={1.5} stroke="currentColor" fill="none" />
                  <h4 className="text-foreground font-semibold capitalize my-2 md:my-3 text-sm md:text-base">{feature.title}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
