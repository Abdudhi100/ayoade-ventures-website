"use client"

import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    "Hello! I want to place an order."
  )}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#2A9D8F] text-white shadow-lg hover:bg-[#E76F51] transition-colors duration-300 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#3D2C2E] text-[#FAFAFA] text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat on WhatsApp
      </span>
    </a>
  )
}
