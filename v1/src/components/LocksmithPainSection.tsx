import React from 'react';
import Image from 'next/image';
import { WarningAlt, CheckmarkOutline } from '@carbon/icons-react';

interface PainCard {
  situation: string;
  title: string;
  desc: string;
  effect: string;
  image?: string;
}

const DEFAULT_IMAGES = [
  { src: '/images/pain-lockout.jpg', alt: 'Schlüsseldienst-Techniker bei hochpräziser Türöffnung am Fahrzeug' },
  { src: '/images/pain-driving.jpg', alt: 'Fahrt im Einsatzfahrzeug zwischen Notöffnungs-Terminen' },
  { src: '/images/pain-night.jpg', alt: 'Fahrzeug-Notdienst bei Nacht und Wochenend-Einsätzen' }
];

interface LocksmithPainSectionProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  cards?: PainCard[];
}

export const LocksmithPainSection: React.FC<LocksmithPainSectionProps> = ({
  eyebrow = "THE REALITY OF ROADSIDE LOCKSMITHING",
  title = "Every unanswered ring is €150–€400 lost to a competitor",
  lead = "Vehicle lockouts are time-critical emergencies. If you let it ring to voicemail, drivers hang up and dial the next locksmith on Google in 10 seconds.",
  cards = [
    {
      situation: "Situation 01",
      title: "Hands full on-site",
      desc: "You're decoding a high-security lock cylinder under the rain. The phone rings. You either stop your work or lose a €280 emergency job.",
      effect: "With KEY24: The AI agent answers in your company voice, verifies all details, and slots it directly into your CRM board."
    },
    {
      situation: "Situation 02",
      title: "Driving between calls",
      desc: "Navigating highway traffic while trying to write down VIN numbers, car models, and postcodes on a piece of paper.",
      effect: "With KEY24: Clean job cards are created automatically with verified postal codes, GPS pins, and vehicle details."
    },
    {
      situation: "Situation 03",
      title: "Evening & weekend inquiries",
      desc: "Lockouts happen at 11 PM on Saturdays. Either sacrifice your family time answering pricing queries or miss premium out-of-hours revenue.",
      effect: "With KEY24: Configurable after-hours pricing rules, emergency call forwarding, and structured morning follow-ups."
    }
  ]
}) => {
  return (
    <section className="pain-section" aria-labelledby="pain-heading">
      <div className="carbon-container">
        <div className="pain-header">
          <span className="pain-eyebrow">{eyebrow}</span>
          <h2 id="pain-heading" className="pain-title">
            {title}
          </h2>
          <p className="pain-lead">{lead}</p>
        </div>

        <div className="pain-grid">
          {cards.map((c, i) => {
            const imgData = DEFAULT_IMAGES[i] || DEFAULT_IMAGES[0];
            return (
              <div key={i} className="carbon-card-interactive pain-card">
                <div className="pain-card-media">
                  <img
                    src={c.image || imgData.src}
                    alt={imgData.alt}
                    className="pain-img"
                    loading="lazy"
                  />
                  <div className="media-overlay-tag">
                    <span className="situation-tag">{c.situation}</span>
                  </div>
                </div>

                <div className="pain-card-body">
                  <div className="pain-card-meta">
                    <span className="pain-icon-wrap" aria-hidden="true">
                      <WarningAlt size={18} />
                    </span>
                    <span className="pain-status-text">Akute Herausforderung</span>
                  </div>

                  <h3 className="pain-card-title">{c.title}</h3>
                  <p className="pain-desc">{c.desc}</p>

                  <div className="pain-solution-box">
                    <div className="solution-indicator">
                      <CheckmarkOutline size={16} />
                      <span>KEY24 AUTOMATION</span>
                    </div>
                    <p className="solution-text">{c.effect}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .pain-section {
          padding: 5rem 0;
          background-color: #f4f4f4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .pain-header {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 800px;
        }

        .pain-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
        }

        .pain-title {
          font-size: clamp(1.875rem, 2.8vw + 0.8rem, 2.75rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cds-text-primary);
        }

        .pain-lead {
          font-size: 1.0625rem;
          color: var(--cds-text-secondary);
          line-height: 1.55;
        }

        .pain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .pain-card {
          display: flex;
          flex-direction: column;
          background-color: var(--cds-background);
          height: 100%;
          border: 1px solid var(--cds-border-subtle);
          overflow: hidden;
        }

        .pain-card-media {
          position: relative;
          width: 100%;
          height: 170px;
          background-color: #262626;
          overflow: hidden;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .pain-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.92) contrast(1.05);
          transition: transform var(--carbon-motion-duration-slow);
        }

        .pain-card:hover .pain-img {
          transform: scale(1.03);
        }

        .media-overlay-tag {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background-color: rgba(22, 22, 22, 0.85);
          backdrop-filter: blur(4px);
          padding: 0.25rem 0.65rem;
          border-left: 2px solid var(--cds-interactive-01);
        }

        .situation-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .pain-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .pain-card-meta {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.75rem;
        }

        .pain-icon-wrap {
          color: #da1e28;
          display: flex;
          align-items: center;
        }

        .pain-status-text {
          font-size: 0.75rem;
          font-weight: 600;
          color: #da1e28;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .pain-card-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          line-height: 1.3;
          margin-bottom: 0.65rem;
          min-height: 2.6rem;
        }

        .pain-desc {
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--cds-text-secondary);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .pain-solution-box {
          background-color: var(--cds-layer-accent);
          border-left: 3px solid var(--cds-interactive-01);
          padding: 1rem;
          margin-top: auto;
          min-height: 96px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .solution-indicator {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--cds-interactive-01);
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }

        .solution-text {
          font-size: 0.8125rem;
          color: var(--cds-text-primary);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .pain-grid {
            grid-template-columns: 1fr;
          }
          .pain-card-title {
            min-height: auto;
          }
          .pain-solution-box {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
};
