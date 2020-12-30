import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import englishTranslations from './en-US.json'
import frenchTranslations from './fr-FR.json'

export enum Language {
  FR = 'fr',
  EN = 'en',
}

i18n.use(LanguageDetector).init({
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
    wait: true,
  },
  detection: {
    order: ['localStorage'],
    caches: ['localStorage'],
  },
})

export default i18n
