import Link from "next/link";
import { services, type ServiceSlug } from "@/data/lockout";
import { priceLabel } from "@/lib/pricing";

export function AlsoUsefulCrossSell({ excludeSlug }: { excludeSlug: ServiceSlug }) {
  const others = services.filter((s) => s.slug !== excludeSlug);

  return (
    <section className="border-t border-line px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-heading-3 text-frost mb-6">Auch hilfreich.</h2>
        <ul className="divide-y divide-line">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/leistungen/${s.slug}/`}
                className="flex flex-col items-start justify-between gap-3 py-4 hover:bg-navy-surface transition-colors sm:flex-row sm:items-center"
              >
                <div className="min-w-0">
                  <p className="text-heading-4 text-frost">{s.name}</p>
                  <p className="text-body-small text-mist">{s.heroSub}</p>
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
  );
}
