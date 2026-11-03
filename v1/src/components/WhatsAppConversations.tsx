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
 const move=(direction:number)=>{const el=track.current;if(!el)return;const width=el.firstElementChild?.getBoundingClientRect().width||el.clientWidth;el.scrollBy({left:direction*(width+24),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});};
 return <section className={styles.section} aria-labelledby="scenario-heading" data-testid="whatsapp-conversations"><header><h2 id="scenario-heading">{t.heading}</h2><p>{t.lead}</p></header><div className={styles.grid} ref={track} onScroll={event=>{const el=event.currentTarget;setStart(el.scrollLeft<=1);setEnd(el.scrollLeft+el.clientWidth>=el.scrollWidth-2);}}>{t.items.map(([title,messages])=><article key={title as string}><h3>{title}</h3><div className={styles.thread}>{(messages as string[]).map((message,index)=><p className={index%2?styles.outgoing:styles.incoming} key={index}>{message}<span>10:{String(42+index).padStart(2,'0')}{index%2===1&&<><Checkmark size={11}/><Checkmark size={11}/></>}</span></p>)}</div></article>)}</div><div className={controls.carouselButtons}><button type="button" aria-label={labels.previous} disabled={start} onClick={()=>move(-1)}><ArrowLeft size={20}/></button><button type="button" aria-label={labels.next} disabled={end} onClick={()=>move(1)}><ArrowRight size={20}/></button></div><p className={styles.note}>{t.note}</p></section>;
}
