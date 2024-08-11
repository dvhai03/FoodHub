/* eslint-disable prettier/prettier */
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import vi from './locales/vi.json';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  // lng: 'vi',
  fallbackLng: 'en',
  resources: {
    en: en,
    vi: vi,
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
