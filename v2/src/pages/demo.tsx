import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import { DemoBookingSection } from '@/components/DemoBookingSection';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductDemoPlayer } from '@/components/ProductDemoPlayer';
import { FloatingAiWidget } from '@/components/FloatingAiWidget';
import { demoCopy, demoLanguage } from '@/data/demo-languages';

export default function DemoPage() {
 const {locale}=useRouter();const t=demoCopy[demoLanguage(locale)];
 return <><Key24LocalizedHead><title>{t.title} | KEY24</title><meta name="description" content={t.lead}/></Key24LocalizedHead><Navigation/><Key24LocalizedElement as="main" id="main-content"><Key24LocalizedElement as="section" className="demo-hero"><Key24LocalizedElement as="div" className="carbon-container"><Key24LocalizedElement as="h1">{t.title}</Key24LocalizedElement><Key24LocalizedElement as="p">{t.lead}</Key24LocalizedElement><Key24LocalizedElement as="p">{t.note}</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="section" className="sample-section"><Key24LocalizedElement as="div" className="carbon-container"><ProductDemoPlayer/><DemoBookingSection/></Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement><Footer/><FloatingAiWidget/><style jsx global>{`#main-content .demo-hero{padding:72px 0;background:#541554;color:white;}#main-content .demo-hero h1{font-size:clamp(32px,5vw,56px);margin-bottom:24px;}#main-content .demo-hero p{font-size:18px;line-height:1.7;max-width:850px;margin-bottom:14px;}#main-content .sample-section{padding:64px 0;background:#f4ede4;}`}</style></>;
}



export async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }
