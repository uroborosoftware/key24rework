import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowLeft, ArrowRight, CheckmarkOutline } from '@carbon/icons-react';

interface CaseStudyData {
  slug: string;
  title: string;
  clientType: string;
  region: string;
  fleetSize: string;
  challenge: string;
  solution: string;
  results: string[];
}

const APPROVED_STUDIES: Record<string, CaseStudyData> = {
  'pilot-rhineland': {
    slug: 'pilot-rhineland',
    title: 'Zero Missed Emergency Calls Across 2 Mobile Locksmith Vans',
    clientType: 'Independent Auto Locksmith Fleet',
    region: 'North Rhine-Westphalia, Germany',
    fleetSize: '2 Fully Equipped Mobile Vans',
    challenge:
      'The solo owner-operator was frequently missing roadside lockout calls while picking locks or cutting transponder keys. Callers would hang up within 10 seconds and dial the next competitor on Google.',
    solution:
      'Implemented KEY24 with conditional call-forwarding when busy. All incoming calls were answered within 2 rings, vehicle make/model/year gathered, and immediate WhatsApp dispatch confirmations sent with live ETA tracking.',
    results: [
      '100% of incoming lockout calls answered during on-site picking jobs',
      'Average triage time reduced to under 50 seconds per caller',
      'Automated GPS pin requests eliminated 15 minutes of lost driver search time per dispatch',
      'Payment receipts automatically synced with card reader terminals'
    ]
  }
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = (locales || ['en-GB']).flatMap(locale => Object.keys(APPROVED_STUDIES).map((slug) => ({
    params: { slug }, locale
  })));
  return {
    paths,
    fallback: false // strictly 404 for unapproved case studies
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const study = APPROVED_STUDIES[slug];

  if (!study) {
    return { notFound: true };
  }

  return {
    props: { study, siteTranslations:getSiteTranslations(locale) }
  };
};

export default function CaseStudyPage({ study }: { study: CaseStudyData }) {
  return (
    <>
      <Key24LocalizedHead>
        <title>{`${study.title} | KEY24 Customer Case Study`}</title>
        <meta name="description" content={study.challenge} />
      </Key24LocalizedHead>

      <Navigation />

      <Key24LocalizedElement as="main" id="main-content" className="case-study-page">
        <Key24LocalizedElement as="section" className="study-hero">
          <Key24LocalizedElement as="div" className="carbon-container">
            <Key24LocalizedLink href="/customers" className="back-link">
              <ArrowLeft size={16} />
              <Key24LocalizedElement as="span">Back to all customer reviews</Key24LocalizedElement>
            </Key24LocalizedLink>

            <Key24LocalizedElement as="span" className="study-tag">VERIFIED FIELD STUDY</Key24LocalizedElement>
            <Key24LocalizedElement as="h1" className="study-title">{study.title}</Key24LocalizedElement>

            <Key24LocalizedElement as="div" className="study-meta-strip">
              <Key24LocalizedElement as="span" className="meta-item"><Key24LocalizedElement as="strong">Sector:</Key24LocalizedElement> {study.clientType}</Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="meta-item"><Key24LocalizedElement as="strong">Region:</Key24LocalizedElement> {study.region}</Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="meta-item"><Key24LocalizedElement as="strong">Fleet:</Key24LocalizedElement> {study.fleetSize}</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        <Key24LocalizedElement as="section" className="study-body-section">
          <Key24LocalizedElement as="div" className="carbon-container">
            <Key24LocalizedElement as="div" className="study-content-grid">
              <Key24LocalizedElement as="div" className="study-main-col">
                <Key24LocalizedElement as="div" className="content-block">
                  <Key24LocalizedElement as="h2">Operational Challenge</Key24LocalizedElement>
                  <Key24LocalizedElement as="p">{study.challenge}</Key24LocalizedElement>
                </Key24LocalizedElement>

                <Key24LocalizedElement as="div" className="content-block">
                  <Key24LocalizedElement as="h2">The KEY24 Deployment</Key24LocalizedElement>
                  <Key24LocalizedElement as="p">{study.solution}</Key24LocalizedElement>
                </Key24LocalizedElement>

                <Key24LocalizedElement as="div" className="content-block">
                  <Key24LocalizedElement as="h2">Verified Results</Key24LocalizedElement>
                  <Key24LocalizedElement as="ul" className="results-list">
                    {study.results.map((r, i) => (
                      <Key24LocalizedElement as="li" key={i}>
                        <CheckmarkOutline size={20} className="check-icon" />
                        <Key24LocalizedElement as="span">{r}</Key24LocalizedElement>
                      </Key24LocalizedElement>
                    ))}
                  </Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>

              <Key24LocalizedElement as="div" className="study-sidebar-col">
                <Key24LocalizedElement as="div" className="study-cta-card">
                  <Key24LocalizedElement as="h3">Achieve similar reliability</Key24LocalizedElement>
                  <Key24LocalizedElement as="p">Book a live 15-minute consultation to see how KEY24 fits your van fleet and area.</Key24LocalizedElement>
                  <Key24LocalizedLink href="/demo" className="btn-carbon-primary">
                    <Key24LocalizedElement as="span">Book a demo</Key24LocalizedElement>
                    <ArrowRight size={18} />
                  </Key24LocalizedLink>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <Footer />

      <style jsx global>{`
        .case-study-page .study-hero {
          padding: 4.5rem 0 3.5rem;
          background: #f4ede4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .case-study-page .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--cds-interactive-01);
          text-decoration: none;
          margin-bottom: 1.5rem;
        }

        .case-study-page .study-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.5rem;
        }

        .case-study-page .study-title {
          font-size: clamp(2rem, 3.2vw + 0.8rem, 3rem);
          font-weight: 600;
          color: var(--cds-text-primary);
          line-height: 1.2;
          margin-bottom: 1.75rem;
          max-width: 860px;
        }

        .case-study-page .study-meta-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--cds-border-subtle);
        }

        .case-study-page .meta-item {
          font-size: 0.875rem;
          color: var(--cds-text-secondary);
        }

        .case-study-page .meta-item strong {
          color: var(--cds-text-primary);
        }

        .case-study-page .study-body-section {
          padding: 5rem 0;
          background-color: var(--cds-background);
        }

        .case-study-page .study-content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3.5rem;
        }

        .case-study-page .study-main-col {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .case-study-page .content-block h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          margin-bottom: 1rem;
        }

        .case-study-page .content-block p {
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--cds-text-secondary);
        }

        .case-study-page .results-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .case-study-page .results-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1rem;
          color: var(--cds-text-primary);
          line-height: 1.5;
        }

        .case-study-page .check-icon {
          color: #0e8a16;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .case-study-page .study-cta-card {
          background-color: #f4f4f4;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: sticky;
          top: 80px;
        }

        .case-study-page .study-cta-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .case-study-page .study-cta-card p {
          font-size: 0.9375rem;
          color: var(--cds-text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .case-study-page .study-content-grid {
            grid-template-columns: 1fr;
          }

          .case-study-page .study-cta-card {
            position: static;
          }
        }
      `}</style>
    </>
  );
}
