import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Checkmark, DeliveryAdd, Location, Time, Chat, Calendar, InventoryManagement } from '@carbon/icons-react';

interface CrmPreviewProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  columns?: {
    title: string;
    count: string;
    sample: string;
  }[];
}

export const CrmPreviewSection: React.FC<CrmPreviewProps> = ({
  eyebrow = "PROPRIETARY LOCKSMITH PLATFORM",
  title = "KEY24 CRM: Built for the van, not the corporate office",
  lead = "No bloated paperwork. A high-contrast, lightning-fast dispatch board designed specifically for technicians on the road.",
  columns = [
    { title: "New Inbound Leads", count: "3 Active", sample: "2021 VW Golf - Spare Key - Birmingham B1" },
    { title: "Dispatched / On Route", count: "2 Jobs", sample: "2018 BMW 3 Series - All Keys Lost - Manchester M4" },
    { title: "In Progress On-Site", count: "1 Job", sample: "2022 Mercedes A-Class - Lockout - Leeds LS1" },
    { title: "Completed & Invoiced", count: "14 Today", sample: "Payment received via card terminal sync" }
  ]
}) => {
  const [workspaceTab, setWorkspaceTab] = useState<'board' | 'conversations' | 'stock' | 'agenda'>('board');

  return (
    <section className="crm-section" aria-labelledby="crm-preview-heading">
      <div className="carbon-container">
        <div className="crm-header">
          <div>
            <span className="crm-eyebrow">{eyebrow}</span>
            <h2 id="crm-preview-heading" className="crm-title">
              {title}
            </h2>
            <p className="crm-lead">{lead}</p>
          </div>
          <div className="crm-header-cta">
            <Link href="/platform/crm" className="crm-explore-btn">
              <span>Explore full CRM capabilities</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Workspace Interactive Navigation Tabs (From User Screenshots) */}
        <div className="workspace-tabs-bar" role="tablist" aria-label="CRM Arbeitsbereiche">
          <button
            type="button"
            className={`ws-tab ${workspaceTab === 'board' ? 'is-active' : ''}`}
            onClick={() => setWorkspaceTab('board')}
            role="tab"
            aria-selected={workspaceTab === 'board'}
          >
            <span>01 DISPATCH BOARD</span>
          </button>
          <button
            type="button"
            className={`ws-tab ${workspaceTab === 'conversations' ? 'is-active' : ''}`}
            onClick={() => setWorkspaceTab('conversations')}
            role="tab"
            aria-selected={workspaceTab === 'conversations'}
          >
            <span>02 CONVERSATIONS</span>
          </button>
          <button
            type="button"
            className={`ws-tab ${workspaceTab === 'stock' ? 'is-active' : ''}`}
            onClick={() => setWorkspaceTab('stock')}
            role="tab"
            aria-selected={workspaceTab === 'stock'}
          >
            <span>03 STOCK & INVENTORY</span>
          </button>
          <button
            type="button"
            className={`ws-tab ${workspaceTab === 'agenda' ? 'is-active' : ''}`}
            onClick={() => setWorkspaceTab('agenda')}
            role="tab"
            aria-selected={workspaceTab === 'agenda'}
          >
            <span>04 AGENDA & CALENDAR</span>
          </button>
        </div>

        {/* High-Fidelity Sanitized Dispatch Board Interface */}
        <div className="board-mockup">
          <div className="board-topbar">
            <div className="board-status">
              <span className="live-dot"></span>
              <strong>KEY24 DISPATCH BOARD — LIVE V2.4</strong>
            </div>
            <div className="board-metrics-strip">
              <span className="metric-pill">Active Technicians: 4</span>
              <span className="metric-pill">Average Triage Time: 48s</span>
              <span className="metric-pill">Today's Jobs: 20</span>
            </div>
          </div>

          {/* Tab 1: Dispatch Board View */}
          {workspaceTab === 'board' && (
            <div className="board-columns-grid">
              {/* Column 1: Inbound Triage */}
              <div className="board-col">
                <div className="col-header">
                  <span className="col-title">01 INTAKE & TRIAGE</span>
                  <span className="col-badge badge-blue">2 New</span>
                </div>
                <div className="job-ticket">
                  <div className="ticket-top">
                    <span className="car-tag">VW Golf VIII (2021)</span>
                    <span className="time-tag"><Time size={12} /> 2m ago</span>
                  </div>
                  <strong className="ticket-title">Emergency Lockout — Keys on Front Seat</strong>
                  <p className="ticket-location"><Location size={14} /> City Centre Parking Level 3</p>
                  <div className="ticket-meta-tag">Price Quoted: €180 (Customer Agreed)</div>
                </div>

                <div className="job-ticket">
                  <div className="ticket-top">
                    <span className="car-tag">Ford Transit Custom (2019)</span>
                    <span className="time-tag"><Time size={12} /> 8m ago</span>
                  </div>
                  <strong className="ticket-title">All Keys Lost — Broken Key in Ignition</strong>
                  <p className="ticket-location"><Location size={14} /> Industrial Park East</p>
                  <div className="ticket-meta-tag">Price Quoted: €320 (Requires Laser Cut)</div>
                </div>
              </div>

              {/* Column 2: Dispatched */}
              <div className="board-col">
                <div className="col-header">
                  <span className="col-title">02 DISPATCHED & EN ROUTE</span>
                  <span className="col-badge badge-amber">2 Vans</span>
                </div>
                <div className="job-ticket is-dispatched">
                  <div className="ticket-top">
                    <span className="car-tag">BMW 320d (2018)</span>
                    <span className="eta-tag">ETA 12 mins</span>
                  </div>
                  <strong className="ticket-title">Key Fob Not Recognized / CAS4</strong>
                  <p className="ticket-location"><Location size={14} /> Retail Park West</p>
                  <div className="tech-assigned">
                    <DeliveryAdd size={14} />
                    <span>Assigned: Marcus (Van 2)</span>
                  </div>
                </div>

                <div className="job-ticket is-dispatched">
                  <div className="ticket-top">
                    <span className="car-tag">Opel Corsa F (2021)</span>
                    <span className="eta-tag">ETA 24 mins</span>
                  </div>
                  <strong className="ticket-title">Locked Out — Keys in Trunk</strong>
                  <p className="ticket-location"><Location size={14} /> Supermarket Parking North</p>
                  <div className="tech-assigned">
                    <DeliveryAdd size={14} />
                    <span>Assigned: Stefan (Van 1)</span>
                  </div>
                </div>
              </div>

              {/* Column 3: On-Site */}
              <div className="board-col">
                <div className="col-header">
                  <span className="col-title">03 ON-SITE IN PROGRESS</span>
                  <span className="col-badge badge-purple">2 Active</span>
                </div>
                <div className="job-ticket is-progress">
                  <div className="ticket-top">
                    <span className="car-tag">Audi A6 (2017)</span>
                    <span className="status-tag">Lishi Picking</span>
                  </div>
                  <strong className="ticket-title">Non-Destructive Door Opening</strong>
                  <p className="ticket-location"><Location size={14} /> Residential Driveway</p>
                  <div className="ticket-note">Lock decoded successfully (HU66)</div>
                </div>

                <div className="job-ticket is-progress">
                  <div className="ticket-top">
                    <span className="car-tag">Renault Trafic (2020)</span>
                    <span className="status-tag">OBD Learning</span>
                  </div>
                  <strong className="ticket-title">Transponder Fob Programming</strong>
                  <p className="ticket-location"><Location size={14} /> Commercial Fleet Depot</p>
                  <div className="ticket-note">PIN code extracted via diagnostic link</div>
                </div>
              </div>

              {/* Column 4: Completed */}
              <div className="board-col">
                <div className="col-header">
                  <span className="col-title">04 COMPLETED & INVOICED</span>
                  <span className="col-badge badge-green">14 Done</span>
                </div>
                <div className="job-ticket is-completed">
                  <div className="ticket-top">
                    <span className="car-tag">Mercedes C220 (2020)</span>
                    <span className="paid-tag"><Checkmark size={12} /> Paid €240</span>
                  </div>
                  <strong className="ticket-title">Spare Smart Key Programmed</strong>
                  <p className="ticket-location"><Location size={14} /> Service Centre</p>
                  <div className="ticket-success">Invoice #KY-8942 synced & sent</div>
                </div>

                <div className="job-ticket is-completed">
                  <div className="ticket-top">
                    <span className="car-tag">Skoda Octavia (2021)</span>
                    <span className="paid-tag"><Checkmark size={12} /> Paid €185</span>
                  </div>
                  <strong className="ticket-title">Emergency Trunk Entry Completed</strong>
                  <p className="ticket-location"><Location size={14} /> Railway Station P+R</p>
                  <div className="ticket-success">Invoice #KY-8941 signed by driver</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Conversations View (User Image 4) */}
          {workspaceTab === 'conversations' && (
            <div className="tab-media-view">
              <div className="tab-media-header">
                <strong>CONVERSATIONS — ENQUIRY CONTEXT</strong>
                <span className="tab-media-badge">Echtzeit-Synchronisiert</span>
              </div>
              <img
                src="/images/user-crm-conversations.png"
                alt="KEY24 CRM Anfragen und Kundenchat - VW Golf Zweitschlüssel"
                className="ws-screenshot-img"
              />
            </div>
          )}

          {/* Tab 3: Stock View (User Image 2) */}
          {workspaceTab === 'stock' && (
            <div className="tab-media-view">
              <div className="tab-media-header">
                <strong>STOCK — DEPOT & VANS (PARTS & PURCHASE COSTS)</strong>
                <span className="tab-media-badge">Live Van-Inventar</span>
              </div>
              <img
                src="/images/user-crm-stock.png"
                alt="KEY24 CRM Lagerbestand - HU66, ID48 Transponder, CR2032 Batterien"
                className="ws-screenshot-img"
              />
            </div>
          )}

          {/* Tab 4: Agenda View (User Image 3 Calendar) */}
          {workspaceTab === 'agenda' && (
            <div className="tab-media-view">
              <div className="tab-media-header">
                <strong>AGENDA — VEHICLE-KEY JOBS (WEEK VIEW)</strong>
                <span className="tab-media-badge">3 Mobile Units</span>
              </div>
              <img
                src="/images/user-product-film.png"
                alt="KEY24 CRM Wochenkalender und Einsatzfahrzeug-Disposition"
                className="ws-screenshot-img"
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .crm-section {
          padding: 5.5rem 0;
          background-color: var(--cds-background);
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .crm-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .crm-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.5rem;
        }

        .crm-title {
          font-size: clamp(2rem, 3vw + 0.8rem, 2.875rem);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cds-text-primary);
        }

        .crm-lead {
          font-size: 1.125rem;
          color: var(--cds-text-secondary);
          margin-top: 0.5rem;
          max-width: 720px;
        }

        :global(.crm-explore-btn) {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border: 1px solid var(--cds-interactive-01);
          color: var(--cds-interactive-01);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color var(--carbon-motion-duration-fast),
                      color var(--carbon-motion-duration-fast);
        }

        :global(.crm-explore-btn:hover) {
          background-color: var(--cds-interactive-01);
          color: #ffffff;
        }

        /* Workspace Tabs Bar (From User Screenshots) */
        .workspace-tabs-bar {
          display: flex;
          gap: 0;
          background-color: #f4f4f4;
          border-bottom: 2px solid var(--cds-border-subtle);
          margin-bottom: 0;
          overflow-x: auto;
        }

        .ws-tab {
          padding: 0.85rem 1.5rem;
          font-family: inherit;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--cds-text-secondary);
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: background-color var(--carbon-motion-duration-fast),
                      color var(--carbon-motion-duration-fast);
          white-space: nowrap;
        }

        .ws-tab:hover {
          color: var(--cds-text-primary);
          background-color: #ebebeb;
        }

        .ws-tab.is-active {
          color: var(--cds-interactive-01);
          background-color: #ffffff;
          border-bottom-color: var(--cds-interactive-01);
        }

        /* Mockup Board */
        .board-mockup {
          background-color: #ffffff;
          border: 1px solid var(--cds-border-subtle);
          border-top: none;
          padding: 1.5rem;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
        }

        .tab-media-view {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background-color: #f4f4f4;
          border: 1px solid var(--cds-border-subtle);
          padding: 1.25rem;
        }

        .tab-media-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8125rem;
          color: var(--cds-text-primary);
        }

        .tab-media-badge {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #0e8a16;
          background-color: #defbe6;
          padding: 0.2rem 0.6rem;
          border: 1px solid #a7f3d0;
        }

        .ws-screenshot-img {
          width: 100%;
          height: auto;
          display: block;
          border: 1px solid var(--cds-border-subtle);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
        }

        .board-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #ffffff;
          padding: 0.85rem 1.25rem;
          border: 1px solid var(--cds-border-subtle);
          margin-bottom: 1.5rem;
        }

        .board-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--cds-text-primary);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #0e8a16;
        }

        .board-metrics-strip {
          display: flex;
          gap: 0.75rem;
        }

        .metric-pill {
          font-size: 0.75rem;
          font-weight: 600;
          background-color: var(--cds-layer-01);
          border: 1px solid var(--cds-border-subtle);
          padding: 0.25rem 0.65rem;
          color: var(--cds-text-primary);
        }

        .board-columns-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          align-items: stretch;
        }

        .board-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
        }

        .col-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 2px solid var(--cds-border-subtle);
        }

        .col-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--cds-text-secondary);
        }

        .col-badge {
          font-size: 0.6875rem;
          font-weight: 600;
          padding: 0.15rem 0.45rem;
        }

        .badge-blue { background: #f4ede4; color: #541554; }
        .badge-amber { background: #fef3d6; color: #b28600; }
        .badge-purple { background: #f6f2ff; color: #754575; }
        .badge-green { background: #defbe6; color: #0e8a16; }

        .job-ticket {
          background-color: #ffffff;
          border: 1px solid var(--cds-border-subtle);
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 154px;
          gap: 0.45rem;
          transition: border-color var(--carbon-motion-duration-fast);
        }

        .job-ticket:hover {
          border-color: var(--cds-interactive-01);
        }

        .ticket-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .car-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--cds-interactive-01);
        }

        .time-tag, .eta-tag, .status-tag, .paid-tag {
          font-size: 0.6875rem;
          display: flex;
          align-items: center;
          gap: 0.2rem;
          color: var(--cds-text-secondary);
        }

        .paid-tag {
          color: #0e8a16;
          font-weight: 600;
        }

        .ticket-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          line-height: 1.3;
        }

        .ticket-location {
          font-size: 0.75rem;
          color: var(--cds-text-secondary);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .ticket-meta-tag, .ticket-note, .ticket-success {
          font-size: 0.6875rem;
          padding: 0.35rem 0.5rem;
          margin-top: 0.35rem;
          background-color: var(--cds-layer-01);
          color: var(--cds-text-secondary);
        }

        .ticket-success {
          background-color: #defbe6;
          color: #0e8a16;
          font-weight: 500;
        }

        .tech-assigned {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.6875rem;
          color: #b28600;
          font-weight: 500;
          margin-top: 0.35rem;
        }

        @media (max-width: 1200px) {
          .board-columns-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .crm-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .board-columns-grid {
            grid-template-columns: 1fr;
          }

          .board-topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};
