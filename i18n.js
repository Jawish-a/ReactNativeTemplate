import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './src/assets/locale/ar.json';
import en from './src/assets/locale/en.json';
import {
  getLocalStorageLanguage,
  getSystemLanguage,
} from './src/utils/getLanguage';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: (services, detectorOptions, i18nextOptions) => {
    /* use services and options */
  },
  detect: async callback => {
    let appLang = await getLocalStorageLanguage();
    if (!appLang) {
      appLang = getSystemLanguage();
    }
    callback(appLang);
  },
  cacheUserLanguage: lng => {
    /* cache language */
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    // lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    fallbackLng: 'en', // use en if detected lng is not available
  });

export default i18n;
