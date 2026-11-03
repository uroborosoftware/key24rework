import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Checkmark, Document, Microphone } from '@carbon/icons-react';
import { contentLanguage } from '@/data/services';
import { conversationCopy } from '@/data/conversation-examples';
import styles from './ConversationDemos.module.scss';
export function WhatsAppShowcase({locale}:{locale:string}) {
 const t=conversationCopy[contentLanguage(locale)]; const track=useRef<HTMLDivElement>(null); const [start,setStart]=useState(true); const [end,setEnd]=useState(false);
 const move=(direction:number)=>{const el=track.current;if(!el)return;const card=el.firstElementChild;const distance=(card?.getBoundingClientRect().width||el.clientWidth)+24;el.scrollBy({left:direction*distance,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});};
 return <div className={styles.whatsapp} data-testid="whatsapp-examples" role="group" aria-label={t.capabilities}>
  <div className={styles.track} ref={track} onScroll={event=>{const el=event.currentTarget;setStart(el.scrollLeft<=1);setEnd(el.scrollLeft+el.clientWidth>=el.scrollWidth-2);}}>
   {t.cards.map(card=><article className={styles.capabilityCard} key={card.kind}>
    <div className={styles.chatScene} aria-label={card.title}>
     {'incoming' in card&&<p className={styles.incoming}>{card.incoming}<span>10:42</span></p>}
     {card.kind==='media'&&<><div className={styles.attachment}><Document size={24}/><span>{card.file}<small>KEY24</small></span></div><div className={styles.voiceNote}><Microphone size={20}/><span className={styles.waveform} aria-hidden="true">▂▅▃▇▅▂▆▃▇▂▅▃</span><span>00:12</span></div></>}
     <p className={styles.outgoing}>{card.outgoing}<span>10:43 <Checkmark size={12}/><Checkmark size={12}/></span></p>
     {card.kind==='booking'&&<div className={styles.booking}><Calendar size={24}/><span><strong>{card.badge}</strong><small>{card.status}</small></span></div>}
     {card.kind==='knowledge'&&<div className={styles.checks}>{card.checks?.map(text=><span key={text}><Checkmark size={15}/>{text}</span>)}</div>}
    </div>
    <div className={styles.cardCopy}><h3>{card.title}</h3><p>{card.text}</p></div>
   </article>)}
  </div>
  <div className={styles.carouselButtons}><button type="button" aria-label={t.previous} disabled={start} onClick={()=>move(-1)}><ArrowLeft size={20}/></button><button type="button" aria-label={t.next} disabled={end} onClick={()=>move(1)}><ArrowRight size={20}/></button></div>
  <p className={styles.demoNote}>{t.note}</p>
 </div>;
}
