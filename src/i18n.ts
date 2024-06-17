    import { initReactI18next } from 'react-i18next';
    import i18n from 'i18next';

    import en from './translations/en.json';
    import az from './translations/az.json';
    import ru from './translations/ru.json';

    const resources = {
    en: {
        translation: en,
    },
    az: {
        translation: az,
    },
    ru: {
        translation: ru,
    },
    };

    const storedLanguage = localStorage.getItem('language');
    const initialLanguage = storedLanguage ? JSON.parse(storedLanguage) : 'en';

    i18n.use(initReactI18next).init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en'
    });

    export default i18n;
