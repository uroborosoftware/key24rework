import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useState } from 'react';
import Link from 'next/link';
import { estimateMissedRevenue } from '@/lib/missed-call-revenue.mjs';
import styles from './RoiCalculatorSection.module.scss';

const copy = {
  en: { title: 'What could those missed calls be worth?', intro: 'An unanswered customer could represent a €200–€300 job. Use your own figures to see the monthly opportunity.', calls: 'Missed calls per day', days: 'Working days per month', ticket: 'Average job value (€)', conversion: 'Calls that become jobs (%)', result: 'Potential monthly revenue', enquiries: 'Missed calls per month', jobs: 'Potential jobs per month', note: 'Example figures; estimated revenue before costs. Actual results vary.', invalid: 'Enter valid values in all four fields to see your estimate.', cta: 'See how KEY24 handles your calls' },
  de: { title: 'Was könnten verpasste Anrufe wert sein?', intro: 'Ein nicht erreichter Kunde könnte einen Auftrag im Wert von 200–300 € bedeuten. Berechne das monatliche Potenzial mit deinen eigenen Zahlen.', calls: 'Verpasste Anrufe pro Tag', days: 'Arbeitstage pro Monat', ticket: 'Durchschnittlicher Auftragswert (€)', conversion: 'Anrufe, die zu Aufträgen werden (%)', result: 'Potenzieller Monatsumsatz', enquiries: 'Verpasste Anrufe pro Monat', jobs: 'Potenzielle Aufträge pro Monat', note: 'Beispielwerte; geschätzter Umsatz vor Kosten. Tatsächliche Ergebnisse können abweichen.', invalid: 'Gib in allen vier Feldern gültige Werte ein.', cta: 'So nimmt KEY24 deine Anrufe an' },
  tr: { title: 'Kaçan aramalar işine ne kadar yansıyor?', intro: 'Cevaplayamadığın bir müşteri, potansiyel 200–300 €’luk bir iş olabilir. Aylık fırsatı kendi rakamlarınla hesapla.', calls: 'Günlük kaçan arama', days: 'Aylık çalışma günü', ticket: 'Ortalama iş tutarı (€)', conversion: 'Aramaların işe dönüşme oranı (%)', result: 'Aylık potansiyel ciro', enquiries: 'Ayda kaçan arama', jobs: 'Aylık potansiyel iş', note: 'Başlangıç değerleri örnektir. Sonuç maliyetler düşülmeden hesaplanır; gerçekleşen gelir farklı olabilir.', invalid: 'Hesaplama için dört alana da geçerli değerler gir.', cta: 'KEY24’ün aramalarını nasıl karşıladığını gör' }
};

