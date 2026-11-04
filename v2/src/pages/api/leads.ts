import type { NextApiRequest, NextApiResponse } from 'next';
import { saveInquiry } from '@/lib/inquiry-store';
import { websiteLanguages } from '@/data/demo-languages';

export const config={api:{bodyParser:{sizeLimit:'32kb'}}};

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({success:false,message:'Method Not Allowed. Use POST.'});}
  if(!req.body || typeof req.body!=='object' || Array.isArray(req.body))return res.status(400).json({success:false,message:'Validation failed.'});
  const body=req.body as Record<string,unknown>;
  if(typeof body.honeypot==='string' && body.honeypot)return res.status(200).json({success:true,message:'Request processed.'});
  const limits:Record<string,number>={fullName:160,companyName:200,workEmail:254,phone:40,callVolume:30,country:2,selectedPlan:30,notes:5000,subject:200,locale:5,kind:10};
  const fields:Record<string,string>={};
  for(const [key,maximum]of Object.entries(limits)){
    const value=body[key];
    if(value!==undefined && (typeof value!=='string' || value.length>maximum))return res.status(400).json({success:false,message:'Validation failed.'});
    fields[key]=typeof value==='string'?value.trim():'';
  }
  const contact=fields.kind==='contact';
  const valid=fields.fullName.length>=2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.workEmail)
    && (contact ? fields.subject.length>=2 && fields.notes.length>=5 : fields.companyName.length>=2 && /^[+\d][\d\s().-]{5,39}$/.test(fields.phone))
    && (!fields.locale || Object.hasOwn(websiteLanguages,fields.locale))
    && (!fields.kind || ['contact','demo'].includes(fields.kind))
    && (!fields.selectedPlan || ['essential','growth','scale'].includes(fields.selectedPlan));
  if(!valid)return res.status(400).json({success:false,message:'Validation failed.'});
  const payload={name:fields.fullName,company:fields.companyName || null,email:fields.workEmail.toLowerCase(),phone:fields.phone || null,
    callVolume:fields.callVolume || 'unknown',country:fields.country || null,plan:fields.selectedPlan || null,notes:fields.notes || null,
    subject:fields.subject || null,kind:contact?'contact':'demo',locale:fields.locale || 'en-GB',source:'KEY24 Enterprise Web Portal',timestamp:new Date().toISOString()};
  let leadId:string;
  try {leadId=await saveInquiry(payload);} catch {return res.status(503).json({success:false,message:'We could not save your request. Please try again.'});}
  const crmBase=process.env.KEY24_CRM_API_BASE,token=process.env.KEY24_CRM_API_TOKEN;
  if(crmBase && token){
    try{
      const response=await fetch(`${crmBase.replace(/\/$/,'')}/v1/leads`,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${token}`},body:JSON.stringify({...payload,externalId:leadId}),signal:AbortSignal.timeout(8000)});
      if(!response.ok)throw new Error('CRM delivery failed');
      return res.status(200).json({success:true,leadId,mode:'crm_live'});
    }catch{return res.status(200).json({success:true,leadId,mode:'crm_queued'});}
  }
  return res.status(200).json({success:true,leadId,mode:'local_saved'});
}
