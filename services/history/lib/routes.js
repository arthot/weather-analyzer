import microrouter from 'microrouter';
import { ping, getHistory } from './handlers';

const { get, router } = microrouter;

export default router(get('/ping', ping), get('/weather/:cityId/:month', getHistory));
