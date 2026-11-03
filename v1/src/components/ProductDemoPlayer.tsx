import React, { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { demoCopy, demoLanguage } from '@/data/demo-languages';
import scenarioCopy from '@/data/demo-scenarios.json';
import sampleCatalog from '@/data/sample-catalog.json';
import styles from './SamplePlayer.module.scss';

const categoryCopy={tr:['Tümü','Anahtar işlemleri','Bilgi ve randevu'],en:['All','Keys & locks','Advice & booking'],de:['Alle','Schlüssel & Schloss','Auskunft & Termine'],nl:['Alle','Sleutels & sloten','Informatie & afspraken'],fi:['Kaikki','Avaimet ja lukot','Tiedot ja ajanvaraus'],no:['Alle','Nøkler og låser','Info og avtaler'],sv:['Alla','Nycklar och lås','Info och bokning'],ar:['الكل','المفاتيح والأقفال','معلومات ومواعيد']};
const keyTopics=['lockout','spare','lost','ignition','keyless','remote'];
function PlayIcon(){return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>}
export const ProductDemoPlayer: React.FC<{ isGerman?: boolean }> = () => {
 const {locale}=useRouter();const lang=demoLanguage(locale);const t=demoCopy[lang];const examples=scenarioCopy[lang];
 const audioRef=useRef<HTMLAudioElement>(null);const scenarioGroup=useId();
 const [volume,setVolume]=useState(30);const [scenario,setScenario]=useState('lost');const [category,setCategory]=useState(0);const [playing,setPlaying]=useState(false);
 const choices=sampleCatalog[lang];const selected=choices.find(choice=>choice.id===scenario)||choices[0];
 const filtered=choices.filter(choice=>category===0||(category===1?keyTopics.includes(choice.id):!keyTopics.includes(choice.id)));
 const chooseCategory=(next:number)=>{setCategory(next);if(next!==0&&keyTopics.includes(scenario)!==(next===1)){const first=choices.find(c=>keyTopics.includes(c.id)===(next===1));if(first)setScenario(first.id);}};
 useEffect(()=>{if(audioRef.current)audioRef.current.volume=volume/100;},[volume,lang,scenario]);
 useEffect(()=>setPlaying(false),[scenario,lang]);
 return <div className={styles.shell} dir={lang==='ar'?'rtl':undefined}>
  <div className={styles.heading}><span className={styles.eyebrow}><span/>{t.sample}</span><span className={styles.count}>{String(choices.length).padStart(2,'0')}</span></div>
  <div className={styles.categories} role="group" aria-label={examples.labels[0]}>{categoryCopy[lang].map((label,i)=><button key={i} type="button" aria-pressed={category===i} onClick={()=>chooseCategory(i)}>{label}</button>)}</div>
  <div className={styles.layout}>
   <fieldset className={styles.playlist}><legend>{examples.labels[0]}</legend><div className={styles.tracks}>
    {filtered.map(choice=><label key={choice.id} className={`${styles.track} ${scenario===choice.id?styles.active:''}`}>
     <input type="radio" name={scenarioGroup} checked={scenario===choice.id} onChange={()=>setScenario(choice.id)}/>
     <span className={styles.trackIcon}><PlayIcon/></span><span className={styles.trackName}>{choice.label}</span><span className={styles.trackEnd} aria-hidden="true">{scenario===choice.id?'●':'›'}</span>
    </label>)}
   </div></fieldset>
   <div className={styles.player}>
    <div className={styles.playerTop}><span>KEY24</span><span className={styles.soundMark} aria-hidden="true">◖◗</span></div>
    <h3>{selected.label}</h3>
    <p className={styles.preview}>“{selected.lines[1]}”</p>
    <div className={styles.people}><span><i>{examples.labels[4].slice(0,1)}</i>{examples.labels[4]}</span><span className={styles.connection} aria-hidden="true">↔</span><span><i>{examples.labels[5].slice(0,1)}</i>{examples.labels[5]}</span></div>
    <div className={`${styles.wave} ${playing?styles.wavePlaying:''}`} aria-hidden="true">{[16,26,18,36,44,24,52,34,20,42,56,30,46,22,38,54,32,18,40,28,48,24,36,16,30,44,22,38,18,28].map((height,i)=><span key={i} style={{height,animationDelay:`${i*.055}s`}}/>)}</div>
    <audio key={`${lang}-${scenario}`} ref={audioRef} controls preload="metadata" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)} onVolumeChange={event=>setVolume(Math.round(event.currentTarget.volume*100))} aria-label={t.sample}><source src={selected.src+(lang==='tr'?'?v=full-calls-1':'?v=all-topics-3')} type="audio/mpeg"/></audio>
    <label className={styles.volume}><span>{t.volume}</span><input type="range" min="0" max="100" value={volume} onChange={event=>setVolume(Number(event.target.value))}/><output>{volume}%</output></label>
   </div>
  </div>
  <details className={styles.transcript}><summary>{t.transcript}<span aria-hidden="true">＋</span></summary><div>{selected.lines.map((line,index)=><p key={index}><strong>{examples.labels[index%2===0?4:5]}</strong><span>{line.replace(/Key (twenty-four|vierundzwanzig|vierentwintig|tjuefire|tjugofyra|kaksikymmentäneljä)|كي أربعة وعشرين/g,'KEY24')}</span></p>)}</div></details>
  <p className={styles.note}>{t.note}</p>
 </div>;
};
