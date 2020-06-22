import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './en';
import frTranslations from './fr';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: { translation: enTranslations },
  fr: { translation: frTranslations },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,

    resources,

    lng: Localization.locale.split('-')[0], // to directly get e.g. 'en' instead of 'en-US'
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
