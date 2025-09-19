// lib/queries.ts
import { groq } from "next-sanity";

/**
 * Fetch all products (for listings).
 * Matches schema: nested price object, images array, category reference, tags, availability.
 */
export const allProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc){
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    longDescription,
    price {
      pricePerCarton,
      pricePerPack
    },
    images[] {
      asset->{
        url,
        metadata { lqip, dimensions }
      },
      alt
    },
    category->{
      _id,
      title
    },
    tags,
    isFeatured,
    available
  }
`;

/**
 * Fetch a single product by slug (for detail pages).
 */
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    longDescription,
    price {
      pricePerCarton,
      pricePerPack
    },
    images[] {
      asset->{
        url,
        metadata { lqip, dimensions }
      },
      alt
    },
    category->{
      _id,
      title
    },
    tags,
    isFeatured,
    available
  }
`;