export function RoiCalculatorSection({ locale = 'en-GB' }: { locale?: string }) {
  const lang = locale.startsWith('tr') ? 'tr' : locale.startsWith('de') ? 'de' : 'en';
  const t = copy[lang];
  const [values, setValues] = useState({ dailyCalls: '2', days: '22', jobValue: '250', conversion: '50' });
  const result = estimateMissedRevenue(values);
  const euro = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  return <Key24LocalizedElement as="section" id="roi-calculator" className={styles.section} aria-labelledby="roi-heading">
    <Key24LocalizedElement as="div" className={styles.container}>
      <Key24LocalizedElement as="header" className={styles.heading}><Key24LocalizedElement as="h2" id="roi-heading">{t.title}</Key24LocalizedElement><Key24LocalizedElement as="p">{t.intro}</Key24LocalizedElement></Key24LocalizedElement>
      <Key24LocalizedElement as="div" className={styles.calculator}>
        <Key24LocalizedElement as="fieldset" className={styles.inputs} aria-describedby="roi-note">
          <Key24LocalizedElement as="legend" className={styles.legend}>{t.title}</Key24LocalizedElement>
          <Key24LocalizedElement as="label" htmlFor="roi-calls"><Key24LocalizedElement as="span" className={styles.controlHeading}>{t.calls}<Key24LocalizedElement as="strong" aria-hidden="true">{number.format(Number(values.dailyCalls))}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="input" id="roi-calls" type="range" min="0" max="20" step="1" value={values.dailyCalls} onChange={e => setValues({ ...values, dailyCalls: e.target.value })} /><Key24LocalizedElement as="span" className={styles.rangeEnds} aria-hidden="true"><Key24LocalizedElement as="span">0</Key24LocalizedElement><Key24LocalizedElement as="span">20</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>
          <Key24LocalizedElement as="label" htmlFor="roi-days"><Key24LocalizedElement as="span" className={styles.controlHeading}>{t.days}<Key24LocalizedElement as="strong" aria-hidden="true">{number.format(Number(values.days))}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="input" id="roi-days" type="range" min="1" max="31" step="1" value={values.days} onChange={e => setValues({ ...values, days: e.target.value })} /><Key24LocalizedElement as="span" className={styles.rangeEnds} aria-hidden="true"><Key24LocalizedElement as="span">1</Key24LocalizedElement><Key24LocalizedElement as="span">31</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>
          <Key24LocalizedElement as="label" htmlFor="roi-ticket"><Key24LocalizedElement as="span" className={styles.controlHeading}>{t.ticket}<Key24LocalizedElement as="strong" aria-hidden="true">{euro.format(Number(values.jobValue))}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="input" id="roi-ticket" type="range" min="50" max="1000" step="10" value={values.jobValue} aria-valuetext={euro.format(Number(values.jobValue))} onChange={e => setValues({ ...values, jobValue: e.target.value })} /><Key24LocalizedElement as="span" className={styles.rangeEnds} aria-hidden="true"><Key24LocalizedElement as="span">{euro.format(50)}</Key24LocalizedElement><Key24LocalizedElement as="span">{euro.format(1000)}</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>
          <Key24LocalizedElement as="label" htmlFor="roi-conversion"><Key24LocalizedElement as="span" className={styles.controlHeading}>{t.conversion}<Key24LocalizedElement as="strong" aria-hidden="true">{number.format(Number(values.conversion))}%</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="input" id="roi-conversion" type="range" min="0" max="100" step="5" value={values.conversion} aria-valuetext={values.conversion + '%'} onChange={e => setValues({ ...values, conversion: e.target.value })} /><Key24LocalizedElement as="span" className={styles.rangeEnds} aria-hidden="true"><Key24LocalizedElement as="span">0%</Key24LocalizedElement><Key24LocalizedElement as="span">100%</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement>
        </Key24LocalizedElement>
        <Key24LocalizedElement as="div" className={styles.result}>
          <Key24LocalizedElement as="p" id="roi-result-label">{t.result}</Key24LocalizedElement>
          <Key24LocalizedElement as="output" aria-labelledby="roi-result-label" aria-live="polite" aria-atomic="true">{result ? euro.format(result.revenue) : '—'}</Key24LocalizedElement>
          {result ? <Key24LocalizedElement as="dl"><Key24LocalizedElement as="div"><Key24LocalizedElement as="dt">{t.enquiries}</Key24LocalizedElement><Key24LocalizedElement as="dd">{number.format(result.calls)}</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="div"><Key24LocalizedElement as="dt">{t.jobs}</Key24LocalizedElement><Key24LocalizedElement as="dd">{number.format(result.jobs)}</Key24LocalizedElement></Key24LocalizedElement></Key24LocalizedElement> : <Key24LocalizedElement as="p" className={styles.invalid}>{t.invalid}</Key24LocalizedElement>}
          <Key24LocalizedLink href="/demo" className={styles.link}>{t.cta} <Key24LocalizedElement as="span" aria-hidden="true">→</Key24LocalizedElement></Key24LocalizedLink>
        </Key24LocalizedElement>
      </Key24LocalizedElement>
      <Key24LocalizedElement as="p" id="roi-note" className={styles.note}>{t.note}</Key24LocalizedElement>
    </Key24LocalizedElement>
  </Key24LocalizedElement>;
}
