import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function CookiesPage() {
  const router = useRouter();
  const isEn = (router.locale || 'de-DE').startsWith('en');

  return (
    <>
      <Head>
        <title>{isEn ? 'Cookie Policy | KEY24 Technologies' : 'Cookie-Richtlinie | KEY24 Technologies'}</title>
      </Head>

      <Navigation />

      <main id="main-content" className="legal-page">
        <div className="carbon-container">
          <div className="legal-content">
            <span className="legal-tag">{isEn ? 'CONSENT MANAGEMENT' : 'COOKIE-RICHTLINIE'}</span>
            <h1>{isEn ? 'Cookie & Storage Policy' : 'Cookie-Richtlinie'}</h1>
            <p className="legal-updated">{isEn ? 'Last updated: October 2026' : 'Stand: Oktober 2026'}</p>

            <section className="legal-section">
              <h2>1. {isEn ? 'Essential Cookies' : 'Notwendige Cookies'}</h2>
              <p>
                {isEn
                  ? 'We use strictly necessary technical cookies to maintain your selected session language (en-GB or de-DE), secure form submissions against cross-site request forgery, and remember your cookie preferences.'
                  : 'Wir setzen technisch notwendige Cookies ein, um Ihre Spracheinstellung (de-DE / en-GB) zu speichern, Formulare gegen CSRF-Angriffe abzusichern und Ihre Präferenzen zu verwalten.'}
              </p>
            </section>

            <section className="legal-section">
              <h2>2. {isEn ? 'No Invasive Third-Party Trackers' : 'Keine invasiven Drittanbieter-Tracker'}</h2>
              <p>
                {isEn
                  ? 'KEY24 does not load cross-site ad networks, invasive surveillance pixels, or unconsented fingerprinting scripts on our marketing portal.'
                  : 'KEY24 verzichtet auf invasive Werbenetzwerke, Tracking-Pixel von Drittanbietern oder Profiling-Skripte auf unserer Website.'}
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
