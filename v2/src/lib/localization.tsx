import React, { createContext, useContext, forwardRef } from 'react';
import Head from 'next/head';
import Link, { LinkProps } from 'next/link';
type Messages = Record<string, string>;
export const SiteLocale = createContext<{locale:string; messages:Messages}>({locale:'en-GB',messages:{}});
const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();

export function translate(text: string, locale: string, messages: Messages): string {
  const key = normalize(text);
  if (['KEY24','WhatsApp','CRM','Google Ads'].includes(key)) return text;
  const result = messages[key];
  if (result) {
    const value=key.includes('KEY24') ? result.replace(/مفتاح\s*24|كي\s*24|ANAHTAR24|AVAIN24|NYCKEL24|SLEUTEL24|SCHLÜSSEL24|NØKKEL24/gi,'KEY24') : result;
    return text.replace(text.trim(), value);
  }
  if (text.includes(' | ')) return text.split(' | ').map(part => translate(part,locale,messages)).join(' | ');
  if (text.includes(' — ')) return text.split(' — ').map(part => translate(part,locale,messages)).join(' — ');
  return text;
}

function textChildren(children: React.ReactNode, locale: string, messages: Messages): React.ReactNode {
  return React.Children.map(children, child => {
    if (typeof child === 'string') return translate(child,locale,messages);
    if (React.isValidElement<{children?:React.ReactNode}>(child) && child.type === React.Fragment) return React.cloneElement(child,{},textChildren(child.props.children,locale,messages));
    return child;
  });
}

const textProps = ['title', 'alt', 'placeholder', 'aria-label', 'aria-description', 'label'];
// Native tags render inside this wrapper: use CSS Modules or root-scoped global CSS, not scoped styled-jsx.
export const LocalizedElement = forwardRef<HTMLElement, Record<string, any>>(function LocalizedElement({ as, children, ...props }, ref) {
  const {locale,messages} = useContext(SiteLocale);
  for (const key of textProps) if (typeof props[key] === 'string') props[key] = translate(props[key], locale,messages);
  // Language names remain in their own languages in the language selector.
  const languageOption = as === 'option' && /^[a-z]{2}-[A-Z]{2}$/.test(props.value || '');
  const content = languageOption ? children : textChildren(children, locale,messages);
  return React.createElement(as, { ...props, ref }, content);
}) as <Tag extends keyof React.JSX.IntrinsicElements>(props: { as: Tag } & React.JSX.IntrinsicElements[Tag]) => React.ReactElement | null;

export function LocalizedHead({ children }: { children: React.ReactNode }) {
  const {locale,messages} = useContext(SiteLocale);
  return <Head>{React.Children.map(children, child => {
    if (!React.isValidElement<any>(child)) return child;
    const props = { ...child.props };
    if (typeof props.content === 'string' && !/^(og:locale|og:url)$/.test(props.property || '')) props.content = translate(props.content, locale,messages);
    if (props.property === 'og:locale') props.content = locale;
    const content = child.type === 'title' ? translate(React.Children.toArray(props.children).join(''), locale,messages) : textChildren(props.children, locale,messages);
    return React.cloneElement(child, props, content);
  })}</Head>;
}

export const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>(function LocalizedLink({ children, ...props }, ref) {
  const {locale,messages} = useContext(SiteLocale);
  for (const key of ['title', 'aria-label'] as const) if (typeof props[key] === 'string') props[key] = translate(props[key]!, locale,messages);
  return <Link {...props} ref={ref}>{textChildren(children, locale,messages)}</Link>;
});
