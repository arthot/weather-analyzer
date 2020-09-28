import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { cities } from '../../../../lib/mongo';
import { startServer, stopServer } from '../../../../lib/server';
import { api } from '../../../utils/index';

const { assert } = chai;
chai.use(chaiAsPromised);

describe('Component test: GET /city/:lang/:id', () => {
  before(async () => {
    await startServer();
  });

  beforeEach(async () => {
    await cities().deleteMany({});
  });

  after(async function testSetup() {
    await cities().deleteMany({});
    await stopServer();
  });

  it('should return items', async () => {
    const city = {
      country: {
        code: 'ES',
        name: 'Spain',
      },
      district: 'Galicia',
      id: 50101,
      kind: 'T',
      lang: 'en',
      name: 'Mos',
      subDistrict: null,
      createdAt: Date.now(),
    };

    await cities().insertOne(city);

    const { body: response } = await api
      .get('/city/en/50101')
      .set('Content-Type', 'application/json')
      .expect(200);

    const expectedItem = {
      country: {
        code: 'ES',
        name: 'Spain',
      },
      district: 'Galicia',
      id: 50101,
      kind: 'T',
      lang: 'en',
      name: 'Mos',
      subDistrict: null,
    };

    assert.deepEqual(response, expectedItem);
  });

  it('should return 404 if city is not found', async () => {
    await api.get('/city/en/5010142').set('Content-Type', 'application/json').expect(404);
  });

  it('should return 404 if lang is unknown', async () => {
    await api.get('/city/du/5010142').set('Content-Type', 'application/json').expect(404);
  });

  it('should return 400 if id is not valid', async () => {
    await api.get('/city/en/abc').set('Content-Type', 'application/json').expect(400);
  });
});
