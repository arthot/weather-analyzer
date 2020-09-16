import supertest from 'supertest';
import { server } from '../../lib/server';

export const api = supertest(server);
