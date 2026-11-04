import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  const router = useRouter();
  const isEn = (router.locale || 'de-DE').startsWith('en');

  return (
    <>
      <Key24LocalizedHead>
        <title>{isEn ? 'Terms & Conditions | KEY24 Technologies' : 'Allgemeine Geschäftsbedingungen | KEY24 Technologies'}</title>
      </Key24LocalizedHead>

      <Navigation />

      <Key24LocalizedElement as="main" id="main-content" className="legal-page">
        <Key24LocalizedElement as="div" className="carbon-container">
          <Key24LocalizedElement as="div" className="legal-content">
            <Key24LocalizedElement as="span" className="legal-tag">{isEn ? 'COMMERCIAL AGREEMENT' : 'VERTRAGSBEDINGUNGEN'}</Key24LocalizedElement>
            <Key24LocalizedElement as="h1">{isEn ? 'Commercial Terms of Service' : 'Allgemeine Geschäftsbedingungen'}</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="legal-updated">{isEn ? 'Last updated: October 2026' : 'Stand: Oktober 2026'}</Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">1. {isEn ? 'Scope of Service' : 'Geltungsbereich & Vertragsgegenstand'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'KEY24 Technologies provides a software-as-a-service (SaaS) platform consisting of an AI voice intake agent, cloud-hosted locksmith CRM dispatching, and automated messaging workflows for commercial automotive locksmith businesses.'
                  : 'KEY24 Technologies stellt eine Software-as-a-Service (SaaS) Plattform bereit, bestehend aus einem KI-Telefonagenten, einem cloudbasierten Auftragsboard (CRM) und automatisierten Messenger-Workflows für gewerbliche Kfz-Schlüsseldienste.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">2. {isEn ? 'Subscriptions & Cancellation' : 'Laufzeiten & Kündigung'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'Unless an annual prepayment plan is explicitly signed, subscriptions operate on a month-to-month billing cycle. Either party may cancel with 30 days written notice prior to the end of the current billing period.'
                  : 'Sofern nicht ausdrücklich ein rabattierter Jahresvertrag vereinbart wurde, verlängern sich Abonnements jeweils um einen Monat und können mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">3. {isEn ? 'Service Availability (SLA)' : 'Verfügbarkeit & Support'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'KEY24 aims for 99.9% telephony and dispatch board availability, excluding scheduled maintenance windows announced at least 48 hours in advance.'
                  : 'KEY24 gewährleistet eine Verfügbarkeit der Sprachtelefonie und des Dispositionsboards von 99,9 % im Jahresmittel, ausgenommen angekündigte Wartungsfenster.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <Footer />

      <style jsx global>{`
        .legal-page {
          padding: 5rem 0 6rem;
          background-color: var(--cds-background);
        }

        .legal-page .legal-content {
          max-width: 820px;
        }

        .legal-page .legal-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--cds-interactive-01);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
        }

        .legal-page h1 {
          font-size: 2.75rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          margin-bottom: 0.5rem;
        }

        .legal-page .legal-updated {
          font-size: 0.875rem;
          color: var(--cds-text-secondary);
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .legal-page .legal-section {
          margin-bottom: 2.5rem;
        }

        .legal-page .legal-section h2 {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          margin-bottom: 0.75rem;
        }

        .legal-page .legal-section p {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--cds-text-secondary);
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }
