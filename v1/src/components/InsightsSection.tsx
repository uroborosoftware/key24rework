import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from '@carbon/icons-react';

interface InsightCard {
  id: string;
  badge: string;
  title: string;
  summary: string;
  readTime: string;
  href: string;
}

interface InsightsSectionProps {
  sectionId: string;
  eyebrow: string;
  title: string;
  lead: string;
  cards: InsightCard[];
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  sectionId,
  eyebrow,
  title,
  lead,
  cards
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = cards.length;

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  return (
    <section id={sectionId} className="insights-section" aria-labelledby="insights-heading">
      <div className="carbon-container">
        <div className="insights-header">
          <div>
            <span className="insights-eyebrow">{eyebrow}</span>
            <h2 id="insights-heading" className="insights-title">
              {title}
            </h2>
            <p className="insights-lead">{lead}</p>
          </div>

          {/* Carousel controls */}
          <div className="carousel-controls" aria-label="Karussell-Navigation">
            <button
              type="button"
              className="carousel-btn"
              onClick={handlePrev}
              aria-label="Vorherige Studie anzeigen"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="carousel-page-indicator" aria-live="polite">
              {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              className="carousel-btn"
              onClick={handleNext}
              aria-label="Nächste Studie anzeigen"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="insights-grid">
          {cards.map((card, idx) => (
            <a
              key={card.id}
              href={card.href}
              className={`carbon-card-interactive insight-card ${
                idx + 1 === currentPage ? 'is-highlighted' : ''
              }`}
              aria-label={`${card.badge}: ${card.title}`}
            >
              <div className="insight-card-top">
                <span className="insight-badge">{card.badge}</span>
                <span className="insight-meta">{card.readTime}</span>
              </div>

              <div className="insight-body">
                <h3 className="insight-card-title">{card.title}</h3>
                <p className="insight-summary">{card.summary}</p>
              </div>

              <div className="insight-card-footer">
                <span className="insight-cta-text">Beitrag öffnen</span>
                <ArrowRight size={20} className="card-arrow-icon" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .insights-section {
          padding: 5rem 0;
          background-color: var(--cds-background);
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .insights-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .insights-eyebrow {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.5rem;
        }

        .insights-title {
          font-size: clamp(1.875rem, 2.8vw + 0.8rem, 2.75rem);
          font-weight: 300;
          letter-spacing: -0.015em;
          color: var(--cds-text-primary);
        }

        .insights-lead {
          font-size: 1.0625rem;
          color: var(--cds-text-secondary);
          margin-top: 0.5rem;
          max-width: 680px;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--cds-layer-01);
          padding: 0.25rem 0.5rem;
          border: 1px solid var(--cds-border-subtle);
        }

        .carousel-btn {
          width: 36px;
          height: 36px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--cds-text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--carbon-motion-duration-fast);
        }

        .carousel-btn:hover {
          background-color: var(--cds-border-subtle);
        }

        .carousel-page-indicator {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--cds-text-secondary);
          padding: 0 0.5rem;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .insight-card {
          padding: 1.75rem;
          min-height: 280px;
          justify-content: space-between;
          background-color: var(--cds-layer-01);
          border-left: 3px solid transparent;
        }

        .insight-card.is-highlighted {
          border-left-color: var(--cds-interactive-01);
          background-color: var(--cds-background);
        }

        .insight-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .insight-badge {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background-color: var(--cds-interactive-01);
          color: #ffffff;
          padding: 0.2rem 0.5rem;
        }

        .insight-meta {
          font-size: 0.75rem;
          color: var(--cds-text-secondary);
        }

        .insight-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .insight-card-title {
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.35;
          color: var(--cds-text-primary);
        }

        .insight-summary {
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--cds-text-secondary);
        }

        .insight-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--cds-border-subtle);
          color: var(--cds-interactive-01);
          margin-top: 1rem;
        }

        .insight-cta-text {
          font-size: 0.8125rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .insights-grid {
            grid-template-columns: 1fr;
          }

          .insights-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
