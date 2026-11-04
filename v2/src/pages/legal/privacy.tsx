import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const isEn = (router.locale || 'de-DE').startsWith('en');

  return (
    <>
      <Key24LocalizedHead>
        <title>{isEn ? 'Privacy Policy | KEY24 Technologies' : 'Datenschutzerklärung | KEY24 Technologies'}</title>
      </Key24LocalizedHead>

      <Navigation />

      <Key24LocalizedElement as="main" id="main-content" className="legal-page">
        <Key24LocalizedElement as="div" className="carbon-container">
          <Key24LocalizedElement as="div" className="legal-content">
            <Key24LocalizedElement as="span" className="legal-tag">{isEn ? 'LEGAL & DATA PROTECTION' : 'RECHTLICHES & DATENSCHUTZ'}</Key24LocalizedElement>
            <Key24LocalizedElement as="h1">{isEn ? 'Privacy Policy' : 'Datenschutzerklärung'}</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="legal-updated">{isEn ? 'Last updated: October 2026' : 'Stand: Oktober 2026'}</Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">1. {isEn ? 'Data Controller' : 'Verantwortliche Stelle'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'KEY24 Technologies Europe GmbH, Mainzer Landstraße 180, 60327 Frankfurt am Main, Germany (Email: privacy@key24.ai) is the data controller responsible for the processing of personal data on this website in accordance with the EU General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018.'
                  : 'Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist die KEY24 Technologies Europe GmbH, Mainzer Landstraße 180, 60327 Frankfurt am Main (E-Mail: datenschutz@key24.ai).'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">2. {isEn ? 'Telephony & Voice Processing' : 'Telefonie & Sprachverarbeitung'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'When an inbound caller connects with the KEY24 AI agent via call-forwarding, voice audio is converted to text strictly for vehicle qualification, location identification, and dispatching. Audio data is not used to train third-party public models and is stored on encrypted European cloud infrastructure.'
                  : 'Geht ein Notruf über die Rufumleitung beim KEY24-Sprachagenten ein, werden Audiodaten ausschließlich zur Fahrzeugidentifikation, Standorterfassung und Auftragsdisposition verarbeitet. Daten werden auf ISO-27001 zertifizierten europäischen Servern gespeichert und nicht an Dritte für Werbezwecke weitergegeben.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">3. {isEn ? 'WhatsApp Integration & Explicit Consent' : 'WhatsApp-Kommunikation & Einwilligung'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'WhatsApp messages are initiated only after explicit verbal agreement during the phone call (Art. 6(1)(a) GDPR). The caller may revoke consent at any time by replying STOP to any automated message.'
                  : 'WhatsApp-Nachrichten (Auftragsbestätigung, Anfahrts-Link, Rechnungsbeleg) werden nur nach ausdrücklicher verbaler Zustimmung im Telefonat versendet (Art. 6 Abs. 1 lit. a DSGVO). Der Empfänger kann die Benachrichtigung jederzeit durch eine formlose Antwort widerrufen.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="section" className="legal-section">
              <Key24LocalizedElement as="h2">4. {isEn ? 'Your Rights' : 'Ihre Rechte'}</Key24LocalizedElement>
              <Key24LocalizedElement as="p">
                {isEn
                  ? 'Under the GDPR, you have the right to access, rectify, or erase your stored personal data, as well as the right to data portability and restriction of processing.'
                  : 'Ihnen stehen nach der DSGVO umfassende Rechte auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu.'}
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
