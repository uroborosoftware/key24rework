import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Play, Pause, Checkmark, StarFilled } from '@carbon/icons-react';

interface HeroProps {
  locale?: string;
}

export const Hero: React.FC<HeroProps> = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      {/* Ambient background glows */}
      <div className="bg-glow glow-emerald" aria-hidden="true"></div>
      <div className="bg-glow glow-blue" aria-hidden="true"></div>
      <div className="bg-glow glow-amber" aria-hidden="true"></div>

      <div className="hero-container">
        {/* Top Eyebrow Badge */}
        <div className="hero-badge">
          <span className="badge-pulse"></span>
          <span>⚡ 24/7 AUTOMOTIVE CALL AGENT &amp; DISPATCH</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          Do your job.<br />
          <span className="highlight-text">Leave the rest to KEY24.</span>
        </h1>

        {/* Subhead */}
        <p className="hero-subtitle">
          You're on-site picking a cylinder or driving in heavy traffic. When your phone rings,
          KEY24’s native automotive AI answers in 1.2 seconds, extracts vehicle make &amp; GPS pin, and locks in the job.
        </p>

        {/* Dual Actions with Perfectly Centered Arrow */}
        <div className="hero-cta-group">
          <Link href="/demo" className="btn-primary">
            <span className="btn-text">Book 15-Minute Live Demo</span>
            <span className="btn-icon">
              <ArrowRight size={18} />
            </span>
          </Link>
          <a href="#roi-calculator" className="btn-secondary">
            <span>Calculate Lost Revenue ↓</span>
          </a>
        </div>

        {/* Social Proof Star Bar (Ample breathing room, zero overlap) */}
        <div className="hero-trust-bar">
          <div className="stars-row">
            <StarFilled size={15} />
            <StarFilled size={15} />
            <StarFilled size={15} />
            <StarFilled size={15} />
            <StarFilled size={15} />
          </div>
          <span className="trust-text">
            <strong>4.9 / 5.0</strong> rating by <strong>450+</strong> automotive locksmiths across Europe
          </span>
        </div>

        {/* Main Hero Showcase Stage: Dual Split (Live Call Console + Illustration) */}
        <div className="hero-showcase-stage">
          {/* Floating Metric Badge: Left (Cleanly pinned to top border) */}
          <div className="floating-bento bento-left" aria-hidden="true">
            <span className="bento-icon-dot dot-green"></span>
            <div>
              <strong>&lt; 1.2s Ring-to-Answer</strong>
              <span>Zero dropped motorists</span>
            </div>
          </div>

          {/* Floating Metric Badge: Right (Cleanly pinned to bottom border) */}
          <div className="floating-bento bento-right" aria-hidden="true">
            <span className="bento-icon-dot dot-blue"></span>
            <div>
              <strong>+€250 Avg / Call</strong>
              <span>Job saved in 42 seconds</span>
            </div>
          </div>

          {/* Console Card */}
          <div className="hero-console-card">
            <div className="console-grid">
              {/* Left Column: Interactive Audio & Call Simulation */}
              <div className="console-call-pane">
                <div className="call-topbar">
                  <div className="caller-info">
                    <div className="phone-icon-box">
                      <Phone size={15} />
                    </div>
                    <div>
                      <strong className="caller-name">2021 VW Passat • Emergency Lockout</strong>
                      <span className="caller-sub">Stranded Motorist • Keys locked in boot</span>
                    </div>
                  </div>
                  <div className="call-timer-badge">
                    <span className="rec-dot"></span>
                    <span>00:42 • Connected</span>
                  </div>
                </div>

                {/* Waveform Player */}
                <div className="console-player">
                  <button
                    type="button"
                    className="audio-toggle-btn"
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pause simulation call' : 'Play simulation call'}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>

                  <div className={`audio-bars ${isPlaying ? 'is-animating' : ''}`}>
                    <span style={{ height: '8px' }}></span>
                    <span style={{ height: '18px' }}></span>
                    <span style={{ height: '26px' }}></span>
                    <span style={{ height: '14px' }}></span>
                    <span style={{ height: '24px' }}></span>
                    <span style={{ height: '32px' }}></span>
                    <span style={{ height: '20px' }}></span>
                    <span style={{ height: '28px' }}></span>
                    <span style={{ height: '12px' }}></span>
                    <span style={{ height: '22px' }}></span>
                    <span style={{ height: '16px' }}></span>
                    <span style={{ height: '9px' }}></span>
                  </div>

                  <span className="player-time">1.2s latency</span>
                </div>

                {/* Live Transcript Dialog */}
                <div className="dialog-bubble-box">
                  <div className="dialog-bubble ai-bubble">
                    <span className="bubble-speaker">KEY24 Voice AI:</span>
                    <p className="bubble-text">
                      "We open the 2021 Passat without damage. Standard lockout rate is €190 fixed. Technician van is en route (ETA 14 min)!"
                    </p>
                  </div>
                  <div className="dialog-bubble user-bubble">
                    <span className="bubble-speaker">Motorist:</span>
                    <p className="bubble-text">
                      "Perfect, thank you! Sending you my live GPS WhatsApp pin right now."
                    </p>
                  </div>
                </div>

                {/* Footer GPS Confirmation */}
                <div className="call-footer-strip">
                  <div className="footer-status">
                    <Checkmark size={15} className="green-chk" />
                    <span>GPS Pin Verified: Lanxess Arena P2 (Köln)</span>
                  </div>
                  <span className="dispatch-badge">Van 02 Dispatched</span>
                </div>
              </div>

              {/* Right Column: High-End Automotive Illustration / Visual Area */}
              <div className="console-illustration-pane">
                <div className="illustration-wrapper">
                  <svg
                    viewBox="0 0 340 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="auto-illustration-svg"
                    aria-label="Automotive Dispatch AI Illustration"
                  >
                    <defs>
                      <linearGradient id="heroVanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                      <linearGradient id="heroRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="heroRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>

                    {/* Concentric Telemetry Radar Rings */}
                    <circle cx="170" cy="140" r="115" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="170" cy="140" r="82" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="170" cy="140" r="50" fill="url(#heroRadarGrad)" />

                    {/* Road Surface */}
                    <path d="M 15 240 Q 170 220 325 240" stroke="url(#heroRoadGrad)" strokeWidth="6" strokeLinecap="round" />
                    <path d="M 50 240 L 290 240" stroke="#ffffff" strokeWidth="2" strokeDasharray="8 8" />

                    {/* Mobile Locksmith Van */}
                    <g transform="translate(98, 146)">
                      {/* Drop Shadow */}
                      <ellipse cx="72" cy="64" rx="68" ry="9" fill="#0f172a" fillOpacity="0.14" />

                      {/* Van Body */}
                      <path
                        d="M 12 50 L 12 20 C 12 13 17 8 24 8 L 96 8 C 104 8 111 13 114 20 L 128 35 C 130 37 132 40 132 44 L 132 50 Z"
                        fill="url(#heroVanGrad)"
                      />
                      {/* Van Windshield */}
                      <path
                        d="M 94 13 L 112 13 C 115 13 118 16 120 19 L 126 33 L 94 33 Z"
                        fill="#93c5fd"
                        fillOpacity="0.85"
                      />
                      {/* Van Accent Decals */}
                      <rect x="25" y="27" width="58" height="4" rx="2" fill="#60a5fa" />
                      <rect x="25" y="35" width="38" height="3" rx="1.5" fill="#38bdf8" />

                      {/* Van Roof Dispatch Antenna & Signal */}
                      <rect x="52" y="3" width="3" height="5" rx="1" fill="#1e293b" />
                      <circle cx="53.5" cy="2" r="3" fill="#10b981" />
                      <path d="M 46 1 Q 53.5 -4 61 1" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <path d="M 42 -2 Q 53.5 -8 65 -2" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" fill="none" />

                      {/* Brand Logo */}
                      <text x="32" y="21" fill="#ffffff" fontSize="9" fontWeight="800" letterSpacing="0.06em">
                        KEY24
                      </text>

                      {/* Wheels with Silver Hubcaps */}
                      <circle cx="36" cy="52" r="12" fill="#1e293b" />
                      <circle cx="36" cy="52" r="6" fill="#94a3b8" />
                      <circle cx="108" cy="52" r="12" fill="#1e293b" />
                      <circle cx="108" cy="52" r="6" fill="#94a3b8" />

                      {/* Front Headlight Beam */}
                      <path d="M 132 42 L 160 37 L 160 53 L 132 49 Z" fill="#fef08a" fillOpacity="0.5" />
                    </g>

                    {/* Floating GPS Target Beacon */}
                    <g transform="translate(215, 38)">
                      <circle cx="20" cy="20" r="18" fill="#10b981" fillOpacity="0.15" />
                      <circle cx="20" cy="20" r="12" fill="#10b981" />
                      <circle cx="20" cy="20" r="4" fill="#ffffff" />
                      <path d="M 20 28 L 20 38" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                    </g>

                    {/* Smart Transponder Key Graphic */}
                    <g transform="translate(45, 52)">
                      <rect x="10" y="10" width="30" height="46" rx="8" fill="#1e293b" />
                      <circle cx="25" cy="22" r="4" fill="#3b82f6" />
                      <rect x="18" y="32" width="14" height="3" rx="1.5" fill="#64748b" />
                      <rect x="18" y="39" width="14" height="3" rx="1.5" fill="#64748b" />
                      <path d="M 22 56 L 22 78 L 26 78 L 26 66 L 28 62 L 28 56 Z" fill="#94a3b8" />
                      {/* Signal Waves */}
                      <path d="M 45 20 Q 55 25 45 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <path d="M 50 15 Q 65 25 50 35" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </g>
                  </svg>

                  {/* Clean Illustration Label Badge / Custom Art Slot Notice */}
                  <div className="illustration-slot-tag">
                    <span className="slot-dot"></span>
                    <span>Autonomous Roadside Dispatch Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          padding: 5.5rem 1.5rem 4rem 1.5rem;
          background: #ffffff;
          text-align: center;
          overflow: hidden;
        }

        /* Ambient Glow Blobs */
        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.55;
          z-index: 0;
          pointer-events: none;
        }

        .glow-emerald {
          width: 440px;
          height: 440px;
          background: #a7f3d0;
          top: -80px;
          left: -60px;
        }

        .glow-blue {
          width: 480px;
          height: 480px;
          background: #bfdbfe;
          top: 40px;
          right: -80px;
        }

        .glow-amber {
          width: 360px;
          height: 360px;
          background: #fde68a;
          bottom: 40px;
          left: 30%;
          opacity: 0.35;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* Eyebrow Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
        }

        /* Typography */
        .hero-title {
          font-size: clamp(2.6rem, 5vw + 1rem, 4.6rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: #0f172a;
          margin: 0 0 1.25rem 0;
        }

        .highlight-text {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1.0625rem, 1.2vw + 0.6rem, 1.25rem);
          line-height: 1.6;
          color: #475569;
          max-width: 720px;
          margin: 0 auto 2.25rem auto;
        }

        /* CTA Group */
        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        /* Primary Button: Center-aligned icon & text */
        :global(.btn-primary) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.65rem !important;
          background: #2563eb !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          font-size: 1.0625rem !important;
          padding: 0.95rem 1.85rem !important;
          border-radius: 999px !important;
          text-decoration: none !important;
          box-shadow: 0 10px 25px -4px rgba(37, 99, 235, 0.4) !important;
          transition: all 0.15s ease !important;
          line-height: 1 !important;
        }

        :global(.btn-primary:hover) {
          background: #1d4ed8 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 14px 28px -4px rgba(37, 99, 235, 0.5) !important;
        }

        .btn-text {
          display: inline-block;
          line-height: 1;
        }

        .btn-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          margin-top: 1px;
        }

        :global(.btn-secondary) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: #ffffff !important;
          color: #334155 !important;
          font-weight: 700 !important;
          font-size: 1.0625rem !important;
          padding: 0.95rem 1.85rem !important;
          border-radius: 999px !important;
          text-decoration: none !important;
          border: 1px solid #cbd5e1 !important;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04) !important;
          transition: all 0.15s ease !important;
          line-height: 1 !important;
        }

        :global(.btn-secondary:hover) {
          background: #f8fafc !important;
          border-color: #94a3b8 !important;
          transform: translateY(-1px) !important;
        }

        /* Social Proof Bar (Clean spacing, zero overlap) */
        .hero-trust-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          margin-bottom: 4.5rem; /* Ample breathing room to prevent any overlap */
          flex-wrap: wrap;
        }

        .stars-row {
          display: flex;
          gap: 2px;
          color: #f59e0b;
        }

        .trust-text {
          font-size: 0.875rem;
          color: #64748b;
        }

        .trust-text strong {
          color: #0f172a;
        }

        /* Main Showcase Stage */
        .hero-showcase-stage {
          position: relative;
          max-width: 1040px;
          margin: 0 auto;
        }

        /* Floating Accent Bento Badges (Safely positioned on card borders) */
        .floating-bento {
          position: absolute;
          z-index: 3;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 0.75rem 1.15rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 16px 36px -6px rgba(15, 23, 42, 0.12);
          text-align: left;
        }

        .bento-left {
          top: -20px;
          left: 24px;
        }

        .bento-right {
          bottom: -20px;
          right: 24px;
        }

        .bento-icon-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .dot-green { background: #10b981; box-shadow: 0 0 8px #10b981; }
        .dot-blue { background: #2563eb; box-shadow: 0 0 8px #2563eb; }

        .floating-bento strong {
          display: block;
          font-size: 0.875rem;
          color: #0f172a;
          line-height: 1.25;
        }

        .floating-bento span {
          display: block;
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Console Card */
        .hero-console-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.15),
                      0 0 0 1px rgba(226, 232, 240, 0.8);
          overflow: hidden;
          text-align: left;
        }

        .console-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
        }

        /* Left Call Column */
        .console-call-pane {
          padding: 2.25rem 2rem;
          border-right: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .call-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .caller-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .phone-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .caller-name {
          display: block;
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 800;
        }

        .caller-sub {
          display: block;
          font-size: 0.7875rem;
          color: #64748b;
        }

        .call-timer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #f1f5f9;
          color: #334155;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.65rem;
          border-radius: 8px;
        }

        .rec-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          animation: pulse 1.5s infinite;
        }

        /* Player & Waveform */
        .console-player {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.75rem 1rem;
          border-radius: 14px;
        }

        .audio-toggle-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #2563eb;
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s ease;
          flex-shrink: 0;
        }

        .audio-toggle-btn:hover {
          background: #1d4ed8;
        }

        .audio-bars {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 4px;
          height: 32px;
        }

        .audio-bars span {
          width: 4px;
          background: #3b82f6;
          border-radius: 2px;
          transition: height 0.2s ease;
        }

        .audio-bars.is-animating span {
          animation: wavePulse 1s ease-in-out infinite alternate;
        }

        .audio-bars span:nth-child(2) { animation-delay: 0.1s; }
        .audio-bars span:nth-child(3) { animation-delay: 0.25s; }
        .audio-bars span:nth-child(4) { animation-delay: 0.15s; }
        .audio-bars span:nth-child(5) { animation-delay: 0.3s; }
        .audio-bars span:nth-child(6) { animation-delay: 0.2s; }
        .audio-bars span:nth-child(7) { animation-delay: 0.35s; }
        .audio-bars span:nth-child(8) { animation-delay: 0.1s; }

        @keyframes wavePulse {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1.2); }
        }

        .player-time {
          font-size: 0.75rem;
          font-weight: 700;
          color: #059669;
          background: #ecfdf5;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          white-space: nowrap;
        }

        /* Dialog Transcript */
        .dialog-bubble-box {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .dialog-bubble {
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-size: 0.85rem;
          line-height: 1.45;
        }

        .ai-bubble {
          background: #eff6ff;
          border-left: 3px solid #2563eb;
        }

        .user-bubble {
          background: #f1f5f9;
          border-left: 3px solid #94a3b8;
        }

        .bubble-speaker {
          font-weight: 800;
          display: block;
          margin-bottom: 0.2rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ai-bubble .bubble-speaker { color: #2563eb; }
        .user-bubble .bubble-speaker { color: #475569; }

        .bubble-text {
          margin: 0;
          color: #1e293b;
        }

        /* Call Footer Strip */
        .call-footer-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 1px solid #f1f5f9;
          font-size: 0.7875rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .footer-status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #15803d;
          font-weight: 700;
        }

        .dispatch-badge {
          background: #f0fdf4;
          color: #15803d;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          border: 1px solid #bbf7d0;
        }

        /* Right Illustration Column */
        .console-illustration-pane {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .illustration-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .auto-illustration-svg {
          width: 100%;
          max-width: 320px;
          height: auto;
          filter: drop-shadow(0 10px 20px rgba(15, 23, 42, 0.08));
        }

        .illustration-slot-tag {
          margin-top: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
          background: #ffffff;
          border: 1px dashed #cbd5e1;
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
        }

        .slot-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        @media (max-width: 1024px) {
          .floating-bento {
            display: none;
          }
          .console-grid {
            grid-template-columns: 1fr;
          }
          .console-call-pane {
            border-right: none;
            border-bottom: 1px solid #f1f5f9;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 4rem 0.75rem 2.5rem 0.75rem;
          }
          .console-call-pane {
            padding: 1.25rem 0.85rem;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .call-topbar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};
