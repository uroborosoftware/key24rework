import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React, { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { demoCopy, demoLanguage } from '@/data/demo-languages';
import scenarioCopy from '@/data/demo-scenarios.json';
import sampleCatalog from '@/data/sample-catalog.json';
import styles from './SamplePlayer.module.scss';
import customizationCopy from '@/data/demo-customization-copy.json';

const categoryCopy={tr:['Tümü','Anahtar işlemleri','Bilgi ve randevu'],en:['All','Keys & locks','Advice & booking'],de:['Alle','Schlüssel & Schloss','Auskunft & Termine'],nl:['Alle','Sleutels & sloten','Informatie & afspraken'],fi:['Kaikki','Avaimet ja lukot','Tiedot ja ajanvaraus'],no:['Alle','Nøkler og låser','Info og avtaler'],sv:['Alla','Nycklar och lås','Info och bokning'],ar:['الكل','المفاتيح والأقفال','معلومات ومواعيد']};
const keyTopics=['lockout','spare','lost','ignition','keyless','remote'];
function PlayIcon(){return <Key24LocalizedElement as="svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><Key24LocalizedElement as="path" d="M8 5v14l11-7z"/></Key24LocalizedElement>}
export const ProductDemoPlayer: React.FC<{ isGerman?: boolean }> = () => {
 const {locale}=useRouter();const lang=demoLanguage(locale);const t=demoCopy[lang];const examples=scenarioCopy[lang];
 const customization=customizationCopy[lang];
 const audioRef=useRef<HTMLAudioElement>(null);const scenarioGroup=useId();
 const [volume,setVolume]=useState(30);const [scenario,setScenario]=useState('lost');const [category,setCategory]=useState(0);const [playing,setPlaying]=useState(false);
 const choices=sampleCatalog[lang];const selected=choices.find(choice=>choice.id===scenario)||choices[0];
 const filtered=choices.filter(choice=>category===0||(category===1?keyTopics.includes(choice.id):!keyTopics.includes(choice.id)));
 const chooseCategory=(next:number)=>{setCategory(next);if(next!==0&&keyTopics.includes(scenario)!==(next===1)){const first=choices.find(c=>keyTopics.includes(c.id)===(next===1));if(first)setScenario(first.id);}};
 useEffect(()=>{if(audioRef.current)audioRef.current.volume=volume/100;},[volume,lang,scenario]);
 useEffect(()=>setPlaying(false),[scenario,lang]);
 return <Key24LocalizedElement as="div" className={styles.shell} dir={lang==='ar'?'rtl':undefined}>
  <Key24LocalizedElement as="div" className={styles.heading}><Key24LocalizedElement as="span" className={styles.eyebrow}><Key24LocalizedElement as="span"/>{t.sample}</Key24LocalizedElement><Key24LocalizedElement as="span" className={styles.count}>{String(choices.length).padStart(2,'0')}</Key24LocalizedElement></Key24LocalizedElement>
  <aside className={styles.customization} data-testid="demo-customization"><span className={styles.customizationIcon} aria-hidden="true">✦</span><div><h2>{customization.title}</h2><p>{customization.body}</p></div></aside>
  <Key24LocalizedElement as="div" className={styles.categories} role="group" aria-label={examples.labels[0]}>{categoryCopy[lang].map((label,i)=><Key24LocalizedElement as="button" key={i} type="button" aria-pressed={category===i} onClick={()=>chooseCategory(i)}>{label}</Key24LocalizedElement>)}</Key24LocalizedElement>
  <Key24LocalizedElement as="div" className={styles.layout}>
   <Key24LocalizedElement as="fieldset" className={styles.playlist}><Key24LocalizedElement as="legend">{examples.labels[0]}</Key24LocalizedElement><Key24LocalizedElement as="div" className={styles.tracks}>
    {filtered.map(choice=><Key24LocalizedElement as="label" key={choice.id} className={`${styles.track} ${scenario===choice.id?styles.active:''}`}>
     <Key24LocalizedElement as="input" type="radio" name={scenarioGroup} checked={scenario===choice.id} onChange={()=>setScenario(choice.id)}/>
     <Key24LocalizedElement as="span" className={styles.trackIcon}><PlayIcon/></Key24LocalizedElement><Key24LocalizedElement as="span" className={styles.trackName}>{choice.label}</Key24LocalizedElement><Key24LocalizedElement as="span" className={styles.trackEnd} aria-hidden="true">{scenario===choice.id?'●':'›'}</Key24LocalizedElement>
    </Key24LocalizedElement>)}
   </Key24LocalizedElement></Key24LocalizedElement>
   <Key24LocalizedElement as="div" className={styles.player}>
    <Key24LocalizedElement as="div" className={styles.playerTop}><Key24LocalizedElement as="span">KEY24</Key24LocalizedElement><Key24LocalizedElement as="span" className={styles.soundMark} aria-hidden="true">◖◗</Key24LocalizedElement></Key24LocalizedElement>
    <Key24LocalizedElement as="h3">{selected.label}</Key24LocalizedElement>
    <Key24LocalizedElement as="p" className={styles.preview}>“{selected.lines[1]}”</Key24LocalizedElement>
    <Key24LocalizedElement as="div" className={styles.people}><Key24LocalizedElement as="span"><Key24LocalizedElement as="i">{examples.labels[4].slice(0,1)}</Key24LocalizedElement>{examples.labels[4]}</Key24LocalizedElement><Key24LocalizedElement as="span" className={styles.connection} aria-hidden="true">↔</Key24LocalizedElement><Key24LocalizedElement as="span"><Key24LocalizedElement as="i">{examples.labels[5].slice(0,1)}</Key24LocalizedElement>{examples.labels[5]}</Key24LocalizedElement></Key24LocalizedElement>
    <Key24LocalizedElement as="div" className={`${styles.wave} ${playing?styles.wavePlaying:''}`} aria-hidden="true">{[16,26,18,36,44,24,52,34,20,42,56,30,46,22,38,54,32,18,40,28,48,24,36,16,30,44,22,38,18,28].map((height,i)=><Key24LocalizedElement as="span" key={i} style={{height,animationDelay:`${i*.055}s`}}/>)}</Key24LocalizedElement>
    <Key24LocalizedElement as="audio" key={`${lang}-${scenario}`} ref={audioRef} controls preload="metadata" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)} onVolumeChange={event=>setVolume(Math.round(event.currentTarget.volume*100))} aria-label={t.sample}><Key24LocalizedElement as="source" src={selected.src+(lang==='tr'?'?v=full-calls-1':'?v=all-topics-3')} type="audio/mpeg"/></Key24LocalizedElement>
    <Key24LocalizedElement as="label" className={styles.volume}><Key24LocalizedElement as="span">{t.volume}</Key24LocalizedElement><Key24LocalizedElement as="input" type="range" min="0" max="100" value={volume} onChange={event=>setVolume(Number(event.target.value))}/><Key24LocalizedElement as="output">{volume}%</Key24LocalizedElement></Key24LocalizedElement>
   </Key24LocalizedElement>
  </Key24LocalizedElement>
  <Key24LocalizedElement as="details" className={styles.transcript}><Key24LocalizedElement as="summary">{t.transcript}<Key24LocalizedElement as="span" aria-hidden="true">＋</Key24LocalizedElement></Key24LocalizedElement><Key24LocalizedElement as="div">{selected.lines.map((line,index)=><Key24LocalizedElement as="p" key={index}><Key24LocalizedElement as="strong">{examples.labels[index%2===0?4:5]}</Key24LocalizedElement><Key24LocalizedElement as="span">{line.replace(/Key (twenty-four|vierundzwanzig|vierentwintig|tjuefire|tjugofyra|kaksikymmentäneljä)|كي أربعة وعشرين/g,'KEY24')}</Key24LocalizedElement></Key24LocalizedElement>)}</Key24LocalizedElement></Key24LocalizedElement>
  <Key24LocalizedElement as="p" className={styles.note}>{t.note}</Key24LocalizedElement>
 </Key24LocalizedElement>;
};
