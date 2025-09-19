// lib/types.ts

/**
 * Raw Sanity image object (as stored in documents).
 */
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt: string;
}

/**
 * Raw product shape directly from Sanity (before GROQ projections).
 * Useful if you’re dealing with the document in Studio or webhooks.
 */
export interface SanityProduct {
  _id: string;
  _type: "product";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  shortDescription?: string;
  longDescription?: any; // PortableText blocks
  price: {
    pricePerCarton: number;
    pricePerPack: number;
  };
  images: SanityImage[];
  category: {
    _type: "reference";
    _ref: string;
  };
  tags?: string[];
  isFeatured: boolean;
  available: boolean;
}

/**
 * Optimized product type after GROQ queries (for frontend).
 * Matches your `queries.ts` result — ready for components.
 */
export interface Product {
  _id: string;
  title: string;
  slug: string; // flattened via GROQ
  shortDescription?: string;
  longDescription?: any; // blockContent (rich text)
  price: {
    pricePerCarton: number;
    pricePerPack: number;
  };
  images: {
    asset: {
      url: string;
      metadata: {
        lqip: string;
        dimensions: { width: number; height: number; aspectRatio: number };
      };
    };
    alt: string;
  }[];
  category: {
    _id: string;
    title: string;
  };
  tags?: string[];
  isFeatured: boolean;
  available: boolean;
}
