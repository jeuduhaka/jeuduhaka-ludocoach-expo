import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import enTranslations from './en';
import frTranslations from './fr';

i18n.translations = {
  en: enTranslations,
  fr: frTranslations,
};

i18n.locale = Localization.locale;
i18n.defaultLocale = 'en';
i18n.fallbacks = true;

export const isLocaleSupported = (locale: string) => {
  return locale in i18n.translations;
};

export default i18n;
