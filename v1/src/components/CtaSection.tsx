import React from 'react';
import Link from 'next/link';
import { ArrowRight, Checkmark } from '@carbon/icons-react';

interface CtaProps {
  sectionId?: string;
  title?: string;
  copy?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  badges?: string[];
  locale?: string;
}

export const CtaSection: React.FC<CtaProps> = ({ locale = 'en' }) => {
  return (
    <section id="cta" className="cta-section" aria-label="Call to Action">
      <div className="cta-container">
        <div className="cta-card">
          <div className="cta-badge">
            <span className="cta-sparkle">⚡</span>
            <span>GET STARTED IN 24 HOURS</span>
          </div>

          <h2 className="cta-title">
            Stop Leaking €250 Lockout Calls to Local Competitors.
          </h2>

          <p className="cta-copy">
            Book a 15-minute live interactive demonstration. We'll simulate a live emergency lockout call directly to your personal mobile phone so you can hear KEY24 in action.
          </p>

          <div className="cta-actions">
            <Link href="/demo" className="btn-cta-white">
              <span>Book 15-Minute Live Demo</span>
              <ArrowRight size={18} />
            </Link>
            <a href="#roi-calculator" className="btn-cta-ghost">
              <span>Calculate Your Lost Revenue ↓</span>
            </a>
          </div>

          <div className="cta-badges">
            <span className="badge-item">
              <Checkmark size={16} />
              Zero Missed Calls
            </span>
            <span className="badge-item">
              <Checkmark size={16} />
              100% GDPR Compliant
            </span>
            <span className="badge-item">
              <Checkmark size={16} />
              24-Hour Express Onboarding
            </span>
            <span className="badge-item">
              <Checkmark size={16} />
              No Hardware Required
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          padding: 5.5rem 1.5rem;
          background: #ffffff;
        }

        .cta-container {
          max-width: 1080px;
          margin: 0 auto;
        }

        .cta-card {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #4f46e5 100%);
          border-radius: 32px;
          padding: 4.5rem 3rem;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 25px 60px -15px rgba(37, 99, 235, 0.45);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #93c5fd;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.4rem 0.9rem;
          border-radius: 9999px;
          margin-bottom: 1.5rem;
        }

        .cta-sparkle {
          font-size: 0.85rem;
        }

        .cta-title {
          font-size: clamp(2.2rem, 3.5vw + 1rem, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.15;
          max-width: 800px;
          margin: 0 0 1.25rem 0;
          color: #ffffff;
        }

        .cta-copy {
          font-size: clamp(1.05rem, 1.2vw + 0.8rem, 1.25rem);
          line-height: 1.6;
          color: #dbeafe;
          max-width: 680px;
          margin: 0 0 2.5rem 0;
        }

        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 2.75rem;
        }

        .btn-cta-white {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: #ffffff;
          color: #1e3a8a;
          font-size: 1.05rem;
          font-weight: 800;
          padding: 1rem 2rem;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .btn-cta-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .btn-cta-ghost {
          display: inline-flex;
          align-items: center;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 1rem 1.75rem;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
          text-decoration: none;
          transition: background 0.15s ease;
        }

        .btn-cta-ghost:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        .cta-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.75rem;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 2rem;
          width: 100%;
        }

        .badge-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          color: #dbeafe;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .cta-card {
            padding: 3rem 1.5rem;
            border-radius: 24px;
          }
          .cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn-cta-white,
          .btn-cta-ghost {
            width: 100%;
            justify-content: center;
          }
          .cta-badges {
            gap: 1rem;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
