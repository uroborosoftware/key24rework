import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Checkmark, Grid, Add, Chat } from '@carbon/icons-react';

interface TeamWorkflowSectionProps {
  isGerman?: boolean;
}

export const TeamWorkflowSection: React.FC<TeamWorkflowSectionProps> = ({ isGerman = true }) => {
  return (
    <Key24LocalizedElement as="section" className="team-workflow-section" aria-label="Team und Arbeitsabläufe">
      <Key24LocalizedElement as="div" className="carbon-container">
        {/* Block A: Team Overview (From User Screenshot) */}
        <Key24LocalizedElement as="div" className="team-overview-strip">
          <Key24LocalizedElement as="div" className="team-left-col">
            <Key24LocalizedElement as="span" className="section-eyebrow">KEY24 / TEAM</Key24LocalizedElement>
            <Key24LocalizedElement as="h2" className="team-title">
              {isGerman
                ? 'Ein klarer Überblick über die Techniker im Einsatz.'
                : 'A clear view of the people doing the work.'}
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          <Key24LocalizedElement as="div" className="team-mid-col">
            <Key24LocalizedElement as="p" className="team-desc">
              {isGerman
                ? 'Verwalten Sie Techniker, Einsatzgebiete und Zugriffsrechte. Alle operativen Daten bleiben direkt im CRM verfügbar.'
                : 'Organise technicians, their working areas and access. Keep operational information in the CRM, where your team can use it.'}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="ul" className="team-check-list">
              <Key24LocalizedElement as="li">
                <Checkmark size={16} className="check-blue" />
                <Key24LocalizedElement as="span">{isGerman ? 'Organisation von Teams & Einsatzgebieten' : 'Team and service area organisation'}</Key24LocalizedElement>
              </Key24LocalizedElement>
              <Key24LocalizedElement as="li">
                <Checkmark size={16} className="check-blue" />
                <Key24LocalizedElement as="span">{isGerman ? 'Techniker-Einladungen & Rechteverwaltung' : 'Technician access and invitation management'}</Key24LocalizedElement>
              </Key24LocalizedElement>
              <Key24LocalizedElement as="li">
                <Checkmark size={16} className="check-blue" />
                <Key24LocalizedElement as="span">{isGerman ? 'Zuweisungen direkt im Kalender sichtbar' : 'Assignments visible in the agenda'}</Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          <Key24LocalizedElement as="div" className="team-right-col">
            <Key24LocalizedLink href="/demo" className="btn-workflow">
              <Key24LocalizedElement as="span">{isGerman ? 'Ablauf ansehen' : 'Explore the workflow'}</Key24LocalizedElement>
              <ArrowRight size={18} />
            </Key24LocalizedLink>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* Hairline Divider */}
        <Key24LocalizedElement as="div" className="section-hairline"></Key24LocalizedElement>

        {/* Block B: How You Work (3 Columns with icons) */}
        <Key24LocalizedElement as="div" className="how-work-block">
          <Key24LocalizedElement as="div" className="how-work-header">
            <Key24LocalizedElement as="div">
              <Key24LocalizedElement as="span" className="section-eyebrow">KEY24 / HOW YOU WORK</Key24LocalizedElement>
              <Key24LocalizedElement as="h3" className="how-work-title">
                {isGerman
                  ? 'Souveränität beginnt mit einem klaren Blick auf das Produkt.'
                  : 'Confidence starts with a clear view of the product.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="how-work-lead">
              <Key24LocalizedElement as="p">
                {isGerman
                  ? 'Praxisnahe Workflows speziell für Kfz-Schlüsseldienste. Entscheiden Sie selbst, welche Ansichten am besten zu Ihrem Alltag passen.'
                  : 'Practical workflows for a specific trade. Explore the product views and decide what fits the way your business works.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          <Key24LocalizedElement as="div" className="three-col-workflow-grid">
            {/* Col 1 */}
            <Key24LocalizedElement as="div" className="workflow-col">
              <Key24LocalizedElement as="div" className="col-icon-wrap">
                <Grid size={24} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="h4" className="col-headline">
                {isGerman ? 'Arbeit vorausschauend planen' : 'Plan the work'}
              </Key24LocalizedElement>
              <Key24LocalizedElement as="p" className="col-body">
                {isGerman
                  ? 'Kalender, Aufträge und mobile Einheiten in einer einzigen Arbeitsansicht.'
                  : 'Agenda, jobs and mobile units in one working view.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Col 2 */}
            <Key24LocalizedElement as="div" className="workflow-col">
              <Key24LocalizedElement as="div" className="col-icon-wrap">
                <Add size={24} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="h4" className="col-headline">
                {isGerman ? 'Ersatzteile & Rohlinge im Blick' : 'Know your parts'}
              </Key24LocalizedElement>
              <Key24LocalizedElement as="p" className="col-body">
                {isGerman
                  ? 'Depot- und Van-Bestand mit Stückzahlen und Einkaufspreisen in Echtzeit.'
                  : 'Depot and van stock with quantities and purchase.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Col 3 */}
            <Key24LocalizedElement as="div" className="workflow-col">
              <Key24LocalizedElement as="div" className="col-icon-wrap">
                <Chat size={24} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="h4" className="col-headline">
                {isGerman ? 'Verwaltung nahtlos verbinden' : 'Connect the administration'}
              </Key24LocalizedElement>
              <Key24LocalizedElement as="p" className="col-body">
                {isGerman
                  ? 'Gesprächskontext, Fahrzeugdaten und Rechnungsstatus an einem zentralen Ort.'
                  : 'Conversation context and invoice status around.'}
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* Hairline Divider */}
        <Key24LocalizedElement as="div" className="section-hairline"></Key24LocalizedElement>

        {/* Block C: Illustrative Workflow (From User Screenshot) */}
        <Key24LocalizedElement as="div" className="illustrative-workflow-strip">
          <Key24LocalizedElement as="div" className="illustrative-left">
            <Key24LocalizedElement as="span" className="section-eyebrow">ILLUSTRATIVE WORKFLOW</Key24LocalizedElement>
            <Key24LocalizedElement as="h3" className="illustrative-headline">
              {isGerman
                ? 'Die richtige Nachricht. Im richtigen Moment.'
                : 'The right message. At the right moment.'}
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          <Key24LocalizedElement as="div" className="illustrative-right">
            <Key24LocalizedElement as="div" className="sample-scenario-card">
              <Key24LocalizedElement as="span" className="scenario-tag">KEY24 / Sample scenario</Key24LocalizedElement>
              <Key24LocalizedElement as="p" className="scenario-quote">
                “{isGerman
                  ? 'Vielen Dank für Ihre Anfrage. Ein Techniker prüft die Fahrzeugdaten und meldet sich sofort mit dem Ankunftsfenster bei Ihnen.'
                  : 'Thank you for your enquiry. A team member will review the details and get back to you about the next step.'}”
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="scenario-footnote">
                Sample wording — only in an appropriate, agreed workflow
              </Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx>{`
        .team-workflow-section {
          padding: 5rem 0;
          background-color: #ffffff;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .section-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
          display: block;
          margin-bottom: 0.5rem;
        }

        /* Block A: Team Strip */
        .team-overview-strip {
          display: grid;
          grid-template-columns: 1.15fr 1.35fr auto;
          gap: 2.5rem;
          align-items: center;
          padding-bottom: 3.5rem;
        }

        .team-title {
          font-size: clamp(1.85rem, 2.5vw + 0.5rem, 2.5rem);
          font-weight: 300;
          line-height: 1.2;
          color: var(--cds-text-primary);
          letter-spacing: -0.015em;
        }

        .team-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
          margin-bottom: 1rem;
        }

        .team-check-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .team-check-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--cds-text-primary);
        }

        :global(.check-blue) {
          color: var(--cds-interactive-01);
        }

        :global(.btn-workflow) {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background-color: var(--cds-interactive-01);
          color: #ffffff !important;
          padding: 0.85rem 1.5rem;
          font-size: 0.9375rem;
          font-weight: 500;
          white-space: nowrap;
          text-decoration: none;
          transition: background-color var(--carbon-motion-duration-fast);
        }

        :global(.btn-workflow:hover) {
          background-color: var(--cds-interactive-01-hover);
        }

        .section-hairline {
          width: 100%;
          height: 1px;
          background-color: var(--cds-border-subtle);
        }

        /* Block B: How Work */
        .how-work-block {
          padding: 3.5rem 0;
        }

        .how-work-header {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: flex-end;
          margin-bottom: 3rem;
        }

        .how-work-title {
          font-size: clamp(1.75rem, 2.4vw + 0.5rem, 2.35rem);
          font-weight: 300;
          line-height: 1.2;
          color: var(--cds-text-primary);
          letter-spacing: -0.015em;
        }

        .how-work-lead {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
        }

        .three-col-workflow-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          align-items: stretch;
        }

        .workflow-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 2px solid var(--cds-border-subtle);
          height: 100%;
        }

        .col-icon-wrap {
          color: var(--cds-interactive-01);
          margin-bottom: 0.5rem;
        }

        .col-headline {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--cds-text-primary);
        }

        .col-body {
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--cds-text-secondary);
        }

        /* Block C: Illustrative Strip */
        .illustrative-workflow-strip {
          padding-top: 3.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .illustrative-headline {
          font-size: clamp(1.85rem, 2.5vw + 0.5rem, 2.5rem);
          font-weight: 300;
          line-height: 1.2;
          color: var(--cds-text-primary);
          letter-spacing: -0.015em;
        }

        .sample-scenario-card {
          background-color: #edf5ff;
          border: 1px solid #d0e2ff;
          padding: 2rem 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .scenario-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.75rem;
          color: #525252;
        }

        .scenario-quote {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--cds-text-primary);
          font-style: italic;
        }

        .scenario-footnote {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.6875rem;
          color: #8d8d8d;
        }

        @media (max-width: 1024px) {
          .team-overview-strip {
            grid-template-columns: 1fr;
          }
          .how-work-header {
            grid-template-columns: 1fr;
          }
          .three-col-workflow-grid {
            grid-template-columns: 1fr;
          }
          .illustrative-workflow-strip {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
