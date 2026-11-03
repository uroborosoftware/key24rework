import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowLeft, ArrowRight, Time } from '@carbon/icons-react';
import { ARTICLES } from './index';

interface ArticleDetail {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

const ARTICLE_CONTENT: Record<string, ArticleDetail> = {
  'calculating-lost-lockout-revenue': {
    slug: 'calculating-lost-lockout-revenue',
    category: 'Business Economics',
    readTime: '6 min read',
    title: 'How to Calculate the Real Cost of Unanswered Lockout Calls',
    excerpt: 'Most locksmiths believe they only miss 1 or 2 calls a week. Our call logging telemetry reveals that mobile operators miss up to 28% of incoming demand while working with both hands.',
    sections: [
      {
        heading: 'The Fallacy of the Missed Call Log',
        body: 'When you check your phone after spending 45 minutes decoding an Audi lock in the rain, you might see two missed numbers. What telecom logs do not reveal is that drivers facing a car lockout do not leave voicemails. They hang up on the fourth ring and dial the next locksmith on Google Maps. Those two missed calls represent two lost jobs, not two inquiries waiting for your callback.'
      },
      {
        heading: 'Quantifying Average Ticket Revenue',
        body: 'In metropolitan and suburban corridors across the UK and Germany, the average daytime lockout invoice ranges between €140 and €220. Evening and weekend emergency calls command €260 to €420. Missing merely four emergency calls per week results in approximately €3,500 to €5,000 in lost gross revenue every month.'
      },
      {
        heading: 'The Math of Automated Voice Intake',
        body: 'By routing busy rings to an automotive-trained AI voice agent, the caller hears an immediate professional greeting in your brand voice. The vehicle make, model, year, and lock condition are confirmed, calming the driver and stopping them from dialing your competitor.'
      }
    ]
  },
  'lishi-picking-telephony-protocols': {
    slug: 'lishi-picking-telephony-protocols',
    category: 'Field Operations',
    readTime: '8 min read',
    title: 'Non-Destructive Entry Protocols: Why Phone Distractions Cause Lock Damage',
    excerpt: 'Detailed operational breakdown of how picking high-security automotive locks requires sustained focus, and why answering mid-pick leads to damaged wafers or slipped tension tools.',
    sections: [
      {
        heading: 'Tactile Feedback Under Tension',
        body: 'Decoding high-security automotive locks (such as VAG HU66 generation 1/2/3, Ford HU101, or BMW HU92) requires continuous rotational tension and microscopic wafer feedback. Taking one hand off the tension wrench to tap an answering headset introduces irregular torque, risking bent wafers, broken lifters, or lost decodes.'
      },
      {
        heading: 'Customer Perception on the Roadside',
        body: 'A stranded motorist who sees a locksmith repeatedly interrupting work to argue pricing on the phone feels anxious about their bill. A technician who works uninterrupted projects mastery, confidence, and premium craftsmanship.'
      }
    ]
  },
  'gdpr-whatsapp-locksmith-compliance': {
    slug: 'gdpr-whatsapp-locksmith-compliance',
    category: 'Legal & Compliance',
    readTime: '5 min read',
    title: 'GDPR & WhatsApp Business Guidelines for Emergency Services in the UK & EU',
    excerpt: 'A practical legal guide on securing caller consent over the phone before triggering location pin requests and automated dispatch confirmations.',
    sections: [
      {
        heading: 'Telephone Consent Capture',
        body: 'Article 6(1)(b) of the GDPR provides a legal basis for processing data necessary for the performance of a contract. However, messaging a consumer via WhatsApp requires compliance with Meta Business terms and explicit confirmation that the caller desires digital dispatch tracking.'
      },
      {
        heading: 'Utility Categorization vs. Marketing',
        body: 'Locksmith job updates (ETA, GPS pin collection, receipts) fall under Meta’s approved Utility conversation category. These messages carry no advertising, ensure high delivery rates, and give customers peace of mind without spam liability.'
      }
    ]
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ARTICLES.map((a) => ({ params: { slug: a.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const article = ARTICLE_CONTENT[slug];
  if (!article) return { notFound: true };
  return { props: { article } };
};

export default function ArticleDetailPage({ article }: { article: ArticleDetail }) {
  return (
    <>
      <Head>
        <title>{`${article.title} | KEY24 Resources`}</title>
        <meta name="description" content={article.excerpt} />
      </Head>

      <Navigation />

      <main id="main-content" className="article-page">
        <section className="article-hero">
          <div className="carbon-container">
            <Link href="/resources" className="back-link">
              <ArrowLeft size={16} />
              <span>Back to all guides</span>
            </Link>

            <span className="article-cat">{article.category}</span>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <Time size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        <section className="article-body-section">
          <div className="carbon-container">
            <div className="article-layout">
              <div className="article-content">
                <p className="article-lead">{article.excerpt}</p>
                {article.sections.map((s, i) => (
                  <div key={i} className="article-sub-section">
                    <h2>{s.heading}</h2>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>

              <aside className="article-sidebar">
                <div className="sidebar-card">
                  <h3>Stop losing lockout jobs</h3>
                  <p>Deploy the KEY24 AI agent and dedicated locksmith CRM today.</p>
                  <Link href="/demo" className="btn-carbon-primary">
                    <span>Book a demo</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .article-hero {
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

        .article-cat {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.5rem;
        }

        .article-title {
          font-size: clamp(2rem, 3.2vw + 0.8rem, 3rem);
          font-weight: 600;
          line-height: 1.2;
          color: var(--cds-text-primary);
          max-width: 860px;
          margin-bottom: 1.25rem;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          color: var(--cds-text-secondary);
        }

        .article-body-section {
          padding: 5rem 0;
          background-color: var(--cds-background);
        }

        .article-layout {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 4rem;
        }

        .article-lead {
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--cds-text-primary);
          font-weight: 400;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--cds-border-subtle);
          margin-bottom: 2rem;
        }

        .article-sub-section {
          margin-bottom: 2.5rem;
        }

        .article-sub-section h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          margin-bottom: 1rem;
        }

        .article-sub-section p {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: var(--cds-text-secondary);
        }

        .sidebar-card {
          background-color: #f4f4f4;
          border: 1px solid var(--cds-border-subtle);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: sticky;
          top: 80px;
        }

        .sidebar-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .sidebar-card p {
          font-size: 0.9375rem;
          color: var(--cds-text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .article-layout {
            grid-template-columns: 1fr;
          }

          .sidebar-card {
            position: static;
          }
        }
      `}</style>
    </>
  );
}
