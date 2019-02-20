import { fallbackLocale, supportedLocales, LOCALE_KEY } from './constants'

function getInitialLocale() {
    const lngs = window.navigator.languages;
    return lngs.find(l => supportedLocales.includes(l)) || fallbackLocale;
}

export function getLocale() {
    return localStorage.getItem(LOCALE_KEY) || getInitialLocale();
}

export function setLocale(locale) {
    localStorage.setItem(LOCALE_KEY, locale);
}
