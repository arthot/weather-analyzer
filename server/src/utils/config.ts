export const config = {
    env: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'trace',
    port: (process.env.PORT && parseInt(process.env.PORT)) || 3003,
    host: process.env.HOST || 'localhost',
    proxy: process.env.WEATHER_PROXY,
}
