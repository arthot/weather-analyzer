import { i18nConfig } from 'es2015-i18n-tag'

const langs = {
    en: require('./locales/app.en.json'),
    ru: require('./locales/app.ru.json'),
}

const locales = {
    en: 'en-US',
    ru: 'ru-RU',
}

export default function init(lang) {
    i18nConfig({
        locales: locales[lang],
        translations: langs[lang],
    })
}
