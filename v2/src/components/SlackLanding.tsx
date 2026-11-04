import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from '@carbon/icons-react';
import { RevenueStory } from './RevenueStory';
import { CrmOverview } from './CrmShowcase';
import { HomeVideo } from './HomeVideo';
import { ProductDemoPlayer } from './ProductDemoPlayer';
import { WebsiteChatDemo } from './WebsiteChatDemo';
import { WhatsAppShowcase } from './WhatsAppShowcase';
import { RoiCalculatorSection } from './RoiCalculatorSection';
import { CustomerReviewsSection } from './CustomerReviewsSection';
import { FaqAccordionSection } from './FaqAccordionSection';
import { serviceCopy, serviceImages, serviceOrder, serviceRoutes, contentLanguage } from '@/data/services';
import styles from './SlackLanding.module.scss';

const homeCopy = {
 en: { eyebrow:'FOR AUTOMOTIVE LOCKSMITHS', title:'One missed job.', accent:'€200 could go with it.', lead:'A missed call can become a missed job. Keep enquiries moving with KEY24 — while you focus on the customer in front of you.', demo:'Book a demo', explore:'Explore services', photo:'Illustrative workplace photograph', preview:'Illustrative product preview', more:'How it works', faq:'A few things you may be wondering.', questions:[{q:'Can I keep my phone number?',a:'You can discuss call forwarding from your existing number during setup.'},{q:'Will my team stay in control?',a:'Agree which enquiries the assistants handle and which should go to your team.'},{q:'Can I use just one service?',a:'Tell us what you need. The demo will cover the services and setup that fit your business.'},{q:'How do I get started?',a:'Book a demo. We will walk through your current workflow and the next steps.'}], contact:'Let’s talk about your working day.', contactText:'Show us how you work. We’ll show you where KEY24 can help.', talk:'Contact our team' },
 de: { eyebrow:'FÜR KFZ-SCHLÜSSELDIENSTE', title:'Ein verpasster Auftrag.', accent:'Vielleicht €200 weniger.', lead:'Ein verpasster Anruf kann einen Auftrag kosten. KEY24 hält Anfragen in Bewegung, während du dich um deinen Kunden kümmerst.', demo:'Demo buchen', explore:'Services entdecken', photo:'Illustratives Arbeitsplatzfoto', preview:'Illustrative Produktvorschau', more:'So funktioniert es', faq:'Was du vielleicht wissen möchtest.', questions:[{q:'Kann ich meine Telefonnummer behalten?',a:'Die Rufumleitung deiner bestehenden Nummer besprechen wir bei der Einrichtung.'},{q:'Behält mein Team die Kontrolle?',a:'Wir vereinbaren, welche Anfragen die Assistenten bearbeiten und wann dein Team übernimmt.'},{q:'Kann ich mit einem Service starten?',a:'Sag uns, was du brauchst. In der Demo zeigen wir die passenden Services und die Einrichtung.'},{q:'Wie starte ich?',a:'Buche eine Demo. Wir schauen uns deinen Arbeitsablauf und die nächsten Schritte an.'}], contact:'Sprechen wir über deinen Arbeitsalltag.', contactText:'Zeig uns, wie du arbeitest. Wir zeigen dir, wo KEY24 helfen kann.', talk:'Kontakt aufnehmen' },
 tr: { eyebrow:'OTO ÇİLİNGİRLERİ İÇİN', title:'Kaçan tek bir iş.', accent:'€200 gelir kaybı olabilir.', lead:'Cevaplanmayan bir arama, kaçan bir işe dönüşebilir. Sen müşterinle ilgilenirken KEY24 talepleri karşılamana yardımcı olsun.', demo:'Demo planla', explore:'Servisleri keşfet', photo:'Temsili çalışma hayatı fotoğrafı', preview:'Örnek ürün görünümü', more:'Nasıl çalışır?', faq:'Aklındaki birkaç soru.', questions:[{q:'Telefon numaramı koruyabilir miyim?',a:'Mevcut numarandan arama yönlendirme seçeneklerini kurulumda birlikte değerlendirebiliriz.'},{q:'Kontrol ekibimde kalacak mı?',a:'Asistanların hangi talepleri karşılayacağını ve hangi durumlarda ekibinin devralacağını birlikte belirleriz.'},{q:'Tek bir servisle başlayabilir miyim?',a:'İhtiyacını anlat; demoda işletmene uygun servisleri ve kurulumu konuşalım.'},{q:'Nasıl başlayabilirim?',a:'Demo planla. Mevcut iş akışını ve sonraki adımları birlikte inceleyelim.'}], contact:'İş gününü birlikte konuşalım.', contactText:'Nasıl çalıştığını anlat. KEY24’ün nerede yardımcı olabileceğini gösterelim.', talk:'Ekibimizle iletişime geç' }
};

