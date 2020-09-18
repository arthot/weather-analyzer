import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import nock from 'nock';
import Chance from 'chance';
import { weather } from '../../../../lib/mongo';
import { startServer, stopServer } from '../../../../lib/server';
import { api } from '../../../utils/index';
import { okEmptyResult, okResult1 } from '../../../utils/gismeteo-generator';

const { assert } = chai;
chai.use(chaiAsPromised);

const chance = new Chance();

let clock;

describe('Component test: GET /city/:lang/search', () => {
  before(async () => {
    clock = sinon.useFakeTimers(new Date());
    await startServer();
  });

  beforeEach(async () => {
    await weather().deleteMany({});
  });

  after(async function testSetup() {
    nock.cleanAll();
    clock.restore();
    await weather().deleteMany({});
    await stopServer();
  });

  it('should return 400 if id is not valid', async () => {
    await api.get('/city/en/search?query=').set('Content-Type', 'application/json').expect(400);
  });

  it('should return empty if lang is unknown', async () => {
    const query = chance.string({ length: 10, alpha: true });
    nock('https://www.gismeteo.com')
      .get('/ajax/suggest/')
      .query({ lang: 'du', startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(200, okEmptyResult);

    const { body } = await api
      .get('/city/du/search')
      .query({ query })
      .set('Content-Type', 'application/json')
      .expect(200);

    assert.sameDeepMembers(body, []);
  });

  it('should return empty if city is unknown', async () => {
    const query = chance.string({ length: 10, alpha: true });
    nock('https://www.gismeteo.com')
      .get('/ajax/suggest/')
      .query({ lang: 'en', startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(200, okEmptyResult);

    const { body } = await api
      .get('/city/en/search')
      .query({ query })
      .set('Content-Type', 'application/json')
      .expect(200);

    assert.sameDeepMembers(body, []);
  });

  it('should cache and return result', async () => {
    const query = chance.string({ length: 10, alpha: true });
    nock('https://www.gismeteo.com')
      .get('/ajax/suggest/')
      .query({ lang: 'en', startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(200, okResultEn1);

    const { body } = await api
      .get('/city/en/search')
      .query({ query })
      .set('Content-Type', 'application/json')
      .expect(200);

    assert.lengthOf(body, 7);
  });

  it('should cache and return cached result', async () => {
    const query = chance.string({ length: 10, alpha: true });
    nock('https://www.gismeteo.com')
      .get('/ajax/suggest/')
      .query({ lang: 'en', startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(200, okResultEn1);

    const { body: fresh } = await api
      .get('/city/en/search')
      .query({ query })
      .set('Content-Type', 'application/json')
      .expect(200);

    assert.lengthOf(fresh, 7);

    nock.cleanAll();

    nock('https://www.gismeteo.com')
      .get('/ajax/suggest/')
      .query({ lang: 'en', startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(500);

    const { body: cached } = await api
      .get('/city/en/search')
      .query({ query })
      .set('Content-Type', 'application/json')
      .expect(200);

    assert.lengthOf(cached, 7);
  });
});
