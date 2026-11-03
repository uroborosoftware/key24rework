import React from 'react';
import { Phone, Chat, User, Location, Checkmark, ArrowRight, Calendar, Document } from '@carbon/icons-react';
import { ServiceId, contentLanguage } from '@/data/services';
import styles from './BenefitIllustration.module.scss';
const labels={en:{vehicle:'Vehicle details',location:'Location received',next:'Ready for your team',question:'Customer enquiry',reply:'Useful answers',handover:'Personal follow-up',new:'New enquiry',assigned:'Assigned',context:'Job details'},de:{vehicle:'Fahrzeugdaten',location:'Standort erfasst',next:'Bereit für dein Team',question:'Kundenanfrage',reply:'Passende Antworten',handover:'Persönlicher Rückruf',new:'Neue Anfrage',assigned:'Zugewiesen',context:'Auftragsdetails'},tr:{vehicle:'Araç bilgileri',location:'Konum alındı',next:'Ekibin için hazır',question:'Müşteri talebi',reply:'İlgili yanıtlar',handover:'Kişisel takip',new:'Yeni talep',assigned:'Atandı',context:'İş bilgileri'}};
export function BenefitIllustration({service,index,locale}:{service:ServiceId;index:number;locale:string}){
 const t=labels[contentLanguage(locale)];
 const titles=service==='crm'?[t.new,t.assigned,t.context]:service==='voice-ai'?[t.vehicle,t.location,t.next]:[t.question,t.reply,t.handover];
 const Icon=service==='voice-ai'?Phone:service==='crm'?Document:Chat;
 return <div className={styles.scene} aria-hidden="true">
  {index===0?<><div className={styles.backCard}><span/><span/><span/></div><div className={styles.frontCard}><Icon size={24}/><strong>{titles[index]}</strong><div className={styles.lines}><span/><span/></div><span className={styles.tag}><Checkmark size={14}/> KEY24</span></div><ArrowRight className={styles.arrow} size={32}/></>:
  index===1?<><div className={styles.smallCard}><Icon size={20}/><div className={styles.lines}><span/><span/></div></div><svg className={styles.connector} viewBox="0 0 100 60"><path d="M5 45 Q45 5 85 28 M72 17 L88 29 L70 34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg><div className={styles.resultCard}>{service==='voice-ai'?<Location size={25}/>:service==='crm'?<User size={25}/>:<Chat size={25}/>}<strong>{titles[index]}</strong><div className={styles.lines}><span/><span/></div></div></>:
  <><div className={styles.phone}><div className={styles.speaker}/><div className={styles.lines}><span/><span/><span/></div><div className={styles.phoneRow}><Calendar size={20}/><Checkmark size={20}/></div></div><div className={styles.notification}><span className={styles.avatar}><User size={22}/></span><div><strong>{titles[index]}</strong><div className={styles.lines}><span/><span/></div></div><Checkmark size={16}/></div></>}
 </div>;
}
