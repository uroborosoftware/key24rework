import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
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
  <Key24LocalizedHead><title>{service.name+' | KEY24'}</title><meta name="description" content={service.summary}/></Key24LocalizedHead>
  <Navigation locale={locale}/>
  <Key24LocalizedElement as="main" id="main-content" className={styles.detail}>
   <Key24LocalizedElement as="section" className={styles.detailHero} aria-labelledby="service-title"><Key24LocalizedElement as="div"><Key24LocalizedElement as="p" className={styles.detailLabel}>{service.name}</Key24LocalizedElement><Key24LocalizedElement as="h1" id="service-title">{service.title}</Key24LocalizedElement><Key24LocalizedElement as="p">{service.summary}</Key24LocalizedElement><Key24LocalizedElement as="div" className={styles.heroActions}><Key24LocalizedLink href="/demo" className={styles.serviceAction}>{t.demo}</Key24LocalizedLink><Key24LocalizedElement as="a" href="#how-it-works" className={styles.serviceTextLink}>{t.workflow} <Key24LocalizedElement as="span" aria-hidden="true">↓</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="figure">{serviceId==='crm'?<CrmOverview locale={locale}/>:<Key24LocalizedElement as="img" src={'/images/'+serviceImages[serviceId]} width="1000" height="750" alt={service.name}/>}<Key24LocalizedElement as="figcaption">{serviceId==='crm'?t.preview:t.photo}</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>
   {serviceId==='crm'?<CrmShowcase locale={locale}/>:<><Key24LocalizedElement as="section" id="how-it-works" className={styles.detailPoints} aria-labelledby="benefits-heading"><Key24LocalizedElement as="div"><Key24LocalizedElement as="h2" id="benefits-heading">{serviceId==='whatsapp'?conversationCopy[lang].capabilities:t.heading}</Key24LocalizedElement>{serviceId==='whatsapp'?<><Key24LocalizedElement as="p" className={styles.showcaseLead}>{conversationCopy[lang].capabilityLead}</Key24LocalizedElement><WhatsAppShowcase locale={locale}/></>:<Key24LocalizedElement as="ul">{serviceJourney[lang][serviceId].map(([title,text],index)=><Key24LocalizedElement as="li" key={title}><BenefitIllustration service={serviceId} index={index} locale={locale}/><Key24LocalizedElement as="h3">{title}</Key24LocalizedElement><Key24LocalizedElement as="p">{text}</Key24LocalizedElement></Key24LocalizedElement>)}</Key24LocalizedElement>}</Key24LocalizedElement></Key24LocalizedElement></>}
   {serviceId==='crm'?null:serviceId==='whatsapp'?<WhatsAppConversations locale={locale}/>:serviceId==='voice-ai'?<VoiceAfterHours locale={locale}/>:<> <Key24LocalizedElement as="section" className={styles.detailScenario} aria-labelledby="scenario-heading"><Key24LocalizedElement as="div"><Key24LocalizedElement as="p" className={styles.detailLabel}>{t.scenario}</Key24LocalizedElement><Key24LocalizedElement as="h2" id="scenario-heading">{details.scenarioTitle}</Key24LocalizedElement><Key24LocalizedElement as="p">{details.scenario}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="figure">{serviceId==='chatbot'?<WebsiteChatDemo locale={locale}/>:<Key24LocalizedElement as="img" src={'/images/'+servicePreviews[serviceId]} width="1024" height="600" alt={service.name+' — '+t.preview} loading="lazy"/>}<Key24LocalizedElement as="figcaption">{t.preview}</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement> </>}
   <FaqAccordionSection eyebrow="FAQ" title={t.faq} items={details.faq}/>
   <Key24LocalizedElement as="section" className={styles.detailContact} aria-labelledby="service-contact-heading"><Key24LocalizedElement as="div"><Key24LocalizedElement as="h2" id="service-contact-heading">{t.cta}</Key24LocalizedElement><Key24LocalizedElement as="p">{t.contact}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedLink href="/demo">{t.demo}</Key24LocalizedLink></Key24LocalizedElement>
  </Key24LocalizedElement><Footer/><FloatingAiWidget/>
 </>;
}


