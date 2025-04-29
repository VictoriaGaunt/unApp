import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import es from './locales/es.json';

const messages = {
    en,
    ru,
    es,
};

const i18n = createI18n({
    legacy: false,
    locale: 'en', // Язык по умолчанию
    fallbackLocale: 'en',
    messages,
});

export default i18n;