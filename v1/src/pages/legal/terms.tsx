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
      <Head>
        <title>{isEn ? 'Terms & Conditions | KEY24 Technologies' : 'Allgemeine Geschäftsbedingungen | KEY24 Technologies'}</title>
      </Head>

      <Navigation />

      <main id="main-content" className="legal-page">
        <div className="carbon-container">
          <div className="legal-content">
            <span className="legal-tag">{isEn ? 'COMMERCIAL AGREEMENT' : 'VERTRAGSBEDINGUNGEN'}</span>
            <h1>{isEn ? 'Commercial Terms of Service' : 'Allgemeine Geschäftsbedingungen'}</h1>
            <p className="legal-updated">{isEn ? 'Last updated: October 2026' : 'Stand: Oktober 2026'}</p>

            <section className="legal-section">
              <h2>1. {isEn ? 'Scope of Service' : 'Geltungsbereich & Vertragsgegenstand'}</h2>
              <p>
                {isEn
                  ? 'KEY24 Technologies provides a software-as-a-service (SaaS) platform consisting of an AI voice intake agent, cloud-hosted locksmith CRM dispatching, and automated messaging workflows for commercial automotive locksmith businesses.'
                  : 'KEY24 Technologies stellt eine Software-as-a-Service (SaaS) Plattform bereit, bestehend aus einem KI-Telefonagenten, einem cloudbasierten Auftragsboard (CRM) und automatisierten Messenger-Workflows für gewerbliche Kfz-Schlüsseldienste.'}
              </p>
            </section>

            <section className="legal-section">
              <h2>2. {isEn ? 'Subscriptions & Cancellation' : 'Laufzeiten & Kündigung'}</h2>
              <p>
                {isEn
                  ? 'Unless an annual prepayment plan is explicitly signed, subscriptions operate on a month-to-month billing cycle. Either party may cancel with 30 days written notice prior to the end of the current billing period.'
                  : 'Sofern nicht ausdrücklich ein rabattierter Jahresvertrag vereinbart wurde, verlängern sich Abonnements jeweils um einen Monat und können mit einer Frist von 30 Tagen zum Monatsende gekündigt werden.'}
              </p>
            </section>

            <section className="legal-section">
              <h2>3. {isEn ? 'Service Availability (SLA)' : 'Verfügbarkeit & Support'}</h2>
              <p>
                {isEn
                  ? 'KEY24 aims for 99.9% telephony and dispatch board availability, excluding scheduled maintenance windows announced at least 48 hours in advance.'
                  : 'KEY24 gewährleistet eine Verfügbarkeit der Sprachtelefonie und des Dispositionsboards von 99,9 % im Jahresmittel, ausgenommen angekündigte Wartungsfenster.'}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .legal-page {
          padding: 5rem 0 6rem;
          background-color: var(--cds-background);
        }

        .legal-content {
          max-width: 820px;
        }

        .legal-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--cds-interactive-01);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
        }

        h1 {
          font-size: 2.75rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          margin-bottom: 0.5rem;
        }

        .legal-updated {
          font-size: 0.875rem;
          color: var(--cds-text-secondary);
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .legal-section {
          margin-bottom: 2.5rem;
        }

        .legal-section h2 {
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          margin-bottom: 0.75rem;
        }

        .legal-section p {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--cds-text-secondary);
        }
      `}</style>
    </>
  );
}
