import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import { ArrowRight, CheckmarkOutline, Information } from '@carbon/icons-react';
import proofData from '@/data/customer-proof.json';

interface CustomerProofMasonryProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  showAll?: boolean;
}

export const CustomerProofMasonry: React.FC<CustomerProofMasonryProps> = ({
  eyebrow = "FIELD EVIDENCE & OPERATIONAL BENCHMARKS",
  title = "Real-world reliability under roadside conditions",
  lead = "How independent automotive locksmiths and fleet dispatchers eliminate missed emergency lockouts.",
  showAll = true
}) => {
  return (
    <Key24LocalizedElement as="section" className="proof-section" aria-labelledby="proof-section-heading">
      <Key24LocalizedElement as="div" className="carbon-container">
        <Key24LocalizedElement as="div" className="proof-header">
          <Key24LocalizedElement as="span" className="proof-eyebrow">{eyebrow}</Key24LocalizedElement>
          <Key24LocalizedElement as="h2" id="proof-section-heading" className="proof-title">
            {title}
          </Key24LocalizedElement>
          <Key24LocalizedElement as="p" className="proof-lead">{lead}</Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* Asymmetric 3-Column Editorial Masonry (Screenshot B Inspiration) */}
        <Key24LocalizedElement as="div" className="proof-masonry-grid">
          {proofData.items.map((item) => {
            const isBlack = item.type === 'featured_black_card';
            return (
              <Key24LocalizedElement as="div"
                key={item.id}
                className={`proof-card ${isBlack ? 'card-black-spotlight' : 'card-white-editorial'}`}
              >
                <Key24LocalizedElement as="div" className="proof-card-top">
                  <Key24LocalizedElement as="span" className="proof-category-badge">{item.category}</Key24LocalizedElement>
                  {item.attribution.isVerifiedClient ? (
                    <Key24LocalizedElement as="span" className="verified-badge">
                      <CheckmarkOutline size={14} /> Verified Client
                    </Key24LocalizedElement>
                  ) : (
                    <Key24LocalizedElement as="span" className="verified-badge demo-badge">
                      <Information size={14} /> Field Benchmark
                    </Key24LocalizedElement>
                  )}
                </Key24LocalizedElement>

                {isBlack && item.highlightMetric && (
                  <Key24LocalizedElement as="div" className="metric-callout">
                    <Key24LocalizedElement as="span" className="metric-number">{item.highlightMetric}</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="metric-label">{item.metricLabel}</Key24LocalizedElement>
                    {item.denominator && (
                      <Key24LocalizedElement as="span" className="metric-denominator">{item.denominator}</Key24LocalizedElement>
                    )}
                  </Key24LocalizedElement>
                )}

                {isBlack && (
                  <Key24LocalizedElement as="div" className="spotlight-media-wrap">
                    <Key24LocalizedElement as="img"
                      src="/images/locksmith-dispatch.jpg"
                      alt="Kfz-Schlüsseldienst Einsatzfahrzeug bei Notdienst-Disposition"
                      className="spotlight-img"
                      loading="lazy"
                    />
                  </Key24LocalizedElement>
                )}

                <Key24LocalizedElement as="h3" className="proof-card-title">{item.title}</Key24LocalizedElement>
                <Key24LocalizedElement as="blockquote" className="proof-quote">
                  “{item.quote}”
                </Key24LocalizedElement>

                <Key24LocalizedElement as="div" className="proof-attribution">
                  <Key24LocalizedElement as="div" className="attribution-info">
                    <Key24LocalizedElement as="strong" className="attribution-name">{item.attribution.label}</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="attribution-meta">
                      {item.attribution.role} • {item.attribution.location}
                    </Key24LocalizedElement>
                  </Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            );
          })}
        </Key24LocalizedElement>

        {/* Verification Policy Disclaimer */}
        <Key24LocalizedElement as="div" className="proof-policy-notice">
          <Information size={16} />
          <Key24LocalizedElement as="span">
            {proofData.gate_notice}
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx>{`
        .proof-section {
          padding: 5.5rem 0;
          background-color: var(--cds-background);
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .proof-header {
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-width: 820px;
        }

        .proof-eyebrow {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
        }

        .proof-title {
          font-size: clamp(2rem, 3.2vw + 0.8rem, 2.875rem);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cds-text-primary);
        }

        .proof-lead {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
        }

        /* 3-Column Masonry Grid */
        .proof-masonry-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .proof-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--cds-border-subtle);
          height: 100%;
          transition: transform var(--carbon-motion-duration-fast),
                      box-shadow var(--carbon-motion-duration-fast);
        }

        .proof-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .card-white-editorial {
          background-color: #ffffff;
          min-height: 310px;
        }

        .card-black-spotlight {
          background-color: #161616;
          color: #ffffff;
          border-color: #262626;
          grid-row: span 2;
          height: 100%;
          min-height: 100%;
        }

        .spotlight-media-wrap {
          margin-bottom: 1.25rem;
          height: 135px;
          overflow: hidden;
          border: 1px solid #333333;
          background-color: #000000;
        }

        .spotlight-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.85) contrast(1.1);
          display: block;
        }

        .proof-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .proof-category-badge {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
        }

        .card-black-spotlight .proof-category-badge {
          color: #e9c96b;
        }

        .verified-badge {
          font-size: 0.75rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.2rem 0.5rem;
          border: 1px solid #dfcedf;
          color: var(--cds-interactive-01);
          background-color: #f4ede4;
        }

        .demo-badge {
          border-color: #e0e0e0;
          color: #525252;
          background-color: #f4f4f4;
        }

        .card-black-spotlight .demo-badge {
          background-color: #262626;
          border-color: #393939;
          color: #c6c6c6;
        }

        .metric-callout {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #333333;
        }

        .metric-number {
          font-size: 3.5rem;
          font-weight: 600;
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .metric-label {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #e0e0e0;
          margin-top: 0.5rem;
        }

        .metric-denominator {
          font-size: 0.75rem;
          color: #8d8d8d;
          margin-top: 0.25rem;
          font-style: italic;
        }

        .proof-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.35;
          margin-bottom: 1rem;
        }

        .card-white-editorial .proof-card-title {
          color: var(--cds-text-primary);
        }

        .card-black-spotlight .proof-card-title {
          color: #ffffff;
        }

        .proof-quote {
          font-size: 0.9375rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-style: normal;
          flex: 1;
        }

        .card-white-editorial .proof-quote {
          color: var(--cds-text-secondary);
        }

        .card-black-spotlight .proof-quote {
          color: #c6c6c6;
        }

        .proof-attribution {
          padding-top: 1.25rem;
          border-top: 1px solid var(--cds-border-subtle);
          margin-top: auto;
        }

        .card-black-spotlight .proof-attribution {
          border-top-color: #333333;
        }

        .attribution-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .attribution-name {
          font-size: 0.875rem;
          font-weight: 600;
        }

        .card-white-editorial .attribution-name {
          color: var(--cds-text-primary);
        }

        .card-black-spotlight .attribution-name {
          color: #ffffff;
        }

        .attribution-meta {
          font-size: 0.75rem;
          color: var(--cds-text-secondary);
        }

        .card-black-spotlight .attribution-meta {
          color: #8d8d8d;
        }

        .proof-policy-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2.5rem;
          font-size: 0.8125rem;
          color: var(--cds-text-secondary);
          background-color: var(--cds-layer-01);
          padding: 0.85rem 1.25rem;
          border-left: 3px solid var(--cds-interactive-01);
        }

        @media (max-width: 1024px) {
          .proof-masonry-grid {
            grid-template-columns: 1fr;
          }

          .card-black-spotlight {
            grid-row: auto;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
