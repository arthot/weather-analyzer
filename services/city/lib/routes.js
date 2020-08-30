import microrouter from 'microrouter';
import { ping, searchCity, getCity } from './handlers';

const { get, router } = microrouter;

export default router(
  get('/ping', ping),
  get('/city/:lang/search', searchCity),
  get('/city/:lang/:id', getCity),
);
