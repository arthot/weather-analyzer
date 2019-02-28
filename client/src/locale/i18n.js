import { i18nConfig } from 'es2015-i18n-tag'

const locales = {
    'en-GB': require('./translations/app.en.json'),
    'en': require('./translations/app.en.json'),
    'ru': require('./translations/app.ru.json'),
}

export default function init(locale) {
    i18nConfig({
        translations: locales[locale],
    })
}
