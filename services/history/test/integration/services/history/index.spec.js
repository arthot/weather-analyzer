import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';
import { parse } from '../../../../lib/services/history/index.js';
import { okEmptyResult, okResult1 } from '../../../utils/gismeteo-generator.js';

const { assert } = chai;
chai.use(chaiAsPromised);

describe('Integration test: lib/services/history/index.js', () => {
  after(() => {
    nock.cleanAll();
  });

  it('should parse page for /4248/2019/9/', async () => {
    const url = 'https://www.gismeteo.ru/diary';

    nock(url).get('/4248/2019/9/').reply(200, okResult1);

    const result = await parse(4248, 2019, 9);

    assert.equal(result.cityId, 4248);
    assert.equal(result.year, 2019);
    assert.equal(result.month, 9);

    assert.equal(result.history.length, 30);
    assert.deepEqual(result.history[3], {
      cloudiness: 0.5,
      day: 4,
      fallout: false,
      temperature: 20,
    });
  });

  it('should parse page with empty data', async () => {
    const url = 'https://www.gismeteo.ru/diary';

    nock(url).get('/10997/2002/9/').reply(200, okEmptyResult);

    const result = await parse(10997, 2002, 9);

    assert.equal(result.cityId, 10997);
    assert.equal(result.history.length, 0);
  });

  it('should throw if underlying service returns 400', async () => {
    const url = 'https://www.gismeteo.ru/diary';

    nock(url).get('/10997/2002/9/').reply(400);

    await assert.isRejected(parse(10997, 2002, 9), 'Bad Request');
  });

  it('should throw if underlying service returns 404', async () => {
    const url = 'https://www.gismeteo.ru/diary';

    nock(url).get('/1099427/2002/9/').reply(404);

    await assert.isRejected(parse(1099427, 2002, 9), 'Not Found');
  });

  it('should throw if underlying service returns 500', async () => {
    const url = 'https://www.gismeteo.ru/diary';

    nock(url).get('/10997/2002/9/').reply(500);

    await assert.isRejected(parse(10997, 2002, 9), 'Internal Server Error');
  });
});
