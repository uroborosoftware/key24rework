import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/lockout";
import { priceLabel } from "@/lib/pricing";
import { CtaBand } from "@/components/CtaBand";

export const metadata = {
  title: "Schlüsseldienst, Schlüsselservice & Sicherheitstechnik",
  description:
    "Türöffnung, Autoöffnung, Autoschlüssel, Schlosswechsel, Schließanlagen und Sicherheitstechnik: Leistungen von First Class Key in Sindelfingen.",
  alternates: { canonical: "/leistungen/" },
};

export default function Page() {
  return (
    <>
      <section className="px-4 pt-24 pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-display-page text-frost">Leistungen.</h1>
          <p className="text-lead text-mist mt-6 max-w-3xl">
            Hilfe bei verschlossenen Türen, passende Schlüssel und Sicherheit für Ihr Gebäude.
            Wählen Sie Ihr Anliegen. Umfang, Termin und Gesamtpreis klären wir vor dem Auftrag.
          </p>

          <ul className="mt-12 divide-y divide-line border-t border-line">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/leistungen/${s.slug}/`}
                  className="flex flex-col items-start justify-between gap-4 py-6 transition-colors hover:bg-navy-surface sm:flex-row"
                >
                  <div className="flex min-w-0 flex-col gap-4 sm:flex-row">
                    <Image src={s.heroImage} alt={s.heroImageAlt} width={320} height={240} sizes="(max-width: 640px) 100vw, 144px" className="aspect-[4/3] w-full shrink-0 object-cover sm:h-28 sm:w-36" />
                    <div className="min-w-0">
                    <p className="text-heading-3 text-frost">{s.name}</p>
                    <p className="text-body-small text-mist mt-1 max-w-2xl">{s.heroSub}</p>
                    </div>
                  </div>
                  <p className="text-price text-signal-orange shrink-0 sm:ml-4 sm:max-w-48 sm:text-right">
                    {priceLabel(s.priceFrom)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
