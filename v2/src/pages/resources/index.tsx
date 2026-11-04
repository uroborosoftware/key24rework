import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Book, Calculator, Time } from '@carbon/icons-react';

export const ARTICLES = [
  {
    slug: 'calculating-lost-lockout-revenue',
    category: 'Business Economics',
    readTime: '6 min read',
    title: 'How to Calculate the Real Cost of Unanswered Lockout Calls',
    excerpt: 'Most locksmiths believe they only miss 1 or 2 calls a week. Our call logging telemetry reveals that mobile operators miss up to 28% of incoming demand while working with both hands.',
    image: '/images/resource-revenue.jpg',
    imageAlt: 'Umsatzkalkulation und Rentabilitätsanalyse für Kfz-Notdienste'
  },
  {
    slug: 'lishi-picking-telephony-protocols',
    category: 'Field Operations',
    readTime: '8 min read',
    title: 'Non-Destructive Entry Protocols: Why Phone Distractions Cause Lock Damage',
    excerpt: 'Detailed operational breakdown of how picking high-security automotive locks requires sustained focus, and why answering mid-pick leads to damaged wafers or slipped tension tools.',
    image: '/images/resource-tools.jpg',
    imageAlt: 'Präzisionswerkzeuge und Dekodierer für schadenfreie Fahrzeugöffnung'
  },
  {
    slug: 'gdpr-whatsapp-locksmith-compliance',
    category: 'Legal & Compliance',
    readTime: '5 min read',
    title: 'GDPR & WhatsApp Business Guidelines for Emergency Services in the UK & EU',
    excerpt: 'A practical legal guide on securing caller consent over the phone before triggering location pin requests and automated dispatch confirmations.',
    image: '/images/resource-mobile.jpg',
    imageAlt: 'DSGVO-konforme WhatsApp-Kommunikation und Standortübermittlung'
  }
];

export default function ResourcesIndexPage() {
  const router = useRouter();
  const isEn = (router.locale || 'de-DE').startsWith('en');

  return (
    <>
      <Key24LocalizedHead>
        <title>
          {isEn
            ? 'KEY24 Locksmith Resources & Field Guides | Operations & Tech'
            : 'KEY24 Fachwissen & Leitfäden | Praxiswissen für Kfz-Schlüsseldienste'}
        </title>
        <meta
          name="description"
          content={
            isEn
              ? 'Operational guides, revenue calculators, and technical research for practicing automotive locksmiths.'
              : 'Praxis-Leitfäden, Umsatz-Kalkulatoren und Fachartikel für selbstständige Kfz-Schlüsseldienste.'
          }
        />
      </Key24LocalizedHead>

      <Navigation />

      <Key24LocalizedElement as="main" id="main-content" className="resources-page">
        <Key24LocalizedElement as="section" className="resources-hero">
          <Key24LocalizedElement as="div" className="carbon-container">
            <Key24LocalizedElement as="span" className="hero-eyebrow">
              {isEn ? 'PRACTICAL KNOWLEDGE FOR PROFESSIONAL LOCKSMITHS' : 'PRAXISWISSEN FÜR PROFIS'}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="h1" className="hero-title">
              {isEn
                ? 'Field research, business benchmarks, and operational guides'
                : 'Fachartikel, Betriebs-Benchmarks und rechtliche Leitfäden'}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="hero-lead">
              {isEn
                ? 'No generic marketing filler. Practical analyses written specifically for mobile auto locksmiths navigating high-security vehicles and roadside emergencies.'
                : 'Fundierte Fachbeiträge und Kalkulationen speziell für mobile Kfz-Schlüsseldienste im Notdienst-Einsatz.'}
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        <Key24LocalizedElement as="section" className="articles-grid-section">
          <Key24LocalizedElement as="div" className="carbon-container">
            <Key24LocalizedElement as="div" className="articles-grid">
              {ARTICLES.map((art) => (
                <Key24LocalizedLink
                  key={art.slug}
                  href={`/resources/${art.slug}`}
                  className="carbon-card-interactive article-card"
                >
                  <Key24LocalizedElement as="div" className="article-media">
                    <Key24LocalizedElement as="img"
                      src={art.image}
                      alt={art.imageAlt}
                      className="article-img"
                      loading="lazy"
                    />
                    <Key24LocalizedElement as="div" className="article-cat-tag">
                      <Key24LocalizedElement as="span">{art.category}</Key24LocalizedElement>
                    </Key24LocalizedElement>
                  </Key24LocalizedElement>

                  <Key24LocalizedElement as="div" className="article-body">
                    <Key24LocalizedElement as="div" className="article-time-strip">
                      <Time size={14} />
                      <Key24LocalizedElement as="span">{art.readTime}</Key24LocalizedElement>
                    </Key24LocalizedElement>

                    <Key24LocalizedElement as="h2" className="article-title">{art.title}</Key24LocalizedElement>
                    <Key24LocalizedElement as="p" className="article-excerpt">{art.excerpt}</Key24LocalizedElement>

                    <Key24LocalizedElement as="div" className="article-card-footer">
                      <Key24LocalizedElement as="span" className="read-more-label">{isEn ? 'Read complete guide' : 'Vollständigen Beitrag lesen'}</Key24LocalizedElement>
                      <ArrowRight size={18} className="card-arrow-icon" />
                    </Key24LocalizedElement>
                  </Key24LocalizedElement>
                </Key24LocalizedLink>
              ))}
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <Footer />

      <style jsx global>{`
        .resources-page .resources-hero {
          padding: 5rem 0 4rem;
          background: #f4ede4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .resources-page .hero-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.75rem;
        }

        .resources-page .hero-title {
          font-size: clamp(2.25rem, 3.5vw + 1rem, 3.5rem);
          font-weight: 600;
          line-height: 1.15;
          color: var(--cds-text-primary);
          max-width: 860px;
          margin-bottom: 1.25rem;
        }

        .resources-page .hero-lead {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
          max-width: 740px;
        }

        .resources-page .articles-grid-section {
          padding: 5.5rem 0;
          background-color: var(--cds-background);
        }

        .resources-page .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          align-items: stretch;
        }

        .resources-page .article-card {
          padding: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--cds-border-subtle);
          background-color: #ffffff;
          overflow: hidden;
          text-decoration: none;
        }

        .resources-page .article-media {
          position: relative;
          width: 100%;
          height: 175px;
          overflow: hidden;
          background-color: #161616;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .resources-page .article-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.92);
          transition: transform var(--carbon-motion-duration-slow);
          display: block;
        }

        .resources-page .article-card:hover .article-img {
          transform: scale(1.03);
        }

        .resources-page .article-cat-tag {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background-color: rgba(22, 22, 22, 0.85);
          backdrop-filter: blur(4px);
          padding: 0.25rem 0.65rem;
          border-left: 2px solid var(--cds-interactive-01);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .resources-page .article-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .resources-page .article-time-strip {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--cds-text-secondary);
          margin-bottom: 0.75rem;
        }

        .resources-page .article-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          line-height: 1.35;
          margin-bottom: 0.75rem;
          min-height: 3.4rem;
        }

        .resources-page .article-excerpt {
          font-size: 0.9375rem;
          line-height: 1.55;
          color: var(--cds-text-secondary);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .resources-page .article-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--cds-border-subtle);
          color: var(--cds-interactive-01);
          margin-top: auto;
        }

        .resources-page .read-more-label {
          font-size: 0.8125rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .resources-page .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }
