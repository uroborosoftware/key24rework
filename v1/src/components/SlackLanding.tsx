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
 return <div className={styles.page}>
  <section id="hero" className={styles.hero} aria-labelledby="home-title"><div className={styles.heroInner}>
   <div className={styles.heroCopy}><p className={styles.eyebrow}>{t.eyebrow}</p><h1 id="home-title">{t.title}<br /><span>{t.accent}</span></h1><p className={styles.lead}>{t.lead}</p><div className={styles.actions}><Link href="/demo" className={styles.lightButton}>{t.demo}<ArrowRight size={20} /></Link><a href="#solutions" className={styles.outlineButton}>{t.explore}</a></div></div>
   <figure className={styles.heroPreview}><img src="/images/workshop-technician.jpg" width="1125" height="750" alt={lang==='tr'?'Bir araç üzerinde çalışan teknisyen':lang==='de'?'Ein Techniker bei der Arbeit am Fahrzeug':'An automotive technician working on a vehicle'} loading="eager" /><figcaption>{t.photo}</figcaption></figure>
  </div></section>
  <HomeVideo locale={locale} />
  <section style={{maxWidth:1100,margin:"48px auto",padding:"0 24px"}}><ProductDemoPlayer/></section>
  <RevenueStory locale={locale} />
  <div id="missed-call" className={styles.calculatorAnchor}><RoiCalculatorSection locale={locale} /></div>
  <div id="solutions" className={styles.features}>
   {serviceOrder.map(id => {const service=services[id];return <section id={id} key={id} className={styles.feature} aria-labelledby={id+'-title'}>
    <figure className={styles.featureVisual}>{id==='crm'?<CrmOverview locale={locale}/>:id==='chatbot'?<WebsiteChatDemo locale={locale}/>:id==='whatsapp'?<WhatsAppShowcase locale={locale}/>:<img src={'/images/'+serviceImages[id]} width="1000" height="750" loading="lazy" alt={service.name}/>}<figcaption>{id==='crm'||id==='chatbot'||id==='whatsapp'?t.preview:t.photo}</figcaption></figure>
    <div className={styles.featureCopy}><p className={styles.eyebrow}>{service.name}</p><h2 id={id+'-title'}>{service.title}</h2><p>{service.summary}</p><Link href={serviceRoutes[id]} className={styles.textLink}>{t.more}<ArrowRight size={20} /></Link></div>
   </section>;})}
  </div>
  <CustomerReviewsSection locale={locale} />
  <FaqAccordionSection eyebrow="FAQ" title={t.faq} items={t.questions} />
  <section id="cta" className={styles.contactSection} aria-labelledby="cta-title"><div className={styles.contactInner}><figure><img src="/images/automotive-team.jpg" width="860" height="900" alt={lang==='tr'?'Atölyede çalışan bir teknisyen':lang==='de'?'Ein Techniker in der Werkstatt':'A technician working in an automotive workshop'} loading="lazy" /><figcaption>{t.photo}</figcaption></figure><div><h2 id="cta-title">{t.contact}</h2><p>{t.contactText}</p><div className={styles.actions}><Link href="/demo" className={styles.lightButton}>{t.demo}<ArrowRight size={20} /></Link><Link href="/contact" className={styles.outlineButton}>{t.talk}</Link></div></div></div></section>
 </div>;
}

