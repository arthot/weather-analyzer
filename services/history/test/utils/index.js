import supertest from 'supertest';
import { server } from '../../lib/server.js';

export const api = supertest(server);
