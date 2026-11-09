import credits from "../../data/photo-credits.json";
import { services } from "@/data/lockout";

type CityPhoto = {
  src: string;
  alt: string;
  author: string;
  source: string;
  license: string;
  licenseUrl: string;
};

export const cityPhotos: Record<string, CityPhoto> = Object.fromEntries(
  credits
    .filter((p) => p.kind === "city")
    .map((p) => [
      p.id,
      {
        src: p.src,
        alt: p.alt,
        author: p.author,
        source: p.source,
        license: p.license,
        licenseUrl: p.licenseUrl,
      },
    ])
);

export const servicePhotos: Record<string, { src: string; alt: string }> = Object.fromEntries(
  services.map((service) => [service.slug, { src: service.heroImage, alt: service.heroImageAlt }])
);

export type CreditedPhoto = {
  src: string;
  alt: string;
  author: string;
  source: string;
  license: string;
  licenseUrl: string;
};

/** Licensed cylinder examples; exclude the padlock used in the original gallery. */
export const cylinderPhotos: CreditedPhoto[] = credits
  .filter((p) => p.id === "schluessel-steckt-innen" || (p.src.startsWith("/photos/zylinder/") && p.id !== "europrofil"))
  .map((p) => ({
    src: p.src,
    alt: p.alt,
    author: p.author,
    source: p.source,
    license: p.license,
    licenseUrl: p.licenseUrl,
  }));
