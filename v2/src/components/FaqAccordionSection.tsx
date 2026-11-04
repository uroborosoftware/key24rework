import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useState } from 'react';
import { ChevronDown } from '@carbon/icons-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  eyebrow?: string;
  title?: string;
  items?: FaqItem[];
}

export const FaqAccordionSection: React.FC<FaqAccordionProps> = ({
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  title = "Straight answers to locksmith operational objections",
  items = [
    {
      q: "Can I keep my existing mobile phone number?",
      a: "Yes. You do not change your published number on Google, your van, or business cards. You simply enable conditional call-forwarding (when busy or unanswered after 3 rings) from your current telecom provider directly to your KEY24 dedicated agent line."
    },
    {
      q: "What happens if a customer calls about an unusual vehicle or complex AKL situation?",
      a: "The KEY24 agent is programmed with deep automotive logic. If an unsupported vehicle, exotic supercar, or unusual scenario is detected, it politely promises an immediate priority callback from the master locksmith and instantly alerts your phone with the full audio transcript."
    },
    {
      q: "Does digital dispatch messaging require customer consent?",
      a: "Yes, 100%. To comply with GDPR, UK DPA 2018, and telecom regulations, the voice agent explicitly requests: 'May we send your job confirmation and live arrival tracking link to this mobile number?' before dispatching."
    },
    {
      q: "Can the AI quote my customized price structure?",
      a: "Yes. During onboarding, we program your exact base prices (e.g. non-destructive lockout, laser cut key, remote transponder, all-keys-lost surcharge, and evening/night tariffs)."
    },
    {
      q: "How does the dispatch board sync with my billing and card terminal?",
      a: "KEY24 integrates seamlessly with standard mobile card readers (SumUp, Zettle, Stripe) and accounting tools. Once a job is marked completed on-site, an itemized invoice is generated and sent to the driver automatically."
    }
  ]
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <Key24LocalizedElement as="section" id="faq" className="faq-section" aria-labelledby="faq-section-heading">
      <Key24LocalizedElement as="div" className="carbon-container">
        <Key24LocalizedElement as="div" className="faq-header">
          <Key24LocalizedElement as="span" className="faq-eyebrow">{eyebrow}</Key24LocalizedElement>
          <Key24LocalizedElement as="h2" id="faq-section-heading" className="faq-title">
            {title}
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        <Key24LocalizedElement as="div" className="faq-accordion-list">
          {items.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <Key24LocalizedElement as="div" key={idx} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                <Key24LocalizedElement as="button"
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <Key24LocalizedElement as="span" className="faq-question-text">{item.q}</Key24LocalizedElement>
                  <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'is-rotated' : ''}`} />
                </Key24LocalizedElement>

                {isOpen && (
                  <Key24LocalizedElement as="div" id={`faq-answer-${idx}`} className="faq-answer-panel" role="region">
                    <Key24LocalizedElement as="p" className="faq-answer-text">{item.a}</Key24LocalizedElement>
                  </Key24LocalizedElement>
                )}
              </Key24LocalizedElement>
            );
          })}
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx global>{`
        .faq-section {
          padding: 5.5rem 0;
          background-color: #ffffff;
          border-bottom: 1px solid var(--cds-border-subtle);
        }

        .faq-section .faq-header {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 820px;
        }

        .faq-section .faq-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--cds-interactive-01);
        }

        .faq-section .faq-title {
          font-size: clamp(2rem, 3.2vw + 0.8rem, 2.75rem);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cds-text-primary);
        }

        .faq-section .faq-accordion-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--cds-border-subtle);
        }

        .faq-section .faq-accordion-item {
          border-bottom: 1px solid var(--cds-border-subtle);
          transition: background-color var(--carbon-motion-duration-fast);
        }

        .faq-section .faq-accordion-item.is-open {
          background-color: #fbfcff;
        }

        .faq-section .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-section .faq-question-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--cds-text-primary);
          line-height: 1.4;
          padding-right: 1.5rem;
        }

        .faq-section .faq-chevron {
          color: var(--cds-interactive-01);
          transition: transform var(--carbon-motion-duration-fast) var(--carbon-motion-standard);
          flex-shrink: 0;
        }

        .faq-section .faq-chevron.is-rotated {
          transform: rotate(180deg);
        }

        .faq-section .faq-answer-panel {
          padding: 0 1rem 1.75rem 1rem;
        }

        .faq-section .faq-answer-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--cds-text-secondary);
          max-width: 920px;
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
