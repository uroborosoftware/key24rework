import React from 'react';
import styles from './SlackLanding.module.scss';

const VIDEO_SRC = '/videos/key24-intro.mp4';

export function HomeVideo({ locale }: { locale: string }) {
  const t = locale.startsWith('tr')
    ? { title: 'KEY24 iş başında.', label: 'Ürün videosu', pending: 'Videomuz yakında burada.' }
    : locale.startsWith('de')
    ? { title: 'KEY24 im Einsatz.', label: 'Produktfilm', pending: 'Unser Film folgt in Kürze.' }
    : { title: 'See KEY24 at work.', label: 'Product film', pending: 'Our film is coming soon.' };

  return <section id="product-video" className={styles.videoSection} aria-labelledby="video-title">
    <div className={styles.videoHeading}><h2 id="video-title">{t.title}</h2><span>{t.label}</span></div>
    <div className={styles.videoFrame}>
      {VIDEO_SRC ? <video controls playsInline preload="metadata" src={VIDEO_SRC} aria-label={t.label} />
        : <div className={styles.videoPlaceholder}><span>KEY24</span><p>{t.pending}</p></div>}
    </div>
  </section>;
}
