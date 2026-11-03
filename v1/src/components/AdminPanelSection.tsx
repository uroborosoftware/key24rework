import React from 'react';
import { Close, Checkmark, DeliveryAdd, Location, Time, Phone } from '@carbon/icons-react';

interface AdminPanelSectionProps {
  locale?: string;
}

export const AdminPanelSection: React.FC<AdminPanelSectionProps> = ({ locale = 'en' }) => {
  return (
    <section className="crm-section" id="crm" aria-label="Autonomous Dispatch CRM">
      <div className="crm-container">
        {/* Header */}
        <div className="crm-header">
          <span className="crm-eyebrow">AUTONOMOUS DISPATCH &amp; CRM</span>
          <h2 className="crm-title">
            Your Rivals Use AI — Are You Still Trapped in Excel?
          </h2>
          <p className="crm-subtitle">
            Stop losing 2.5 hours every single day juggling scribbled notepads and messy spreadsheets in your van. Here is the purpose-built automotive solution:
          </p>
        </div>

        {/* Side-by-Side Bento Comparison (Unbounce / HeyRosie style) */}
        <div className="crm-comparison-grid">
          {/* Card 1: The Old Way (Coral/Peach) */}
          <div className="comp-card card-old">
            <div className="comp-top">
              <span className="comp-badge badge-old">THE OLD WAY: EXCEL &amp; PAPER</span>
              <span className="lost-badge">2.5 Hours Lost Daily</span>
            </div>

            <h3 className="comp-title">Manual Chaos in the Driver’s Seat</h3>

            {/* Vector Illustration: Chaotic Paper & Excel Hell */}
            <div className="comp-illustration-box box-old-ill" aria-hidden="true">
              <svg viewBox="0 0 280 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Tangled Paper Sheet 1 */}
                <rect x="20" y="10" width="75" height="60" rx="4" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" transform="rotate(-6 57 40)" />
                <line x1="28" y1="25" x2="65" y2="21" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="35" x2="75" y2="30" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="45" x2="55" y2="40" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                
                {/* Tangled Paper Sheet 2 (Overlap) */}
                <rect x="65" y="15" width="80" height="62" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" transform="rotate(4 105 46)" />
                <rect x="75" y="24" width="24" height="7" rx="2" fill="#fee2e2" />
                <text x="77" y="29" fill="#dc2626" fontSize="5.5" fontWeight="bold">#REF!</text>
                <line x1="75" y1="36" x2="135" y2="36" stroke="#e2e8f0" strokeWidth="1.5" />
                <line x1="75" y1="46" x2="135" y2="46" stroke="#e2e8f0" strokeWidth="1.5" />
                <line x1="75" y1="56" x2="125" y2="56" stroke="#e2e8f0" strokeWidth="1.5" />
                
                {/* Broken Pencil */}
                <path d="M 160 55 L 185 30 L 190 35 L 165 60 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
                <path d="M 160 55 L 155 65 L 165 60 Z" fill="#fde68a" />
                <path d="M 155 65 L 153 67" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

                {/* Clock: 2.5h Wasted */}
                <circle cx="230" cy="42" r="24" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="230" cy="42" r="3" fill="#ea580c" />
                <line x1="230" y1="42" x2="230" y2="28" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="230" y1="42" x2="242" y2="42" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                <text x="212" y="74" fill="#c2410c" fontSize="6.5" fontWeight="bold">2.5 hrs LOST</text>
              </svg>
            </div>

            <ul className="comp-list">
              <li>
                <div className="bullet-icon icon-fail">
                  <Close size={16} />
                </div>
                <span>
                  <strong>Scribbling VINs on paper</strong> in the rain or while steering through rush hour traffic.
                </span>
              </li>
              <li>
                <div className="bullet-icon icon-fail">
                  <Close size={16} />
                </div>
                <span>
                  <strong>Wasted 45-minute dry runs</strong> caused by customer confusion over vehicle year or transponder type.
                </span>
              </li>
              <li>
                <div className="bullet-icon icon-fail">
                  <Close size={16} />
                </div>
                <span>
                  <strong>Exhausting late nights</strong> manually typing invoices into Excel after 12 hours on the road.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: KEY24 Way (Mint Green) */}
          <div className="comp-card card-new">
            <div className="comp-top">
              <span className="comp-badge badge-new">KEY24: AUTONOMOUS CRM</span>
              <span className="saved-badge">Zero Manual Data Entry</span>
            </div>

            <h3 className="comp-title">1-Click Dispatch Straight to Van</h3>

            {/* Vector Illustration: Modern Van Tablet & Instant Route */}
            <div className="comp-illustration-box box-new-ill" aria-hidden="true">
              <svg viewBox="0 0 280 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Sleek Mounted Tablet */}
                <rect x="20" y="8" width="140" height="70" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                <rect x="25" y="13" width="130" height="60" rx="4" fill="#1e293b" />

                {/* Map Screen on Tablet */}
                <path d="M 32 55 Q 70 30 110 45 T 150 25" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="110" cy="45" r="5" fill="#10b981" />
                <circle cx="110" cy="45" r="2" fill="#ffffff" />
                {/* Car Icon on Map */}
                <rect x="65" y="32" width="16" height="8" rx="2" fill="#60a5fa" />

                {/* Status Pill on Screen */}
                <rect x="32" y="17" width="62" height="12" rx="4" fill="rgba(16, 185, 129, 0.25)" />
                <text x="36" y="25" fill="#34d399" fontSize="5.5" fontWeight="bold">VAN 02 • DISPATCHED</text>

                {/* Wireless Radio Connection Waves */}
                <path d="M 172 35 Q 182 42 172 49" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 179 30 Q 193 42 179 54" stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Instant POS / Checkout Badge */}
                <g transform="translate(202, 12)">
                  <rect x="0" y="0" width="65" height="62" rx="12" fill="#d1fae5" stroke="#a7f3d0" strokeWidth="1.5" />
                  <circle cx="32.5" cy="24" r="14" fill="#10b981" />
                  {/* Checkmark */}
                  <path d="M 26.5 24 L 30.5 28 L 38.5 20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="14" y="47" fill="#065f46" fontSize="7" fontWeight="bold">PAID €210</text>
                  <text x="10" y="55" fill="#059669" fontSize="5">WhatsApp invoice</text>
                </g>
              </svg>
            </div>

            <ul className="comp-list">
              <li>
                <div className="bullet-icon icon-pass">
                  <Checkmark size={16} />
                </div>
                <span>
                  <strong>AI logs vehicle model, key condition &amp; GPS</strong> into the dispatch board during the phone call.
                </span>
              </li>
              <li>
                <div className="bullet-icon icon-pass">
                  <Checkmark size={16} />
                </div>
                <span>
                  <strong>1-Tap navigation &amp; transponder specs</strong> appear instantly on your service van’s tablet or phone.
                </span>
              </li>
              <li>
                <div className="bullet-icon icon-pass">
                  <Checkmark size={16} />
                </div>
                <span>
                  <strong>Instant SumUp/Zettle checkout</strong> and automated PDF receipt sent to the customer via WhatsApp.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Live Interactive Dispatch Card Mockup */}
        <div className="crm-live-board">
          <div className="board-topbar">
            <div className="board-brand">
              <DeliveryAdd size={18} />
              <span>LIVE DISPATCH BOARD • ACTIVE JOBS</span>
            </div>
            <div className="van-status-pill">
              <span className="status-ping"></span>
              <span>Van 02 (Frank Schneider) • En Route (ETA 14 min)</span>
            </div>
          </div>

          <div className="board-content">
            <div className="job-meta-grid">
              <div className="job-col">
                <span className="col-lbl">VEHICLE &amp; JOB TYPE</span>
                <strong className="col-val">2021 VW Golf VIII • Emergency Lockout</strong>
                <span className="col-sub">Keys locked in boot • Non-destructive pick</span>
              </div>

              <div className="job-col">
                <span className="col-lbl">ROADSIDE LOCATION</span>
                <strong className="col-val">Düsseldorf Hbf • Parkhaus P3, Deck 2</strong>
                <span className="col-sub">Live GPS Pin verified via WhatsApp</span>
              </div>

              <div className="job-col">
                <span className="col-lbl">CONFIRMED RATE</span>
                <strong className="col-val text-green">€210.00 Fixed</strong>
                <span className="col-sub">Pre-authorized by Voice Agent</span>
              </div>

              <div className="job-col col-actions">
                <button type="button" className="btn-board-nav">
                  <Location size={16} />
                  <span>Start Navigation (Waze/Maps)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .crm-section {
          padding: 5.5rem 1.5rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .crm-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .crm-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 3.5rem auto;
        }

        .crm-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #7c3aed;
          background: #f5f3ff;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }

        .crm-title {
          font-size: clamp(2.2rem, 3.5vw + 1rem, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 1rem 0;
        }

        .crm-subtitle {
          font-size: clamp(1.05rem, 1.2vw + 0.8rem, 1.25rem);
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .crm-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .comp-card {
          border-radius: 26px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.05);
        }

        .card-old {
          background: #fff7ed;
          border: 1px solid #fed7aa;
        }

        .card-new {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
        }

        .comp-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .comp-badge {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
        }

        .badge-old {
          color: #c2410c;
          background: #ffedd5;
        }

        .badge-new {
          color: #065f46;
          background: #d1fae5;
        }

        .lost-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #dc2626;
          background: #fee2e2;
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
        }

        .saved-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: #059669;
          background: #d1fae5;
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
        }

        .comp-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 1.25rem 0;
        }

        .comp-illustration-box {
          width: 100%;
          border-radius: 16px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .comp-illustration-box svg {
          width: 100%;
          max-width: 300px;
          height: auto;
          display: block;
        }

        .box-old-ill {
          background: #fff7ed;
          border: 1px dashed #fdba74;
        }

        .box-new-ill {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08);
        }

        .comp-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .comp-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.95rem;
          line-height: 1.5;
          color: #334155;
        }

        .bullet-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .icon-fail {
          background: #fecaca;
          color: #dc2626;
        }

        .icon-pass {
          background: #bbf7d0;
          color: #16a34a;
        }

        /* Live Board */
        .crm-live-board {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.05);
        }

        .board-topbar {
          background: #0f172a;
          color: #ffffff;
          padding: 1rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .board-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.8125rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #94a3b8;
        }

        .van-status-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.35rem 0.8rem;
          border-radius: 9999px;
          color: #e2e8f0;
        }

        .status-ping {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }

        .board-content {
          padding: 1.75rem;
        }

        .job-meta-grid {
          display: grid;
          grid-template-columns: 1.4fr 1.4fr 1fr 1fr;
          gap: 1.5rem;
          align-items: center;
        }

        .job-col {
          display: flex;
          flex-direction: column;
        }

        .col-lbl {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #64748b;
          margin-bottom: 0.35rem;
        }

        .col-val {
          font-size: 0.95rem;
          color: #0f172a;
          line-height: 1.35;
          margin-bottom: 0.2rem;
        }

        .col-sub {
          font-size: 0.8rem;
          color: #64748b;
        }

        .text-green {
          color: #059669;
        }

        .col-actions {
          display: flex;
          justify-content: flex-end;
        }

        .btn-board-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #2563eb;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.7rem 1.1rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: background 0.15s ease;
          white-space: nowrap;
        }

        .btn-board-nav:hover {
          background: #1d4ed8;
        }

        @media (max-width: 1024px) {
          .crm-comparison-grid {
            grid-template-columns: 1fr;
          }
          .job-meta-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .col-actions {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
