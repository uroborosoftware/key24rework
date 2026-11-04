import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PricingMatrix } from '@/components/PricingMatrix';
import { FaqAccordionSection } from '@/components/FaqAccordionSection';

export default function PricingPage() {
  const router = useRouter();
  const isEn = (router.locale || 'de-DE').startsWith('en');

  const pricingFaq = [
    {
      q: isEn ? "Are there long-term locked-in contracts?" : "Gibt es lange Vertragslaufzeiten?",
      a: isEn
        ? "No. KEY24 subscriptions operate on a standard monthly rolling model with 30-day cancellation notice. Annual plans with discounted rates are available upon request."
        : "Nein. KEY24-Abonnements laufen standardmäßig monatlich flexibel mit 30 Tagen Kündigungsfrist. Jahresverträge mit vergünstigtem Monatspreis sind auf Wunsch verfügbar."
    },
    {
      q: isEn ? "What happens if our call volume exceeds the included limit?" : "Was passiert bei Überschreitung des monatlichen Anrufvolumens?",
      a: isEn
        ? "Your phone agent will never cut off or drop emergency callers. Additional calls are billed at a transparent per-minute overage rate agreed upon during onboarding."
        : "Ihr Agent bricht niemals Notfallanrufe ab. Zusätzliche Anrufe werden zu einem transparenten, beim Onboarding festgelegten Minutentarif abgerechnet."
    },
    {
      q: isEn ? "Are dispatch messaging fees included?" : "Sind die Gebühren für mobile Notdienst-Benachrichtigungen enthalten?",
      a: isEn
        ? "Essential and Growth tiers include designated emergency alert notification allocations. High-volume outreach or custom external integrations follow standard carrier rates."
        : "In den Tarifen Essential und Growth ist ein monatliches Basiskontingent an Notdienst-Transaktionsnachrichten enthalten. Höhere Volumina werden nach Standardtarifen abgerechnet."
    }
  ];

  return (
    <>
      <Key24LocalizedHead>
        <title>
          {isEn
            ? 'KEY24 Pricing & Plans | Transparent Software Tiers for Locksmiths'
            : 'KEY24 Preise & Tarife | Transparente Monatspläne für Schlüsseldienste'}
        </title>
        <meta
          name="description"
          content={
            isEn
              ? 'Transparent monthly plans for auto locksmiths: Essential (€399), Growth (€699), Scale (€1,249). Includes voice AI, CRM dispatch, and mobile fleet management.'
              : 'Transparente Tarife für Kfz-Schlüsseldienste: Essential (399 €), Growth (699 €), Scale (1.249 €). Inklusive Sprach-KI, CRM-Board und mobiler Flottendisposition.'
          }
        />
      </Key24LocalizedHead>

      <Navigation />

      <Key24LocalizedElement as="main" id="main-content" className="pricing-page">
        <Key24LocalizedElement as="section" className="pricing-hero">
          <Key24LocalizedElement as="div" className="carbon-container">
            <Key24LocalizedElement as="span" className="hero-eyebrow">
              {isEn ? 'TRANSPARENT PROPOSED TIERS' : 'TRANSPARENTE TARIFSTRUKTUR'}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="h1" className="hero-title">
              {isEn
                ? 'Predictable pricing that pays for itself with two preserved lockouts'
                : 'Berechenbare Tarife, die sich ab zwei geretteten Notöffnungen amortisieren'}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="hero-lead">
              {isEn
                ? 'Every unanswered emergency call costs between €150 and €400 in lost revenue. KEY24 ensures your business captures every opportunity 24/7.'
                : 'Jeder verpasste Notruf bedeutet 150 € bis 400 € entgangenen Umsatz. KEY24 sorgt dafür, dass kein lukrativer Einsatz mehr verloren geht.'}
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        <Key24LocalizedElement as="section" className="pricing-cards-section">
          <Key24LocalizedElement as="div" className="carbon-container">
            <PricingMatrix isGerman={!isEn} />
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        <FaqAccordionSection
          eyebrow={isEn ? "PRICING & BILLING QUESTIONS" : "FRAGEN ZU PREISEN & ABRECHNUNG"}
          title={isEn ? "Common questions regarding subscriptions and onboarding" : "Häufige Fragen zu Verträgen, Abrechnung und Einrichtung"}
          items={pricingFaq}
        />
      </Key24LocalizedElement>

      <Footer />

      <style jsx global>{`
        .pricing-page .pricing-hero {
          padding: 5rem 0 4rem;
          background: #f4ede4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .pricing-page .hero-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.75rem;
        }

        .pricing-page .hero-title {
          font-size: clamp(2.25rem, 3.5vw + 1rem, 3.5rem);
          font-weight: 600;
          line-height: 1.15;
          color: var(--cds-text-primary);
          max-width: 860px;
          margin-bottom: 1.25rem;
        }

        .pricing-page .hero-lead {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
          max-width: 740px;
        }

        .pricing-page .pricing-cards-section {
          padding: 5rem 0;
          background-color: var(--cds-background);
          border-bottom: 1px solid var(--cds-border-subtle);
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }
