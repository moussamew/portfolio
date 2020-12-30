import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import englishTranslations from './en-US.json'
import frenchTranslations from './fr-FR.json'

export enum Language {
  FR = 'fr',
  EN = 'en',
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: frenchTranslations,
      en: englishTranslations,
    },
    fallbackLng: Language.EN,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
  })

export default i18n
