import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, Checkmark, WarningAlt } from '@carbon/icons-react';
import { demoLanguage } from '@/data/demo-languages';
import requestFeedback from '@/data/request-feedback.json';

interface DemoBookingFormProps {
  isGerman?: boolean;
}

export const DemoBookingForm: React.FC<DemoBookingFormProps> = ({ isGerman = false }) => {
  const router = useRouter();
  const isTr = router.locale?.startsWith('tr');
  const feedback=requestFeedback[demoLanguage(router.locale)];
  const defaultCountry={en:'GB',de:'DE',tr:'TR',fi:'FI',nl:'NL',no:'NO',sv:'SE',ar:'SA'}[demoLanguage(router.locale)];
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    callVolume: '1-5',
    country: defaultCountry,
    selectedPlan: 'growth',
    notes: '',
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryMode,setDeliveryMode]=useState('local_saved');
  const [errorCode,setErrorCode]=useState<''|'invalid'|'error'>('');
  const errorMessage=errorCode?feedback[errorCode]:'';
  const responseMessage=deliveryMode==='crm_live'?feedback.delivered:deliveryMode==='crm_queued'?feedback.queued:feedback.local;

  useEffect(() => {
    if (typeof router.query.plan === 'string' && ['essential','growth','scale'].includes(router.query.plan)) {
      setFormData((prev) => ({ ...prev, selectedPlan: router.query.plan as string }));
    }
  }, [router.query.plan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorCode('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...formData,kind:'demo',locale:router.locale || 'en-GB'})
      });

      const data = await res.json();

      if (res.ok && data.success && typeof data.leadId==='string') {
        setSubmitted(true);
        setDeliveryMode(data.mode);
      } else {
        setErrorCode(res.status===400?'invalid':'error');
      }
    } catch {
      setErrorCode('error');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Key24LocalizedElement as="div" className="form-success-card">
        <Key24LocalizedElement as="div" className="success-icon-wrap">
          <Checkmark size={32} />
        </Key24LocalizedElement>
        <Key24LocalizedElement as="h3" className="success-title">
          {feedback.title}
        </Key24LocalizedElement>
        <Key24LocalizedElement as="p" className="success-message">{responseMessage}</Key24LocalizedElement>
        <Key24LocalizedElement as="button"
          type="button"
          className="reset-btn"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              companyName: '',
              workEmail: '',
              phone: '',
              callVolume: '1-5',
              country: defaultCountry,
              selectedPlan: 'growth',
              notes: '',
              honeypot: ''
            });
          }}
        >
          {isGerman ? 'Weitere Anfrage senden' : isTr ? 'Yeni talep oluştur' : 'Submit another inquiry'}
        </Key24LocalizedElement>

        <style jsx global>{`
          .form-success-card {
            background-color: #ffffff;
            border: 2px solid var(--cds-interactive-01);
            padding: 3rem 2.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.25rem;
          }
          .form-success-card .success-icon-wrap {
            color: #0e8a16;
            background: #defbe6;
            padding: 1rem;
            border-radius: 50%;
            display: inline-flex;
          }
          .form-success-card .success-title {
            font-size: 1.75rem;
            font-weight: 600;
            color: var(--cds-text-primary);
          }
          .form-success-card .success-message {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--cds-text-secondary);
            max-width: 560px;
          }
          .form-success-card .reset-btn {
            margin-top: 1rem;
            background: transparent;
            border: 1px solid var(--cds-border-subtle);
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
            cursor: pointer;
            color: var(--cds-text-primary);
          }
        `}</style>
      </Key24LocalizedElement>
    );
  }

  return (
    <Key24LocalizedElement as="form" className="demo-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field for bot protection */}
      <Key24LocalizedElement as="input"
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMessage && (
        <Key24LocalizedElement as="div" className="form-error-alert" role="alert">
          <WarningAlt size={20} />
          <Key24LocalizedElement as="span">{errorMessage}</Key24LocalizedElement>
        </Key24LocalizedElement>
      )}

      <Key24LocalizedElement as="div" className="form-grid-2">
        <Key24LocalizedElement as="div" className="form-field">
          <Key24LocalizedElement as="label" htmlFor="fullName" className="field-label">
            {isGerman ? 'Vor- & Nachname *' : isTr ? 'Ad soyad *' : 'Full Name *'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="input"
            id="fullName"
            name="fullName"
            type="text"
            required
            className="field-input"
            placeholder={isGerman ? 'z. B. Michael Weber' : isTr ? 'Örn. Mehmet Yılmaz' : 'e.g. David Campbell'}
            value={formData.fullName}
            onChange={handleChange}
          />
        </Key24LocalizedElement>

        <Key24LocalizedElement as="div" className="form-field">
          <Key24LocalizedElement as="label" htmlFor="companyName" className="field-label">
            {isGerman ? 'Betrieb / Firmenname *' : isTr ? 'İşletme / şirket adı *' : 'Business / Company Name *'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="input"
            id="companyName"
            name="companyName"
            type="text"
            required
            className="field-input"
            placeholder={isGerman ? 'z. B. Weber Auto-Schlüsseldienst' : isTr ? 'Örn. Yılmaz Oto Anahtar' : 'e.g. Apex Auto Locksmiths'}
            value={formData.companyName}
            onChange={handleChange}
          />
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <Key24LocalizedElement as="div" className="form-grid-2">
        <Key24LocalizedElement as="div" className="form-field">
          <Key24LocalizedElement as="label" htmlFor="workEmail" className="field-label">
            {isGerman ? 'Geschäftliche E-Mail-Adresse *' : isTr ? 'İş e-posta adresi *' : 'Business Email Address *'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="input"
            id="workEmail"
            name="workEmail"
            type="email"
            required
            className="field-input"
            placeholder="info@locksmith-business.com"
            value={formData.workEmail}
            onChange={handleChange}
          />
        </Key24LocalizedElement>

        <Key24LocalizedElement as="div" className="form-field">
          <Key24LocalizedElement as="label" htmlFor="phone" className="field-label">
            {isGerman ? 'Mobilnummer (für Live-Anruf-Test) *' : isTr ? 'Demo araması için telefon numarası *' : 'Mobile Number (for live call test) *'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="input"
            id="phone"
            name="phone"
            type="tel"
            required
            className="field-input"
            placeholder="+49 170 1234567"
            value={formData.phone}
            onChange={handleChange}
          />
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <Key24LocalizedElement as="div" className="form-grid-3">
        <Key24LocalizedElement as="div" className="form-field">
          <Key24LocalizedElement as="label" htmlFor="callVolume" className="field-label">
            {isGerman ? 'Tägliche Notöffnungs-Anrufe' : isTr ? 'Günlük çağrı sayısı' : 'Daily Lockout Call Volume'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="select"
            id="callVolume"
            name="callVolume"
            className="field-select"
            value={formData.callVolume}
            onChange={handleChange}
          >
            <Key24LocalizedElement as="option" value="1-5">1 – 5 calls / day</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="5-15">5 – 15 calls / day</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="15-30">15 – 30 calls / day</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="30+">30+ calls (Fleet / Central)</Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        <Key24LocalizedElement as="div" className="form-field">
          <Key24LocalizedElement as="label" htmlFor="country" className="field-label">
            {isGerman ? 'Einsatzland' : isTr ? 'Hizmet verilen ülke' : 'Operating Country'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="select"
            id="country"
            name="country"
            className="field-select"
            value={formData.country}
            onChange={handleChange}
          >
            <Key24LocalizedElement as="option" value="DE">Germany (Deutschland)</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="GB">United Kingdom (UK)</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="AT">Austria (Österreich)</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="CH">Switzerland (Schweiz)</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="NL">Netherlands (Nederland)</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="BE">Belgium (Belgique / België)</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="TR">Turkey</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="NO">Norway</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="SE">Sweden</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="FI">Finland</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="SA">Saudi Arabia</Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        <Key24LocalizedElement as="div" className="form-field">
          <Key24LocalizedElement as="label" htmlFor="selectedPlan" className="field-label">
            {isGerman ? 'Gewünschter Tarif' : isTr ? 'İlgilendiğiniz paket' : 'Preferred Tier'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="select"
            id="selectedPlan"
            name="selectedPlan"
            className="field-select"
            value={formData.selectedPlan}
            onChange={handleChange}
          >
            <Key24LocalizedElement as="option" value="essential">Essential (€399/mo)</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="growth">Growth (€699/mo) — Recommended</Key24LocalizedElement>
            <Key24LocalizedElement as="option" value="scale">Scale (€1,249/mo)</Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <Key24LocalizedElement as="div" className="form-field">
        <Key24LocalizedElement as="label" htmlFor="notes" className="field-label">
          {isGerman ? 'Besondere Fahrzeugtypen oder Software-Wünsche' : isTr ? 'Araç türleri, kullanılan yazılımlar ve özel talepler' : 'Vehicle Types, Current Software or Specific Requirements'}
        </Key24LocalizedElement>
        <Key24LocalizedElement as="textarea"
          id="notes"
          name="notes"
          rows={3}
          className="field-textarea"
          placeholder={isGerman ? 'z. B. Wir nutzen Lishi, Autel IM608 und haben 2 Transporter...' : isTr ? 'Örn. İki servis aracımız var, Autel IM608 kullanıyoruz...' : 'e.g. We use Autel IM608, Smart Pro and run 3 vans in Birmingham...'}
          value={formData.notes}
          onChange={handleChange}
        />
      </Key24LocalizedElement>

      <Key24LocalizedElement as="div" className="form-submit-row">
        <Key24LocalizedElement as="button" type="submit" disabled={loading} className="submit-btn">
          <Key24LocalizedElement as="span">
            {loading
              ? (isGerman ? 'Wird übermittelt...' : isTr ? 'Talebiniz gönderiliyor...' : 'Submitting request...')
              : (isGerman ? '15-Minuten Live-Demo anfordern' : isTr ? '15 dakikalık demo araması talep et' : 'Request 15-Minute Live Demo')}
          </Key24LocalizedElement>
          <ArrowRight size={20} />
        </Key24LocalizedElement>
        <Key24LocalizedElement as="span" className="privacy-reassurance">
          {isGerman ? 'Keine Weitergabe an Dritte. Vollständig DSGVO-konform. Kein unangekündigter Spam.' : isTr ? 'Bilgileriniz demo talebiniz hakkında iletişim kurmak için kullanılır.' : 'No third-party sharing. Strictly GDPR-compliant. No unsolicited sales calls.'}
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx global>{`
        .demo-form {
          background-color: #ffffff;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .demo-form .form-error-alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #fff1f1;
          border-left: 3px solid #da1e28;
          padding: 0.75rem 1rem;
          color: #da1e28;
          font-size: 0.875rem;
        }

        .demo-form .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .demo-form .form-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .demo-form .form-field {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .demo-form .field-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--cds-text-primary);
        }

        .demo-form .field-input,
        .demo-form .field-select,
        .demo-form .field-textarea {
          width: 100%;
          min-width: 0;
          height: 44px;
          border: 1px solid var(--cds-border-subtle);
          padding: 0 0.85rem;
          font-size: 0.9375rem;
          font-family: inherit;
          color: var(--cds-text-primary);
          background-color: #ffffff;
          transition: border-color var(--carbon-motion-duration-fast);
        }

        .demo-form .field-textarea {
          height: auto;
          padding: 0.75rem 0.85rem;
          resize: vertical;
        }

        .demo-form .field-input:focus,
        .demo-form .field-select:focus,
        .demo-form .field-textarea:focus {
          border-color: var(--cds-interactive-01);
          outline: none;
        }

        .demo-form .form-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-top: 0.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--cds-border-subtle);
        }

        .demo-form .submit-btn {
          height: 48px;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 0 1.5rem;
          background-color: var(--cds-interactive-01);
          color: #ffffff;
          border: 1px solid var(--cds-interactive-01);
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color var(--carbon-motion-duration-fast);
        }

        .demo-form .submit-btn:hover:not(:disabled) {
          background-color: var(--cds-interactive-01-hover);
        }

        .demo-form .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .demo-form .privacy-reassurance {
          font-size: 0.75rem;
          color: var(--cds-text-secondary);
        }

        @media (max-width: 768px) {
          .demo-form { padding: 20px; min-width: 0; }
          .demo-form .form-grid-2,
          .demo-form .form-grid-3 {
            grid-template-columns: 1fr;
          }

          .demo-form .form-submit-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .demo-form .submit-btn {
            width: 100%;
            white-space: normal;
            height: auto;
            min-height: 48px;
            padding: 12px;
            text-align: start;
            justify-content: space-between;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};

