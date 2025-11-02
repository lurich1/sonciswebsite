import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube, Paintbrush as Pinterest, Instagram } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
]

const helpLinks = [
  { label: "Track Your Order", href: "#" },
  { label: "Returns + Exchanges", href: "#" },
  { label: "Shipping + Delivery", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Find us easy", href: "#" },
  { label: "FAQs", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <Image src="/images/photo_2025-11-02_05-35-41-removebg-preview.png" alt="Soncis" width={120} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus
              vitae, ultrices nunc.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube, Pinterest, Instagram].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                  aria-label="Social media"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold uppercase mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition text-sm uppercase">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Info */}
          <div>
            <h5 className="font-semibold uppercase mb-4">Help & Info</h5>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition text-sm uppercase">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold uppercase mb-4">Contact Us</h5>
              <p className="text-muted-foreground text-sm mb-4">
              Do you have any questions or suggestions?{" "}
                <Link href="mailto:contact@yourcompany.com" className="hover:text-primary">
                contact@yourcompany.com
              </Link>
            </p>
            <p className="text-muted-foreground text-sm">
              Do you need support? Give us a call.{" "}
                <Link href="tel:+43 720 11 52 78" className="hover:text-primary">
                +43 720 11 52 78
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-sm text-muted-foreground">Payment Option:</span>
              <div className="flex gap-3">
                <Image src="/images/visa-card.png" alt="Visa" width={40} height={25} className="h-auto" />
                <Image src="/images/paypal-card.png" alt="PayPal" width={40} height={25} className="h-auto" />
                <Image src="/images/master-card.png" alt="Mastercard" width={40} height={25} className="h-auto" />
              </div>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <p>
                © Copyright 2025 Soncis. All rights reserved. Design by{" "}
                <Link href="https://templatesjungle.com" target="_blank" className="hover:text-primary">
                  TemplatesJungle
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
