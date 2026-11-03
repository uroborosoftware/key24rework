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
 return <><Head><title>{t.title} | KEY24</title><meta name="description" content={t.lead}/></Head><Navigation/><main id="main-content"><section className="demo-hero"><div className="carbon-container"><h1>{t.title}</h1><p>{t.lead}</p><p>{t.note}</p></div></section><section className="sample-section"><div className="carbon-container"><ProductDemoPlayer/><DemoBookingSection/></div></section></main><Footer/><FloatingAiWidget/><style jsx>{`.demo-hero{padding:72px 0;background:#541554;color:white;}h1{font-size:clamp(32px,5vw,56px);margin-bottom:24px;}p{font-size:18px;line-height:1.7;max-width:850px;margin-bottom:14px;}.sample-section{padding:64px 0;background:#f4ede4;}`}</style></>;
}


