import React from 'react';
import Link from 'next/link';
import { ArrowRight } from '@carbon/icons-react';

interface HandoverBannerProps {
  isGerman?: boolean;
}

export const HandoverBanner: React.FC<HandoverBannerProps> = ({ isGerman = true }) => {
  return (
    <section className="handover-banner-section" aria-label="Handover Banner">
      <div className="carbon-container">
        <div className="handover-chassis">
          {/* Left Metadata & Headline */}
          <div className="handover-content">
            <span className="handover-eyebrow">KEY24 / NEXT</span>
            <h2 className="handover-headline">
              {isGerman
                ? 'Eine bessere Auftragsübergabe beginnt mit einem Gespräch.'
                : 'A better handover starts with a conversation.'}
            </h2>
            <p className="handover-sub">
              {isGerman
                ? 'Erfahren Sie, wie Anrufannahme, Fahrzeugdaten und Kunden-Follow-ups in Ihren Betriebsalltag passen.'
                : 'Explore how calls, customer details and follow-up could fit your business.'}
            </p>
            <div className="handover-cta-wrap">
              <Link href="/demo" className="handover-btn">
                <span>{isGerman ? 'KEY24 entdecken' : 'Explore KEY24'}</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Geometric Blue IBM/AXIOM Blocks Motif */}
          <div className="handover-graphic" aria-hidden="true">
            <div className="mosaic-grid">
              <div className="mosaic-block block-dark-blue"></div>
              <div className="mosaic-block block-bright-blue"></div>
              <div className="mosaic-block block-light-blue"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .handover-banner-section {
          padding: 3rem 0;
          background-color: var(--cds-background);
        }

        .handover-chassis {
          background-color: #12141a;
          color: #ffffff;
          padding: 3.5rem 3.5rem;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
          position: relative;
          overflow: hidden;
          border: 1px solid #232734;
        }

        .handover-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 680px;
        }

        .handover-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #a8a8a8;
        }

        .handover-headline {
          font-size: clamp(1.85rem, 3vw + 0.5rem, 2.75rem);
          font-weight: 300;
          line-height: 1.2;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .handover-sub {
          font-size: 1rem;
          line-height: 1.55;
          color: #c6c6c6;
        }

        .handover-cta-wrap {
          margin-top: 0.5rem;
        }

        :global(.handover-btn) {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background-color: #0f62fe;
          color: #ffffff !important;
          padding: 0.85rem 1.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          transition: background-color var(--carbon-motion-duration-fast);
        }

        :global(.handover-btn:hover) {
          background-color: #0353e9;
        }

        /* Geometric Blue Blocks */
        .handover-graphic {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: 2rem;
        }

        .mosaic-grid {
          position: relative;
          width: 140px;
          height: 180px;
        }

        .mosaic-block {
          position: absolute;
          width: 50px;
          height: 65px;
        }

        .block-dark-blue {
          top: 0;
          right: 0;
          background-color: #0f62fe;
        }

        .block-bright-blue {
          top: 55px;
          left: 15px;
          background-color: #0043ce;
        }

        .block-light-blue {
          bottom: 0;
          right: 0;
          background-color: #78a9ff;
        }

        @media (max-width: 820px) {
          .handover-chassis {
            grid-template-columns: 1fr;
            padding: 2.5rem 1.75rem;
          }
          .handover-graphic {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
