import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { contentLanguage, serviceCopy, serviceOrder, serviceRoutes } from '@/data/services';
import styles from './SiteLayout.module.scss';
export function Footer({sectionId='footer'}:{sectionId?:string}) {
 const lang=contentLanguage(useRouter().locale||'en-GB');const services=serviceCopy[lang];
 const t={en:{line:'Enquiries connected. People in control.',services:'Services',company:'KEY24',reviews:'Customer reviews',contact:'Contact',demo:'Book a demo',privacy:'Privacy',terms:'Terms',cookies:'Cookies'},de:{line:'Anfragen verbunden. Menschen behalten die Kontrolle.',services:'Services',company:'KEY24',reviews:'Kundenstimmen',contact:'Kontakt',demo:'Demo buchen',privacy:'Datenschutz',terms:'AGB',cookies:'Cookies'},tr:{line:'Talepler bir arada. Kontrol insanlarda.',services:'Servisler',company:'KEY24',reviews:'Müşteri yorumları',contact:'İletişim',demo:'Demo planla',privacy:'Gizlilik',terms:'Koşullar',cookies:'Çerezler'}}[lang];
 return <footer id={sectionId} className={styles.footer}><div className={styles.footerInner}><div><Link href="/" className={styles.footerBrand}>KEY24</Link><p>{t.line}</p></div><div><h2>{t.services}</h2><ul>{serviceOrder.map(id=><li key={id}><Link href={serviceRoutes[id]}>{services[id].name}</Link></li>)}</ul></div><div><h2>{t.company}</h2><ul><li><Link href="/#reviews">{t.reviews}</Link></li><li><Link href="/#roi-calculator">ROI</Link></li><li><Link href="/#faq">FAQ</Link></li><li><Link href="/contact">{t.contact}</Link></li><li><Link href="/demo">{t.demo}</Link></li></ul></div></div><div className={styles.legal}><span>© 2026 KEY24</span><Link href="/legal/privacy">{t.privacy}</Link><Link href="/legal/terms">{t.terms}</Link><Link href="/legal/cookies">{t.cookies}</Link></div></footer>;
}
