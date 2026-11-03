import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CustomerReviewsSection } from '@/components/CustomerReviewsSection';
export default function Customers(){const locale=useRouter().locale||'en-GB';return <><Head><title>Customer scenarios | KEY24</title></Head><Navigation locale={locale}/><main id="main-content"><CustomerReviewsSection locale={locale}/></main><Footer/></>; }
