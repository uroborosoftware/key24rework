import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import { DemoBookingSection } from './DemoBookingSection';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ProductDemoPlayer } from './ProductDemoPlayer';
import { FloatingAiWidget } from './FloatingAiWidget';
import { websiteLanguages, demoCopy } from '@/data/demo-languages';
import { additionalSiteCopy } from '@/data/additional-site-languages';
import { HomeVideo } from './HomeVideo';

const copy = {
 fi: {
  services:'Palvelut', demo:'Kokeile livenä', contact:'Yhteystiedot', language:'Valitse kieli',
  eyebrow:'AUTOJEN AVAINPALVELUYRITYKSILLE', title:'Yksi vastaamaton puhelu voi maksaa seuraavan työn.',
  lead:'KEY24 vastaanottaa asiakkaiden yhteydenottoja, kun sinä keskityt käsillä olevaan työhön. Puhelut, WhatsApp, verkkosivut ja työnohjaus yhdessä.',
  more:'Tutustu palveluun', sample:'Kuuntele esimerkkipuhelu', footer:'Asiakkaiden yhteydenotot hallintaan. Ihmiset päättävät.',
  items:[
   {path:'/solutions/ai-call-agent',name:'Puheavustaja',title:'Sulje liike, älä yhteydenottoja.',text:'Virtuaalinen avustaja vastaa puheluihin työn aikana ja aukioloaikojen ulkopuolella. Se selvittää ajoneuvon, sijainnin ja ongelman sekä kerää ajanvaraustoiveen.',points:['Noudattaa yrityksesi palvelualueita ja hinnastoa.','Selvittää, ovatko avaimet auton sisällä, kadonneet vai tarvitaanko vara-avain.','Siirtää epäselvät tekniset pyynnöt henkilökunnan arvioitavaksi.']},
   {path:'/solutions/whatsapp',name:'WhatsApp-avustaja',title:'Keskustelu jatkuu WhatsAppissa.',text:'Vastaa tavallisiin kysymyksiin yrityksesi tietojen perusteella ja kerää ajoneuvon tiedot sekä sijainnin seuraavaa vaihetta varten.',points:['Pyytää luvan viestintään ja tarvittavat tiedot.','Yhdistää keskustelun samaan työpyyntöön.','Mahdollistaa henkilökunnan osallistumisen.']},
   {path:'/solutions/chatbot',name:'Verkkosivujen chatbot',title:'Vierailusta keskusteluksi.',text:'Auttaa verkkosivujen kävijöitä palvelukysymyksissä ja kerää takaisinsoittoa varten tarvittavat tiedot.',points:['Selittää yrityksesi palvelut.','Kerää asiakkaan yhteydenoton ja ajoneuvon tiedot.','Antaa henkilökunnalle keskustelun taustatiedot.']},
   {path:'/platform/crm',name:'CRM ja työnohjaus',title:'Koko työ yhdessä paikassa.',text:'Kokoa puhelut, WhatsApp-keskustelut, asiakkaan tiedot ja työn tila selkeään näkymään.',points:['Näe seuraava vaihe ja vastuuhenkilö.','Säilytä asiakkaan ja ajoneuvon tiedot yhdessä.','Yrityksen käytännöt ja integraatiot määritetään käyttöönotossa.']}
  ], faqTitle:'Usein kysytyt kysymykset', faqs:[['Voinko pitää nykyisen puhelinnumeroni?','Nykyisen numeron soitonsiirto arvioidaan käyttöönotossa.'],['Kuka päättää hinnoista ja palveluista?','Sinä määrität yrityksesi hinnaston, palvelualueen ja hyväksyttävät työt.'],['Onko tämä oikea palvelupyyntö?','Ei. Live-esittelyssä käytetään esimerkkitietoja eikä asentajaa lähetetä.']],
  contactTitle:'Keskustellaan yrityksesi työpäivästä.',contactText:'Kokeile ensin virtuaalista avustajaa. Varsinaisessa käyttöönotossa määritetään yrityksesi palvelut, hinnat, ajanvaraus ja integraatiot.', pricing:'Hinnoittelu sovitaan yrityksesi tarpeiden mukaan. Esittelyn palveluhinnat eivät ole KEY24-tilauksen hintoja.'
 },
 nl: {
  services:'Diensten',demo:'Live proberen',contact:'Contact',language:'Kies een taal',
  eyebrow:'VOOR AUTOSLEUTELSPECIALISTEN',title:'Eén gemiste oproep kan uw volgende opdracht kosten.',
  lead:'KEY24 vangt klantvragen op terwijl u zich op uw werk concentreert. Telefoon, WhatsApp, website en werkplanning bij elkaar.',
  more:'Bekijk de dienst',sample:'Luister naar een voorbeeldgesprek',footer:'Klantvragen verbonden. Mensen houden de controle.',
  items:[
   {path:'/solutions/ai-call-agent',name:'AI-spraakassistent',title:'Sluit de zaak, niet de lijn.',text:'Een virtuele assistent neemt gesprekken aan tijdens klussen en buiten openingstijden. Hij vraagt naar het voertuig, de locatie en het probleem en verzamelt afspraakverzoeken.',points:['Volgt uw eigen werkgebied en prijslijst.','Maakt onderscheid tussen buitensluiting, verloren sleutels en een reservesleutel.','Legt onzekere technische aanvragen voor aan uw team.']},
   {path:'/solutions/whatsapp',name:'WhatsApp-assistent',title:'Het gesprek gaat verder op WhatsApp.',text:'Beantwoordt veelgestelde vragen met uw bedrijfsinformatie en verzamelt voertuiggegevens en de locatie voor de volgende stap.',points:['Vraagt toestemming en de benodigde informatie.','Koppelt het gesprek aan dezelfde aanvraag.','Laat uw team het gesprek overnemen.']},
   {path:'/solutions/chatbot',name:'Websitechatbot',title:'Maak van een bezoek een gesprek.',text:'Helpt bezoekers met vragen over uw diensten en verzamelt de informatie voor een terugbelverzoek.',points:['Legt uw diensten uit.','Verzamelt de aanvraag en voertuiggegevens.','Geeft uw team de context van het gesprek.']},
   {path:'/platform/crm',name:'CRM en werkplanning',title:'De hele opdracht op één plek.',text:'Breng telefoongesprekken, WhatsApp, klantgegevens en de opdrachtstatus samen in een overzichtelijke werkomgeving.',points:['Bekijk de volgende stap en wie verantwoordelijk is.','Houd klant- en voertuiggegevens bij elkaar.','Werkwijzen en koppelingen worden bij de inrichting afgesproken.']}
  ],faqTitle:'Veelgestelde vragen',faqs:[['Kan ik mijn huidige nummer houden?','Bij de inrichting bespreken we doorschakeling van uw huidige nummer.'],['Wie bepaalt de prijzen en diensten?','U bepaalt uw prijslijst, werkgebied en welke opdrachten worden aangenomen.'],['Is dit een echte serviceaanvraag?','Nee. De live demonstratie gebruikt voorbeeldgegevens en stuurt geen echte monteur.']],
  contactTitle:'Laten we uw werkdag bespreken.',contactText:'Probeer eerst de virtuele assistent. Bij de echte inrichting leggen we uw diensten, prijzen, planning en koppelingen vast.',pricing:'De abonnementsprijs wordt afgestemd op uw bedrijf. De serviceprijzen in de demonstratie zijn geen KEY24-abonnementsprijzen.'
 }
};

