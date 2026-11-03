import { FloatingAiWidget } from './FloatingAiWidget';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serviceJourney } from '@/data/service-journey';
import { CrmOverview, CrmShowcase } from './CrmShowcase';
import { VoiceAfterHours } from './VoiceAfterHours';
import { BenefitIllustration } from './BenefitIllustration';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { WebsiteChatDemo } from './WebsiteChatDemo';
import { WhatsAppConversations } from './WhatsAppConversations';
import { WhatsAppShowcase } from './WhatsAppShowcase';
import { conversationCopy } from '@/data/conversation-examples';
import { FaqAccordionSection } from './FaqAccordionSection';
import { contentLanguage, serviceCopy, serviceImages, ServiceId } from '@/data/services';
import { serviceDetails, servicePreviews } from '@/data/service-details';
import styles from './SiteLayout.module.scss';

export function ServicePage({serviceId}:{serviceId:ServiceId}) {
 const locale=useRouter().locale||'en-GB'; const lang=contentLanguage(locale);
 const service=serviceCopy[lang][serviceId]; const details=serviceDetails[lang][serviceId];
 const t={
  en:{heading:'From the first enquiry to the next step',demo:'Book a demo',contact:'Let’s walk through your workflow and agree the right setup for your business.',photo:'Illustrative workplace photograph',preview:'Illustrative product preview',workflow:'How it works',scenario:'A working-day example',faq:'Before you get started',cta:'See it with your own workflow.'},
  de:{heading:'Von der Anfrage zum nächsten Schritt',demo:'Demo buchen',contact:'Wir besprechen deinen Arbeitsablauf und die passende Einrichtung für deinen Betrieb.',photo:'Illustratives Arbeitsplatzfoto',preview:'Illustrative Produktvorschau',workflow:'So funktioniert es',scenario:'Ein Beispiel aus dem Arbeitsalltag',faq:'Bevor du startest',cta:'Erlebe es mit deinem eigenen Ablauf.'},
  tr:{heading:'İlk talepten sonraki adıma',demo:'Demo planla',contact:'İş akışını birlikte inceleyelim, işletmene uygun kurulumu konuşalım.',photo:'Temsili çalışma hayatı fotoğrafı',preview:'Örnek ürün görünümü',workflow:'Nasıl çalışır?',scenario:'İş gününden bir örnek',faq:'Başlamadan önce',cta:'Kendi iş akışında gör.'}
 }[lang];
 return <>
  <Head><title>{service.name+' | KEY24'}</title><meta name="description" content={service.summary}/></Head>
  <Navigation locale={locale}/>
  <main id="main-content" className={styles.detail}>
   <section className={styles.detailHero} aria-labelledby="service-title"><div><p className={styles.detailLabel}>{service.name}</p><h1 id="service-title">{service.title}</h1><p>{service.summary}</p><div className={styles.heroActions}><Link href="/demo" className={styles.serviceAction}>{t.demo}</Link><a href="#how-it-works" className={styles.serviceTextLink}>{t.workflow} <span aria-hidden="true">↓</span></a></div></div><figure>{serviceId==='crm'?<CrmOverview locale={locale}/>:<img src={'/images/'+serviceImages[serviceId]} width="1000" height="750" alt={service.name}/>}<figcaption>{serviceId==='crm'?t.preview:t.photo}</figcaption></figure></section>
   {serviceId==='crm'?<CrmShowcase locale={locale}/>:<><section id="how-it-works" className={styles.detailPoints} aria-labelledby="benefits-heading"><div><h2 id="benefits-heading">{serviceId==='whatsapp'?conversationCopy[lang].capabilities:t.heading}</h2>{serviceId==='whatsapp'?<><p className={styles.showcaseLead}>{conversationCopy[lang].capabilityLead}</p><WhatsAppShowcase locale={locale}/></>:<ul>{serviceJourney[lang][serviceId].map(([title,text],index)=><li key={title}><BenefitIllustration service={serviceId} index={index} locale={locale}/><h3>{title}</h3><p>{text}</p></li>)}</ul>}</div></section></>}
   {serviceId==='crm'?null:serviceId==='whatsapp'?<WhatsAppConversations locale={locale}/>:serviceId==='voice-ai'?<VoiceAfterHours locale={locale}/>:<> <section className={styles.detailScenario} aria-labelledby="scenario-heading"><div><p className={styles.detailLabel}>{t.scenario}</p><h2 id="scenario-heading">{details.scenarioTitle}</h2><p>{details.scenario}</p></div><figure>{serviceId==='chatbot'?<WebsiteChatDemo locale={locale}/>:<img src={'/images/'+servicePreviews[serviceId]} width="1024" height="600" alt={service.name+' — '+t.preview} loading="lazy"/>}<figcaption>{t.preview}</figcaption></figure></section> </>}
   <FaqAccordionSection eyebrow="FAQ" title={t.faq} items={details.faq}/>
   <section className={styles.detailContact} aria-labelledby="service-contact-heading"><div><h2 id="service-contact-heading">{t.cta}</h2><p>{t.contact}</p></div><Link href="/demo">{t.demo}</Link></section>
  </main><Footer/><FloatingAiWidget/>
 </>;
}


