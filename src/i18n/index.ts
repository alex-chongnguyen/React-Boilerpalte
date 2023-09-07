import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { enResource } from '@/i18n/en';

export const enum ELanguageResources {
  common = 'common',
  login = 'login',
  toastNoti = 'toastNoti',
}

const resources = {
  en: enResource,
};

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
