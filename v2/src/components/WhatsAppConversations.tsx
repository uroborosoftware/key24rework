import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Checkmark } from '@carbon/icons-react';
import { contentLanguage } from '@/data/services';
import { whatsappConversations } from '@/data/whatsapp-conversations';
import { conversationCopy } from '@/data/conversation-examples';
import controls from './ConversationDemos.module.scss';
import styles from './WhatsAppConversations.module.scss';
export function WhatsAppConversations({locale}:{locale:string}){
 const t=whatsappConversations[contentLanguage(locale)]; const labels=conversationCopy[contentLanguage(locale)];
 const track=useRef<HTMLDivElement>(null); const [start,setStart]=useState(true); const [end,setEnd]=useState(false);
 const move=(direction:number)=>{const el=track.current;if(!el)return;const width=el.firstElementChild?.getBoundingClientRect().width||el.clientWidth;el.scrollBy({left:direction*(locale.startsWith('ar')?-1:1)*(width+24),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});};
 return <Key24LocalizedElement as="section" className={styles.section} aria-labelledby="scenario-heading" data-testid="whatsapp-conversations"><Key24LocalizedElement as="header"><Key24LocalizedElement as="h2" id="scenario-heading">{t.heading}</Key24LocalizedElement><Key24LocalizedElement as="p">{t.lead}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="div" className={styles.grid} ref={track} onScroll={event=>{const el=event.currentTarget;setStart(Math.abs(el.scrollLeft)<=1);setEnd(Math.abs(el.scrollLeft)+el.clientWidth>=el.scrollWidth-2);}}>{t.items.map(([title,messages])=><Key24LocalizedElement as="article" key={title as string}><Key24LocalizedElement as="h3">{title}</Key24LocalizedElement><Key24LocalizedElement as="div" className={styles.thread}>{(messages as string[]).map((message,index)=><Key24LocalizedElement as="p" className={index%2?styles.outgoing:styles.incoming} key={index}>{message}<Key24LocalizedElement as="span">10:{String(42+index).padStart(2,'0')}{index%2===1&&<><Checkmark size={11}/><Checkmark size={11}/></>}</Key24LocalizedElement></Key24LocalizedElement>)}</Key24LocalizedElement></Key24LocalizedElement>)}</Key24LocalizedElement><Key24LocalizedElement as="div" className={controls.carouselButtons}><Key24LocalizedElement as="button" type="button" aria-label={labels.previous} disabled={start} onClick={()=>move(-1)}><ArrowLeft size={20}/></Key24LocalizedElement><Key24LocalizedElement as="button" type="button" aria-label={labels.next} disabled={end} onClick={()=>move(1)}><ArrowRight size={20}/></Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="p" className={styles.note}>{t.note}</Key24LocalizedElement></Key24LocalizedElement>;
}

