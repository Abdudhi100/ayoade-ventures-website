// lib/sanity.image.ts
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./sanity.client";

// Initialize once
const builder = imageUrlBuilder(client);

/**
 * Generate a Sanity image URL with full typing.
 * @param source - Sanity image reference or object
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
