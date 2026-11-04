import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useState } from 'react';
import { Chat } from '@carbon/icons-react';
import { contentLanguage } from '@/data/services';
import { conversationCopy } from '@/data/conversation-examples';
import styles from './ConversationDemos.module.scss';
export function WebsiteChatDemo({locale}:{locale:string}) {
 const t=conversationCopy[contentLanguage(locale)]; const [selected,setSelected]=useState<number|null>(null);
 const topic=selected===null?null:t.topics[selected];
 return <Key24LocalizedElement as="div" className={styles.webDemo} data-testid="website-chat-demo" role="group" aria-label={t.webTitle}>
  <Key24LocalizedElement as="div" className={styles.webHeader}><Key24LocalizedElement as="span" className={styles.brandIcon}><Chat size={22}/></Key24LocalizedElement><Key24LocalizedElement as="div"><Key24LocalizedElement as="strong">{t.webTitle}</Key24LocalizedElement><Key24LocalizedElement as="span">{t.demo}</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>
  <Key24LocalizedElement as="div" className={styles.webMessages} role="log" aria-live="polite" aria-atomic="true"><Key24LocalizedElement as="p" className={styles.webBot}>{t.greeting}</Key24LocalizedElement>{topic&&<><Key24LocalizedElement as="p" className={styles.webUser}>{topic[1]}</Key24LocalizedElement><Key24LocalizedElement as="p" className={styles.webBot}>{topic[2]}</Key24LocalizedElement></>}</Key24LocalizedElement>
  <Key24LocalizedElement as="div" className={styles.webChoices}><Key24LocalizedElement as="p">{t.hint}</Key24LocalizedElement><Key24LocalizedElement as="div">{t.topics.map(([label],i)=><Key24LocalizedElement as="button" type="button" key={label} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{label}</Key24LocalizedElement>)}</Key24LocalizedElement></Key24LocalizedElement>
  <Key24LocalizedElement as="p" className={styles.demoNote}>{t.webNote}</Key24LocalizedElement>
 </Key24LocalizedElement>;
}
