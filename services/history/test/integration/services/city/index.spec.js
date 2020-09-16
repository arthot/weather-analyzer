import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';
import { searchCity } from '../../../../lib/services/city/index';
import { okResultRu1, okResultEn1 } from '../../../utils/gismeteo-generator';

const { assert } = chai;
chai.use(chaiAsPromised);

describe('Integration test: lib/services/city/index.js', () => {
  after(() => {
    nock.cleanAll();
  });

  it('should return city search RU result', async () => {
    const lang = 'ru';
    const query = 'Москва';
    const url = 'https://www.gismeteo.ru';

    nock(url)
      .get('/ajax/suggest/')
      .query({ lang, startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(200, okResultRu1);

    const result = await searchCity(lang, query);

    assert.equal(result.length, 7);
  });

  it('should return city search EN result', async () => {
    const lang = 'en';
    const query = 'here';
    const url = 'https://www.gismeteo.com';

    nock(url)
      .get('/ajax/suggest/')
      .query({ lang, startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(200, okResultEn1);

    const result = await searchCity(lang, query);

    assert.equal(result.length, 7);
  });

  it('should throw if underlying service returns 400', async () => {
    const lang = 'en';
    const query = 'here';
    const url = 'https://www.gismeteo.com';

    nock(url)
      .get('/ajax/suggest/')
      .query({ lang, startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(400);

    await assert.isRejected(searchCity(lang, query), 'Bad Request');
  });

  it('should throw if underlying service returns 404', async () => {
    const lang = 'en';
    const query = 'here';
    const url = 'https://www.gismeteo.com';

    nock(url)
      .get('/ajax/suggest/')
      .query({ lang, startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(404);

    await assert.isRejected(searchCity(lang, query), 'Not Found');
  });

  it('should throw if underlying service returns 500', async () => {
    const lang = 'en';
    const query = 'here';
    const url = 'https://www.gismeteo.com';

    nock(url)
      .get('/ajax/suggest/')
      .query({ lang, startsWith: query, sort: 'typ' })
      .matchHeader('content-type', 'application/json')
      .reply(500);

    await assert.isRejected(searchCity(lang, query), 'Internal Server Error');
  });
});
