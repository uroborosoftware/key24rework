import React from 'react';
import { VoiceAiSection } from './VoiceAiSection';

interface FonioSectionProps {
  locale?: string;
}

/**
 * Re-exporting VoiceAiSection to ensure complete brand compliance
 * (No mentions of Fonio or external brands).
 */
export const FonioSection: React.FC<FonioSectionProps> = ({ locale = 'en' }) => {
  return <VoiceAiSection locale={locale} />;
};
