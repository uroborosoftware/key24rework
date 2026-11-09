import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { business } from "@/lib/business";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { localBusinessSchema } from "@/lib/schema";
import { pricing } from "@/lib/pricing";
import "../app/globals.css";
export const baseMetadata: Metadata = {
    metadataBase: new URL(`https://${business.domain}`),
    title: {
        default: `Schlüsseldienst Sindelfingen | ${business.name}`,
        template: `%s | ${business.name}`,
    },
    description: `Schlüsseldienst in Sindelfingen: Türöffnung ab ${pricing.entryFrom} €, Autoöffnung, Schlüssel nachmachen und Sicherheitstechnik. Anfahrt und Gesamtpreis vorab klären.`,
    openGraph: {
        type: "website",
        locale: "de_DE",
        siteName: business.name,
        images: [{ url: "/demir/storefront.webp", alt: "First Class Key in Sindelfingen" }],
    },
    twitter: { card: "summary_large_image", images: ["/demir/storefront.webp"] },
};
export function SiteLayout({ children }: {
    children: React.ReactNode;
}) {
    return (<html lang={"de"} className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col pb-16 sm:pb-0">
        {<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}/>}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>);
}
