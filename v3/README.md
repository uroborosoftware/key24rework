# First Class Key – Schlüsseldienst & Sicherheitstechnik

German locksmith website for Güngör Demir in Sindelfingen, based on the Namaken design. Services, imagery and responsive layouts have been adapted to the business.

## Getting started

```bash
npm install
npm run build
npm run check
npm start
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). The preview serves the static `out/` export. No Next.js runtime server or form API is required.

Set the verified domain in `src/lib/business.ts` before building. Canonical URLs, sitemap and structured data use this value. `.openai/hosting.json` preserves the Sites identity. `TEMPLATE_SOURCE` is an optional comparison with the original design, not a required check for the adapted site.

## Design tokens

Colors and typography are generated from `design/styles.json` (a Framer
export) via `scripts/build-tokens.mjs`, which writes `src/app/tokens.css`.
Re-run it after editing `design/styles.json`:

```bash
node scripts/build-tokens.mjs
```

## Deploy

```bash
npm run build
```

Deploy `out/` to a static host. See [QA report](docs/qa-report.md), [research](docs/seo-research.md) and [SEO workflow](docs/seo-workflow.md).

Business facts live in `src/lib/business.ts`; service copy in `src/data/lockout.ts`; prices in `src/lib/pricing.ts`. The owner confirmed all offered services in all 18 listed cities on 2026-11-08. The shared city data drives indexability and the sitemap. Specialist services use their main service pages; local door-opening pages link to them. Sindelfingen service details are consolidated under `/leistungen/`. Contact is `/kontakt/`.

See [the current competitor review](docs/seo-competitive-review-2026-11-08.md), [keyword map](docs/keyword-map-2026-11-08.csv) and [validation](docs/seo-validation-2026-11-08.md). Keyword volumes and live rankings have not been measured.

The two repository SEO skills are manually invokable instructions, not a scheduled autonomous service. Technical checks do not measure ranking or conversion outcomes.

## Languages

German routes live under `src/app/(de)/`. The temporary Turkish review pages, translations and language switch were removed on 2026-11-08. The public site is German only.

The final domain, working business email, opening hours, payment methods and detailed price conditions still need confirmation. Impressum/privacy texts remain explicit drafts. The local preview is not a public indexed launch. Complete the missing business facts and connect the intended public hosting/domain before advertising the website.
