import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, StarFilled } from '@carbon/icons-react';

interface WhatsAppSectionProps {
  locale?: string;
}

export const WhatsAppSection: React.FC<WhatsAppSectionProps> = ({ locale = 'en' }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalCards = 4;
  const maxSlide = Math.max(0, totalCards - cardsPerView);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  return (
    <section className="wa-section" id="whatsapp" aria-label="WhatsApp Benefits and Capabilities">
      <div className="wa-container">
        {/* Header */}
        <div className="wa-header">
          <span className="wa-eyebrow">AUTOMATED CUSTOMER DIALOG</span>
          <h2 className="wa-main-title">Benefits and Capabilities</h2>
          <p className="wa-lead-text">
            Handles your customer support on WhatsApp just like a real employee.
          </p>
        </div>

        {/* Carousel Viewport */}
        <div className="wa-carousel-viewport">
          <div
            className="wa-cards-track"
            style={{
              transform: `translateX(-${activeSlide * (100 / cardsPerView)}%)`,
            }}
          >
            {/* Card 1: Answers within seconds */}
            <div className="wa-benefit-card">
              <div className="wa-chat-canvas">
                <div className="wa-doodle-bg" aria-hidden="true"></div>
                <div className="wa-chat-body">
                  <div className="wa-date-pill">Today</div>
                  
                  <div className="wa-bubble wa-incoming">
                    <div className="wa-bubble-tail-left" aria-hidden="true"></div>
                    <span className="wa-msg-text">Hello, I have a quick question!</span>
                    <span className="wa-time-stamp">19:43</span>
                  </div>

                  <div className="wa-bubble wa-outgoing">
                    <div className="wa-bubble-tail-right" aria-hidden="true"></div>
                    <span className="wa-msg-text">Sure, how can I help you?</span>
                    <span className="wa-time-stamp">
                      19:43 <span className="wa-double-check">✓✓</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="wa-card-body">
                <span className="card-badge badge-green">&lt; 10s Response</span>
                <h3 className="card-title">Answers within seconds</h3>
                <p className="card-desc">
                  Always reachable and available for all your customers 24 hours a day, 7 days a week.
                </p>
              </div>
            </div>

            {/* Card 2: Books appointments via chat */}
            <div className="wa-benefit-card">
              <div className="wa-chat-canvas">
                <div className="wa-doodle-bg" aria-hidden="true"></div>
                <div className="wa-chat-body">
                  <div className="wa-bubble wa-incoming">
                    <div className="wa-bubble-tail-left" aria-hidden="true"></div>
                    <span className="wa-msg-text">Can I come by next week Tuesday, same time as always?</span>
                    <span className="wa-time-stamp">19:43</span>
                  </div>

                  <div className="wa-bubble wa-outgoing">
                    <div className="wa-bubble-tail-right" aria-hidden="true"></div>
                    <span className="wa-msg-text">Sure, I'll book you in!</span>
                    <span className="wa-time-stamp">
                      19:44 <span className="wa-double-check">✓✓</span>
                    </span>
                  </div>

                  <div className="wa-appointment-pill">
                    <div className="apt-cal-box">
                      <span className="apt-cal-icon">📅</span>
                    </div>
                    <div className="apt-text">
                      <strong>Booked</strong>
                      <span>confirmed</span>
                    </div>
                    <span className="apt-time">11:06</span>
                  </div>
                </div>
              </div>

              <div className="wa-card-body">
                <span className="card-badge badge-blue">Auto-Booking</span>
                <h3 className="card-title">Books appointments via chat</h3>
                <p className="card-desc">
                  With calendar integration built in, the AI can handle and manage bookings independently.
                </p>
              </div>
            </div>

            {/* Card 3: Knows your company inside and out */}
            <div className="wa-benefit-card">
              <div className="wa-chat-canvas">
                <div className="wa-doodle-bg" aria-hidden="true"></div>
                <div className="wa-chat-body">
                  <div className="wa-status-pill">
                    <span className="status-radio-dot"></span>
                    <span className="status-label">Checking prices</span>
                    <span className="status-time">11:06 <span className="wa-double-check">✓✓</span></span>
                  </div>

                  <div className="wa-status-pill">
                    <span className="status-radio-dot"></span>
                    <span className="status-label">Confirming opening hours</span>
                    <span className="status-time">11:06 <span className="wa-double-check">✓✓</span></span>
                  </div>

                  <div className="wa-bubble wa-outgoing">
                    <div className="wa-bubble-tail-right" aria-hidden="true"></div>
                    <span className="wa-msg-text">
                      Non-destructive lockout for VW Golf is €190 fixed. Technician is 15 mins away!
                    </span>
                    <span className="wa-time-stamp">
                      11:07 <span className="wa-double-check">✓✓</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="wa-card-body">
                <span className="card-badge badge-purple">100% Trained</span>
                <h3 className="card-title">Knows your company inside and out</h3>
                <p className="card-desc">
                  Once you've added information about your services and offerings, the AI responds just like one of your employees.
                </p>
              </div>
            </div>

            {/* Card 4: Reads documents, images, and voice messages */}
            <div className="wa-benefit-card">
              <div className="wa-chat-canvas">
                <div className="wa-doodle-bg" aria-hidden="true"></div>
                <div className="wa-chat-body">
                  <div className="wa-doc-attachment">
                    <div className="doc-pdf-badge">PDF</div>
                    <div className="doc-meta">
                      <strong>Invoice</strong>
                      <span>2 pages • 66 kB • pdf</span>
                    </div>
                    <span className="doc-time">11:06</span>
                  </div>

                  <div className="wa-voice-note-bubble">
                    <div className="voice-play-circle">▶</div>
                    <div className="voice-bars">
                      <span style={{ height: '7px' }}></span>
                      <span style={{ height: '16px' }}></span>
                      <span style={{ height: '22px' }}></span>
                      <span style={{ height: '14px' }}></span>
                      <span style={{ height: '20px' }}></span>
                      <span style={{ height: '12px' }}></span>
                      <span style={{ height: '18px' }}></span>
                      <span style={{ height: '8px' }}></span>
                    </div>
                    <span className="voice-length">0:25</span>
                    <div className="voice-user-avatar">
                      <span>👤</span>
                      <span className="voice-mic-badge">🎙</span>
                    </div>
                  </div>

                  <div className="wa-bubble wa-outgoing wa-reply-bubble">
                    <div className="wa-bubble-tail-right" aria-hidden="true"></div>
                    <div className="wa-reply-quote">
                      <strong className="quote-sender">Customer</strong>
                      <span className="quote-content">🎙 Voice Message</span>
                    </div>
                    <span className="wa-msg-text">Yes, let me check that!</span>
                    <span className="wa-time-stamp">
                      11:06 <span className="wa-double-check">✓✓</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="wa-card-body">
                <span className="card-badge badge-orange">Voice &amp; Docs</span>
                <h3 className="card-title">Reads documents, images, and voice messages</h3>
                <p className="card-desc">
                  Understands information from voice messages, photos of keys, or PDFs and can respond to it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Controls (Working Arrow Buttons & Dots) */}
        <div className="wa-nav-controls">
          <button
            type="button"
            className="carousel-arrow"
            onClick={handlePrev}
            aria-label="Previous card"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="carousel-dots">
            {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`dot-pill ${idx === activeSlide ? 'is-active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel-arrow"
            onClick={handleNext}
            aria-label="Next card"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dedicated Revenue Rescue Reference Banner (€250 Job Lost in Old Chats) */}
        <div className="wa-revenue-proof-banner">
          <div className="banner-left">
            <div className="banner-badge">
              <span className="pulse-dot"></span>
              <strong>WHATSAPP REVENUE RESCUE</strong>
            </div>
            <h3 className="banner-title">
              Your next €250 job is buried in old, unanswered WhatsApp chats.
            </h3>
            <p className="banner-copy">
              A stranded driver messaged you while you were picking a lock. You replied 35 minutes later.
              Too late—they called another local service. With KEY24, every incoming WhatsApp inquiry gets an intelligent,
              instant response within 10 seconds, collects the live GPS pin, and secures the dispatch before competitors can.
            </p>
          </div>

          <div className="banner-quote-card">
            <div className="quote-stars">
              <StarFilled size={16} />
              <StarFilled size={16} />
              <StarFilled size={16} />
              <StarFilled size={16} />
              <StarFilled size={16} />
              <span className="quote-tag">VERIFIED FIELD PROOF</span>
            </div>

            <blockquote className="quote-body">
              “When we reviewed our old WhatsApp chat logs, we realized we were losing 8 to 10 jobs every month just because
              we were delayed replying while on site. KEY24 recaptured 3 lost lockouts in our very first week (+€750).
              It adds ~€2,500 every single month.”
            </blockquote>

            <div className="quote-author-row">
              <img
                src="/images/review-person-2.jpg"
                alt="Murat Keskin"
                className="author-avatar"
              />
              <div>
                <strong>Murat Keskin</strong>
                <span>Owner, Keskin Auto Locksmith • Cologne</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wa-section {
          padding: 5.5rem 1.5rem;
          background: #ffffff;
          border-bottom: 1px solid #f1f5f9;
          overflow: hidden;
        }

        .wa-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .wa-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 3.5rem auto;
        }

        .wa-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #059669;
          background: #ecfdf5;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }

        .wa-main-title {
          font-size: clamp(2.2rem, 3.5vw + 1rem, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 1rem 0;
        }

        .wa-lead-text {
          font-size: clamp(1.05rem, 1.2vw + 0.8rem, 1.25rem);
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        /* Carousel Track & Viewport */
        .wa-carousel-viewport {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 0.5rem 0 1rem 0;
        }

        .wa-cards-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
          width: 100%;
        }

        .wa-benefit-card {
          flex: 0 0 33.333%;
          max-width: 33.333%;
          padding: 0 0.85rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .wa-card-body {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-top: none;
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.05);
        }

        .card-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          margin-bottom: 0.75rem;
          align-self: flex-start;
        }

        .badge-green { background: #ecfdf5; color: #059669; }
        .badge-blue { background: #eff6ff; color: #2563eb; }
        .badge-purple { background: #f5f3ff; color: #7c3aed; }
        .badge-orange { background: #fff7ed; color: #ea580c; }

        .card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.925rem;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }

        /* 100% Authentic WhatsApp Chat Canvas */
        .wa-chat-canvas {
          position: relative;
          background-color: #efeae2;
          border: 1px solid #e2e8f0;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          height: 250px;
          padding: 1rem 1.1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .wa-doodle-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(#d6cec4 1px, transparent 1px);
          background-size: 14px 14px;
          opacity: 0.8;
          pointer-events: none;
        }

        .wa-chat-body {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          width: 100%;
        }

        /* Date Pill */
        .wa-date-pill {
          align-self: center;
          background: rgba(255, 255, 255, 0.95);
          color: #54656f;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.2rem 0.65rem;
          border-radius: 8px;
          box-shadow: 0 1px 2px rgba(11, 20, 26, 0.12);
        }

        /* Real Chat Bubbles */
        .wa-bubble {
          position: relative;
          max-width: 86%;
          padding: 0.55rem 0.85rem;
          border-radius: 12px;
          box-shadow: 0 1px 2px rgba(11, 20, 26, 0.15);
          display: flex;
          flex-direction: column;
        }

        .wa-msg-text {
          font-size: 0.8125rem;
          color: #111b21;
          line-height: 1.35;
        }

        .wa-time-stamp {
          font-size: 0.65rem;
          color: #667781;
          align-self: flex-end;
          margin-top: 0.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .wa-double-check {
          color: #53bdeb;
          font-weight: 700;
        }

        /* Incoming Bubble (White) */
        .wa-incoming {
          align-self: flex-start;
          background-color: #ffffff;
          border-top-left-radius: 2px;
        }

        .wa-bubble-tail-left {
          position: absolute;
          top: 0;
          left: -6px;
          width: 0;
          height: 0;
          border-top: 6px solid #ffffff;
          border-left: 6px solid transparent;
        }

        /* Outgoing Bubble (Light Green) */
        .wa-outgoing {
          align-self: flex-end;
          background-color: #d9fdd3;
          border-top-right-radius: 2px;
        }

        .wa-bubble-tail-right {
          position: absolute;
          top: 0;
          right: -6px;
          width: 0;
          height: 0;
          border-top: 6px solid #d9fdd3;
          border-right: 6px solid transparent;
        }

        /* Appointment Pill */
        .wa-appointment-pill {
          align-self: flex-end;
          background: #d9fdd3;
          border-radius: 12px;
          padding: 0.5rem 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          box-shadow: 0 1px 2px rgba(11, 20, 26, 0.15);
        }

        .apt-cal-box {
          background: #bbf7d0;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .apt-cal-icon {
          font-size: 1.1rem;
        }

        .apt-text {
          display: flex;
          flex-direction: column;
        }

        .apt-text strong {
          font-size: 0.8125rem;
          color: #111b21;
        }

        .apt-text span {
          font-size: 0.7rem;
          color: #15803d;
          font-weight: 600;
        }

        .apt-time {
          font-size: 0.65rem;
          color: #667781;
          margin-left: 0.5rem;
        }

        /* Status Pills (Checking prices, etc.) */
        .wa-status-pill {
          align-self: flex-end;
          background: #d9fdd3;
          border-radius: 9999px;
          padding: 0.45rem 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 1px 2px rgba(11, 20, 26, 0.12);
        }

        .status-radio-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 2px solid #22c55e;
          box-sizing: border-box;
        }

        .status-label {
          font-size: 0.775rem;
          color: #111b21;
          font-weight: 600;
        }

        .status-time {
          font-size: 0.65rem;
          color: #667781;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          margin-left: 0.25rem;
        }

        /* Document Attachment Bubble */
        .wa-doc-attachment {
          align-self: flex-start;
          background: #ffffff;
          border-radius: 12px;
          padding: 0.5rem 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 1px 2px rgba(11, 20, 26, 0.15);
        }

        .doc-pdf-badge {
          background: #ef4444;
          color: #ffffff;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.25rem 0.45rem;
          border-radius: 5px;
        }

        .doc-meta {
          display: flex;
          flex-direction: column;
        }

        .doc-meta strong {
          font-size: 0.8125rem;
          color: #111b21;
        }

        .doc-meta span {
          font-size: 0.6875rem;
          color: #667781;
        }

        .doc-time {
          font-size: 0.65rem;
          color: #667781;
          margin-left: 0.5rem;
        }

        /* Voice Note Bubble */
        .wa-voice-note-bubble {
          align-self: flex-start;
          background: #ffffff;
          border-radius: 14px;
          padding: 0.5rem 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          box-shadow: 0 1px 2px rgba(11, 20, 26, 0.15);
        }

        .voice-play-circle {
          color: #00a884;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .voice-bars {
          display: flex;
          align-items: center;
          gap: 2.5px;
          height: 22px;
        }

        .voice-bars span {
          width: 3px;
          background: #00a884;
          border-radius: 2px;
        }

        .voice-length {
          font-size: 0.7rem;
          color: #667781;
          font-weight: 500;
        }

        .voice-user-avatar {
          position: relative;
          font-size: 0.95rem;
          margin-left: 0.35rem;
        }

        .voice-mic-badge {
          position: absolute;
          bottom: -3px;
          right: -5px;
          font-size: 0.65rem;
        }

        /* Voice Reply Quote */
        .wa-reply-quote {
          background: rgba(0, 0, 0, 0.05);
          border-left: 3px solid #00a884;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          margin-bottom: 0.35rem;
          display: flex;
          flex-direction: column;
        }

        .quote-sender {
          font-size: 0.7rem;
          color: #00a884;
        }

        .quote-content {
          font-size: 0.7rem;
          color: #667781;
        }

        /* Carousel Navigation Controls */
        .wa-nav-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin: 2.5rem 0 4rem 0;
        }

        .carousel-arrow {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
          transition: background 0.15s ease, transform 0.15s ease, border-color 0.15s ease;
        }

        .carousel-arrow:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: scale(1.08);
        }

        .carousel-dots {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dot-pill {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .dot-pill.is-active {
          width: 28px;
          border-radius: 9999px;
          background: #059669;
        }

        /* Dedicated Revenue Proof Banner */
        .wa-revenue-proof-banner {
          background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
          border-radius: 28px;
          padding: 3rem 2.5rem;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2.5rem;
          align-items: center;
          box-shadow: 0 20px 40px -10px rgba(6, 78, 59, 0.35);
        }

        .banner-left {
          display: flex;
          flex-direction: column;
        }

        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #6ee7b7;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          align-self: flex-start;
          margin-bottom: 1rem;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
        }

        .banner-title {
          font-size: clamp(1.5rem, 2vw + 0.8rem, 2rem);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 1rem 0;
          color: #ffffff;
        }

        .banner-copy {
          font-size: 1rem;
          line-height: 1.6;
          color: #d1fae5;
          margin: 0;
        }

        .banner-quote-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 2rem;
          color: #0f172a;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .quote-stars {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #f59e0b;
          margin-bottom: 1rem;
        }

        .quote-tag {
          font-size: 0.65rem;
          font-weight: 800;
          color: #059669;
          background: #ecfdf5;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          margin-left: auto;
        }

        .quote-body {
          font-size: 0.9375rem;
          line-height: 1.55;
          color: #334155;
          font-style: italic;
          margin: 0 0 1.25rem 0;
        }

        .quote-author-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #10b981;
        }

        .quote-author-row strong {
          display: block;
          font-size: 0.95rem;
          color: #0f172a;
        }

        .quote-author-row span {
          display: block;
          font-size: 0.8125rem;
          color: #64748b;
        }

        @media (max-width: 1024px) {
          .wa-benefit-card {
            flex: 0 0 50%;
            max-width: 50%;
          }
          .wa-revenue-proof-banner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .wa-benefit-card {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 0 0.25rem;
          }
          .wa-section {
            padding: 3.5rem 0.75rem;
          }
          .wa-revenue-proof-banner {
            padding: 2rem 1.25rem;
            border-radius: 20px;
          }
          .banner-quote-card {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};