export function NordicDutchSite({language}:{language:'fi'|'nl'|'no'|'sv'|'ar'}) {
 const router=useRouter(); const t=language==='fi'||language==='nl'?copy[language]:additionalSiteCopy[language]; const d=demoCopy[language];
 const service=t.items.find(item=>item.path===router.pathname);
 const isDemo=router.pathname==='/demo'; const isHome=router.pathname==='/';
 return <Key24LocalizedElement as="div" dir={language==='ar'?'rtl':undefined}>
  <Key24LocalizedHead><title>{service?.name|| (isDemo?d.title:t.title)} | KEY24</title><meta name="description" content={service?.text||t.lead}/></Key24LocalizedHead>
  <Key24LocalizedElement as="header"><Key24LocalizedLink href="/" className="brand">KEY24</Key24LocalizedLink><Key24LocalizedElement as="nav"><Key24LocalizedLink href="/#services">{t.services}</Key24LocalizedLink><Key24LocalizedLink href="/contact">{t.contact}</Key24LocalizedLink><Key24LocalizedElement as="select" aria-label={t.language} value={router.locale} onChange={e=>router.push(router.pathname,router.asPath,{locale:e.target.value})}>{Object.entries(websiteLanguages).map(([code,label])=><Key24LocalizedElement as="option" value={code} key={code}>{label}</Key24LocalizedElement>)}</Key24LocalizedElement><Key24LocalizedLink href="/demo" className="button">{t.demo}</Key24LocalizedLink></Key24LocalizedElement></Key24LocalizedElement>
  <Key24LocalizedElement as="main">
   <Key24LocalizedElement as="section" className="hero"><Key24LocalizedElement as="p">{t.eyebrow}</Key24LocalizedElement><Key24LocalizedElement as="h1">{service?.title || (isDemo?d.title:!isHome?t.contactTitle:t.title)}</Key24LocalizedElement><Key24LocalizedElement as="p" className="lead">{service?.text||(isDemo?d.lead:!isHome?t.contactText:t.lead)}</Key24LocalizedElement><Key24LocalizedLink className="button" href="/demo">{t.demo}</Key24LocalizedLink></Key24LocalizedElement>
   {isHome&&<HomeVideo locale={router.locale||'en-GB'}/>}
   {service?<Key24LocalizedElement as="section"><Key24LocalizedElement as="ul">{service.points.map(point=><Key24LocalizedElement as="li" key={point}>{point}</Key24LocalizedElement>)}</Key24LocalizedElement><ProductDemoPlayer/></Key24LocalizedElement>:isDemo?<Key24LocalizedElement as="section"><ProductDemoPlayer/><Key24LocalizedElement as="p">{d.note}</Key24LocalizedElement><DemoBookingSection/></Key24LocalizedElement>:isHome?<><Key24LocalizedElement as="section" id="services" className="grid">{t.items.map(item=><Key24LocalizedElement as="article" key={item.path}><Key24LocalizedElement as="h2">{item.name}</Key24LocalizedElement><Key24LocalizedElement as="p">{item.text}</Key24LocalizedElement><Key24LocalizedLink href={item.path}>{t.more} →</Key24LocalizedLink></Key24LocalizedElement>)}</Key24LocalizedElement><Key24LocalizedElement as="section"><Key24LocalizedElement as="h2">{t.sample}</Key24LocalizedElement><ProductDemoPlayer/></Key24LocalizedElement><Key24LocalizedElement as="section"><Key24LocalizedElement as="h2">{t.faqTitle}</Key24LocalizedElement>{t.faqs.map(([q,a])=><Key24LocalizedElement as="details" key={q}><Key24LocalizedElement as="summary">{q}</Key24LocalizedElement><Key24LocalizedElement as="p">{a}</Key24LocalizedElement></Key24LocalizedElement>)}</Key24LocalizedElement></>:<Key24LocalizedElement as="section"><Key24LocalizedElement as="p">{router.pathname==='/pricing'?t.pricing:t.contactText}</Key24LocalizedElement><Key24LocalizedLink className="button" href="/demo">{t.demo}</Key24LocalizedLink></Key24LocalizedElement>}
  </Key24LocalizedElement><Key24LocalizedElement as="footer"><Key24LocalizedLink href="/">KEY24</Key24LocalizedLink><Key24LocalizedElement as="p">{t.footer}</Key24LocalizedElement></Key24LocalizedElement><FloatingAiWidget/>
  <style jsx>{`
   header {background:#541554;color:white;padding:20px 5%;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;} nav{display:flex;gap:20px;align-items:center;flex-wrap:wrap;} .brand{font-size:28px;font-weight:800;} select{padding:10px;color:#111;background:white;border-radius:6px;} main{background:#fff;} section{padding:64px 6%;max-width:1400px;margin:auto;} .hero{max-width:none;background:#541554;color:white;padding:90px 8%;} h1{font-size:clamp(36px,5vw,68px);line-height:1.12;max-width:900px;margin:24px 0;} .lead{max-width:800px;font-size:21px;line-height:1.6;margin-bottom:32px;} .button{display:inline-block;padding:15px 24px;background:#fff;color:#541554;border:1px solid #541554;border-radius:5px;font-weight:700;} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:28px;} article{padding:28px;background:#f4ede4;border-radius:12px;} h2{font-size:28px;margin-bottom:18px;} p,li{line-height:1.7;} li{margin-bottom:14px;} article a{display:inline-block;margin-top:20px;color:#541554;font-weight:700;} details{padding:18px 0;border-bottom:1px solid #ddd;} summary{cursor:pointer;font-weight:600;} footer{padding:40px 6%;background:#f4ede4;}
  `}</style>
 </Key24LocalizedElement>;
}



