import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useState } from 'react';
import { Phone, Time, VolumeUp, Security, Checkmark, Play, Pause } from '@carbon/icons-react';

interface VoiceAiSectionProps {
  locale?: string;
}

export const VoiceAiSection: React.FC<VoiceAiSectionProps> = ({ locale = 'en' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Key24LocalizedElement as="section" className="voice-section" id="voice-ai" aria-label="KEY24 Native Voice AI">
      {/* Anchor for backwards compatibility with tests and links */}
      <Key24LocalizedElement as="div" id="fonio" style={{ position: 'absolute', marginTop: '-80px', pointerEvents: 'none' }} aria-hidden="true" />

      <Key24LocalizedElement as="div" className="voice-container">
        {/* Header */}
        <Key24LocalizedElement as="div" className="voice-header">
          <Key24LocalizedElement as="span" className="voice-tag">KEY24 NATIVE VOICE AI</Key24LocalizedElement>
          <Key24LocalizedElement as="h2" className="voice-title">
            Never Miss a Call. KEY24 Answers on the First Ring & Closes Jobs.
          </Key24LocalizedElement>
          <Key24LocalizedElement as="p" className="voice-subtitle">
            While you're picking a lock or stuck on the motorway, KEY24’s native automotive voice agent answers in 1.2 seconds, captures car specs & roadside coordinates, and dispatches your van.
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* 3 Colorful Bento Cards (Unbounce style) */}
        <Key24LocalizedElement as="div" className="voice-cards-grid">
          {/* Card 1: Response Latency (Mint Green) */}
          <Key24LocalizedElement as="div" className="voice-bento-card bento-mint">
            <Key24LocalizedElement as="div" className="card-top">
              <Key24LocalizedElement as="div" className="card-icon-pill icon-mint">
                <Time size={22} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="card-stat-pill stat-mint">&lt; 1.2s Latency</Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Vector Illustration: Instant First-Ring Telemetry */}
            <Key24LocalizedElement as="div" className="bento-ill-box ill-mint" aria-hidden="true">
              <Key24LocalizedElement as="svg" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Incoming phone */}
                <Key24LocalizedElement as="rect" x="20" y="8" width="45" height="54" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                <Key24LocalizedElement as="rect" x="24" y="14" width="37" height="42" rx="4" fill="#064e3b" />
                <Key24LocalizedElement as="circle" cx="42.5" cy="30" r="10" fill="#10b981" />
                <Key24LocalizedElement as="path" d="M 38 30 C 38 27 47 27 47 30 C 47 33 43 33 43 36" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <Key24LocalizedElement as="text" x="27" y="50" fill="#a7f3d0" fontSize="5" fontWeight="bold">RING 01...</Key24LocalizedElement>
                {/* Sound waves & connection beam */}
                <Key24LocalizedElement as="path" d="M 75 35 L 135 35" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 4" />
                <Key24LocalizedElement as="circle" cx="105" cy="35" r="12" fill="#d1fae5" />
                <Key24LocalizedElement as="text" x="93" y="38" fill="#065f46" fontSize="6.5" fontWeight="800">&lt; 1.2s</Key24LocalizedElement>
                {/* KEY24 Dispatch Agent Node */}
                <Key24LocalizedElement as="rect" x="145" y="10" width="75" height="50" rx="10" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
                <Key24LocalizedElement as="circle" cx="163" cy="27" r="8" fill="#10b981" />
                <Key24LocalizedElement as="path" d="M 160 27 L 162 29 L 166 25" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <Key24LocalizedElement as="text" x="175" y="25" fill="#0f172a" fontSize="6" fontWeight="bold">KEY24 AI</Key24LocalizedElement>
                <Key24LocalizedElement as="text" x="175" y="33" fill="#059669" fontSize="5">Connected</Key24LocalizedElement>
                <Key24LocalizedElement as="rect" x="153" y="41" width="59" height="12" rx="3" fill="#ecfdf5" />
                <Key24LocalizedElement as="text" x="157" y="49" fill="#047857" fontSize="5" fontWeight="600">Locked in 42s</Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="h3" className="bento-heading">Answers on the 1st Ring</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="bento-copy">
              No voicemail. No robotic menus. Stranded drivers hanging on the roadside get an immediate, human-sounding response before they can click to call your competitor.
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="bento-highlight highlight-mint">
              <Checkmark size={16} />
              <Key24LocalizedElement as="span">100% of incoming caller inquiries captured</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          {/* Card 2: 15,000+ Vehicle Database (Indigo) */}
          <Key24LocalizedElement as="div" className="voice-bento-card bento-indigo">
            <Key24LocalizedElement as="div" className="card-top">
              <Key24LocalizedElement as="div" className="card-icon-pill icon-indigo">
                <VolumeUp size={22} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="card-stat-pill stat-indigo">15,000+ Models</Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Vector Illustration: Automotive Transponder & Car Silhouette */}
            <Key24LocalizedElement as="div" className="bento-ill-box ill-indigo" aria-hidden="true">
              <Key24LocalizedElement as="svg" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Sleek Modern Car Silhouette */}
                <Key24LocalizedElement as="path" d="M 20 48 L 35 48 L 48 34 L 88 34 L 105 48 L 125 48 C 127 48 128 50 128 52 L 128 56 C 128 58 126 60 124 60 L 22 60 C 20 60 18 58 18 56 L 18 52 C 18 50 19 48 20 48 Z" fill="#312e81" stroke="#4338ca" strokeWidth="1.5" />
                <Key24LocalizedElement as="circle" cx="42" cy="58" r="7" fill="#0f172a" />
                <Key24LocalizedElement as="circle" cx="42" cy="58" r="3.5" fill="#a5b4fc" />
                <Key24LocalizedElement as="circle" cx="102" cy="58" r="7" fill="#0f172a" />
                <Key24LocalizedElement as="circle" cx="102" cy="58" r="3.5" fill="#a5b4fc" />
                {/* Car Window Glass */}
                <Key24LocalizedElement as="path" d="M 50 36 L 68 36 L 68 46 L 39 46 Z" fill="#818cf8" fillOpacity="0.4" />
                <Key24LocalizedElement as="path" d="M 72 36 L 86 36 L 100 46 L 72 46 Z" fill="#818cf8" fillOpacity="0.4" />
                {/* RFID Scanner Waves */}
                <Key24LocalizedElement as="path" d="M 130 40 Q 138 46 130 52" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" fill="none" />
                <Key24LocalizedElement as="path" d="M 136 34 Q 146 46 136 58" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Floating Transponder Spec Card */}
                <Key24LocalizedElement as="g" transform="translate(148, 8)">
                  <Key24LocalizedElement as="rect" x="0" y="0" width="76" height="54" rx="8" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
                  <Key24LocalizedElement as="rect" x="5" y="5" width="66" height="14" rx="4" fill="#e0e7ff" />
                  <Key24LocalizedElement as="text" x="8" y="15" fill="#3730a3" fontSize="5.5" fontWeight="bold">HU66 • ID48 CRYPTO</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="28" fill="#1e1b4b" fontSize="6.5" fontWeight="bold">VW Passat (2021)</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="37" fill="#4f46e5" fontSize="5.5">Blade: Laser cut</Key24LocalizedElement>
                  <Key24LocalizedElement as="rect" x="8" y="42" width="50" height="8" rx="2" fill="#eef2ff" />
                  <Key24LocalizedElement as="text" x="11" y="48" fill="#4338ca" fontSize="5" fontWeight="bold">✓ 100% Match</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="h3" className="bento-heading">Automotive Transponder IQ</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="bento-copy">
              Keys in boot vs. all keys lost? The voice agent identifies the make, year, transponder generation, and lock mechanism so you arrive with the exact right blade and programmer.
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="bento-highlight highlight-indigo">
              <Checkmark size={16} />
              <Key24LocalizedElement as="span">Eliminates wasted 45-minute dry runs</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          {/* Card 3: 24/7 Out of Hours (Peach/Coral) */}
          <Key24LocalizedElement as="div" className="voice-bento-card bento-peach">
            <Key24LocalizedElement as="div" className="card-top">
              <Key24LocalizedElement as="div" className="card-icon-pill icon-peach">
                <Security size={22} />
              </Key24LocalizedElement>
              <Key24LocalizedElement as="span" className="card-stat-pill stat-peach">24/7 Emergency</Key24LocalizedElement>
            </Key24LocalizedElement>

            {/* Vector Illustration: 24/7 Night Dispatch */}
            <Key24LocalizedElement as="div" className="bento-ill-box ill-peach" aria-hidden="true">
              <Key24LocalizedElement as="svg" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Night Road Backdrop */}
                <Key24LocalizedElement as="rect" x="15" y="6" width="125" height="58" rx="10" fill="#1c1917" />
                {/* Moon & Stars */}
                <Key24LocalizedElement as="circle" cx="32" cy="20" r="7" fill="#fef08a" />
                <Key24LocalizedElement as="circle" cx="35" cy="18" r="6" fill="#1c1917" />
                <Key24LocalizedElement as="circle" cx="55" cy="15" r="1" fill="#ffffff" />
                <Key24LocalizedElement as="circle" cx="85" cy="18" r="1.5" fill="#fde68a" />
                <Key24LocalizedElement as="circle" cx="115" cy="14" r="1" fill="#ffffff" />
                {/* Road Line */}
                <Key24LocalizedElement as="line" x1="15" y1="52" x2="140" y2="52" stroke="#44403c" strokeWidth="2" />
                <Key24LocalizedElement as="line" x1="25" y1="52" x2="130" y2="52" stroke="#ea580c" strokeWidth="1" strokeDasharray="6 4" />
                {/* Service Van Night */}
                <Key24LocalizedElement as="g" transform="translate(42, 28)">
                  <Key24LocalizedElement as="rect" x="0" y="6" width="52" height="18" rx="4" fill="#f97316" />
                  <Key24LocalizedElement as="path" d="M 40 6 L 48 12 L 52 14 L 52 24 L 0 24 L 0 6 Z" fill="#ea580c" />
                  <Key24LocalizedElement as="rect" x="36" y="8" width="10" height="7" rx="2" fill="#fef3c7" />
                  <Key24LocalizedElement as="circle" cx="12" cy="24" r="4.5" fill="#292524" />
                  <Key24LocalizedElement as="circle" cx="42" cy="24" r="4.5" fill="#292524" />
                  {/* Headlight beam */}
                  <Key24LocalizedElement as="path" d="M 52 16 L 80 12 L 80 28 L 52 22 Z" fill="#fef08a" fillOpacity="0.4" />
                </Key24LocalizedElement>
                {/* Floating Emergency Dispatch Pill */}
                <Key24LocalizedElement as="g" transform="translate(148, 8)">
                  <Key24LocalizedElement as="rect" x="0" y="0" width="78" height="54" rx="8" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
                  <Key24LocalizedElement as="rect" x="6" y="6" width="66" height="13" rx="3" fill="#ffedd5" />
                  <Key24LocalizedElement as="text" x="9" y="15" fill="#9a3412" fontSize="5.5" fontWeight="bold">02:40 AM • CALL LOCKED</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="28" fill="#7c2d12" fontSize="7" fontWeight="800">+€280.00</Key24LocalizedElement>
                  <Key24LocalizedElement as="text" x="8" y="37" fill="#ea580c" fontSize="5.5">Night Rate Approved</Key24LocalizedElement>
                  <Key24LocalizedElement as="rect" x="8" y="42" width="56" height="8" rx="2" fill="#fff7ed" />
                  <Key24LocalizedElement as="text" x="11" y="48" fill="#c2410c" fontSize="5" fontWeight="bold">Dispatched While Asleep</Key24LocalizedElement>
                </Key24LocalizedElement>
              </Key24LocalizedElement>
            </Key24LocalizedElement>

            <Key24LocalizedElement as="h3" className="bento-heading">Night & Weekend Revenue</Key24LocalizedElement>
            <Key24LocalizedElement as="p" className="bento-copy">
              Turn off your ringer and sleep peacefully. Lucrative €250+ emergency lockouts are qualified, quoted according to your out-of-hours rate card, and dispatched directly to your tablet.
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="bento-highlight highlight-peach">
              <Checkmark size={16} />
              <Key24LocalizedElement as="span">Adds €2,000–€4,000/mo in off-hours profit</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>

        {/* Live Audio Call Simulation Banner */}
        <Key24LocalizedElement as="div" className="voice-simulation-bar">
          <Key24LocalizedElement as="div" className="sim-left">
            <Key24LocalizedElement as="button"
              type="button"
              className="sim-play-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause sample call' : 'Play sample call'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Key24LocalizedElement>
            <Key24LocalizedElement as="div" className="sim-meta">
              <Key24LocalizedElement as="strong">Live Simulated Call: 2021 VW Passat Lockout</Key24LocalizedElement>
              <Key24LocalizedElement as="span">Caller: "I left my keys in the boot at Frankfurt Airport P3..."</Key24LocalizedElement>
            </Key24LocalizedElement>
          </Key24LocalizedElement>

          <Key24LocalizedElement as="div" className="sim-waveform" aria-hidden="true">
            <Key24LocalizedElement as="span" className={isPlaying ? 'bar-animated' : ''} style={{ height: '10px' }}></Key24LocalizedElement>
            <Key24LocalizedElement as="span" className={isPlaying ? 'bar-animated' : ''} style={{ height: '22px' }}></Key24LocalizedElement>
            <Key24LocalizedElement as="span" className={isPlaying ? 'bar-animated' : ''} style={{ height: '14px' }}></Key24LocalizedElement>
            <Key24LocalizedElement as="span" className={isPlaying ? 'bar-animated' : ''} style={{ height: '28px' }}></Key24LocalizedElement>
            <Key24LocalizedElement as="span" className={isPlaying ? 'bar-animated' : ''} style={{ height: '18px' }}></Key24LocalizedElement>
            <Key24LocalizedElement as="span" className={isPlaying ? 'bar-animated' : ''} style={{ height: '26px' }}></Key24LocalizedElement>
            <Key24LocalizedElement as="span" className={isPlaying ? 'bar-animated' : ''} style={{ height: '12px' }}></Key24LocalizedElement>
            <Key24LocalizedElement as="span" className={isPlaying ? 'bar-animated' : ''} style={{ height: '20px' }}></Key24LocalizedElement>
          </Key24LocalizedElement>

          <Key24LocalizedElement as="div" className="sim-pill">
            <Key24LocalizedElement as="span" className="green-dot"></Key24LocalizedElement>
            <Key24LocalizedElement as="strong">KEY24 AI:</Key24LocalizedElement>
            <Key24LocalizedElement as="span">"Got it. Our mobile technician is dispatched to Terminal 1, ETA 18 minutes."</Key24LocalizedElement>
          </Key24LocalizedElement>
        </Key24LocalizedElement>
      </Key24LocalizedElement>

      <style jsx>{`
        .voice-section {
          position: relative;
          padding: 5.5rem 1.5rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .voice-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .voice-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 3.5rem auto;
        }

        .voice-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2563eb;
          background: #eff6ff;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }

        .voice-title {
          font-size: clamp(2.2rem, 3.5vw + 1rem, 3.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 1rem 0;
        }

        .voice-subtitle {
          font-size: clamp(1.05rem, 1.2vw + 0.8rem, 1.25rem);
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .voice-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 2.5rem;
        }

        .voice-bento-card {
          border-radius: 24px;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.05);
          transition: transform 0.2s cubic-bezier(0.2, 0, 0.38, 0.9), box-shadow 0.2s ease;
        }

        .voice-bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -6px rgba(15, 23, 42, 0.1);
        }

        /* Color Schemes */
        .bento-mint {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
        }
        .icon-mint {
          background: #10b981;
          color: #ffffff;
        }
        .stat-mint {
          background: #d1fae5;
          color: #065f46;
        }
        .highlight-mint {
          background: rgba(16, 185, 129, 0.12);
          color: #065f46;
        }

        .bento-indigo {
          background: #eef2ff;
          border: 1px solid #c7d2fe;
        }
        .icon-indigo {
          background: #6366f1;
          color: #ffffff;
        }
        .stat-indigo {
          background: #e0e7ff;
          color: #3730a3;
        }
        .highlight-indigo {
          background: rgba(99, 102, 241, 0.12);
          color: #3730a3;
        }

        .bento-peach {
          background: #fff7ed;
          border: 1px solid #fed7aa;
        }
        .icon-peach {
          background: #f97316;
          color: #ffffff;
        }
        .stat-peach {
          background: #ffedd5;
          color: #9a3412;
        }
        .highlight-peach {
          background: rgba(249, 115, 22, 0.12);
          color: #9a3412;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .card-icon-pill {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-stat-pill {
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
        }

        .bento-ill-box {
          width: 100%;
          border-radius: 14px;
          padding: 0.65rem 0.5rem;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bento-ill-box svg {
          width: 100%;
          max-width: 260px;
          height: auto;
          display: block;
        }

        .ill-mint {
          background: #ffffff;
          border: 1px solid #a7f3d0;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08);
        }

        .ill-indigo {
          background: #ffffff;
          border: 1px solid #c7d2fe;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.08);
        }

        .ill-peach {
          background: #ffffff;
          border: 1px solid #fed7aa;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.08);
        }

        .bento-heading {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.75rem 0;
          line-height: 1.25;
        }

        .bento-copy {
          font-size: 0.95rem;
          line-height: 1.55;
          color: #334155;
          margin: 0 0 1.5rem 0;
          flex-grow: 1;
        }

        .bento-highlight {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 0.6rem 0.85rem;
          border-radius: 10px;
        }

        /* Simulation Banner */
        .voice-simulation-bar {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .sim-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .sim-play-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #2563eb;
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .sim-play-btn:hover {
          background: #1d4ed8;
          transform: scale(1.05);
        }

        .sim-meta strong {
          display: block;
          font-size: 0.875rem;
          color: #0f172a;
        }

        .sim-meta span {
          display: block;
          font-size: 0.8125rem;
          color: #64748b;
          font-style: italic;
        }

        .sim-waveform {
          display: flex;
          align-items: center;
          gap: 4px;
          height: 28px;
        }

        .sim-waveform span {
          width: 4px;
          background: #3b82f6;
          border-radius: 2px;
          transition: height 0.2s ease;
        }

        .bar-animated {
          animation: wave 1s infinite alternate ease-in-out;
        }

        @keyframes wave {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1.3); }
        }

        .sim-pill {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          background: #f1f5f9;
          padding: 0.5rem 0.85rem;
          border-radius: 10px;
          color: #0f172a;
        }

        .green-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        @media (max-width: 1024px) {
          .voice-cards-grid {
            grid-template-columns: 1fr;
          }
          .voice-simulation-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .sim-pill {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </Key24LocalizedElement>
  );
};
