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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(APPROVED_STUDIES).map((slug) => ({
    params: { slug }
  }));
  return {
    paths,
    fallback: false // strictly 404 for unapproved case studies
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const study = APPROVED_STUDIES[slug];

  if (!study) {
    return { notFound: true };
  }

  return {
    props: { study }
  };
};

export default function CaseStudyPage({ study }: { study: CaseStudyData }) {
  return (
    <>
      <Head>
        <title>{`${study.title} | KEY24 Customer Case Study`}</title>
        <meta name="description" content={study.challenge} />
      </Head>

      <Navigation />

      <main id="main-content" className="case-study-page">
        <section className="study-hero">
          <div className="carbon-container">
            <Link href="/customers" className="back-link">
              <ArrowLeft size={16} />
              <span>Back to all customer reviews</span>
            </Link>

            <span className="study-tag">VERIFIED FIELD STUDY</span>
            <h1 className="study-title">{study.title}</h1>

            <div className="study-meta-strip">
              <span className="meta-item"><strong>Sector:</strong> {study.clientType}</span>
              <span className="meta-item"><strong>Region:</strong> {study.region}</span>
              <span className="meta-item"><strong>Fleet:</strong> {study.fleetSize}</span>
            </div>
          </div>
        </section>

        <section className="study-body-section">
          <div className="carbon-container">
            <div className="study-content-grid">
              <div className="study-main-col">
                <div className="content-block">
                  <h2>Operational Challenge</h2>
                  <p>{study.challenge}</p>
                </div>

                <div className="content-block">
                  <h2>The KEY24 Deployment</h2>
                  <p>{study.solution}</p>
                </div>

                <div className="content-block">
                  <h2>Verified Results</h2>
                  <ul className="results-list">
                    {study.results.map((r, i) => (
                      <li key={i}>
                        <CheckmarkOutline size={20} className="check-icon" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="study-sidebar-col">
                <div className="study-cta-card">
                  <h3>Achieve similar reliability</h3>
                  <p>Book a live 15-minute consultation to see how KEY24 fits your van fleet and area.</p>
                  <Link href="/demo" className="btn-carbon-primary">
                    <span>Book a demo</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .study-hero {
          padding: 4.5rem 0 3.5rem;
          background: #f4ede4;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        :global(.back-link) {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--cds-interactive-01);
          text-decoration: none;
          margin-bottom: 1.5rem;
        }

        .study-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.5rem;
        }

        .study-title {
          font-size: clamp(2rem, 3.2vw + 0.8rem, 3rem);
          font-weight: 600;
          color: var(--cds-text-primary);
          line-height: 1.2;
          margin-bottom: 1.75rem;
          max-width: 860px;
        }

        .study-meta-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--cds-border-subtle);
        }

        .meta-item {
          font-size: 0.875rem;
          color: var(--cds-text-secondary);
        }

        .meta-item strong {
          color: var(--cds-text-primary);
        }

        .study-body-section {
          padding: 5rem 0;
          background-color: var(--cds-background);
        }

        .study-content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3.5rem;
        }

        .study-main-col {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .content-block h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          margin-bottom: 1rem;
        }

        .content-block p {
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--cds-text-secondary);
        }

        .results-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .results-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1rem;
          color: var(--cds-text-primary);
          line-height: 1.5;
        }

        :global(.check-icon) {
          color: #0e8a16;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .study-cta-card {
          background-color: #f4f4f4;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: sticky;
          top: 80px;
        }

        .study-cta-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .study-cta-card p {
          font-size: 0.9375rem;
          color: var(--cds-text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .study-content-grid {
            grid-template-columns: 1fr;
          }

          .study-cta-card {
            position: static;
          }
        }
      `}</style>
    </>
  );
}
