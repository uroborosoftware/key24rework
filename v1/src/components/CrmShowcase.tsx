import React from 'react';
import { Phone, Chat, Calendar, User, Document, Checkmark, ArrowRight, Location, Settings, Security, ToolBox, Search } from '@carbon/icons-react';
import { contentLanguage } from '@/data/services';
import { crmCopy } from '@/data/crm-content';
import styles from './CrmShowcase.module.scss';
type Kind='leads'|'conversations'|'agenda'|'team'|'stock'|'invoices'|'tariffs'|'reports'|'traffic'|'network';
function CrmIllustration({kind,locale}:{kind:Kind;locale:string}){
const t=crmCopy[contentLanguage(locale)].labels;
return <div className={styles.scene} aria-hidden="true">
{kind==='leads'?<div className={styles.leadVisual}><div className={styles.channels}><Phone/><Chat/><span>www</span></div><div className={styles.connector}>↓</div><div className={styles.paper}><span className={styles.tag}>{t.lead}</span><strong>VW Golf · 2005</strong><span className={styles.good}><Checkmark size={14}/>{t.vehicle}</span><small>{t.source}</small></div></div>:
kind==='conversations'?<div className={styles.transcript}><div><Chat size={18}/><strong>{t.transcript}</strong></div><span className={styles.chatLine}/><span className={styles.chatLine}/><span className={styles.chatLine}/><footer><span className={styles.bad}>● {t.pending}</span><span className={styles.good}>✓ {t.done}</span></footer></div>:
kind==='agenda'?<div className={styles.calendar}><header><Calendar size={18}/>{t.calendar}</header><div className={styles.dayGrid}>{Array.from({length:15},(_,i)=><span key={i}/>)}</div><div className={styles.appointment}><b>10:00—12:00</b><span>VW Golf · {t.job}</span><small>{t.technician} <ArrowRight size={14}/></small></div></div>:
kind==='team'?<div className={styles.assignment}><div className={styles.jobSlip}><ToolBox size={20}/><strong>{t.job}</strong><small>VW Golf</small></div><ArrowRight size={22}/><div className={styles.person}><User size={30}/><strong>{t.technician}</strong><span className={styles.good}>{t.assigned}</span></div></div>:
kind==='stock'?<div className={styles.stock}><header><ToolBox size={20}/>{t.stock}</header>{['Remote','Transponder','Adapter'].map((s,i)=><div key={s}><span>{s}</span><i style={{width:[80,50,18][i]+'%'}}/><b>{[12,8,2][i]}</b></div>)}<span className={styles.bad}>{t.low}</span></div>:
kind==='invoices'?<div className={styles.invoice}><Document size={24}/><span className={styles.tag}>{t.invoice}</span><strong>INV—0042</strong><div className={styles.lines}><i/><i/><i/></div><footer><User size={15}/>{t.saved}<Checkmark size={16}/></footer></div>:
kind==='tariffs'?<div className={styles.tariffs}><header><Settings size={19}/>{t.price}</header>{['VW · Remote','Audi · Keyless','Ford · Transponder'].map((s,i)=><div key={s}><span>{s}</span><span className={styles.editLines}/><Settings size={14}/></div>)}</div>:
kind==='reports'?<div className={styles.report}><header><span>{t.week}</span><b>{t.month}</b><span>{t.year}</span></header><div className={styles.bars}>{[25,44,36,68,55,84,72].map((h,i)=><i key={i} style={{height:h+'%'}}/>)}</div><footer><span>{t.revenue}</span><span>{t.conversion}</span><Location size={15}/></footer></div>:
kind==='traffic'?<div className={styles.traffic}><header><Security size={22}/><strong>{t.review}</strong></header><div><span className={styles.good}>✓</span>{t.normal}<span className={styles.spark}/></div><div><span className={styles.bad}>!</span>{t.suspicious}<span className={styles.alertSpark}/></div><small><Search size={14}/> KEY24</small></div>:
<div className={styles.network}><div className={styles.nodes}><span>NL</span><span>BE</span><span>DE</span></div><div className={styles.market}><ToolBox size={28}/><div><strong>{t.network}</strong><span>{t.used}</span></div><Chat size={20}/></div></div>}
</div>;
}
export function CrmOverview({locale}:{locale:string}){
const t=crmCopy[contentLanguage(locale)];
return <div className={styles.overview} role="img" aria-label={t.intro}><span className={styles.overviewBrand}>KEY24 <small>CRM</small></span><CrmIllustration kind="leads" locale={locale}/><div className={styles.overviewFlow}><span><Calendar size={18}/>{t.labels.calendar}</span><ArrowRight size={18}/><span><Document size={18}/>{t.labels.invoice}</span></div></div>;
}
export function CrmShowcase({locale}:{locale:string}){
const t=crmCopy[contentLanguage(locale)];
return <section id="how-it-works" className={styles.showcase} aria-labelledby="benefits-heading"><div className={styles.inner}><header className={styles.heading}><p>CRM PANEL</p><h2 id="benefits-heading">{t.heading}</h2><p>{t.intro}</p><small>{t.example}</small></header>{[[0,2],[2,5],[5,10]].map(([start,end],group)=><div className={styles.group} key={start}><h3><span>0{group+1}</span>{t.groups[group]}</h3><div className={styles.cards}>{t.cards.slice(start,end).map(([id,title,text])=><article key={id} data-crm-feature={id}><CrmIllustration kind={id as Kind} locale={locale}/><div className={styles.cardCopy}><h4>{title}</h4><p>{text}</p></div></article>)}</div></div>)}</div></section>;
}
