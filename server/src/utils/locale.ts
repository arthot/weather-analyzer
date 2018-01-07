import { Request } from 'express'

const Langs = ['en', 'ru'];

export function detectLocale(req: Request) {
    return req.acceptsLanguages().find(l => Langs.includes(l)) || 'en';
}
