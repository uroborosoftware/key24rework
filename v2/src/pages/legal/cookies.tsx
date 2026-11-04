import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
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
      <Key24LocalizedHead>
        <title>{isEn ? 'Cookie Policy | KEY24 Technologies' : 'Cookie-Richtlinie | KEY24 Technologies'}</title>
      </Key24LocalizedHead>

      <Navigation />

      <Key24LocalizedElement as="main" id="main-content" className="legal-page">
        <Key24LocalizedElement as="div" className="carbon-container">
          <Key24LocalizedElement as="div" className="legal-content">
            <Key24LocalizedElement as="span" className="legal-tag">{isEn ? 'CONSENT MANAGEMENT' : 'COOKIE-RICHTLINIE'}</Key24LocalizedElement>
            <Key24LocalizedElement as="h1">{isEn ? 'Cookie & Storage Policy' : 'Cookie-Richtlinie'}</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="legal-updated">{isEn ? 'Last updated: October 2026' : 'Stand: Oktober 2026'}</Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">1. {isEn ? 'Essential Cookies' : 'Notwendige Cookies'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'We use strictly necessary technical cookies to maintain your selected session language (en-GB or de-DE), secure form submissions against cross-site request forgery, and remember your cookie preferences.'
                  : 'Wir setzen technisch notwendige Cookies ein, um Ihre Spracheinstellung (de-DE / en-GB) zu speichern, Formulare gegen CSRF-Angriffe abzusichern und Ihre Präferenzen zu verwalten.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">2. {isEn ? 'No Invasive Third-Party Trackers' : 'Keine invasiven Drittanbieter-Tracker'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'KEY24 does not load cross-site ad networks, invasive surveillance pixels, or unconsented fingerprinting scripts on our marketing portal.'
                  : 'KEY24 verzichtet auf invasive Werbenetzwerke, Tracking-Pixel von Drittanbietern oder Profiling-Skripte auf unserer Website.'}
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