export function SlackLanding({ locale }: { locale: string }) {
 const lang = contentLanguage(locale); const t = homeCopy[lang]; const services = serviceCopy[lang];
 return <Key24LocalizedElement as="div" className={styles.page}>
  <Key24LocalizedElement as="section" id="hero" className={styles.hero} aria-labelledby="home-title"><Key24LocalizedElement as="div" className={styles.heroInner}>
   <Key24LocalizedElement as="div" className={styles.heroCopy}><Key24LocalizedElement as="p" className={styles.eyebrow}>{t.eyebrow}</Key24LocalizedElement><Key24LocalizedElement as="h1" id="home-title">{t.title}<Key24LocalizedElement as="br" /><Key24LocalizedElement as="span">{t.accent}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="p" className={styles.lead}>{t.lead}</Key24LocalizedElement><Key24LocalizedElement as="div" className={styles.actions}><Key24LocalizedLink href="/demo" className={styles.lightButton}>{t.demo}<ArrowRight size={20} /></Key24LocalizedLink><Key24LocalizedElement as="a" href="#solutions" className={styles.outlineButton}>{t.explore}</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>
   <Key24LocalizedElement as="figure" className={styles.heroPreview}><Key24LocalizedElement as="img" src="/images/workshop-technician.jpg" width="1125" height="750" alt={lang==='tr'?'Bir araç üzerinde çalışan teknisyen':lang==='de'?'Ein Techniker bei der Arbeit am Fahrzeug':'An automotive technician working on a vehicle'} loading="eager" /><Key24LocalizedElement as="figcaption">{t.photo}</Key24LocalizedElement></Key24LocalizedElement>
  </Key24LocalizedElement></Key24LocalizedElement>
  <HomeVideo locale={locale} />
  <Key24LocalizedElement as="section" style={{maxWidth:1100,margin:"48px auto",padding:"0 24px"}}><ProductDemoPlayer/></Key24LocalizedElement>
  <RevenueStory locale={locale} />
  <Key24LocalizedElement as="div" id="missed-call" className={styles.calculatorAnchor}><RoiCalculatorSection locale={locale} /></Key24LocalizedElement>
  <Key24LocalizedElement as="div" id="solutions" className={styles.features}>
   {serviceOrder.map(id => {const service=services[id];return <Key24LocalizedElement as="section" id={id} key={id} className={styles.feature} aria-labelledby={id+'-title'}>
    <Key24LocalizedElement as="figure" className={styles.featureVisual}>{id==='crm'?<CrmOverview locale={locale}/>:id==='chatbot'?<WebsiteChatDemo locale={locale}/>:id==='whatsapp'?<WhatsAppShowcase locale={locale}/>:<Key24LocalizedElement as="img" src={'/images/'+serviceImages[id]} width="1000" height="750" loading="lazy" alt={service.name}/>}<Key24LocalizedElement as="figcaption">{id==='crm'||id==='chatbot'||id==='whatsapp'?t.preview:t.photo}</Key24LocalizedElement></Key24LocalizedElement>
    <Key24LocalizedElement as="div" className={styles.featureCopy}><Key24LocalizedElement as="p" className={styles.eyebrow}>{service.name}</Key24LocalizedElement><Key24LocalizedElement as="h2" id={id+'-title'}>{service.title}</Key24LocalizedElement><Key24LocalizedElement as="p">{service.summary}</Key24LocalizedElement><Key24LocalizedLink href={serviceRoutes[id]} className={styles.textLink}>{t.more}<ArrowRight size={20} /></Key24LocalizedLink></Key24LocalizedElement>
   </Key24LocalizedElement>;})}
  </Key24LocalizedElement>
  <CustomerReviewsSection locale={locale} />
  <FaqAccordionSection eyebrow="FAQ" title={t.faq} items={t.questions} />
  <Key24LocalizedElement as="section" id="cta" className={styles.contactSection} aria-labelledby="cta-title"><Key24LocalizedElement as="div" className={styles.contactInner}><Key24LocalizedElement as="figure"><Key24LocalizedElement as="img" src="/images/automotive-team.jpg" width="860" height="900" alt={lang==='tr'?'Atölyede çalışan bir teknisyen':lang==='de'?'Ein Techniker in der Werkstatt':'A technician working in an automotive workshop'} loading="lazy" /><Key24LocalizedElement as="figcaption">{t.photo}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="div"><Key24LocalizedElement as="h2" id="cta-title">{t.contact}</Key24LocalizedElement><Key24LocalizedElement as="p">{t.contactText}</Key24LocalizedElement><Key24LocalizedElement as="div" className={styles.actions}><Key24LocalizedLink href="/demo" className={styles.lightButton}>{t.demo}<ArrowRight size={20} /></Key24LocalizedLink><Key24LocalizedLink href="/contact" className={styles.outlineButton}>{t.talk}</Key24LocalizedLink></Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>
 </Key24LocalizedElement>;
}

