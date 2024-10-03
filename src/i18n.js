import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// Configure i18n
const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    }
};

i18next.use(initReactI18next).init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
        escapeValue: false // React already safes from XSS
    }
});

console.log(i18next.t('about')); // Output: Welcome to my Portfolio!

export default i18next;
