import { client } from "@/lib/sanity.client"
import { allProductsQuery } from "@/lib/queries"
import ProductCard from "@/components/ProductCard"
import type { Product } from "@/lib/types"

export default async function ProductsPage() {
  const products: Product[] = await client.fetch(allProductsQuery)

  if (!products?.length) {
    return (
      <main className="bg-[#F4E1D2] min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="font-serif text-3xl mb-4 text-[#2A9D8F]">
            Our Drinks
          </h1>
          <p className="text-gray-600">
            No products available at the moment. 🍹  
            Please check back later!
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#F4E1D2] min-h-screen px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl text-[#2A9D8F] relative inline-block">
          Our Drinks
          <span className="block w-16 h-1 bg-[#E76F51] mx-auto mt-2 rounded-full" />
        </h1>
        <p className="mt-3 text-[#3D2C2E]/80 max-w-xl mx-auto text-sm sm:text-base">
          Refreshing and premium selections, crafted for every occasion.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <div
            key={product._id}
            className="animate-fadeIn"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </main>
  )
}
