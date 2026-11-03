import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, Checkmark, WarningAlt } from '@carbon/icons-react';

interface DemoBookingFormProps {
  isGerman?: boolean;
}

export const DemoBookingForm: React.FC<DemoBookingFormProps> = ({ isGerman = false }) => {
  const router = useRouter();
  const isTr = router.locale?.startsWith('tr');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    callVolume: '10-25',
    country: isGerman ? 'DE' : 'GB',
    selectedPlan: 'growth',
    notes: '',
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (router.query.plan && typeof router.query.plan === 'string') {
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
    setErrorMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setResponseMessage(
          isGerman
            ? `Vielen Dank, ${formData.fullName}! Ihre Anfrage für den Plan „${formData.selectedPlan.toUpperCase()}“ wurde erfolgreich registriert. Unser technischer Onboarding-Spezialist kontaktiert Sie zur Einrichtung der Testnummer.`
            : `Thank you, ${formData.fullName}! Your demo request for the ${formData.selectedPlan.toUpperCase()} plan has been registered. An onboarding engineer will contact you shortly to configure your test forwarding line.`
        );
      } else {
        setErrorMessage(data.message || (isGerman ? 'Ein Fehler ist aufgetreten.' : isTr ? 'Bir hata oluştu.' : 'An error occurred.'));
      }
    } catch {
      setErrorMessage(
        isGerman
          ? 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.'
          : 'Network error. Please verify your connection.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success-card">
        <div className="success-icon-wrap">
          <Checkmark size={32} />
        </div>
        <h3 className="success-title">
          {isGerman ? 'Demo-Anfrage bestätigt' : isTr ? 'Demo talebi alındı' : 'Demo Request Confirmed'}
        </h3>
        <p className="success-message">{responseMessage}</p>
        <button
          type="button"
          className="reset-btn"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              companyName: '',
              workEmail: '',
              phone: '',
              callVolume: '10-25',
              country: isGerman ? 'DE' : 'GB',
              selectedPlan: 'growth',
              notes: '',
              honeypot: ''
            });
          }}
        >
          {isGerman ? 'Weitere Anfrage senden' : isTr ? 'Yeni talep oluştur' : 'Submit another inquiry'}
        </button>

        <style jsx>{`
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
          .success-icon-wrap {
            color: #0e8a16;
            background: #defbe6;
            padding: 1rem;
            border-radius: 50%;
            display: inline-flex;
          }
          .success-title {
            font-size: 1.75rem;
            font-weight: 600;
            color: var(--cds-text-primary);
          }
          .success-message {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--cds-text-secondary);
            max-width: 560px;
          }
          .reset-btn {
            margin-top: 1rem;
            background: transparent;
            border: 1px solid var(--cds-border-subtle);
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
            cursor: pointer;
            color: var(--cds-text-primary);
          }
        `}</style>
      </div>
    );
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field for bot protection */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMessage && (
        <div className="form-error-alert" role="alert">
          <WarningAlt size={20} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="fullName" className="field-label">
            {isGerman ? 'Vor- & Nachname *' : isTr ? 'Ad soyad *' : 'Full Name *'}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="field-input"
            placeholder={isGerman ? 'z. B. Michael Weber' : isTr ? 'Örn. Mehmet Yılmaz' : 'e.g. David Campbell'}
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="companyName" className="field-label">
            {isGerman ? 'Betrieb / Firmenname *' : isTr ? 'İşletme / şirket adı *' : 'Business / Company Name *'}
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            className="field-input"
            placeholder={isGerman ? 'z. B. Weber Auto-Schlüsseldienst' : isTr ? 'Örn. Yılmaz Oto Anahtar' : 'e.g. Apex Auto Locksmiths'}
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-field">
          <label htmlFor="workEmail" className="field-label">
            {isGerman ? 'Geschäftliche E-Mail-Adresse *' : isTr ? 'İş e-posta adresi *' : 'Business Email Address *'}
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            className="field-input"
            placeholder="info@locksmith-business.com"
            value={formData.workEmail}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone" className="field-label">
            {isGerman ? 'Mobilnummer (für Live-Anruf-Test) *' : isTr ? 'Demo araması için telefon numarası *' : 'Mobile Number (for live call test) *'}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="field-input"
            placeholder="+49 170 1234567"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-grid-3">
        <div className="form-field">
          <label htmlFor="callVolume" className="field-label">
            {isGerman ? 'Tägliche Notöffnungs-Anrufe' : isTr ? 'Günlük çağrı sayısı' : 'Daily Lockout Call Volume'}
          </label>
          <select
            id="callVolume"
            name="callVolume"
            className="field-select"
            value={formData.callVolume}
            onChange={handleChange}
          >
            <option value="1-5">1 – 5 calls / day</option>
            <option value="5-15">5 – 15 calls / day</option>
            <option value="15-30">15 – 30 calls / day</option>
            <option value="30+">30+ calls (Fleet / Central)</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="country" className="field-label">
            {isGerman ? 'Einsatzland' : isTr ? 'Hizmet verilen ülke' : 'Operating Country'}
          </label>
          <select
            id="country"
            name="country"
            className="field-select"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="DE">Germany (Deutschland)</option>
            <option value="GB">United Kingdom (UK)</option>
            <option value="AT">Austria (Österreich)</option>
            <option value="CH">Switzerland (Schweiz)</option>
            <option value="NL">Netherlands (Nederland)</option>
            <option value="BE">Belgium (Belgique / België)</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="selectedPlan" className="field-label">
            {isGerman ? 'Gewünschter Tarif' : isTr ? 'İlgilendiğiniz paket' : 'Preferred Tier'}
          </label>
          <select
            id="selectedPlan"
            name="selectedPlan"
            className="field-select"
            value={formData.selectedPlan}
            onChange={handleChange}
          >
            <option value="essential">Essential (€399/mo)</option>
            <option value="growth">Growth (€699/mo) — Recommended</option>
            <option value="scale">Scale (€1,249/mo)</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="notes" className="field-label">
          {isGerman ? 'Besondere Fahrzeugtypen oder Software-Wünsche' : isTr ? 'Araç türleri, kullanılan yazılımlar ve özel talepler' : 'Vehicle Types, Current Software or Specific Requirements'}
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="field-textarea"
          placeholder={isGerman ? 'z. B. Wir nutzen Lishi, Autel IM608 und haben 2 Transporter...' : isTr ? 'Örn. İki servis aracımız var, Autel IM608 kullanıyoruz...' : 'e.g. We use Autel IM608, Smart Pro and run 3 vans in Birmingham...'}
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <div className="form-submit-row">
        <button type="submit" disabled={loading} className="submit-btn">
          <span>
            {loading
              ? (isGerman ? 'Wird übermittelt...' : isTr ? 'Talebiniz gönderiliyor...' : 'Submitting request...')
              : (isGerman ? '15-Minuten Live-Demo anfordern' : isTr ? '15 dakikalık demo araması talep et' : 'Request 15-Minute Live Demo')}
          </span>
          <ArrowRight size={20} />
        </button>
        <span className="privacy-reassurance">
          {isGerman ? 'Keine Weitergabe an Dritte. Vollständig DSGVO-konform. Kein unangekündigter Spam.' : isTr ? 'Bilgileriniz demo talebiniz hakkında iletişim kurmak için kullanılır.' : 'No third-party sharing. Strictly GDPR-compliant. No unsolicited sales calls.'}
        </span>
      </div>

      <style jsx>{`
        .demo-form {
          background-color: #ffffff;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-error-alert {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #fff1f1;
          border-left: 3px solid #da1e28;
          padding: 0.75rem 1rem;
          color: #da1e28;
          font-size: 0.875rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .form-field {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--cds-text-primary);
        }

        .field-input,
        .field-select,
        .field-textarea {
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

        .field-textarea {
          height: auto;
          padding: 0.75rem 0.85rem;
          resize: vertical;
        }

        .field-input:focus,
        .field-select:focus,
        .field-textarea:focus {
          border-color: var(--cds-interactive-01);
          outline: none;
        }

        .form-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-top: 0.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--cds-border-subtle);
        }

        .submit-btn {
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

        .submit-btn:hover:not(:disabled) {
          background-color: var(--cds-interactive-01-hover);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .privacy-reassurance {
          font-size: 0.75rem;
          color: var(--cds-text-secondary);
        }

        @media (max-width: 768px) {
          .demo-form { padding: 20px; min-width: 0; }
          .form-grid-2,
          .form-grid-3 {
            grid-template-columns: 1fr;
          }

          .form-submit-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .submit-btn {
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
    </form>
  );
};
