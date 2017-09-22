import I18n from 'ex-react-native-i18n';
import enTranslations from './en.js';
import frTranslations from './fr.js';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;
I18n.defaultLocale = 'en';

I18n.translations = {
  en: enTranslations,
  fr: frTranslations
};

I18n.isLocaleSupported = locale => {
  return I18n.isSet(I18n.translations[locale]);
};

export default I18n;
