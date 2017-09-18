import I18n from 'ex-react-native-i18n';
import enTranslations from './en.js';
import frTranslations from './fr.js';

I18n.fallbacks = true;
I18n.defaultLocale = 'en';

I18n.translations = {
  en: enTranslations,
  fr: frTranslations
};

export default I18n;
