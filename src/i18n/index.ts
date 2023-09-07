import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { enResource } from '@/i18n/en';

export const enum ELanguageResources {
  common = 'common',
}

const resources = {
  en: enResource,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources,
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
