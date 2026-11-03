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
      <Head>
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
      </Head>

      <Navigation />

      <main id="main-content" className="pricing-page">
        <section className="pricing-hero">
          <div className="carbon-container">
            <span className="hero-eyebrow">
              {isEn ? 'TRANSPARENT PROPOSED TIERS' : 'TRANSPARENTE TARIFSTRUKTUR'}
            </span>
            <h1 className="hero-title">
              {isEn
                ? 'Predictable pricing that pays for itself with two preserved lockouts'
                : 'Berechenbare Tarife, die sich ab zwei geretteten Notöffnungen amortisieren'}
            </h1>
            <p className="hero-lead">
              {isEn
                ? 'Every unanswered emergency call costs between €150 and €400 in lost revenue. KEY24 ensures your business captures every opportunity 24/7.'
                : 'Jeder verpasste Notruf bedeutet 150 € bis 400 € entgangenen Umsatz. KEY24 sorgt dafür, dass kein lukrativer Einsatz mehr verloren geht.'}
            </p>
          </div>
        </section>

        <section className="pricing-cards-section">
          <div className="carbon-container">
            <PricingMatrix isGerman={!isEn} />
          </div>
        </section>

        <FaqAccordionSection
          eyebrow={isEn ? "PRICING & BILLING QUESTIONS" : "FRAGEN ZU PREISEN & ABRECHNUNG"}
          title={isEn ? "Common questions regarding subscriptions and onboarding" : "Häufige Fragen zu Verträgen, Abrechnung und Einrichtung"}
          items={pricingFaq}
        />
      </main>

      <Footer />

      <style jsx>{`
        .pricing-hero {
          padding: 5rem 0 4rem;
          background: #f4ede4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .hero-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: clamp(2.25rem, 3.5vw + 1rem, 3.5rem);
          font-weight: 600;
          line-height: 1.15;
          color: var(--cds-text-primary);
          max-width: 860px;
          margin-bottom: 1.25rem;
        }

        .hero-lead {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
          max-width: 740px;
        }

        .pricing-cards-section {
          padding: 5rem 0;
          background-color: var(--cds-background);
          border-bottom: 1px solid var(--cds-border-subtle);
        }
      `}</style>
    </>
  );
}
