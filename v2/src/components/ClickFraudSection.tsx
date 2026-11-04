import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import { Security, WarningAlt, Checkmark } from '@carbon/icons-react';

interface ClickFraudSectionProps {
  locale?: string;
}

export const ClickFraudSection: React.FC<ClickFraudSectionProps> = ({ locale = 'en' }) => {
  return (
    <Key24LocalizedElement as="section" className="fraud-section" id="click-fraud" aria-label="Google Ads Click Fraud Protection">
      <Key24LocalizedElement as="div" className="fraud-container">
        {/* Header */}
        <Key24LocalizedElement as="div" className="fraud-header">
          <Key24LocalizedElement as="span" className="fraud-eyebrow">GOOGLE ADS CLICK-FRAUD SHIELD</Key24LocalizedElement>
          <Key24LocalizedElement as="h2" className="fraud-title">
            Do You Know How Much of Your Ad Budget is Burned by Fake Clicks?
          </Key24LocalizedElement>
          <Key24LocalizedElement as="p" className="fraud-subtitle">
            In automotive locksmith advertising, a single Google click costs between <Key24LocalizedElement as="strong">€15 and €35</Key24LocalizedElement>. Dishonest competitors and automated click-bots repeatedly click your ads to burn your daily budget before noon. We protect your hard-earned money and ensure your investment is never wasted.
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* 3 Colorful Bento Cards (Unbounce Style) */}
        <Key24LocalizedElement as="div" className="fraud-cards-grid">
          {/* Card 1: Bot & Competitor Detection (Red/Coral) */}
          <Key24LocalizedElement as="div" className="fraud-bento-card bento-red">
            <Key24LocalizedElement as="div" className="card-top">
              <Key24LocalizedElement as="div" className="f-icon-pill icon-red">
                <WarningAlt size={22} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="card-tag tag-red">Millisecond Detection</Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Vector Illustration: Bot Radar & Fingerprinting */}
            <Key24LocalizedElement as="div" className="fraud-ill-box ill-fraud-red" aria-hidden="true">
              <Key24LocalizedElement as="svg" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bot Radar Grid */}
                <Key24LocalizedElement as="rect" x="15" y="8" width="105" height="54" rx="8" fill="#450a0a" stroke="#7f1d1d" strokeWidth="1" />
                <Key24LocalizedElement as="circle" cx="50" cy="35" r="22" stroke="#b91c1c" strokeWidth="1" strokeDasharray="3 3" />
                <Key24LocalizedElement as="circle" cx="50" cy="35" r="12" stroke="#dc2626" strokeWidth="1" />
                {/* Radar Sweep */}
                <Key24LocalizedElement as="path" d="M 50 35 L 68 20" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
                {/* Bot Target Blip with Crosshair */}
                <Key24LocalizedElement as="circle" cx="78" cy="25" r="5" fill="#ef4444" fillOpacity="0.4" />
                <Key24LocalizedElement as="circle" cx="78" cy="25" r="2.5" fill="#ef4444" />
                <Key24LocalizedElement as="text" x="24" y="55" fill="#fca5a5" fontSize="5.5" fontWeight="bold">BOT IP: 185.220.***</Key24LocalizedElement>
                {/* Deflection Shield Barrier */}
                <Key24LocalizedElement as="path" d="M 125 15 Q 135 35 125 55" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                {/* Intercept Result Pill */}
                <Key24LocalizedElement as="g" transform="translate(138, 10)">
                  <Key24LocalizedElement as="rect" x="0" y="0" width="86" height="50" rx="8" fill="#ffffff" stroke="#fecaca" strokeWidth="1.5" />
                  <Key24LocalizedElement as="rect" x="6" y="6" width="74" height="13" rx="3" fill="#fee2e2" />
                  <Key24LocalizedElement as="text" x="9" y="15" fill="#991b1b" fontSize="5.5" fontWeight="bold">SCRAPER BLOCKED</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="28" fill="#7f1d1d" fontSize="6.5" fontWeight="800">12 Fake Clicks</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="37" fill="#dc2626" fontSize="5.5">Competitor proxy detected</Key24LocalizedElement>
                  <Key24LocalizedElement as="rect" x="8" y="41" width="58" height="6" rx="1.5" fill="#fff1f2" />
                  <Key24LocalizedElement as="text" x="10" y="46" fill="#b91c1c" fontSize="4.5" fontWeight="bold">€240.00 Waste Prevented</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="h3" className="card-heading">Fingerprints Competitor Clicks</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="card-copy">
              Identifies repeat device fingerprints, automated headless browsers, local competitor IP ranges, and VPN proxies clicking your Google ads.
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="card-pill pill-red">
              <Checkmark size={14} />
              <Key24LocalizedElement as="span">Detects fraudulent repeat patterns instantly</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          {/* Card 2: Automated Exclusion (Blue) */}
          <Key24LocalizedElement as="div" className="fraud-bento-card bento-blue">
            <Key24LocalizedElement as="div" className="card-top">
              <Key24LocalizedElement as="div" className="f-icon-pill icon-blue">
                <Security size={22} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="card-tag tag-blue">API Integration</Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Vector Illustration: Google Ads Sync Vault */}
            <Key24LocalizedElement as="div" className="fraud-ill-box ill-fraud-blue" aria-hidden="true">
              <Key24LocalizedElement as="svg" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Google Ads Connector Hub */}
                <Key24LocalizedElement as="rect" x="15" y="8" width="100" height="54" rx="8" fill="#211c21" stroke="#350d36" strokeWidth="1" />
                <Key24LocalizedElement as="text" x="24" y="22" fill="#b58bb5" fontSize="6" fontWeight="bold">Google Ads API</Key24LocalizedElement>
                {/* Cloud Sync Waves */}
                <Key24LocalizedElement as="path" d="M 30 38 Q 45 28 60 38 T 90 38" stroke="#754575" strokeWidth="2" strokeLinecap="round" fill="none" />
                <Key24LocalizedElement as="circle" cx="60" cy="38" r="3" fill="#b58bb5" />
                <Key24LocalizedElement as="text" x="24" y="52" fill="#cbb5cb" fontSize="5.5">Real-time Exclusion Sync</Key24LocalizedElement>
                {/* Arrow Pipeline */}
                <Key24LocalizedElement as="path" d="M 120 35 L 140 35" stroke="#541554" strokeWidth="2.5" strokeDasharray="3 3" />
                <Key24LocalizedElement as="polygon" points="140,32 146,35 140,38" fill="#541554" />
                {/* Synced Negative List Vault */}
                <Key24LocalizedElement as="g" transform="translate(148, 10)">
                  <Key24LocalizedElement as="rect" x="0" y="0" width="76" height="50" rx="8" fill="#ffffff" stroke="#dfcedf" strokeWidth="1.5" />
                  <Key24LocalizedElement as="rect" x="6" y="6" width="64" height="13" rx="3" fill="#eee4ee" />
                  <Key24LocalizedElement as="text" x="9" y="15" fill="#541554" fontSize="5.5" fontWeight="bold">NEGATIVE IP LIST</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="28" fill="#350d36" fontSize="6.5" fontWeight="800">Auto-Excluded</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="37" fill="#541554" fontSize="5.5">Zero manual copying</Key24LocalizedElement>
                  <Key24LocalizedElement as="rect" x="8" y="41" width="52" height="6" rx="1.5" fill="#f4ede4" />
                  <Key24LocalizedElement as="text" x="10" y="46" fill="#421043" fontSize="4.5" fontWeight="bold">Instant Campaign Update</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="h3" className="card-heading">Automated Google Ads Exclusion</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="card-copy">
              Detected rogue IPs are automatically synced to your Google Ads negative exclusion lists in real time. Your ads will never show to them again.
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="card-pill pill-blue">
              <Checkmark size={14} />
              <Key24LocalizedElement as="span">Zero manual IP copying or management</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          {/* Card 3: 100% Real Motorists (Mint Green) */}
          <Key24LocalizedElement as="div" className="fraud-bento-card bento-green">
            <Key24LocalizedElement as="div" className="card-top">
              <Key24LocalizedElement as="div" className="f-icon-pill icon-green">
                <Checkmark size={22} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="card-tag tag-green">Pure Conversion</Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Vector Illustration: Protected Euro Budget Vault */}
            <Key24LocalizedElement as="div" className="fraud-ill-box ill-fraud-green" aria-hidden="true">
              <Key24LocalizedElement as="svg" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Safe Budget Vault */}
                <Key24LocalizedElement as="rect" x="15" y="8" width="95" height="54" rx="8" fill="#064e3b" stroke="#047857" strokeWidth="1" />
                {/* Gold Euro Coin with Shield */}
                <Key24LocalizedElement as="circle" cx="45" cy="35" r="16" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
                <Key24LocalizedElement as="circle" cx="45" cy="35" r="12" fill="#fbbf24" />
                <Key24LocalizedElement as="text" x="40" y="40" fill="#78350f" fontSize="13" fontWeight="bold">€</Key24LocalizedElement>
                {/* Key Blade Protecting Coin */}
                <Key24LocalizedElement as="path" d="M 65 24 L 92 24 L 92 30 L 85 30 L 85 34 L 78 34 L 78 40 L 72 40 L 72 46 L 65 46 Z" fill="#6ee7b7" />
                <Key24LocalizedElement as="text" x="24" y="55" fill="#a7f3d0" fontSize="5.5" fontWeight="bold">100% REAL MOTORISTS</Key24LocalizedElement>
                {/* Connection beam */}
                <Key24LocalizedElement as="path" d="M 115 35 L 135 35" stroke="#10b981" strokeWidth="2.5" />
                {/* Net Savings Scorecard */}
                <Key24LocalizedElement as="g" transform="translate(140, 10)">
                  <Key24LocalizedElement as="rect" x="0" y="0" width="85" height="50" rx="8" fill="#ffffff" stroke="#a7f3d0" strokeWidth="1.5" />
                  <Key24LocalizedElement as="rect" x="6" y="6" width="73" height="13" rx="3" fill="#d1fae5" />
                  <Key24LocalizedElement as="text" x="9" y="15" fill="#065f46" fontSize="5.5" fontWeight="bold">PURE CONVERSION</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="28" fill="#064e3b" fontSize="6.5" fontWeight="800">+€1,440.00</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="37" fill="#059669" fontSize="5.5">Saved in 7 days</Key24LocalizedElement>
                  <Key24LocalizedElement as="rect" x="8" y="41" width="58" height="6" rx="1.5" fill="#ecfdf5" />
                  <Key24LocalizedElement as="text" x="10" y="46" fill="#047857" fontSize="4.5" fontWeight="bold">Dedicated to paying jobs</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="h3" className="card-heading">Your Budget Reaches Real Drivers</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="card-copy">
              Your hard-earned marketing budget is reserved 100% for genuine motorists stranded beside their locked vehicles who are ready to pay.
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="card-pill pill-green">
              <Checkmark size={14} />
              <Key24LocalizedElement as="span">Saves up to 35% of total monthly PPC spend</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* Live Protection Proof Strip */}
        <Key24LocalizedElement as="div" className="shield-proof-strip">
          <Key24LocalizedElement as="div" className="shield-live-indicator">
            <Key24LocalizedElement as="span" className="shield-pulse"></Key24LocalizedElement>
            <Key24LocalizedElement as="strong">ACTIVE SHIELD STATUS</Key24LocalizedElement>
          </Key24LocalizedElement>
          <Key24LocalizedElement as="div" className="shield-stat-item">
            <Key24LocalizedElement as="span" className="stat-label">Last 7 Days Defense:</Key24LocalizedElement>
            <Key24LocalizedElement as="strong" className="stat-highlight">48 Fraudulent Clicks Blocked</Key24LocalizedElement>
          </Key24LocalizedElement>
          <Key24LocalizedElement as="div" className="shield-stat-item">
            <Key24LocalizedElement as="span" className="stat-label">Ad Budget Protected:</Key24LocalizedElement>
            <Key24LocalizedElement as="strong" className="stat-highlight text-green">€1,440.00 Saved</Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx>{`
        .fraud-section {
          padding: 5.5rem 1.5rem;
          background: #f8fafc;
          border-bottom: 1px solid #e8e0da;
        }

        .fraud-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .fraud-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 3.5rem auto;
        }

        .fraud-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #dc2626;
          background: #fef2f2;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }

        .fraud-title {
          font-size: clamp(2.2rem, 3.5vw + 1rem, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #211c21;
          line-height: 1.15;
          margin: 0 0 1.25rem 0;
        }

        .fraud-subtitle {
          font-size: clamp(1.05rem, 1.2vw + 0.8rem, 1.25rem);
          color: #746b74;
          line-height: 1.55;
          margin: 0;
        }

        .fraud-subtitle strong {
          color: #211c21;
        }

        /* 3 Bento Cards */
        .fraud-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 2.5rem;
        }

        .fraud-bento-card {
          border-radius: 24px;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.05);
          transition: transform 0.2s cubic-bezier(0.2, 0, 0.38, 0.9), box-shadow 0.2s ease;
        }

        .fraud-bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -6px rgba(15, 23, 42, 0.1);
        }

        .bento-red {
          background: #fff7ed;
          border: 1px solid #fed7aa;
        }
        .icon-red {
          background: #ea580c;
          color: #ffffff;
        }
        .tag-red {
          background: #ffedd5;
          color: #9a3412;
        }
        .pill-red {
          background: rgba(234, 88, 12, 0.12);
          color: #9a3412;
        }

        .bento-blue {
          background: #f4ede4;
          border: 1px solid #dfcedf;
        }
        .icon-blue {
          background: #541554;
          color: #ffffff;
        }
        .tag-blue {
          background: #eee4ee;
          color: #541554;
        }
        .pill-blue {
          background: rgba(84, 21, 84, 0.12);
          color: #541554;
        }

        .bento-green {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
        }
        .icon-green {
          background: #10b981;
          color: #ffffff;
        }
        .tag-green {
          background: #d1fae5;
          color: #065f46;
        }
        .pill-green {
          background: rgba(16, 185, 129, 0.12);
          color: #065f46;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .f-icon-pill {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-tag {
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
        }

        .fraud-ill-box {
          width: 100%;
          border-radius: 14px;
          padding: 0.65rem 0.5rem;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fraud-ill-box svg {
          width: 100%;
          max-width: 260px;
          height: auto;
          display: block;
        }

        .ill-fraud-red {
          background: #ffffff;
          border: 1px solid #fed7aa;
          box-shadow: 0 4px 12px rgba(234, 88, 12, 0.08);
        }

        .ill-fraud-blue {
          background: #ffffff;
          border: 1px solid #dfcedf;
          box-shadow: 0 4px 12px rgba(84, 21, 84, 0.08);
        }

        .ill-fraud-green {
          background: #ffffff;
          border: 1px solid #a7f3d0;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08);
        }

        .card-heading {
          font-size: 1.35rem;
          font-weight: 800;
          color: #211c21;
          margin: 0 0 0.75rem 0;
          line-height: 1.25;
        }

        .card-copy {
          font-size: 0.95rem;
          line-height: 1.55;
          color: #4b414b;
          margin: 0 0 1.5rem 0;
          flex-grow: 1;
        }

        .card-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 0.6rem 0.85rem;
          border-radius: 10px;
        }

        /* Shield Proof Strip */
        .shield-proof-strip {
          background: #ffffff;
          border: 1px solid #e8e0da;
          border-radius: 20px;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .shield-live-indicator {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #059669;
        }

        .shield-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulse 1.5s infinite;
        }

        .shield-stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .stat-label {
          color: #746b74;
        }

        .stat-highlight {
          color: #211c21;
          font-weight: 800;
        }

        .text-green {
          color: #059669;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        @media (max-width: 1024px) {
          .fraud-cards-grid {
            grid-template-columns: 1fr;
          }
          .shield-proof-strip {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
