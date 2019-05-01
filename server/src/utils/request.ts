import * as req from 'request-promise-native'
import { config } from 'src/utils/config'

const headers = {
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,ru;q=0.7',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.38 Safari/537.36 OPR/49.0.2725.18',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
}

export function request(url: string) {
    return req(encodeURI(url), {
        jar: true,
        gzip: true,
        headers,
        json: true,
        proxy: config.proxy,
    })
}

export function requestPage(url: string) {
    return req(encodeURI(url), {
        jar: true,
        gzip: true,
        headers,
        proxy: config.proxy,
    })
}
