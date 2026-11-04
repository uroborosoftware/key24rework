import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Checkmark, Email, Location, Phone } from '@carbon/icons-react';
import { demoLanguage } from '@/data/demo-languages';
import requestFeedback from '@/data/request-feedback.json';

export default function ContactPage() {
  const router = useRouter();
  const isEn = (router.locale || 'de-DE').startsWith('en');
  const feedback=requestFeedback[demoLanguage(router.locale)];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deliveryMode,setDeliveryMode]=useState('local_saved');
  const [errorCode,setErrorCode]=useState<''|'invalid'|'error'>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorCode('');
    try{
      const response=await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
        kind:'contact',locale:router.locale || 'en-GB',fullName:formData.name,workEmail:formData.email,subject:formData.subject,notes:formData.message
      })});
      const result=await response.json();
      if(!response.ok || !result.success || typeof result.leadId!=='string'){setErrorCode(response.status===400?'invalid':'error');return;}
      setDeliveryMode(result.mode);setSubmitted(true);
    }catch(error){console.error('Contact request failed:',error instanceof Error?error.message:'Unknown error');setErrorCode('error');}finally{setLoading(false);}
  };

  return (
    <>
      <Key24LocalizedHead>
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
      </Key24LocalizedHead>

      <Navigation />

      <Key24LocalizedElement as="main" id="main-content" className="contact-page">
        <Key24LocalizedElement as="section" className="contact-hero">
          <Key24LocalizedElement as="div" className="carbon-container">
            <Key24LocalizedElement as="span" className="hero-eyebrow">
              {isEn ? 'DIRECT COMMUNICATION' : 'DIREKTER KONTAKT'}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="h1" className="hero-title">
              {isEn
                ? 'Speak with a KEY24 automotive software engineer'
                : 'Sprechen Sie mit einem KEY24 Software- und Onboarding-Experten'}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="hero-lead">
              {isEn
                ? 'Have questions regarding your current telephony setup, custom vehicle pricing, or multi-van fleet dispatching? Reach out directly.'
                : 'Haben Sie Fragen zur Rufumleitung, individuellen Fahrzeug-Festpreisen oder Flotten-Disposition? Schreiben Sie uns oder rufen Sie an.'}
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        <Key24LocalizedElement as="section" className="contact-body-section">
          <Key24LocalizedElement as="div" className="carbon-container">
            <Key24LocalizedElement as="div" className="contact-layout-grid">
              {/* Left Column: Direct Info */}
              <Key24LocalizedElement as="div" className="contact-info-col">
                <Key24LocalizedElement as="div" className="info-card">
                  <Key24LocalizedElement as="h3">{isEn ? 'Headquarters & Support' : 'Standort & Betreuung'}</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="info-item">
                    <Location size={20} className="info-icon" />
                    <Key24LocalizedElement as="div">
                      <Key24LocalizedElement as="strong">KEY24 Technologies Europe</Key24LocalizedElement>
                      <Key24LocalizedElement as="p">Mainzer Landstraße 180, 60327 Frankfurt am Main, Germany</Key24LocalizedElement>
                    </Key24LocalizedElement>
                  </Key24LocalizedElement>

                  <Key24LocalizedElement as="div" className="info-item">
                    <Email size={20} className="info-icon" />
                    <Key24LocalizedElement as="div">
                      <Key24LocalizedElement as="strong">{isEn ? 'Inquiries & Support' : 'E-Mail & Support'}</Key24LocalizedElement>
                      <Key24LocalizedElement as="p"><Key24LocalizedElement as="a" href="mailto:kontakt@key24.ai">kontakt@key24.ai</Key24LocalizedElement></Key24LocalizedElement>
                    </Key24LocalizedElement>
                  </Key24LocalizedElement>

                  <Key24LocalizedElement as="div" className="info-item">
                    <Phone size={20} className="info-icon" />
                    <Key24LocalizedElement as="div">
                      <Key24LocalizedElement as="strong">{isEn ? 'Phone Dispatch Testing' : 'Telefonische Erreichbarkeit'}</Key24LocalizedElement>
                      <Key24LocalizedElement as="p">+49 (0) 69 9451 8920 (Mo–Fr 08:00–18:00 CET)</Key24LocalizedElement>
                    </Key24LocalizedElement>
                  </Key24LocalizedElement>
                </Key24LocalizedElement>

                <Key24LocalizedElement as="div" className="sla-card">
                  <Key24LocalizedElement as="span" className="sla-tag">{isEn ? 'SUPPORT SLA' : 'SERVICE-VERSPRECHEN'}</Key24LocalizedElement>
                  <Key24LocalizedElement as="p">
                    {isEn
                      ? 'Inquiries from practicing automotive locksmiths receive a technical response within 4 business hours.'
                      : 'Anfragen von praktizierenden Schlüsseldienst-Betrieben werden innerhalb von maximal 4 Geschäftsstunden beantwortet.'}
                  </Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>

              {/* Right Column: Contact Form */}
              <Key24LocalizedElement as="div" className="contact-form-col">
                {submitted ? (
                  <Key24LocalizedElement as="div" className="contact-success-card">
                    <Key24LocalizedElement as="div" className="success-icon"><Checkmark size={32} /></Key24LocalizedElement>
                    <Key24LocalizedElement as="h3">{feedback.title}</Key24LocalizedElement>
                    <Key24LocalizedElement as="p">
                      {deliveryMode==='crm_live'?feedback.delivered:deliveryMode==='crm_queued'?feedback.queued:feedback.local}
                    </Key24LocalizedElement>
                  </Key24LocalizedElement>
                ) : (
                  <Key24LocalizedElement as="form" className="contact-form" onSubmit={handleSubmit}>
                    {errorCode&&<p role="alert" style={{color:'#a2191f'}}>{errorCode==='invalid'?feedback.invalid:feedback.error}</p>}
                    <Key24LocalizedElement as="div" className="form-field">
                      <Key24LocalizedElement as="label" htmlFor="contact-name" className="field-label">
                        {isEn ? 'Your Name *' : 'Ihr Name *'}
                      </Key24LocalizedElement>
                      <Key24LocalizedElement as="input"
                        id="contact-name"
                        type="text"
                        minLength={2}
                        maxLength={160}
                        required
                        className="field-input"
                        placeholder={isEn ? 'e.g. David Campbell' : 'z. B. Michael Weber'}
                        value={formData.name}
                        onChange={(e) => setFormData(previous => ({ ...previous, name: e.target.value }))}
                      />
                    </Key24LocalizedElement>

                    <Key24LocalizedElement as="div" className="form-field">
                      <Key24LocalizedElement as="label" htmlFor="contact-email" className="field-label">
                        {isEn ? 'Email Address *' : 'E-Mail-Adresse *'}
                      </Key24LocalizedElement>
                      <Key24LocalizedElement as="input"
                        id="contact-email"
                        type="email"
                        required
                        className="field-input"
                        placeholder="name@locksmith.com"
                        value={formData.email}
                        onChange={(e) => setFormData(previous => ({ ...previous, email: e.target.value }))}
                      />
                    </Key24LocalizedElement>

                    <Key24LocalizedElement as="div" className="form-field">
                      <Key24LocalizedElement as="label" htmlFor="contact-subject" className="field-label">
                        {isEn ? 'Subject *' : 'Betreff *'}
                      </Key24LocalizedElement>
                      <Key24LocalizedElement as="input"
                        id="contact-subject"
                        type="text"
                        minLength={2}
                        maxLength={200}
                        required
                        className="field-input"
                        placeholder={isEn ? 'Telephony setup / Multi-van inquiry' : 'Frage zur Rufumleitung / Mehrwagen-Betrieb'}
                        value={formData.subject}
                        onChange={(e) => setFormData(previous => ({ ...previous, subject: e.target.value }))}
                      />
                    </Key24LocalizedElement>

                    <Key24LocalizedElement as="div" className="form-field">
                      <Key24LocalizedElement as="label" htmlFor="contact-message" className="field-label">
                        {isEn ? 'Message *' : 'Ihre Nachricht *'}
                      </Key24LocalizedElement>
                      <Key24LocalizedElement as="textarea"
                        id="contact-message"
                        rows={5}
                        minLength={5}
                        maxLength={5000}
                        required
                        className="field-textarea"
                        placeholder={isEn ? 'Describe your locksmith business and current workflow...' : 'Beschreiben Sie kurz Ihren Betrieb und Ihre Anforderungen...'}
                        value={formData.message}
                        onChange={(e) => setFormData(previous => ({ ...previous, message: e.target.value }))}
                      />
                    </Key24LocalizedElement>

                    <Key24LocalizedElement as="button" type="submit" disabled={loading} className="contact-submit-btn">
                      <Key24LocalizedElement as="span">{loading ? (isEn ? 'Sending...' : 'Wird gesendet...') : (isEn ? 'Send Message' : 'Nachricht senden')}</Key24LocalizedElement>
                      <ArrowRight size={18} />
                    </Key24LocalizedElement>
                  </Key24LocalizedElement>
                )}
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <Footer />

      <style jsx global>{`
        .contact-page .contact-hero {
          padding: 5rem 0 4rem;
          background: #f4ede4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .contact-page .hero-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.75rem;
        }

        .contact-page .hero-title {
          font-size: clamp(2.25rem, 3.5vw + 1rem, 3.5rem);
          font-weight: 600;
          line-height: 1.15;
          color: var(--cds-text-primary);
          max-width: 860px;
          margin-bottom: 1.25rem;
        }

        .contact-page .hero-lead {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
          max-width: 740px;
        }

        .contact-page .contact-body-section {
          padding: 5.5rem 0;
          background-color: var(--cds-background);
        }

        .contact-page .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 3.5rem;
        }

        .contact-page .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .contact-page .contact-layout-grid > * { min-width: 0; }

        .contact-page .info-card {
          background-color: #f4f4f4;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-page .info-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .contact-page .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .contact-page .info-icon {
          color: var(--cds-interactive-01);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .contact-page .info-item strong {
          display: block;
          font-size: 0.9375rem;
          margin-bottom: 0.2rem;
        }

        .contact-page .info-item p {
          font-size: 0.875rem;
          color: var(--cds-text-secondary);
          line-height: 1.45;
        }

        .contact-page .sla-card {
          background-color: #f4ede4;
          border-left: 3px solid var(--cds-interactive-01);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-page .sla-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--cds-interactive-01);
        }

        .contact-page .sla-card p {
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--cds-text-primary);
        }

        .contact-page .contact-form {
          background-color: #ffffff;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-page .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .contact-page .field-label {
          font-size: 0.8125rem;
          font-weight: 600;
        }

        .contact-page .field-input,
        .contact-page .field-textarea {
          border: 1px solid var(--cds-border-subtle);
          padding: 0 0.85rem;
          font-size: 0.9375rem;
          font-family: inherit;
          height: 44px;
        }

        .contact-page .field-textarea {
          height: auto;
          padding: 0.75rem 0.85rem;
          resize: vertical;
        }

        .contact-page .field-input:focus,
        .contact-page .field-textarea:focus {
          border-color: var(--cds-interactive-01);
          outline: none;
        }

        .contact-page .contact-submit-btn {
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

        .contact-page .contact-submit-btn:hover {
          background-color: var(--cds-interactive-01-hover);
        }

        .contact-page .contact-success-card {
          background-color: #ffffff;
          border: 2px solid var(--cds-interactive-01);
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
        }

        .contact-page .success-icon {
          color: #0e8a16;
          background: #defbe6;
          padding: 1rem;
          border-radius: 50%;
          display: inline-flex;
        }

        @media (max-width: 1024px) {
          .contact-page .contact-layout-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }

