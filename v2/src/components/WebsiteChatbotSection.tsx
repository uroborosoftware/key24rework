import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import { Bot, StarFilled, Growth, Checkmark, Location } from '@carbon/icons-react';

interface WebsiteChatbotSectionProps {
  locale?: string;
}

export const WebsiteChatbotSection: React.FC<WebsiteChatbotSectionProps> = ({ locale = 'en' }) => {
  return (
    <Key24LocalizedElement as="section" className="cb-section" id="chatbot" aria-label="Website Roadside Conversion Chatbot">
      <Key24LocalizedElement as="div" className="cb-container">
        {/* Header */}
        <Key24LocalizedElement as="div" className="cb-header">
          <Key24LocalizedElement as="span" className="cb-eyebrow">ROADSIDE WEB CHATBOT</Key24LocalizedElement>
          <Key24LocalizedElement as="h2" className="cb-title">
            How Many Visitors Hit Your Website and Bounce Without Calling?
          </Key24LocalizedElement>
          <Key24LocalizedElement as="p" className="cb-subtitle">
            You spend thousands on Google Ads, but over 70% of motorists leave without dialing because they are stressed or hesitant to call. KEY24’s embedded web widget converts silent visitors into confirmed emergency dispatches.
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* 3 Colorful Bento Stat Cards */}
        <Key24LocalizedElement as="div" className="cb-stats-grid">
          <Key24LocalizedElement as="div" className="stat-card card-mint">
            <Key24LocalizedElement as="span" className="stat-big">+25%</Key24LocalizedElement>
            <Key24LocalizedElement as="strong" className="stat-label">Higher Conversion Rate</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="stat-copy">Partners see an immediate 25% increase in booked jobs from existing web traffic.</Key24LocalizedElement>
          </Key24LocalizedElement>

          <Key24LocalizedElement as="div" className="stat-card card-blue">
            <Key24LocalizedElement as="span" className="stat-big">3.4x</Key24LocalizedElement>
            <Key24LocalizedElement as="strong" className="stat-label">Google Ads ROI Boost</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="stat-copy">Make every euro spent on Google PPC generate paying lockouts instead of wasted clicks.</Key24LocalizedElement>
          </Key24LocalizedElement>

          <Key24LocalizedElement as="div" className="stat-card card-purple">
            <Key24LocalizedElement as="span" className="stat-big">&lt; 15s</Key24LocalizedElement>
            <Key24LocalizedElement as="strong" className="stat-label">Click to Live Pin</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="stat-copy">Captures car model, key state, and live roadside coordinates in under 15 seconds.</Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* Live Widget Preview & Dedicated Proof Banner */}
        <Key24LocalizedElement as="div" className="cb-interactive-grid">
          {/* Left: Chatbot Mockup */}
          <Key24LocalizedElement as="div" className="cb-mockup-window">
            <Key24LocalizedElement as="div" className="mockup-header">
              <Key24LocalizedElement as="div" className="mockup-dots">
                <Key24LocalizedElement as="span"></Key24LocalizedElement>
                <Key24LocalizedElement as="span"></Key24LocalizedElement>
                <Key24LocalizedElement as="span"></Key24LocalizedElement>
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="mockup-title">AutoLocksmith24.de • Live Web Widget</Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="div" className="mockup-chat-body">
              <Key24LocalizedElement as="div" className="widget-bubble bot-msg">
                <Key24LocalizedElement as="div" className="bot-avatar-tag">
                  <Key24LocalizedElement as="span" className="ai-dot"></Key24LocalizedElement>
                  <Key24LocalizedElement as="strong">KEY24 Emergency Assistant</Key24LocalizedElement>
                </Key24LocalizedElement>
                <Key24LocalizedElement as="p">Locked out of your vehicle? Drop your car make and model below for an instant arrival estimate.</Key24LocalizedElement>
              </Key24LocalizedElement>

              <Key24LocalizedElement as="div" className="widget-bubble user-msg">
                <Key24LocalizedElement as="p">Audi A6 Avant, 2019. Key is locked in the luggage compartment at shopping mall parking.</Key24LocalizedElement>
              </Key24LocalizedElement>

              <Key24LocalizedElement as="div" className="widget-bubble bot-msg">
                <Key24LocalizedElement as="p">✓ 2019 Audi A6 identified (HU66 profile). Fixed lockout rate: €210. Our technician van is 12 minutes away.</Key24LocalizedElement>
                <Key24LocalizedElement as="div" className="widget-loc-pill">
                  <Location size={16} />
                  <Key24LocalizedElement as="span">GPS Pin Shared: Skyline Plaza P1</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="div" className="mockup-footer">
              <Key24LocalizedElement as="span" className="badge-confirmed">
                <Checkmark size={14} />
                Job dispatched to service van in 18 seconds
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          {/* Right: Dedicated Verified Reference Card */}
          <Key24LocalizedElement as="div" className="cb-reference-card">
            <Key24LocalizedElement as="div" className="ref-top">
              <Key24LocalizedElement as="div" className="stars-row">
                <StarFilled size={16} />
                <StarFilled size={16} />
                <StarFilled size={16} />
                <StarFilled size={16} />
                <StarFilled size={16} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="proof-tag">MUNICH FIELD PROOF</Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Vector Illustration: Roadside Web Conversion Flow */}
            <Key24LocalizedElement as="div" className="cb-conversion-flow-ill" aria-hidden="true">
              <Key24LocalizedElement as="svg" viewBox="0 0 340 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stage 1: Hesitant visitor on phone */}
                <Key24LocalizedElement as="rect" x="10" y="8" width="80" height="58" rx="8" fill="#f8fafc" stroke="#ded7d2" strokeWidth="1.5" />
                <Key24LocalizedElement as="circle" cx="28" cy="24" r="8" fill="#e8e0da" />
                <Key24LocalizedElement as="path" d="M 24 24 C 24 20 32 20 32 24 C 32 28 28 28 28 32" stroke="#746b74" strokeWidth="1.5" strokeLinecap="round" />
                <Key24LocalizedElement as="text" x="42" y="24" fill="#4b414b" fontSize="6.5" fontWeight="bold">Silent Visitor</Key24LocalizedElement>
                <Key24LocalizedElement as="text" x="42" y="32" fill="#746b74" fontSize="5.5">Hesitant to call</Key24LocalizedElement>
                <Key24LocalizedElement as="rect" x="18" y="44" width="64" height="14" rx="3" fill="#fee2e2" />
                <Key24LocalizedElement as="text" x="23" y="53" fill="#dc2626" fontSize="5" fontWeight="bold">70% Normally Bounce</Key24LocalizedElement>

                {/* Transition Arrow */}
                <Key24LocalizedElement as="path" d="M 98 37 L 115 37" stroke="#541554" strokeWidth="2" strokeDasharray="3 3" />
                <Key24LocalizedElement as="polygon" points="115,34 120,37 115,40" fill="#541554" />

                {/* Stage 2: KEY24 Web Bot */}
                <Key24LocalizedElement as="rect" x="126" y="8" width="90" height="58" rx="8" fill="#f4ede4" stroke="#cbb5cb" strokeWidth="1.5" />
                <Key24LocalizedElement as="circle" cx="144" cy="24" r="9" fill="#541554" />
                <Key24LocalizedElement as="path" d="M 140 24 L 143 27 L 149 21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <Key24LocalizedElement as="text" x="158" y="23" fill="#350d36" fontSize="6.5" fontWeight="bold">KEY24 Widget</Key24LocalizedElement>
                <Key24LocalizedElement as="text" x="158" y="31" fill="#541554" fontSize="5.5">&lt; 15s Model &amp; Pin</Key24LocalizedElement>
                <Key24LocalizedElement as="rect" x="134" y="44" width="74" height="14" rx="3" fill="#eee4ee" />
                <Key24LocalizedElement as="text" x="139" y="53" fill="#421043" fontSize="5" fontWeight="bold">Instant Live Quote: €210</Key24LocalizedElement>

                {/* Transition Arrow */}
                <Key24LocalizedElement as="path" d="M 223 37 L 240 37" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                <Key24LocalizedElement as="polygon" points="240,34 245,37 240,40" fill="#10b981" />

                {/* Stage 3: Dispatched Van + Revenue Recovered */}
                <Key24LocalizedElement as="rect" x="250" y="8" width="82" height="58" rx="8" fill="#ecfdf5" stroke="#86efac" strokeWidth="1.5" />
                <Key24LocalizedElement as="circle" cx="268" cy="24" r="9" fill="#10b981" />
                <Key24LocalizedElement as="path" d="M 264 24 L 267 27 L 273 21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <Key24LocalizedElement as="text" x="282" y="23" fill="#065f46" fontSize="6.5" fontWeight="bold">Van On Route</Key24LocalizedElement>
                <Key24LocalizedElement as="text" x="282" y="31" fill="#059669" fontSize="5.5">ETA 12 Minutes</Key24LocalizedElement>
                <Key24LocalizedElement as="rect" x="256" y="44" width="70" height="14" rx="3" fill="#d1fae5" />
                <Key24LocalizedElement as="text" x="261" y="53" fill="#047857" fontSize="5.5" fontWeight="800">+25% More Bookings</Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="blockquote" className="proof-quote">
              “We were pumping over €2,500 every month into Google Ads, but dozens of visitors were landing on our site and
              leaving without calling. Adding the KEY24 roadside chatbot boosted our monthly closed jobs by +25%. Drivers
              who hesitate to phone at night simply enter their car model and GPS pin. It turned our website from a digital
              business card into a 24/7 revenue engine.”
            </Key24LocalizedElement>

            <Key24LocalizedElement as="div" className="proof-author-row">
              <Key24LocalizedElement as="img"
                src="/images/review-person-3.jpg"
                alt="Stefan Weber"
                className="author-photo"
              />
              <Key24LocalizedElement as="div">
                <Key24LocalizedElement as="strong">Stefan Weber</Key24LocalizedElement>
                <Key24LocalizedElement as="span">Owner, Weber 24h Lockout Service • Munich</Key24LocalizedElement>
                <Key24LocalizedElement as="span" className="author-metric">+14 extra jobs/mo without higher ad spend</Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx>{`
        .cb-section {
          padding: 5.5rem 1.5rem;
          background: #ffffff;
          border-bottom: 1px solid #e8e0da;
        }

        .cb-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .cb-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 3.5rem auto;
        }

        .cb-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #541554;
          background: #f4ede4;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }

        .cb-title {
          font-size: clamp(2.2rem, 3.5vw + 1rem, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #211c21;
          line-height: 1.15;
          margin: 0 0 1rem 0;
        }

        .cb-subtitle {
          font-size: clamp(1.05rem, 1.2vw + 0.8rem, 1.25rem);
          color: #746b74;
          line-height: 1.5;
          margin: 0;
        }

        /* 3 Stat Cards */
        .cb-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        .stat-card {
          border-radius: 22px;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
        }

        .card-mint {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
        }

        .card-blue {
          background: #f4ede4;
          border: 1px solid #dfcedf;
        }

        .card-purple {
          background: #f5f3ff;
          border: 1px solid #dfcedf;
        }

        .stat-big {
          font-size: clamp(2.5rem, 3.5vw + 1rem, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #211c21;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 700;
          color: #211c21;
          margin-bottom: 0.5rem;
        }

        .stat-copy {
          font-size: 0.925rem;
          line-height: 1.5;
          color: #625762;
          margin: 0;
        }

        /* Interactive Grid */
        .cb-interactive-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: stretch;
        }

        .cb-mockup-window {
          background: #ffffff;
          border: 1px solid #ded7d2;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.1);
          display: flex;
          flex-direction: column;
        }

        .mockup-header {
          background: #211c21;
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mockup-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .mockup-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #625762;
        }

        .mockup-title {
          font-size: 0.75rem;
          color: #a99ca5;
          font-family: monospace;
        }

        .mockup-chat-body {
          padding: 1.5rem;
          background: #f8fafc;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .widget-bubble {
          max-width: 85%;
          padding: 0.85rem 1.1rem;
          border-radius: 16px;
          font-size: 0.875rem;
          line-height: 1.45;
        }

        .bot-msg {
          background: #ffffff;
          border: 1px solid #e8e0da;
          color: #211c21;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }

        .bot-avatar-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: #541554;
          margin-bottom: 0.35rem;
        }

        .ai-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #541554;
        }

        .user-msg {
          background: #541554;
          color: #ffffff;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        .widget-loc-pill {
          margin-top: 0.65rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #f4ede4;
          color: #421043;
          font-weight: 700;
          font-size: 0.75rem;
          padding: 0.35rem 0.65rem;
          border-radius: 6px;
        }

        .mockup-footer {
          background: #ffffff;
          padding: 1rem 1.5rem;
          border-top: 1px solid #e8e0da;
        }

        .badge-confirmed {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: #059669;
        }

        /* Reference Card */
        .cb-reference-card {
          background: #f8fafc;
          border: 1px solid #e8e0da;
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ref-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .cb-conversion-flow-ill {
          width: 100%;
          background: #ffffff;
          border: 1px solid #e8e0da;
          border-radius: 16px;
          padding: 0.75rem 0.5rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .cb-conversion-flow-ill svg {
          width: 100%;
          max-width: 360px;
          height: auto;
          display: block;
        }

        .stars-row {
          display: flex;
          gap: 3px;
          color: #f59e0b;
        }

        .proof-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #541554;
          background: #f4ede4;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
        }

        .proof-quote {
          font-size: 1rem;
          line-height: 1.6;
          color: #4b414b;
          font-style: italic;
          margin: 0 0 2rem 0;
        }

        .proof-author-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-photo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #754575;
        }

        .proof-author-row strong {
          display: block;
          font-size: 1rem;
          color: #211c21;
        }

        .proof-author-row span {
          display: block;
          font-size: 0.85rem;
          color: #746b74;
        }

        .author-metric {
          color: #059669 !important;
          font-weight: 700;
          margin-top: 2px;
        }

        @media (max-width: 1024px) {
          .cb-stats-grid {
            grid-template-columns: 1fr;
          }
          .cb-interactive-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
