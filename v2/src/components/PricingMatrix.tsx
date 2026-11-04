import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Checkmark, Information } from '@carbon/icons-react';

interface PricingMatrixProps {
  isGerman?: boolean;
}

export const PricingMatrix: React.FC<PricingMatrixProps> = ({ isGerman = false }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      id: 'essential',
      name: isGerman ? 'Essential' : 'Essential',
      tagline: isGerman ? 'Für selbstständige Solo-Schlüsseldienste' : 'For solo mobile locksmiths',
      monthlyPrice: 399,
      annualPrice: 349,
      recommended: false,
      features: [
        isGerman ? 'KI-Sprachagent (bis 200 Anrufe/Monat)' : 'AI voice agent (up to 200 calls/mo)',
        isGerman ? '1 lokale dedizierte Rufnummer' : '1 dedicated local phone number',
        isGerman ? 'KEY24 CRM Solo-Board (1 Nutzer)' : 'KEY24 CRM solo board (1 user)',
        isGerman ? 'Bedingte Rufumleitung bei Besetzt' : 'Conditional call-forwarding when busy',
        isGerman ? 'Fahrzeug- & Schlüsseldaten-Erfassung' : 'Vehicle & key condition triage',
        isGerman ? 'E-Mail & Push-Alarmierung' : 'Instant push & email alerts'
      ]
    },
    {
      id: 'growth',
      name: isGerman ? 'Growth' : 'Growth',
      tagline: isGerman ? 'Für wachsende Betriebe mit 2–4 Einsatzfahrzeugen' : 'For growing teams with 2–4 mobile vans',
      monthlyPrice: 699,
      annualPrice: 599,
      recommended: true,
      features: [
        isGerman ? 'KI-Sprachagent (bis 500 Anrufe/Monat)' : 'AI voice agent (up to 500 calls/mo)',
        isGerman ? 'Multi-Van Disposition (bis 4 Techniker)' : 'Multi-van dispatching (up to 4 technicians)',
        isGerman ? 'DSGVO-konforme Notdienst-Disposition' : 'GDPR-compliant dispatch & customer alerts',
        isGerman ? 'Live GPS-Standort-Pin-Erfassung' : 'Instant live GPS pin collection',
        isGerman ? 'Individuelle Notdienst-Tariflogik' : 'Custom emergency tariff & night pricing',
        isGerman ? 'Prioritäts-Support & Onboarding-Audit' : 'Priority onboarding & dispatch audit'
      ]
    },
    {
      id: 'scale',
      name: isGerman ? 'Scale' : 'Scale',
      tagline: isGerman ? 'Für überregionale Flotten & Notdienstzentralen' : 'For regional fleets & 24/7 dispatch centres',
      monthlyPrice: 1249,
      annualPrice: 1049,
      recommended: false,
      features: [
        isGerman ? 'Unbegrenzte Anrufkapazität & Redundanz' : 'High-capacity voice intake & redundancy',
        isGerman ? 'Unbegrenzte Techniker- & CRM-Plätze' : 'Unlimited technician & CRM seats',
        isGerman ? 'Multi-Filialen & Regions-Routing' : 'Multi-branch & regional call-routing',
        isGerman ? 'ERP-, Buchhaltungs- & Telematik-API' : 'ERP, accounting & telematics API sync',
        isGerman ? 'Echtzeit-Telematik & ETA-Tracking' : 'Real-time vehicle telematics & ETA tracking',
        isGerman ? 'Dedizierter 24/7 Notfall-Support' : 'Dedicated 24/7 mission-critical support'
      ]
    }
  ];

  return (
    <Key24LocalizedElement as="div" className="pricing-matrix-wrapper">
      {/* Proposed Pricing Notice */}
      <Key24LocalizedElement as="div" className="pricing-policy-badge">
        <Information size={16} />
        <Key24LocalizedElement as="span">
          {isGerman
            ? 'Vorgeschlagene Monatstarife in EUR zzgl. USt. Leistungsumfang und Notdienst-Kontingente werden beim Onboarding vertraglich fixiert.'
            : 'Proposed monthly tiers in EUR plus applicable local taxes. Feature allowances and dispatch allocations are formalized during onboarding.'}
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      {/* Cards Grid */}
      <Key24LocalizedElement as="div" className="pricing-cards-grid">
        {plans.map((p) => {
          const price = billingCycle === 'annual' ? p.annualPrice : p.monthlyPrice;
          return (
            <Key24LocalizedElement as="div"
              key={p.id}
              className={`pricing-tier-card ${p.recommended ? 'is-recommended' : ''}`}
            >
              {p.recommended && (
                <Key24LocalizedElement as="div" className="recommended-badge">
                  {isGerman ? 'EMPFOHLENE KONFIGURATION' : 'RECOMMENDED CONFIGURATION'}
                </Key24LocalizedElement>
              )}

              <Key24LocalizedElement as="div" className="tier-header">
                <Key24LocalizedElement as="h3" className="tier-name">{p.name}</Key24LocalizedElement>
                <Key24LocalizedElement as="p" className="tier-tagline">{p.tagline}</Key24LocalizedElement>
              </Key24LocalizedElement>

              <Key24LocalizedElement as="div" className="tier-price-block">
                <Key24LocalizedElement as="div" className="price-row">
                  <Key24LocalizedElement as="span" className="currency-symbol">€</Key24LocalizedElement>
                  <Key24LocalizedElement as="span" className="price-amount">{price}</Key24LocalizedElement>
                  <Key24LocalizedElement as="span" className="price-period">/{isGerman ? 'Monat' : 'month'}</Key24LocalizedElement>
                </Key24LocalizedElement>
                <Key24LocalizedElement as="span" className="tax-notice">
                  {isGerman ? 'zzgl. gesetzlicher USt.' : 'plus applicable taxes'}
                </Key24LocalizedElement>
              </Key24LocalizedElement>

              <Key24LocalizedElement as="div" className="tier-cta">
                <Key24LocalizedLink
                  href={`/demo?plan=${p.id}`}
                  className={`tier-btn ${p.recommended ? 'tier-btn-primary' : 'tier-btn-outline'}`}
                >
                  <Key24LocalizedElement as="span">{isGerman ? 'Plan auswählen & Demo buchen' : 'Select plan & book demo'}</Key24LocalizedElement>
                  <ArrowRight size={18} />
                </Key24LocalizedLink>
              </Key24LocalizedElement>

              <Key24LocalizedElement as="div" className="tier-features">
                <Key24LocalizedElement as="span" className="features-title">
                  {isGerman ? 'ENTHALTENE LEISTUNGEN:' : 'INCLUDED CAPABILITIES:'}
                </Key24LocalizedElement>
                <Key24LocalizedElement as="ul" className="features-list">
                  {p.features.map((f, i) => (
                    <Key24LocalizedElement as="li" key={i} className="feature-item">
                      <Checkmark size={16} className="check-icon" />
                      <Key24LocalizedElement as="span">{f}</Key24LocalizedElement>
                    </Key24LocalizedElement>
                  ))}
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          );
        })}
      </Key24LocalizedElement>

      <style jsx global>{`
        .pricing-matrix-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .pricing-matrix-wrapper .pricing-policy-badge {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background-color: var(--cds-layer-accent);
          border-left: 3px solid var(--cds-interactive-01);
          padding: 0.85rem 1.25rem;
          font-size: 0.8125rem;
          color: var(--cds-text-secondary);
        }

        .pricing-matrix-wrapper .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .pricing-matrix-wrapper .pricing-tier-card {
          background-color: #ffffff;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          height: 100%;
          transition: transform var(--carbon-motion-duration-fast),
                      box-shadow var(--carbon-motion-duration-fast);
        }

        .pricing-matrix-wrapper .pricing-tier-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .pricing-matrix-wrapper .pricing-tier-card.is-recommended {
          border: 2px solid var(--cds-interactive-01);
          box-shadow: 0 4px 20px rgba(15, 98, 254, 0.08);
        }

        .pricing-matrix-wrapper .recommended-badge {
          position: absolute;
          top: -13px;
          left: 2rem;
          background-color: var(--cds-interactive-01);
          color: #ffffff;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.25rem 0.65rem;
        }

        .pricing-matrix-wrapper .tier-header {
          min-height: 4.75rem;
        }

        .pricing-matrix-wrapper .tier-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          margin-bottom: 0.25rem;
        }

        .pricing-matrix-wrapper .tier-tagline {
          font-size: 0.875rem;
          color: var(--cds-text-secondary);
          line-height: 1.4;
        }

        .pricing-matrix-wrapper .tier-price-block {
          display: flex;
          flex-direction: column;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--cds-border-subtle);
          min-height: 82px;
        }

        .pricing-matrix-wrapper .price-row {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
        }

        .pricing-matrix-wrapper .currency-symbol {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--cds-text-primary);
        }

        .pricing-matrix-wrapper .price-amount {
          font-size: 3rem;
          font-weight: 600;
          line-height: 1;
          color: var(--cds-text-primary);
          letter-spacing: -0.02em;
        }

        .pricing-matrix-wrapper .price-period {
          font-size: 0.9375rem;
          color: var(--cds-text-secondary);
        }

        .pricing-matrix-wrapper .tax-notice {
          font-size: 0.75rem;
          color: var(--cds-text-secondary);
          margin-top: 0.35rem;
        }

        .pricing-matrix-wrapper .tier-btn {
          width: 100%;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.25rem;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          transition: background-color var(--carbon-motion-duration-fast);
        }

        .pricing-matrix-wrapper .tier-btn-primary {
          background-color: var(--cds-interactive-01);
          color: #ffffff !important;
          border: 1px solid var(--cds-interactive-01);
        }

        .pricing-matrix-wrapper .tier-btn-primary:hover {
          background-color: var(--cds-interactive-01-hover);
        }

        .pricing-matrix-wrapper .tier-btn-outline {
          background-color: transparent;
          color: var(--cds-interactive-01) !important;
          border: 1px solid var(--cds-interactive-01);
        }

        .pricing-matrix-wrapper .tier-btn-outline:hover {
          background-color: var(--cds-interactive-01);
          color: #ffffff !important;
        }

        .pricing-matrix-wrapper .tier-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .pricing-matrix-wrapper .features-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--cds-text-secondary);
        }

        .pricing-matrix-wrapper .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pricing-matrix-wrapper .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--cds-text-primary);
          line-height: 1.4;
        }

        .pricing-matrix-wrapper .check-icon {
          color: var(--cds-interactive-01);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        @media (max-width: 1024px) {
          .pricing-matrix-wrapper .pricing-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
