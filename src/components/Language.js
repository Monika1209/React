import React from 'react'
import LanguageSelector from './LanguageSelector';
import { useLanguage } from './LanguageContext';
import translations from './Translate';

export const Language = () => {
    const { language } = useLanguage();
  return (
    <div>
      <h1>{translations[language].welcome}</h1>
      <LanguageSelector />
    </div>
  )
}
