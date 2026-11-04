import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import { useRouter } from 'next/router';
import { demoLanguage } from '@/data/demo-languages';
import { DemoBookingForm } from './DemoBookingForm';
const copy={
 tr:['Size özel demo araması planlayın','İşletme ve iletişim bilgilerinizi bırakın; ekibimiz demo aramanızı planlamak için sizinle iletişime geçsin.'],
 en:['Request your own demo call','Leave your business and contact details so our team can arrange your demonstration call.'],
 de:['Persönlichen Demo-Anruf anfragen','Hinterlassen Sie Ihre Betriebs- und Kontaktdaten. Unser Team meldet sich, um Ihren Demo-Anruf zu planen.'],
 nl:['Vraag uw eigen demogesprek aan','Laat uw bedrijfs- en contactgegevens achter. Ons team neemt contact op om uw demonstratie te plannen.'],
 fi:['Pyydä oma esittelypuhelu','Jätä yrityksesi ja yhteystietosi. Tiimimme ottaa yhteyttä esittelypuhelun sopimiseksi.'],
 no:['Be om en egen demosamtale','Legg igjen bedrifts- og kontaktinformasjon. Teamet tar kontakt for å avtale en demonstrasjon.'],
 sv:['Begär ett eget demosamtal','Lämna företags- och kontaktuppgifter. Vårt team kontaktar dig för att boka en demonstration.'],
 ar:['اطلب مكالمة عرض خاصة بك','اترك بيانات شركتك ووسيلة التواصل ليتواصل فريقنا معك لترتيب مكالمة توضيحية.']
};
export function DemoBookingSection(){const {locale}=useRouter();const lang=demoLanguage(locale);const t=copy[lang];return <Key24LocalizedElement as="section" id="book-demo" className="booking"><Key24LocalizedElement as="h2">{t[0]}</Key24LocalizedElement><Key24LocalizedElement as="p">{t[1]}</Key24LocalizedElement><DemoBookingForm isGerman={lang==='de'}/><style jsx global>{`.booking{margin:56px auto 0;max-width:1050px;min-width:0;}.booking > h2{font-size:clamp(26px,4vw,38px);line-height:1.25;margin-bottom:16px;}.booking > p{font-size:17px;line-height:1.7;margin-bottom:28px;color:#615a62;}`}</style></Key24LocalizedElement>}
