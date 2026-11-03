import React, { useState } from 'react';
import { Play } from '@carbon/icons-react';

interface ProductFilmSectionProps {
  locale?: string;
}

export const ProductFilmSection: React.FC<ProductFilmSectionProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section" id="video" aria-label="Product Demo Video">
      <div className="video-container">
        {/* 
          DROP YOUR VIDEO HERE:
          You can replace this container with your own <video> tag:
          <video src="/videos/demo.mp4" controls autoPlay loop className="video-element" />
          Or an iframe (YouTube, Loom, Vimeo, etc.):
          <iframe src="https://..." allow="autoplay; fullscreen" className="video-element" />
        */}
        <div className="video-viewport">
          <img
            src="/images/user-product-film.png"
            alt="KEY24 Automotive AI System Walkthrough"
            className="video-poster"
          />
          <div className="video-overlay"></div>

          <button
            type="button"
            className="play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label="Play video"
          >
            <Play size={32} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .video-section {
          width: 100%;
          padding: 1.5rem 1.5rem 5.5rem 1.5rem;
          background: #ffffff;
        }

        .video-container {
          max-width: 1320px; /* Noticeably larger, immersive cinema box */
          margin: 0 auto;
        }

        .video-viewport {
          position: relative;
          width: 100%;
          padding-top: 52%; /* Cinematic widescreen ratio */
          background: #0f172a;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 40px 90px -20px rgba(15, 23, 42, 0.3),
                      0 0 0 1px rgba(226, 232, 240, 0.9),
                      0 10px 40px rgba(37, 99, 235, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-poster {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.28);
          backdrop-filter: blur(1px);
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: #2563eb;
          color: #ffffff;
          border: 4px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 40px rgba(37, 99, 235, 0.8),
                      0 10px 25px rgba(0, 0, 0, 0.35);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.15s ease;
          z-index: 2;
        }

        .play-btn:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: #1d4ed8;
        }

        .play-btn :global(svg) {
          margin-left: 4px;
        }

        @media (max-width: 768px) {
          .video-viewport {
            border-radius: 20px;
            padding-top: 56.25%;
          }
          .play-btn {
            width: 68px;
            height: 68px;
          }
          .video-section {
            padding: 1rem 1rem 3.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};
