# Prompt for Google Antigravity

Act as a senior frontend architect, full-stack engineer, motion designer, and QA engineer. I want to build an original, German-language, polished corporate technology website inspired by https://www.ibm.com/de-de. Read `project-spec.json` first.

Start from the official starter at https://github.com/carbon-design-system/carbon-for-ibm-dotcom-nextjs-template. Inspect its package versions and compatibility before running it; update dependencies and migrate legacy APIs only after understanding the current code. Do not assume it is the latest Next.js App Router project.

Use IBM Carbon components, design tokens, typography, layout conventions, and accessible interactions wherever appropriate. Avoid mixing incompatible component libraries. Keep original/authorized branding and content: remove IBM logos, IBM analytics, IBM trademarks, IBM-specific metadata, and other production-site integrations from the starter when not authorized.

PHASE A - inspect reference website, capture desktop and mobile screenshots, inventory section order and observable animations, document the gaps and measurements.

PHASE B - run starter successfully, create reusable navigation, hero, feature grid, editorial sections, CTA and footer. Make the content JSON-driven and localizable to German.

PHASE C - add reference-appropriate hover, menu and scroll motion, preserving keyboard access, performance, and reduced-motion preferences.

PHASE D - test at 320, 390, 768, 1024, 1280 and 1440px; compare screenshots; fix discrepancies; run lint, typecheck, production build and Playwright.

Every time: verify before claiming success; report precise commands and failures. Do not claim an exact IBM homepage replica or copy proprietary content. Begin by inspecting repository and making a brief implementation plan, then execute it incrementally.
