import i18n from 'i18next';
import translationFa from './fa/translation.json';
import {initReactI18next} from 'react-i18next';

export const resources = {
  fa: {
    translation: translationFa
  }
};

i18n.use(initReactI18next).init({
  lng: 'fa',
  fallbackLng: 'fa',
  debug: false,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  resources
});
export default i18n;
