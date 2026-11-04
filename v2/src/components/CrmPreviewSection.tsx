import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
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
    <Key24LocalizedElement as="section" className="crm-section" aria-labelledby="crm-preview-heading">
      <Key24LocalizedElement as="div" className="carbon-container">
        <Key24LocalizedElement as="div" className="crm-header">
          <Key24LocalizedElement as="div">
            <Key24LocalizedElement as="span" className="crm-eyebrow">{eyebrow}</Key24LocalizedElement>
            <Key24LocalizedElement as="h2" id="crm-preview-heading" className="crm-title">
              {title}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="crm-lead">{lead}</Key24LocalizedElement>
          </Key24LocalizedElement>
          <Key24LocalizedElement as="div" className="crm-header-cta">
            <Key24LocalizedLink href="/platform/crm" className="crm-explore-btn">
              <Key24LocalizedElement as="span">Explore full CRM capabilities</Key24LocalizedElement>
              <ArrowRight size={18} />
            </Key24LocalizedLink>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* Workspace Interactive Navigation Tabs (From User Screenshots) */}
        <Key24LocalizedElement as="div" className="workspace-tabs-bar" role="tablist" aria-label="CRM Arbeitsbereiche">
          <Key24LocalizedElement as="button"
            type="button"
            className={`ws-tab ${workspaceTab === 'board' ? 'is-active' : ''}`}
            onClick={() => setWorkspaceTab('board')}
            role="tab"
            aria-selected={workspaceTab === 'board'}
          >
            <Key24LocalizedElement as="span">01 DISPATCH BOARD</Key24LocalizedElement>
          </Key24LocalizedElement>
          <Key24LocalizedElement as="button"
            type="button"
            className={`ws-tab ${workspaceTab === 'conversations' ? 'is-active' : ''}`}
            onClick={() => setWorkspaceTab('conversations')}
            role="tab"
            aria-selected={workspaceTab === 'conversations'}
          >
            <Key24LocalizedElement as="span">02 CONVERSATIONS</Key24LocalizedElement>
          </Key24LocalizedElement>
          <Key24LocalizedElement as="button"
            type="button"
            className={`ws-tab ${workspaceTab === 'stock' ? 'is-active' : ''}`}
            onClick={() => setWorkspaceTab('stock')}
            role="tab"
            aria-selected={workspaceTab === 'stock'}
          >
            <Key24LocalizedElement as="span">03 STOCK & INVENTORY</Key24LocalizedElement>
          </Key24LocalizedElement>
          <Key24LocalizedElement as="button"
            type="button"
            className={`ws-tab ${workspaceTab === 'agenda' ? 'is-active' : ''}`}
            onClick={() => setWorkspaceTab('agenda')}
            role="tab"
            aria-selected={workspaceTab === 'agenda'}
          >
            <Key24LocalizedElement as="span">04 AGENDA & CALENDAR</Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* High-Fidelity Sanitized Dispatch Board Interface */}
        <Key24LocalizedElement as="div" className="board-mockup">
          <Key24LocalizedElement as="div" className="board-topbar">
            <Key24LocalizedElement as="div" className="board-status">
              <Key24LocalizedElement as="span" className="live-dot"></Key24LocalizedElement>
              <Key24LocalizedElement as="strong">KEY24 DISPATCH BOARD — LIVE V2.4</Key24LocalizedElement>
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="board-metrics-strip">
              <Key24LocalizedElement as="span" className="metric-pill">Active Technicians: 4</Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="metric-pill">Average Triage Time: 48s</Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="metric-pill">Today's Jobs: 20</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          {/* Tab 1: Dispatch Board View */}
          {workspaceTab === 'board' && (
            <Key24LocalizedElement as="div" className="board-columns-grid">
              {/* Column 1: Inbound Triage */}
              <Key24LocalizedElement as="div" className="board-col">
                <Key24LocalizedElement as="div" className="col-header">
                  <Key24LocalizedElement as="span" className="col-title">01 INTAKE & TRIAGE</Key24LocalizedElement>
                  <Key24LocalizedElement as="span" className="col-badge badge-blue">2 New</Key24LocalizedElement>
                </Key24LocalizedElement>
                <Key24LocalizedElement as="div" className="job-ticket">
                  <Key24LocalizedElement as="div" className="ticket-top">
                    <Key24LocalizedElement as="span" className="car-tag">VW Golf VIII (2021)</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="time-tag"><Time size={12} /> 2m ago</Key24LocalizedElement>
                  </Key24LocalizedElement>
                  <Key24LocalizedElement as="strong" className="ticket-title">Emergency Lockout — Keys on Front Seat</Key24LocalizedElement>
                  <Key24LocalizedElement as="p" className="ticket-location"><Location size={14} /> City Centre Parking Level 3</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="ticket-meta-tag">Price Quoted: €180 (Customer Agreed)</Key24LocalizedElement>
                </Key24LocalizedElement>

                <Key24LocalizedElement as="div" className="job-ticket">
                  <Key24LocalizedElement as="div" className="ticket-top">
                    <Key24LocalizedElement as="span" className="car-tag">Ford Transit Custom (2019)</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="time-tag"><Time size={12} /> 8m ago</Key24LocalizedElement>
                  </Key24LocalizedElement>
                  <Key24LocalizedElement as="strong" className="ticket-title">All Keys Lost — Broken Key in Ignition</Key24LocalizedElement>
                  <Key24LocalizedElement as="p" className="ticket-location"><Location size={14} /> Industrial Park East</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="ticket-meta-tag">Price Quoted: €320 (Requires Laser Cut)</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>

              {/* Column 2: Dispatched */}
              <Key24LocalizedElement as="div" className="board-col">
                <Key24LocalizedElement as="div" className="col-header">
                  <Key24LocalizedElement as="span" className="col-title">02 DISPATCHED & EN ROUTE</Key24LocalizedElement>
                  <Key24LocalizedElement as="span" className="col-badge badge-amber">2 Vans</Key24LocalizedElement>
                </Key24LocalizedElement>
                <Key24LocalizedElement as="div" className="job-ticket is-dispatched">
                  <Key24LocalizedElement as="div" className="ticket-top">
                    <Key24LocalizedElement as="span" className="car-tag">BMW 320d (2018)</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="eta-tag">ETA 12 mins</Key24LocalizedElement>
                  </Key24LocalizedElement>
                  <Key24LocalizedElement as="strong" className="ticket-title">Key Fob Not Recognized / CAS4</Key24LocalizedElement>
                  <Key24LocalizedElement as="p" className="ticket-location"><Location size={14} /> Retail Park West</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="tech-assigned">
                    <DeliveryAdd size={14} />
                    <Key24LocalizedElement as="span">Assigned: Marcus (Van 2)</Key24LocalizedElement>
                  </Key24LocalizedElement>
                </Key24LocalizedElement>

                <Key24LocalizedElement as="div" className="job-ticket is-dispatched">
                  <Key24LocalizedElement as="div" className="ticket-top">
                    <Key24LocalizedElement as="span" className="car-tag">Opel Corsa F (2021)</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="eta-tag">ETA 24 mins</Key24LocalizedElement>
                  </Key24LocalizedElement>
                  <Key24LocalizedElement as="strong" className="ticket-title">Locked Out — Keys in Trunk</Key24LocalizedElement>
                  <Key24LocalizedElement as="p" className="ticket-location"><Location size={14} /> Supermarket Parking North</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="tech-assigned">
                    <DeliveryAdd size={14} />
                    <Key24LocalizedElement as="span">Assigned: Stefan (Van 1)</Key24LocalizedElement>
                  </Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>

              {/* Column 3: On-Site */}
              <Key24LocalizedElement as="div" className="board-col">
                <Key24LocalizedElement as="div" className="col-header">
                  <Key24LocalizedElement as="span" className="col-title">03 ON-SITE IN PROGRESS</Key24LocalizedElement>
                  <Key24LocalizedElement as="span" className="col-badge badge-purple">2 Active</Key24LocalizedElement>
                </Key24LocalizedElement>
                <Key24LocalizedElement as="div" className="job-ticket is-progress">
                  <Key24LocalizedElement as="div" className="ticket-top">
                    <Key24LocalizedElement as="span" className="car-tag">Audi A6 (2017)</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="status-tag">Lishi Picking</Key24LocalizedElement>
                  </Key24LocalizedElement>
                  <Key24LocalizedElement as="strong" className="ticket-title">Non-Destructive Door Opening</Key24LocalizedElement>
                  <Key24LocalizedElement as="p" className="ticket-location"><Location size={14} /> Residential Driveway</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="ticket-note">Lock decoded successfully (HU66)</Key24LocalizedElement>
                </Key24LocalizedElement>

                <Key24LocalizedElement as="div" className="job-ticket is-progress">
                  <Key24LocalizedElement as="div" className="ticket-top">
                    <Key24LocalizedElement as="span" className="car-tag">Renault Trafic (2020)</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="status-tag">OBD Learning</Key24LocalizedElement>
                  </Key24LocalizedElement>
                  <Key24LocalizedElement as="strong" className="ticket-title">Transponder Fob Programming</Key24LocalizedElement>
                  <Key24LocalizedElement as="p" className="ticket-location"><Location size={14} /> Commercial Fleet Depot</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="ticket-note">PIN code extracted via diagnostic link</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>

              {/* Column 4: Completed */}
              <Key24LocalizedElement as="div" className="board-col">
                <Key24LocalizedElement as="div" className="col-header">
                  <Key24LocalizedElement as="span" className="col-title">04 COMPLETED & INVOICED</Key24LocalizedElement>
                  <Key24LocalizedElement as="span" className="col-badge badge-green">14 Done</Key24LocalizedElement>
                </Key24LocalizedElement>
                <Key24LocalizedElement as="div" className="job-ticket is-completed">
                  <Key24LocalizedElement as="div" className="ticket-top">
                    <Key24LocalizedElement as="span" className="car-tag">Mercedes C220 (2020)</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="paid-tag"><Checkmark size={12} /> Paid €240</Key24LocalizedElement>
                  </Key24LocalizedElement>
                  <Key24LocalizedElement as="strong" className="ticket-title">Spare Smart Key Programmed</Key24LocalizedElement>
                  <Key24LocalizedElement as="p" className="ticket-location"><Location size={14} /> Service Centre</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="ticket-success">Invoice #KY-8942 synced & sent</Key24LocalizedElement>
                </Key24LocalizedElement>

                <Key24LocalizedElement as="div" className="job-ticket is-completed">
                  <Key24LocalizedElement as="div" className="ticket-top">
                    <Key24LocalizedElement as="span" className="car-tag">Skoda Octavia (2021)</Key24LocalizedElement>
                    <Key24LocalizedElement as="span" className="paid-tag"><Checkmark size={12} /> Paid €185</Key24LocalizedElement>
                  </Key24LocalizedElement>
                  <Key24LocalizedElement as="strong" className="ticket-title">Emergency Trunk Entry Completed</Key24LocalizedElement>
                  <Key24LocalizedElement as="p" className="ticket-location"><Location size={14} /> Railway Station P+R</Key24LocalizedElement>
                  <Key24LocalizedElement as="div" className="ticket-success">Invoice #KY-8941 signed by driver</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          )}

          {/* Tab 2: Conversations View (User Image 4) */}
          {workspaceTab === 'conversations' && (
            <Key24LocalizedElement as="div" className="tab-media-view">
              <Key24LocalizedElement as="div" className="tab-media-header">
                <Key24LocalizedElement as="strong">CONVERSATIONS — ENQUIRY CONTEXT</Key24LocalizedElement>
                <Key24LocalizedElement as="span" className="tab-media-badge">Echtzeit-Synchronisiert</Key24LocalizedElement>
              </Key24LocalizedElement>
              <Key24LocalizedElement as="img"
                src="/images/user-crm-conversations.png"
                alt="KEY24 CRM Anfragen und Kundenchat - VW Golf Zweitschlüssel"
                className="ws-screenshot-img"
              />
            </Key24LocalizedElement>
          )}

          {/* Tab 3: Stock View (User Image 2) */}
          {workspaceTab === 'stock' && (
            <Key24LocalizedElement as="div" className="tab-media-view">
              <Key24LocalizedElement as="div" className="tab-media-header">
                <Key24LocalizedElement as="strong">STOCK — DEPOT & VANS (PARTS & PURCHASE COSTS)</Key24LocalizedElement>
                <Key24LocalizedElement as="span" className="tab-media-badge">Live Van-Inventar</Key24LocalizedElement>
              </Key24LocalizedElement>
              <Key24LocalizedElement as="img"
                src="/images/user-crm-stock.png"
                alt="KEY24 CRM Lagerbestand - HU66, ID48 Transponder, CR2032 Batterien"
                className="ws-screenshot-img"
              />
            </Key24LocalizedElement>
          )}

          {/* Tab 4: Agenda View (User Image 3 Calendar) */}
          {workspaceTab === 'agenda' && (
            <Key24LocalizedElement as="div" className="tab-media-view">
              <Key24LocalizedElement as="div" className="tab-media-header">
                <Key24LocalizedElement as="strong">AGENDA — VEHICLE-KEY JOBS (WEEK VIEW)</Key24LocalizedElement>
                <Key24LocalizedElement as="span" className="tab-media-badge">3 Mobile Units</Key24LocalizedElement>
              </Key24LocalizedElement>
              <Key24LocalizedElement as="img"
                src="/images/user-product-film.png"
                alt="KEY24 CRM Wochenkalender und Einsatzfahrzeug-Disposition"
                className="ws-screenshot-img"
              />
            </Key24LocalizedElement>
          )}
        </Key24LocalizedElement>
      </Key24LocalizedElement>

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
    </Key24LocalizedElement>
  );
};
