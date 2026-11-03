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
      <Head>
        <title>{isEn ? 'Privacy Policy | KEY24 Technologies' : 'Datenschutzerklärung | KEY24 Technologies'}</title>
      </Head>

      <Navigation />

      <main id="main-content" className="legal-page">
        <div className="carbon-container">
          <div className="legal-content">
            <span className="legal-tag">{isEn ? 'LEGAL & DATA PROTECTION' : 'RECHTLICHES & DATENSCHUTZ'}</span>
            <h1>{isEn ? 'Privacy Policy' : 'Datenschutzerklärung'}</h1>
            <p className="legal-updated">{isEn ? 'Last updated: October 2026' : 'Stand: Oktober 2026'}</p>

            <section className="legal-section">
              <h2>1. {isEn ? 'Data Controller' : 'Verantwortliche Stelle'}</h2>
              <p>
                {isEn
                  ? 'KEY24 Technologies Europe GmbH, Mainzer Landstraße 180, 60327 Frankfurt am Main, Germany (Email: privacy@key24.ai) is the data controller responsible for the processing of personal data on this website in accordance with the EU General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018.'
                  : 'Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist die KEY24 Technologies Europe GmbH, Mainzer Landstraße 180, 60327 Frankfurt am Main (E-Mail: datenschutz@key24.ai).'}
              </p>
            </section>

            <section className="legal-section">
              <h2>2. {isEn ? 'Telephony & Voice Processing' : 'Telefonie & Sprachverarbeitung'}</h2>
              <p>
                {isEn
                  ? 'When an inbound caller connects with the KEY24 AI agent via call-forwarding, voice audio is converted to text strictly for vehicle qualification, location identification, and dispatching. Audio data is not used to train third-party public models and is stored on encrypted European cloud infrastructure.'
                  : 'Geht ein Notruf über die Rufumleitung beim KEY24-Sprachagenten ein, werden Audiodaten ausschließlich zur Fahrzeugidentifikation, Standorterfassung und Auftragsdisposition verarbeitet. Daten werden auf ISO-27001 zertifizierten europäischen Servern gespeichert und nicht an Dritte für Werbezwecke weitergegeben.'}
              </p>
            </section>

            <section className="legal-section">
              <h2>3. {isEn ? 'WhatsApp Integration & Explicit Consent' : 'WhatsApp-Kommunikation & Einwilligung'}</h2>
              <p>
                {isEn
                  ? 'WhatsApp messages are initiated only after explicit verbal agreement during the phone call (Art. 6(1)(a) GDPR). The caller may revoke consent at any time by replying STOP to any automated message.'
                  : 'WhatsApp-Nachrichten (Auftragsbestätigung, Anfahrts-Link, Rechnungsbeleg) werden nur nach ausdrücklicher verbaler Zustimmung im Telefonat versendet (Art. 6 Abs. 1 lit. a DSGVO). Der Empfänger kann die Benachrichtigung jederzeit durch eine formlose Antwort widerrufen.'}
              </p>
            </section>

            <section className="legal-section">
              <h2>4. {isEn ? 'Your Rights' : 'Ihre Rechte'}</h2>
              <p>
                {isEn
                  ? 'Under the GDPR, you have the right to access, rectify, or erase your stored personal data, as well as the right to data portability and restriction of processing.'
                  : 'Ihnen stehen nach der DSGVO umfassende Rechte auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu.'}
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
