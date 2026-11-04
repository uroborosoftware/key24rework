import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import styles from './SlackLanding.module.scss';

const VIDEO_SRC = '/videos/key24-intro.mp4';

export function HomeVideo({ locale }: { locale: string }) {
  const t = locale.startsWith('tr')
    ? { title: 'KEY24 iş başında.', label: 'Ürün videosu', pending: 'Videomuz yakında burada.' }
    : locale.startsWith('de')
    ? { title: 'KEY24 im Einsatz.', label: 'Produktfilm', pending: 'Unser Film folgt in Kürze.' }
    : { title: 'See KEY24 at work.', label: 'Product film', pending: 'Our film is coming soon.' };

  return <Key24LocalizedElement as="section" id="product-video" className={styles.videoSection} aria-labelledby="video-title">
    <Key24LocalizedElement as="div" className={styles.videoHeading}><Key24LocalizedElement as="h2" id="video-title">{t.title}</Key24LocalizedElement><Key24LocalizedElement as="span">{t.label}</Key24LocalizedElement></Key24LocalizedElement>
    <Key24LocalizedElement as="div" className={styles.videoFrame}>
      {VIDEO_SRC ? <Key24LocalizedElement as="video" controls playsInline preload="metadata" src={VIDEO_SRC} aria-label={t.label} />
        : <Key24LocalizedElement as="div" className={styles.videoPlaceholder}><Key24LocalizedElement as="span">KEY24</Key24LocalizedElement><Key24LocalizedElement as="p">{t.pending}</Key24LocalizedElement></Key24LocalizedElement>}
    </Key24LocalizedElement>
  </Key24LocalizedElement>;
}
