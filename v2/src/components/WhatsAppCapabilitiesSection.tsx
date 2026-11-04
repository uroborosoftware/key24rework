import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import { Time, Calendar, Security, ArrowRight } from '@carbon/icons-react';

interface WhatsAppCapabilitiesSectionProps {
  isGerman?: boolean;
}

export const WhatsAppCapabilitiesSection: React.FC<WhatsAppCapabilitiesSectionProps> = ({ isGerman = true }) => {
  const capabilities = isGerman
    ? [
        {
          id: 'intake',
          tag: 'ERSTANNAHME & QUALIFIZIERUNG',
          title: 'Notfall-Erfassung innerhalb von Sekunden',
          desc: 'Nimmt Fahrzeugdaten, genauen Standort und Schlüsselstatus sofort auf. Kein Besetztzeichen, keine verpassten Aufträge während Sie am Schloss arbeiten.',
          details: [
            'Automatischer Abgleich von Marke, Modell und Baujahr',
            'Präzise Standortabfrage per Live-GPS-Pin',
            'Klare Unterscheidung: Schlüssel im Auto vs. Schlüssel verloren'
          ]
        },
        {
          id: 'dispatch',
          tag: 'DISPOSITION & KALENDER',
          title: 'Termine & Notdienste direkt verknüpft',
          desc: 'Der Assistent gleicht freie Kapazitäten Ihrer Servicewagen in Echtzeit ab und reserviert verbindliche Ankunftsfenster für den Kunden.',
          details: [
            'Direkte Zuweisung an das zuständige Einsatzfahrzeug',
            'Automatische Bestätigung mit Techniker-Name & Kennzeichen',
            'Reduziert Rückfragen und Suchen auf Parkplätzen'
          ]
        },
        {
          id: 'compliance',
          tag: 'DSGVO & TRANSPARENZ',
          title: 'Rechtssicher und betriebsspezifisch',
          desc: 'Antwortet nach Ihren individuellen Notdienst-Tarifen und fest hinterlegten Geschäftsregeln – vollständig DSGVO- und datenschutzkonform.',
          details: [
            'Einholung der Einwilligung vor Standortübermittlung',
            'Klare Festpreis-Nennung ohne unseriöse Überraschungen',
            'Automatischer Belegversand nach Auftragsabschluss'
          ]
        }
      ]
    : [
        {
          id: 'intake',
          tag: 'INSTANT INTAKE & TRIAGE',
          title: 'Emergency triage within seconds',
          desc: 'Captures vehicle make, exact roadside coordinates, and key condition instantly. Zero busy signals, zero missed jobs while you are picking.',
          details: [
            'Automated extraction of make, model, and year',
            'Precise GPS location pin verification',
            'Distinguishes locked inside vs all keys lost'
          ]
        },
        {
          id: 'dispatch',
          tag: 'DISPATCH & SCHEDULING',
          title: 'Directly linked to van availability',
          desc: 'The assistant checks open capacity across your fleet in real time and schedules binding arrival windows for stranded drivers.',
          details: [
            'Direct routing to nearest available technician van',
            'Arrival confirmation with vehicle license plate',
            'Eliminates lost-driver search calls'
          ]
        },
        {
          id: 'compliance',
          tag: 'GDPR & TRANSPARENT PRICING',
          title: 'Legally compliant & business-aligned',
          desc: 'Responds strictly according to your defined price lists and dispatch rules — 100% compliant with European privacy regulations.',
          details: [
            'Consent captured prior to location pin transfer',
            'Transparent emergency rates with no hidden fees',
            'Instant digital receipt delivery upon completion'
          ]
        }
      ];

  return (
    <Key24LocalizedElement as="section" className="wa-section" aria-labelledby="wa-heading">
      <Key24LocalizedElement as="div" className="carbon-container">
        {/* Section Header */}
        <Key24LocalizedElement as="div" className="wa-header">
          <Key24LocalizedElement as="span" className="wa-eyebrow">
            {isGerman ? 'AUTOMATISIERTER KUNDEN-DIALOG' : 'BENEFITS AND CAPABILITIES'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="h2" id="wa-heading" className="wa-title">
            {isGerman
              ? 'Verlässliche Kundenbetreuung ohne Personalkosten'
              : 'Handles customer communication just like an experienced employee'}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="p" className="wa-lead">
            {isGerman
              ? 'Spezialisiert auf die Anforderungen des mobilen Kfz-Schlüsseldienstes: Sachlich, schnell und absolut transparent für den Autofahrer.'
              : 'Engineered specifically for automotive roadside assistance: direct, structured, and completely reliable.'}
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* 3 Balanced Enterprise Cards */}
        <Key24LocalizedElement as="div" className="wa-cards-grid">
          {capabilities.map((c) => (
            <Key24LocalizedElement as="div" key={c.id} className="carbon-card-interactive wa-clean-card">
              <Key24LocalizedElement as="div" className="card-top">
                <Key24LocalizedElement as="span" className="card-tag">{c.tag}</Key24LocalizedElement>
                <Key24LocalizedElement as="h3" className="card-title">{c.title}</Key24LocalizedElement>
                <Key24LocalizedElement as="p" className="card-desc">{c.desc}</Key24LocalizedElement>
              </Key24LocalizedElement>

              <Key24LocalizedElement as="div" className="card-checklist">
                <Key24LocalizedElement as="span" className="checklist-heading">
                  {isGerman ? 'LEISTUNGSMERKMALE' : 'KEY CAPABILITIES'}
                </Key24LocalizedElement>
                <Key24LocalizedElement as="ul" className="details-list">
                  {c.details.map((item, idx) => (
                    <Key24LocalizedElement as="li" key={idx} className="details-item">
                      <Key24LocalizedElement as="span" className="bullet-dash">—</Key24LocalizedElement>
                      <Key24LocalizedElement as="span">{item}</Key24LocalizedElement>
                    </Key24LocalizedElement>
                  ))}
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          ))}
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx>{`
        .wa-section {
          padding: 5rem 0;
          background-color: #f4f4f4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .wa-header {
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-width: 820px;
        }

        .wa-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
        }

        .wa-title {
          font-size: clamp(2rem, 3.2vw + 0.8rem, 2.75rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cds-text-primary);
        }

        .wa-lead {
          font-size: 1.0625rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
        }

        .wa-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          align-items: stretch;
        }

        .wa-clean-card {
          background-color: #ffffff;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .card-top {
          display: flex;
          flex-direction: column;
        }

        .card-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          margin-bottom: 0.75rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.35;
          color: var(--cds-text-primary);
          margin-bottom: 0.85rem;
          min-height: 3.4rem;
        }

        .card-desc {
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--cds-text-secondary);
          margin-bottom: 2rem;
        }

        .card-checklist {
          border-top: 1px solid var(--cds-border-subtle);
          padding-top: 1.25rem;
          margin-top: auto;
        }

        .checklist-heading {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--cds-text-secondary);
          display: block;
          margin-bottom: 0.75rem;
        }

        .details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .details-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.8125rem;
          line-height: 1.45;
          color: var(--cds-text-primary);
        }

        .bullet-dash {
          color: var(--cds-interactive-01);
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .wa-cards-grid {
            grid-template-columns: 1fr;
          }
          .card-title {
            min-height: auto;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
