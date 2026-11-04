import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import {
  ArrowRight,
  Code,
  Enterprise,
  DataConnected,
  DataBase,
  Security,
  Devices,
  Money,
  UserMultiple,
  Launch
} from '@carbon/icons-react';

interface SolutionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  href: string;
}

interface SolutionsSectionProps {
  sectionId: string;
  eyebrow: string;
  title: string;
  lead: string;
  ctaLink: {
    label: string;
    href: string;
  };
  items: SolutionItem[];
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  sectionId,
  eyebrow,
  title,
  lead,
  ctaLink,
  items
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={28} />;
      case 'Enterprise':
        return <Enterprise size={28} />;
      case 'DataConnected':
        return <DataConnected size={28} />;
      case 'DataBase':
        return <DataBase size={28} />;
      case 'Security':
        return <Security size={28} />;
      case 'Devices':
        return <Devices size={28} />;
      case 'Money':
        return <Money size={28} />;
      case 'UserMultiple':
        return <UserMultiple size={28} />;
      default:
        return <Enterprise size={28} />;
    }
  };

  return (
    <Key24LocalizedElement as="section" id={sectionId} className="solutions-section" aria-labelledby="solutions-heading">
      <Key24LocalizedElement as="div" className="carbon-container">
        {/* 2-Column Section Header */}
        <Key24LocalizedElement as="div" className="solutions-header-grid">
          <Key24LocalizedElement as="div">
            <Key24LocalizedElement as="span" className="solutions-eyebrow">{eyebrow}</Key24LocalizedElement>
            <Key24LocalizedElement as="h2" id="solutions-heading" className="solutions-title">
              {title}
            </Key24LocalizedElement>
          </Key24LocalizedElement>
          <Key24LocalizedElement as="div" className="solutions-header-lead">
            <Key24LocalizedElement as="p">{lead}</Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* 4x2 Solution Cards Grid */}
        <Key24LocalizedElement as="div" className="solutions-grid">
          {items.map((item, idx) => (
            <Key24LocalizedElement as="a"
              key={item.id}
              href={item.href}
              className="carbon-card-interactive solution-card"
              aria-label={`${item.category}: ${item.title}`}
            >
              <Key24LocalizedElement as="div" className="solution-content">
                <Key24LocalizedElement as="span" className="solution-category">{item.category}</Key24LocalizedElement>
                <Key24LocalizedElement as="h3" className="solution-title">{item.title}</Key24LocalizedElement>
                <Key24LocalizedElement as="p" className="solution-desc">{item.description}</Key24LocalizedElement>
              </Key24LocalizedElement>

              <Key24LocalizedElement as="div" className="solution-card-bottom">
                <Key24LocalizedElement as="div" className="solution-icon-wrap" aria-hidden="true">
                  {getIcon(item.icon)}
                </Key24LocalizedElement>
                <Key24LocalizedElement as="div" className="solution-cta-indicator">
                  {idx % 3 === 0 ? (
                    <Launch size={20} className="card-arrow-icon" />
                  ) : (
                    <ArrowRight size={20} className="card-arrow-icon" />
                  )}
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          ))}
        </Key24LocalizedElement>

        {/* Bottom Catalog Link */}
        <Key24LocalizedElement as="div" className="solutions-bottom-action">
          <Key24LocalizedElement as="a" href={ctaLink.href} className="catalog-link">
            <Key24LocalizedElement as="span">{ctaLink.label}</Key24LocalizedElement>
            <ArrowRight size={20} className="card-arrow-icon" />
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx>{`
        .solutions-section {
          padding: 5rem 0;
          background-color: #f4f4f4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .solutions-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
          align-items: flex-end;
        }

        .solutions-eyebrow {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.5rem;
        }

        .solutions-title {
          font-size: clamp(2rem, 3vw + 0.8rem, 2.875rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cds-text-primary);
        }

        .solutions-header-lead {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          align-items: stretch;
        }

        .solution-card {
          padding: 1.75rem;
          height: 100%;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: var(--cds-background);
        }

        .solution-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .solution-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--cds-interactive-01);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .solution-title {
          font-size: 1.0625rem;
          font-weight: 600;
          line-height: 1.35;
          color: var(--cds-text-primary);
        }

        .solution-desc {
          font-size: 0.8125rem;
          line-height: 1.5;
          color: var(--cds-text-secondary);
          margin-top: 0.25rem;
        }

        .solution-card-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 1.5rem;
          padding-top: 1rem;
        }

        .solution-icon-wrap {
          color: var(--cds-text-primary);
        }

        .solution-cta-indicator {
          color: var(--cds-interactive-01);
          display: flex;
          align-items: center;
        }

        .solutions-bottom-action {
          margin-top: 2.5rem;
          display: flex;
          justify-content: flex-start;
        }

        .catalog-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          color: var(--cds-interactive-01);
          transition: gap var(--carbon-motion-duration-fast);
        }

        .catalog-link:hover :global(.card-arrow-icon) {
          transform: translateX(4px);
        }

        @media (max-width: 1200px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .solutions-header-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 640px) {
          .solutions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
