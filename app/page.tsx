import Image from "next/image"
import Link from "next/link"
import { buildWhatsappContactLink } from "@/lib/whatsapp"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 bg-[#F4E1D2]">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2A9D8F] leading-tight">
            Healthy Drinks for Happy Kids
          </h1>
          <p className="mt-4 text-lg text-[#3D2C2E]/80">
            Ayoade Ventures distributes natural, low-sugar, non-carbonated
            children’s drinks. Supplying retailers with Mr Fruits & GoFresh.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="bg-[#2A9D8F] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#23867B] transition"
            >
              View Products
            </Link>
            <a
              href={buildWhatsappContactLink(
                "Hello! I want to place an order with Ayoade Ventures."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E76F51] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#d85c3f] transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-md h-72 md:h-96">
          <Image
            src="/hero-drink.jpg" // TODO: swap with Sanity-hosted image later
            alt="Children’s healthy drink bottles"
            fill
            priority
            className="object-contain drop-shadow-xl rounded-2xl"
          />
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-6 md:px-20 py-16 grid md:grid-cols-3 gap-10 bg-white">
        {[
          {
            title: "Natural Ingredients",
            desc: "No artificial flavors or preservatives.",
            icon: "/leaf.svg",
          },
          {
            title: "Low-Sugar",
            desc: "Designed for children’s health and energy.",
            icon: "/drop.svg",
          },
          {
            title: "Trusted Supply",
            desc: "Supplying retailers across the region.",
            icon: "/store.svg",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center text-center gap-3"
          >
            <Image src={f.icon} alt="" width={40} height={40} />
            <h3 className="font-serif text-xl font-semibold text-[#2A9D8F]">
              {f.title}
            </h3>
            <p className="text-[#3D2C2E]/80">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-[#3D2C2E] text-[#FAFAFA] px-6 md:px-20 py-10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Ayoade Ventures. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
