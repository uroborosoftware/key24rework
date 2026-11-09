import Link from 'next/link';
import styles from './PhotoGrid.module.css';

const PHOTOS = [
  {
    image: '/demir/tueroeffnung.jpg',
    caption: 'Türöffnung bei zugefallener oder verriegelter Tür',
    href: '/leistungen/wohnungstuer-zugefallen/',
  },
  {
    image: '/demir/schlossarbeit.jpg',
    caption: 'Arbeit an der Elektronik eines Fahrzeugschlüssels',
    href: '/leistungen/autoschluessel/',
  },
  {
    image: '/demir/schluessel-vermessen.webp',
    caption: 'Vermessen eines Schließzylinders vor dem Austausch',
    href: '/schliesszylinder/',
  },
  {
    image: '/demir/werkstatt.jpg',
    caption: 'Werkstatt und Arbeitsumfeld von First Class Key',
    href: '/ueber-uns/',
  },
];

export default function PhotoGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>
        {PHOTOS.map((photo, i) => (
          <Link
            key={i}
            href={photo.href}
            className={styles.item}
            style={{ backgroundImage: `url(${photo.image})` }}
          >
            <div className={styles.overlay} />
            <div className={styles.caption}>{photo.caption}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
