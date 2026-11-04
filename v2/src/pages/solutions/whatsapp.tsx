import { getSiteTranslations } from '@/lib/site-translations';
import { ServicePage } from '@/components/ServicePage';
export default function Page(){ return <ServicePage serviceId="whatsapp"/>; }

export async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }
