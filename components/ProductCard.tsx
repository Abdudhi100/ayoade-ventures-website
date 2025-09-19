"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductProps {
  title: string
  shortDescription?: string
  price: {
    pricePerCarton: number
    pricePerPack: number
  }
  images?: {
    asset: { url: string }
    alt: string
  }[]
  available: boolean
}

export default function ProductCard({
  title,
  shortDescription,
  price,
  images,
  available,
}: ProductProps) {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  const message = `Hello! I want to order ${title}. Price per carton: ₦${price.pricePerCarton}, per pack: ₦${price.pricePerPack}`
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    message
  )}`

  const mainImage = images?.[0]?.asset?.url
  const altText = images?.[0]?.alt || title

  return (
    <div className="flex flex-col bg-[#FAFAFA] rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 border border-[#F4E1D2]">
      {mainImage && (
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={mainImage}
            alt={altText}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <h3 className="mt-3 font-serif text-lg text-[#3D2C2E] leading-snug">
        {title}
      </h3>

      {shortDescription && (
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {shortDescription}
        </p>
      )}

      <p className="mt-2 text-[#2A9D8F] font-semibold">
        ₦{price.pricePerCarton.toLocaleString()} / carton
      </p>

      {available ? (
        <Button
          asChild
          className="mt-auto bg-[#E76F51] hover:bg-[#d55f44] text-white font-medium rounded-xl transition-colors"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Order on WhatsApp
          </a>
        </Button>
      ) : (
        <p className="mt-auto text-sm text-red-500 font-medium">
          Currently unavailable
        </p>
      )}
    </div>
  )
}
