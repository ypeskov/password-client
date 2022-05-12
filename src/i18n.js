import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from 'i18next-intervalplural-postprocessor';

import translationEN from './locales/en/en_messages.json';
import translationRU from './locales/ru/ru_messages.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next)
    .use(intervalPlural)
    .init({
      resources,
      lng: "ru",

      interpolation: {
        escapeValue: false // react already safes from xss
      },

      fallbackLng: {
        'en': ['en'],
        'ru': ['en'],
        'default': ['en']
      },

      debug: false,

      react: {
        useSuspense: false,
      }

    });
