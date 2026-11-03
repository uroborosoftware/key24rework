import React, { useState } from 'react';
import { Chat } from '@carbon/icons-react';
import { contentLanguage } from '@/data/services';
import { conversationCopy } from '@/data/conversation-examples';
import styles from './ConversationDemos.module.scss';
export function WebsiteChatDemo({locale}:{locale:string}) {
 const t=conversationCopy[contentLanguage(locale)]; const [selected,setSelected]=useState<number|null>(null);
 const topic=selected===null?null:t.topics[selected];
 return <div className={styles.webDemo} data-testid="website-chat-demo" role="group" aria-label={t.webTitle}>
  <div className={styles.webHeader}><span className={styles.brandIcon}><Chat size={22}/></span><div><strong>{t.webTitle}</strong><span>{t.demo}</span></div></div>
  <div className={styles.webMessages} role="log" aria-live="polite" aria-atomic="true"><p className={styles.webBot}>{t.greeting}</p>{topic&&<><p className={styles.webUser}>{topic[1]}</p><p className={styles.webBot}>{topic[2]}</p></>}</div>
  <div className={styles.webChoices}><p>{t.hint}</p><div>{t.topics.map(([label],i)=><button type="button" key={label} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{label}</button>)}</div></div>
  <p className={styles.demoNote}>{t.webNote}</p>
 </div>;
}
