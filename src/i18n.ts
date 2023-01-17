import { initReactI18next } from 'react-i18next';
import type { InitOptions } from 'i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'portalsInitialContext',

  lookup() {
    return window.portalsContext?.language || 'en-US';
  },
});

const i18nConfig: InitOptions = {
  fallbackLng: ['en-US'],
  debug: false,
  // Allow keys to be phrases having `:`, `.`
  nsSeparator: '@@@',

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  load: 'currentOnly',
  react: {
    useSuspense: true,
  },

  backend: {
    loadPath: ([lang]: string[]) => {
      console.log('[WEB] - lang', lang);
      return `/locales/${lang.replace('-', '_').split('_')[0]}.json`;
    },
    queryStringParams: { t: Date.now() },
  },
  detection: {
    // order and from where user language should be detected
    order: [
      'portalsInitialContext',
      'querystring',
      'localStorage',
      'cookie',
      'sessionStorage',
      'navigator',
      'htmlTag',
      'path',
      'subdomain',
    ],
  },
};

i18n.use(Backend).use(languageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
