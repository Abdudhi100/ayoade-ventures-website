// lib/whatsapp.ts

/**
 * Get WhatsApp number digits only (strips spaces, +, etc.).
 * Reads from env: NEXT_PUBLIC_WHATSAPP_NUMBER
 */
export function getWhatsappNumberDigits(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  return raw.replace(/\D/g, "");
}

/**
 * Build a WhatsApp order link.
 * @param productTitle - Product name (appears in message).
 * @param qty - Quantity to order (default 1).
 * @param extra - Extra message or notes.
 * @returns WhatsApp deep link with prefilled message.
 */
export function buildWhatsappLink({
  productTitle,
  qty = 1,
  extra = "",
}: {
  productTitle: string;
  qty?: number;
  extra?: string;
}): string {
  const digits = getWhatsappNumberDigits();

  const message = [
    `Hello! I want to order ${qty} carton(s) of ${productTitle}.`,
    extra,
  ]
    .filter(Boolean) // remove empty strings
    .join(" ")
    .trim();

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a generic WhatsApp contact link.
 * Useful for homepage CTA ("I want to place an order with Ayoade Ventures").
 */
export function buildWhatsappContactLink(message: string): string {
  const digits = getWhatsappNumberDigits();
  return `https://wa.me/${digits}?text=${encodeURIComponent(message.trim())}`;
}
