import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Checkmark, Document, Microphone } from '@carbon/icons-react';
import { contentLanguage } from '@/data/services';
import { conversationCopy } from '@/data/conversation-examples';
import styles from './ConversationDemos.module.scss';
export function WhatsAppShowcase({locale}:{locale:string}) {
 const t=conversationCopy[contentLanguage(locale)]; const track=useRef<HTMLDivElement>(null); const [start,setStart]=useState(true); const [end,setEnd]=useState(false);
 const move=(direction:number)=>{const el=track.current;if(!el)return;const card=el.firstElementChild;const distance=(card?.getBoundingClientRect().width||el.clientWidth)+24;el.scrollBy({left:direction*(locale.startsWith('ar')?-1:1)*distance,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});};
 return <Key24LocalizedElement as="div" className={styles.whatsapp} data-testid="whatsapp-examples" role="group" aria-label={t.capabilities}>
  <Key24LocalizedElement as="div" className={styles.track} ref={track} onScroll={event=>{const el=event.currentTarget;setStart(Math.abs(el.scrollLeft)<=1);setEnd(Math.abs(el.scrollLeft)+el.clientWidth>=el.scrollWidth-2);}}>
   {t.cards.map(card=><Key24LocalizedElement as="article" className={styles.capabilityCard} key={card.kind}>
    <Key24LocalizedElement as="div" className={styles.chatScene} aria-label={card.title}>
     {'incoming' in card&&<Key24LocalizedElement as="p" className={styles.incoming}>{card.incoming}<Key24LocalizedElement as="span">10:42</Key24LocalizedElement></Key24LocalizedElement>}
     {card.kind==='media'&&<><Key24LocalizedElement as="div" className={styles.attachment}><Document size={24}/><Key24LocalizedElement as="span">{card.file}<Key24LocalizedElement as="small">KEY24</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="div" className={styles.voiceNote}><Microphone size={20}/><Key24LocalizedElement as="span" className={styles.waveform} aria-hidden="true">▂▅▃▇▅▂▆▃▇▂▅▃</Key24LocalizedElement><Key24LocalizedElement as="span">00:12</Key24LocalizedElement></Key24LocalizedElement></>}
     <Key24LocalizedElement as="p" className={styles.outgoing}>{card.outgoing}<Key24LocalizedElement as="span">10:43 <Checkmark size={12}/><Checkmark size={12}/></Key24LocalizedElement></Key24LocalizedElement>
     {card.kind==='booking'&&<Key24LocalizedElement as="div" className={styles.booking}><Calendar size={24}/><Key24LocalizedElement as="span"><Key24LocalizedElement as="strong">{card.badge}</Key24LocalizedElement><Key24LocalizedElement as="small">{card.status}</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>}
     {card.kind==='knowledge'&&<Key24LocalizedElement as="div" className={styles.checks}>{card.checks?.map(text=><Key24LocalizedElement as="span" key={text}><Checkmark size={15}/>{text}</Key24LocalizedElement>)}</Key24LocalizedElement>}
    </Key24LocalizedElement>
    <Key24LocalizedElement as="div" className={styles.cardCopy}><Key24LocalizedElement as="h3">{card.title}</Key24LocalizedElement><Key24LocalizedElement as="p">{card.text}</Key24LocalizedElement></Key24LocalizedElement>
   </Key24LocalizedElement>)}
  </Key24LocalizedElement>
  <Key24LocalizedElement as="div" className={styles.carouselButtons}><Key24LocalizedElement as="button" type="button" aria-label={t.previous} disabled={start} onClick={()=>move(-1)}><ArrowLeft size={20}/></Key24LocalizedElement><Key24LocalizedElement as="button" type="button" aria-label={t.next} disabled={end} onClick={()=>move(1)}><ArrowRight size={20}/></Key24LocalizedElement></Key24LocalizedElement>
  <Key24LocalizedElement as="p" className={styles.demoNote}>{t.note}</Key24LocalizedElement>
 </Key24LocalizedElement>;
}

