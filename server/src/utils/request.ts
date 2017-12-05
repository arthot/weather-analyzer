import * as req from 'request-promise-native'

export function request(url: string) {
    return req(encodeURI(url), {
        jar: true,
        gzip: true,
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.38 Safari/537.36 OPR/49.0.2725.18'
        },
        json: true
    })
}

export function requestPage(url: string) {
    return req(encodeURI(url), {
        jar: true,
        gzip: true,
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.38 Safari/537.36 OPR/49.0.2725.18'
        }
    })
}
