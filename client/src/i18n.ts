import { i18nConfig } from 'es2015-i18n-tag'

const langs = {
    en: require('src/locales/app.en.json5'),
    ru: require('src/locales/app.ru.json5'),
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
