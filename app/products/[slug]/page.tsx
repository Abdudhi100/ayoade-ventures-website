// app/products/[slug]/page.tsx
import { client, urlFor } from "@/lib/sanity.client";
import { productBySlugQuery } from "@/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { PortableText } from "@portabletext/react";
import { CheckCircle2, XCircle, MessageCircle } from "lucide-react";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(productBySlugQuery);
  return slugs.map((s: any) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await client.fetch(productBySlugQuery, { slug: params.slug });
  if (!product) return {};
  return {
    title: `${product.title} — Ayoade Ventures`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} — Ayoade Ventures`,
      description: product.shortDescription,
      images: product.images?.[0]
        ? [{ url: urlFor(product.images[0]).width(1200).height(630).url() }]
        : [],
    },
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await client.fetch(productBySlugQuery, { slug: params.slug });
  if (!product) return notFound();

  const mainImg = product.images?.[0];
  const imgUrl = mainImg ? urlFor(mainImg).width(1200).height(800).url() : null;

  const priceText =
    product.price?.pricePerCarton
      ? `₦${product.price.pricePerCarton.toLocaleString()} / Carton`
      : product.price?.pricePerPack
      ? `₦${product.price.pricePerPack.toLocaleString()} / Pack`
      : "Contact for price";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDescription,
    image: imgUrl ? [imgUrl] : [],
    offers: {
      "@type": "Offer",
      priceCurrency: "NGN",
      price: product.price?.pricePerCarton || product.price?.pricePerPack || "",
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${product.slug}`,
    },
  };

  return (
    <main className="bg-[#F4E1D2] min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Title + Short Description */}
        <h1 className="font-serif text-4xl text-[#2A9D8F] relative inline-block">
          {product.title}
          <span className="block w-20 h-1 bg-[#E76F51] mx-auto mt-2 rounded-full" />
        </h1>
        <p className="mt-3 text-[#3D2C2E]/80 max-w-2xl">{product.shortDescription}</p>

        {/* Main Image */}
        {imgUrl && (
          <div className="mt-6 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={imgUrl}
              alt={product.title}
              width={1200}
              height={800}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Price + Availability */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-3xl font-bold text-[#E76F51]">{priceText}</div>
            <div className="flex items-center gap-2 mt-1 text-sm">
              {product.available ? (
                <span className="flex items-center gap-1 text-green-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> In stock
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-600 font-medium">
                  <XCircle className="w-4 h-4" /> Out of stock
                </span>
              )}
            </div>
          </div>

          <a
            href={buildWhatsappLink({ productTitle: product.title, qty: 1 })}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2A9D8F] text-white font-medium shadow hover:bg-[#21867a] transition"
          >
            <MessageCircle className="w-5 h-5" />
            Order on WhatsApp
          </a>
        </div>

        {/* Long Description */}
        {product.longDescription && (
          <div className="mt-10 prose prose-lg max-w-none text-[#3D2C2E]/90">
            <PortableText value={product.longDescription} />
          </div>
        )}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
