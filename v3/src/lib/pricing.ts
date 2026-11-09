// Single source of truth for every price surface on the site: service rows, the
// ServiceHero stats bar, /preise, the sticky CTA sidebar and the Offer schema.
//
// Door and vehicle opening starting prices confirmed by the owner (2026-11-08).
// Other published starting prices adopted from Felix at the owner's request.
// Other figures stay null and render as "Preis auf Anfrage".
// Confirming a figure is a one-line change here and updates every surface at once.
export const pricing = {
  currencyCode: "EUR",
  symbol: "€",

  /** Türöffnung einer zugefallenen, nicht abgeschlossenen Tür. */
  entryFrom: 79 as number | null,
  lockedFrom: 129 as number | null,
  carFrom: 159 as number | null,

  anfahrt: null as number | null,
  nightSurcharge: null as number | null,
  cylinderSwapFrom: 89 as number | null,
  keyCopyFrom: 10 as number | null,
  carKeyFrom: 89 as number | null,
  remoteKeyFrom: 149 as number | null,
  multipointFrom: 299 as number | null,
  lockingSystemFrom: 199 as number | null,
  burglaryProtectionFrom: 99 as number | null,
} as const;

export const priceLabel = (value: number | null): string =>
  value === null ? "Preis auf Anfrage" : `ab ${value} ${pricing.symbol}`;

/** schema.org priceRange — only ever reports figures that are actually confirmed. */
export const schemaPriceRange = (): string => `ab ${pricing.keyCopyFrom} ${pricing.symbol}`;
