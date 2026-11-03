import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Close, ChevronDown } from '@carbon/icons-react';
import { contentLanguage, serviceCopy, serviceOrder, serviceRoutes } from '@/data/services';
import styles from './SiteLayout.module.scss';
import { websiteLanguages, demoLanguage } from '@/data/demo-languages';

export function Navigation({ locale = 'en-GB' }: {locale?: string}) {
 const router=useRouter(); const current=router.locale||locale; const lang=contentLanguage(current); const services=serviceCopy[lang];
 const t={en:{services:'Services',reviews:'Customer reviews',faq:'FAQ',contact:'Contact',demo:'Book a demo',menu:'Menu',language:'Change language'},de:{services:'Services',reviews:'Kundenstimmen',faq:'FAQ',contact:'Kontakt',demo:'Demo buchen',menu:'Menü',language:'Sprache wechseln'},tr:{services:'Servisler',reviews:'Müşteri yorumları',faq:'SSS',contact:'İletişim',demo:'Demo planla',menu:'Menü',language:'Dili değiştir'}}[lang];
 const [open,setOpen]=useState(false); const serviceMenu=useRef<HTMLDetailsElement>(null);
 const close=()=>{setOpen(false);if(serviceMenu.current)serviceMenu.current.open=false;};
 useEffect(()=>{const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);if(serviceMenu.current)serviceMenu.current.open=false;}};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape);},[]);
 const changeLanguage=()=>{const locales=router.locales||['en-GB','de-DE'];const next=locales[(locales.indexOf(current)+1)%locales.length];close();router.push(router.pathname,router.asPath,{locale:next});};
 return <header className={styles.header}>
  <div className={styles.headerInner}>
   <Link href="/" className={styles.brand} onClick={close} aria-label="KEY24 home">KEY24</Link>
   <button type="button" className={styles.menuToggle} aria-label={t.menu} aria-controls="primary-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<Close size={24}/>:<Menu size={24}/>}</button>
   <nav id="primary-navigation" aria-label={t.menu} className={open?styles.navOpen:styles.nav}>
    <details className={styles.servicesMenu} ref={serviceMenu}>
     <summary>{t.services}<ChevronDown size={16}/></summary>
     <div className={styles.serviceDropdown}>{serviceOrder.map(id=><Link key={id} href={serviceRoutes[id]} onClick={close} aria-current={router.pathname===serviceRoutes[id]?'page':undefined}><strong>{services[id].name}</strong><span>{services[id].summary}</span></Link>)}</div>
    </details>
    <Link href="/#reviews" onClick={close}>{t.reviews}</Link><Link href="/#faq" onClick={close}>{t.faq}</Link><Link href="/contact" onClick={close}>{t.contact}</Link>
   </nav>
   <div className={styles.headerActions}><select className={styles.language} value={current} onChange={(event)=>{close();router.push(router.pathname,router.asPath,{locale:event.target.value});}} aria-label={t.language}>{Object.entries(websiteLanguages).map(([code,label])=><option key={code} value={code} style={{color:"#111"}}>{label}</option>)}</select><Link className={styles.demoButton} href="/demo" onClick={close}>{t.demo}</Link></div>
  </div>
 </header>;
}

