import React from 'react';
import { contentLanguage } from '@/data/services';
import styles from './SlackLanding.module.scss';
const copy={
en:{title:'The jobs you miss add up.',lead:'One missed job could mean €200 in revenue left behind.',labels:['Potential value of one missed job','Missed jobs in this example','Potential revenue left behind','Connected services, one workflow'],note:'Illustrative calculation: 5 missed jobs × €200. Potential revenue, not profit or a guaranteed result.',people:'Built around the people doing the work.',alt:['A technician working on a vehicle','An automotive workshop colleague','A workshop professional','A driver on the road','A service professional']},
de:{title:'Verpasste Aufträge summieren sich.',lead:'Ein verpasster Auftrag kann €200 Umsatz bedeuten.',labels:['Möglicher Wert eines verpassten Auftrags','Verpasste Aufträge in diesem Beispiel','Möglicher entgangener Umsatz','Verbundene Services, ein Arbeitsablauf'],note:'Beispielrechnung: 5 verpasste Aufträge × €200. Möglicher Umsatz, kein Gewinn oder garantiertes Ergebnis.',people:'Für die Menschen, die die Arbeit machen.',alt:['Ein Techniker am Fahrzeug','Ein Kollege in der Werkstatt','Eine Fachkraft in der Werkstatt','Ein Fahrer unterwegs','Eine Fachkraft im Service']},
tr:{title:'Kaçan işler birikir.',lead:'Kaçan tek bir iş, €200 potansiyel gelir demek olabilir.',labels:['Kaçan bir işin potansiyel değeri','Bu örnekte kaçan iş sayısı','Potansiyel gelir kaybı','Bağlantılı servis, tek iş akışı'],note:'Örnek hesap: 5 kaçan iş × €200. Potansiyel gelirdir; kâr veya garanti edilen sonuç değildir.',people:'İşi yapan insanlar için tasarlandı.',alt:['Araç üzerinde çalışan teknisyen','Atölyede çalışan ekip arkadaşı','Bir atölye çalışanı','Yoldaki bir sürücü','Bir servis çalışanı']}
};
export function RevenueStory({locale}:{locale:string}){
 const t=copy[contentLanguage(locale)];
 return <div className={styles.revenueStory}>
  <section id="revenue-story" className={styles.numbersBand} aria-labelledby="revenue-story-title"><div><p className={styles.eyebrow}>KEY24</p><h2 id="revenue-story-title">{t.title}</h2><p className={styles.bandLead}>{t.lead}</p><dl>{['€200','5','€1,000','4'].map((value,i)=><div key={value}><dt>{t.labels[i]}</dt><dd>{value}</dd></div>)}</dl><p className={styles.bandNote}>{t.note}</p></div></section>
  <figure className={styles.peopleStrip}><div>{['workshop-technician.jpg','workshop-colleague.jpg','automotive-team.jpg','pain-driving.jpg','scenario-portrait-2.jpg'].map((src,i)=><img key={src} src={'/images/'+src} width="500" height="400" alt={t.alt[i]} loading="lazy"/>)}</div><figcaption>{t.people}</figcaption></figure>
 </div>;
}
