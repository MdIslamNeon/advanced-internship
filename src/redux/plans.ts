// Shared so the checkout page and the auth listener can't drift apart.
export const PRICE_IDS = {
  month: "price_1U5tN50BgYxUel3cujcoBpBJ",
  year: "price_1U5u1U0BgYxUel3c0Ylcev1t",
} as const;

// Display text only — nothing is gated on the tier.
export function planNameFromPriceId(priceId: string | undefined): string {
  return priceId === PRICE_IDS.year ? "Premium Plus" : "Premium";
}
