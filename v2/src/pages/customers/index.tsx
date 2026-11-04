import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CustomerReviewsSection } from '@/components/CustomerReviewsSection';
export default function Customers(){const locale=useRouter().locale||'en-GB';return <><Key24LocalizedHead><title>Customer scenarios | KEY24</title></Key24LocalizedHead><Navigation locale={locale}/><Key24LocalizedElement as="main" id="main-content"><CustomerReviewsSection locale={locale}/></Key24LocalizedElement><Footer/></>; }

export async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }
