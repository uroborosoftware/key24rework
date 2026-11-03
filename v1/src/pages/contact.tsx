import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Checkmark, Email, Location, Phone } from '@carbon/icons-react';

export default function ContactPage() {
  const router = useRouter();
  const isEn = (router.locale || 'de-DE').startsWith('en');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate contact form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <Head>
        <title>
          {isEn
            ? 'Contact KEY24 | Enterprise Auto Locksmith Technology'
            : 'Kontakt zu KEY24 | Ansprechpartner für Kfz-Schlüsseldienste'}
        </title>
        <meta
          name="description"
          content={
            isEn
              ? 'Get in touch with the KEY24 technical engineering and sales team. Direct support for mobile automotive locksmiths in the UK, Germany and Europe.'
              : 'Nehmen Sie Kontakt mit dem KEY24-Team auf. Direkte Beratung und technischer Support für Kfz-Schlüsseldienste in Deutschland, Österreich und Europa.'
          }
        />
      </Head>

      <Navigation />

      <main id="main-content" className="contact-page">
        <section className="contact-hero">
          <div className="carbon-container">
            <span className="hero-eyebrow">
              {isEn ? 'DIRECT COMMUNICATION' : 'DIREKTER KONTAKT'}
            </span>
            <h1 className="hero-title">
              {isEn
                ? 'Speak with a KEY24 automotive software engineer'
                : 'Sprechen Sie mit einem KEY24 Software- und Onboarding-Experten'}
            </h1>
            <p className="hero-lead">
              {isEn
                ? 'Have questions regarding your current telephony setup, custom vehicle pricing, or multi-van fleet dispatching? Reach out directly.'
                : 'Haben Sie Fragen zur Rufumleitung, individuellen Fahrzeug-Festpreisen oder Flotten-Disposition? Schreiben Sie uns oder rufen Sie an.'}
            </p>
          </div>
        </section>

        <section className="contact-body-section">
          <div className="carbon-container">
            <div className="contact-layout-grid">
              {/* Left Column: Direct Info */}
              <div className="contact-info-col">
                <div className="info-card">
                  <h3>{isEn ? 'Headquarters & Support' : 'Standort & Betreuung'}</h3>
                  <div className="info-item">
                    <Location size={20} className="info-icon" />
                    <div>
                      <strong>KEY24 Technologies Europe</strong>
                      <p>Mainzer Landstraße 180, 60327 Frankfurt am Main, Germany</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <Email size={20} className="info-icon" />
                    <div>
                      <strong>{isEn ? 'Inquiries & Support' : 'E-Mail & Support'}</strong>
                      <p><a href="mailto:kontakt@key24.ai">kontakt@key24.ai</a></p>
                    </div>
                  </div>

                  <div className="info-item">
                    <Phone size={20} className="info-icon" />
                    <div>
                      <strong>{isEn ? 'Phone Dispatch Testing' : 'Telefonische Erreichbarkeit'}</strong>
                      <p>+49 (0) 69 9451 8920 (Mo–Fr 08:00–18:00 CET)</p>
                    </div>
                  </div>
                </div>

                <div className="sla-card">
                  <span className="sla-tag">{isEn ? 'SUPPORT SLA' : 'SERVICE-VERSPRECHEN'}</span>
                  <p>
                    {isEn
                      ? 'Inquiries from practicing automotive locksmiths receive a technical response within 4 business hours.'
                      : 'Anfragen von praktizierenden Schlüsseldienst-Betrieben werden innerhalb von maximal 4 Geschäftsstunden beantwortet.'}
                  </p>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="contact-form-col">
                {submitted ? (
                  <div className="contact-success-card">
                    <div className="success-icon"><Checkmark size={32} /></div>
                    <h3>{isEn ? 'Message Delivered' : 'Nachricht erfolgreich gesendet'}</h3>
                    <p>
                      {isEn
                        ? 'Thank you for reaching out. A technician from our European team will follow up via email or phone shortly.'
                        : 'Vielen Dank für Ihre Nachricht. Unser Team meldet sich in Kürze bei Ihnen.'}
                    </p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                      <label htmlFor="contact-name" className="field-label">
                        {isEn ? 'Your Name *' : 'Ihr Name *'}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        className="field-input"
                        placeholder={isEn ? 'e.g. David Campbell' : 'z. B. Michael Weber'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-email" className="field-label">
                        {isEn ? 'Email Address *' : 'E-Mail-Adresse *'}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        className="field-input"
                        placeholder="name@locksmith.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-subject" className="field-label">
                        {isEn ? 'Subject *' : 'Betreff *'}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        className="field-input"
                        placeholder={isEn ? 'Telephony setup / Multi-van inquiry' : 'Frage zur Rufumleitung / Mehrwagen-Betrieb'}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-message" className="field-label">
                        {isEn ? 'Message *' : 'Ihre Nachricht *'}
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        className="field-textarea"
                        placeholder={isEn ? 'Describe your locksmith business and current workflow...' : 'Beschreiben Sie kurz Ihren Betrieb und Ihre Anforderungen...'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" disabled={loading} className="contact-submit-btn">
                      <span>{loading ? (isEn ? 'Sending...' : 'Wird gesendet...') : (isEn ? 'Send Message' : 'Nachricht senden')}</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .contact-hero {
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

        .contact-body-section {
          padding: 5.5rem 0;
          background-color: var(--cds-background);
        }

        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 3.5rem;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .info-card {
          background-color: #f4f4f4;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        :global(.info-icon) {
          color: var(--cds-interactive-01);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .info-item strong {
          display: block;
          font-size: 0.9375rem;
          margin-bottom: 0.2rem;
        }

        .info-item p {
          font-size: 0.875rem;
          color: var(--cds-text-secondary);
          line-height: 1.45;
        }

        .sla-card {
          background-color: #f4ede4;
          border-left: 3px solid var(--cds-interactive-01);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .sla-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--cds-interactive-01);
        }

        .sla-card p {
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--cds-text-primary);
        }

        .contact-form {
          background-color: #ffffff;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-size: 0.8125rem;
          font-weight: 600;
        }

        .field-input,
        .field-textarea {
          border: 1px solid var(--cds-border-subtle);
          padding: 0 0.85rem;
          font-size: 0.9375rem;
          font-family: inherit;
          height: 44px;
        }

        .field-textarea {
          height: auto;
          padding: 0.75rem 0.85rem;
          resize: vertical;
        }

        .field-input:focus,
        .field-textarea:focus {
          border-color: var(--cds-interactive-01);
          outline: none;
        }

        .contact-submit-btn {
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background-color: var(--cds-interactive-01);
          color: #ffffff;
          border: none;
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background-color var(--carbon-motion-duration-fast);
        }

        .contact-submit-btn:hover {
          background-color: var(--cds-interactive-01-hover);
        }

        .contact-success-card {
          background-color: #ffffff;
          border: 2px solid var(--cds-interactive-01);
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
        }

        .success-icon {
          color: #0e8a16;
          background: #defbe6;
          padding: 1rem;
          border-radius: 50%;
          display: inline-flex;
        }

        @media (max-width: 1024px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
