import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import { ArrowRight } from '@carbon/icons-react';

interface AnnouncementProps {
  tag: string;
  title: string;
  ctaLabel: string;
  href: string;
}

export const AnnouncementBanner: React.FC<AnnouncementProps> = ({
  tag,
  title,
  ctaLabel,
  href
}) => {
  return (
    <Key24LocalizedElement as="section" className="announcement-section" aria-label="Ankündigung">
      <Key24LocalizedElement as="div" className="carbon-container">
        <Key24LocalizedElement as="div" className="announcement-box">
          <Key24LocalizedElement as="div" className="announcement-content">
            <Key24LocalizedElement as="span" className="announcement-tag">{tag}</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="announcement-title">{title}</Key24LocalizedElement>
          </Key24LocalizedElement>
          <Key24LocalizedElement as="a" href={href} className="announcement-btn">
            <Key24LocalizedElement as="span">{ctaLabel}</Key24LocalizedElement>
            <ArrowRight size={18} className="card-arrow-icon" />
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx>{`
        .announcement-section {
          padding: 1.5rem 0;
          background-color: var(--cds-background);
        }

        .announcement-box {
          background-color: #edf5ff;
          border: 1px solid #d0e2ff;
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          transition: border-color var(--carbon-motion-duration-fast);
        }

        .announcement-box:hover {
          border-color: var(--cds-interactive-01);
        }

        .announcement-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .announcement-tag {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
        }

        .announcement-title {
          font-size: 0.9375rem;
          color: var(--cds-text-primary);
          line-height: 1.45;
          max-width: 840px;
        }

        .announcement-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 1.25rem;
          border: 1px solid var(--cds-interactive-01);
          color: var(--cds-interactive-01);
          background: transparent;
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          transition: background-color var(--carbon-motion-duration-fast),
                      color var(--carbon-motion-duration-fast);
        }

        .announcement-btn:hover {
          background-color: var(--cds-interactive-01);
          color: #ffffff;
        }

        .announcement-btn:hover :global(.card-arrow-icon) {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .announcement-box {
            flex-direction: column;
            align-items: flex-start;
          }

          .announcement-btn {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
