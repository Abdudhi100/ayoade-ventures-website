// lib/sanity.client.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Strongly typed Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // required
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01", // pin to latest schema date for stability
  useCdn: process.env.NODE_ENV === "production", // CDN in prod, fresh in dev
});

// Image URL builder
const builder = imageUrlBuilder(client);

// Helper for generating image URLs
export const urlFor = (source: SanityImageSource) => builder.image(source);
