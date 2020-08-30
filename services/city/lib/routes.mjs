import microrouter from 'microrouter';
import { ping } from './handlers';

const { get, router } = microrouter;

export default router(get('/ping', ping));
