import { useState } from 'react';
import { useRouter } from 'next/router';
import { demoLanguage } from '@/data/demo-languages';
import topics from '@/data/voice-practice.json';

const copy={
 tr:['Canlı asistanı farklı durumlarla dene','Bir konu seç. Aşağıdaki cümleyi sağ alttaki canlı asistana söyle; görüşme verdiğin yanıtlara göre devam etsin.','Şöyle başlayabilirsin'],
 en:['Try different situations live','Choose a topic. Say the question below to the live assistant at the bottom right, then continue in your own words.','Start with this'],
 de:['Verschiedene Situationen live testen','Wähle ein Thema. Stelle die Frage dem Live-Assistenten unten rechts und führe das Gespräch mit eigenen Worten fort.','So kannst du beginnen'],
 nl:['Probeer verschillende situaties live','Kies een onderwerp. Stel de vraag aan de live assistent rechtsonder en praat daarna verder in uw eigen woorden.','Begin bijvoorbeeld zo'],
 fi:['Kokeile eri tilanteita livenä','Valitse aihe. Esitä kysymys oikean alakulman avustajalle ja jatka keskustelua omin sanoin.','Aloita näin'],
 no:['Prøv ulike situasjoner direkte','Velg et tema. Still spørsmålet til assistenten nederst til høyre, og fortsett med egne ord.','Start slik'],
 sv:['Prova olika situationer live','Välj ett ämne. Ställ frågan till assistenten längst ned till höger och fortsätt med egna ord.','Börja så här'],
 ar:['جرّب مواقف مختلفة مباشرة','اختر موضوعاً، واطرح السؤال على المساعد المباشر أسفل اليمين، ثم تابع المحادثة بكلماتك.','يمكنك البدء هكذا']
};
export function VoicePractice(){
 const {locale}=useRouter();const lang=demoLanguage(locale);const t=copy[lang];const [selected,setSelected]=useState(0);
 return <section className="practice" dir={lang==='ar'?'rtl':undefined} aria-label={t[0]}>
  <h2>{t[0]}</h2><p className="intro">{t[1]}</p>
  <div className="topics" role="group" aria-label={t[0]}>{topics[lang].map(([label],i)=><button key={i} type="button" aria-pressed={selected===i} onClick={()=>setSelected(i)}><span className="number">{String(i+1).padStart(2,'0')}</span>{label}</button>)}</div>
  <div className="question" aria-live="polite"><span>{t[2]}</span><p>“{topics[lang][selected][1]}”</p></div>
  <style jsx>{`
   .practice{max-width:1100px;margin:48px auto;padding:28px;background:#faf7f2;border:1px solid #e2d5e2;border-radius:16px;color:#251725;min-width:0;}
   h2{font-size:clamp(23px,3vw,30px);line-height:1.3;margin-bottom:12px;}.intro{font-size:16px;line-height:1.65;color:#615a62;margin-bottom:24px;}
   .topics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;}button{display:flex;gap:12px;align-items:center;min-height:58px;min-width:0;padding:14px;text-align:start;border:1px solid #d8cbd7;border-radius:10px;color:#541554;background:white;font:inherit;font-size:14px;line-height:1.5;cursor:pointer;overflow-wrap:anywhere;}
   button:hover{border-color:#541554;}button[aria-pressed=true]{background:#541554;color:white;border-color:#541554;}.number{font-size:11px;opacity:.7;flex-shrink:0;}button:focus-visible{outline:3px solid #b44fb4;outline-offset:3px;}
   .question{margin-top:20px;padding:22px;background:white;border-radius:12px;border-inline-start:4px solid #541554;}.question span{font-size:12px;color:#746b74;}.question p{font-size:18px;line-height:1.65;margin-top:8px;overflow-wrap:anywhere;}
   @media(max-width:600px){.practice{padding:20px;margin:28px 0;}.topics{grid-template-columns:repeat(2,minmax(0,1fr));}.question{padding:16px;}button{font-size:13px;padding:12px;}}
   @media(max-width:360px){.topics{grid-template-columns:1fr;}}
  `}</style>
 </section>;
}
