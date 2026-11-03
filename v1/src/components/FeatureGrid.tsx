import React from 'react';
import {
  ArrowRight,
  DataEnrichment,
  Finance,
  ChartLineData,
  CloudApp
} from '@carbon/icons-react';

interface FeatureCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface FeatureGridProps {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: FeatureCard[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  sectionId,
  eyebrow,
  title,
  description,
  cards
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DataEnrichment':
        return <DataEnrichment size={32} className="card-pictogram" />;
      case 'Finance':
        return <Finance size={32} className="card-pictogram" />;
      case 'ChartLineData':
        return <ChartLineData size={32} className="card-pictogram" />;
      case 'CloudApp':
        return <CloudApp size={32} className="card-pictogram" />;
      default:
        return <CloudApp size={32} className="card-pictogram" />;
    }
  };

  return (
    <section id={sectionId} className="feature-section" aria-labelledby="featured-heading">
      <div className="carbon-container">
        <div className="section-header">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 id="featured-heading" className="section-title">
            {title}
          </h2>
          <p className="section-lead">{description}</p>
        </div>

        <div className="feature-grid">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="carbon-card-interactive feature-card"
              aria-label={`${card.tag}: ${card.title}`}
            >
              <div className="card-visual-header">
                <div className="card-icon-wrap">{getIcon(card.icon)}</div>
                <span className="card-tag">{card.tag}</span>
              </div>

              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>
              </div>

              <div className="card-footer">
                <span className="card-footer-cta">Mehr erfahren</span>
                <ArrowRight size={20} className="card-arrow-icon" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-section {
          padding: 4.5rem 0;
          background-color: var(--cds-background);
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .section-header {
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .section-eyebrow {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
        }

        .section-title {
          font-size: clamp(1.75rem, 2.5vw + 0.8rem, 2.5rem);
          font-weight: 300;
          letter-spacing: -0.015em;
          color: var(--cds-text-primary);
        }

        .section-lead {
          font-size: 1.0625rem;
          color: var(--cds-text-secondary);
          max-width: 640px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .feature-card {
          padding: 1.5rem;
          height: 100%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-visual-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .card-icon-wrap {
          color: var(--cds-interactive-01);
          background-color: var(--cds-layer-accent);
          padding: 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .card-tag {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--cds-text-secondary);
          background-color: var(--cds-layer-01);
          padding: 0.25rem 0.5rem;
        }

        .card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.35;
          color: var(--cds-text-primary);
        }

        .card-desc {
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--cds-text-secondary);
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--cds-border-subtle);
          color: var(--cds-interactive-01);
        }

        .card-footer-cta {
          font-size: 0.8125rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
