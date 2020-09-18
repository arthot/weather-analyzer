import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';
import { startServer, stopServer } from '../../../../lib/server.js';
import { weather } from '../../../../lib/mongo.js';
import { cacheData } from '../../../../lib/api/get-history-by-month/cache-data.js';
import { getYearsRange } from '../../../../lib/common/generate-years-range.js';
import { okEmptyResult, okResult1 } from '../../../utils/gismeteo-generator.js';

const { assert } = chai;
chai.use(chaiAsPromised);

describe('Integration test: lib/api/get-history-by-month/cache-data.js', () => {
  before(async () => {
    await startServer();
    await weather().deleteMany({});
  });

  afterEach(async () => {
    nock.cleanAll();
    await weather().deleteMany({});
  });

  after(async () => {
    await stopServer();
  });

  it('should cache pages for the current month', async () => {
    const now = new Date();
    const month = now.getMonth();

    const url = 'https://www.gismeteo.ru/diary';

    const range = getYearsRange(month);
    range.forEach(y => nock(url).get(`/4248/${y}/${month}/`).reply(200, okResult1));

    await cacheData(4248, month);

    const result = await weather().find({ cityId: 4248, month }).toArray();

    assert.equal(result.length, range.length);
    assert.deepOwnInclude(result[0], { cityId: 4248, year: range[0], month });
    assert.deepOwnInclude(result[result.length - 1], {
      cityId: 4248,
      year: range[range.length - 1],
      month,
    });
  });

  it('should cache pages with empty data', async () => {
    const now = new Date();
    const month = now.getMonth();

    const url = 'https://www.gismeteo.ru/diary';

    const range = getYearsRange(month);
    range.forEach(y => nock(url).get(`/4248/${y}/${month}/`).reply(200, okEmptyResult));

    await cacheData(4248, month);

    const result = await weather().find({ cityId: 4248, month }).toArray();

    assert.equal(result.length, 5);
    assert.deepOwnInclude(result[0], { cityId: 4248, year: range[0], month });
    assert.deepOwnInclude(result[result.length - 1], {
      cityId: 4248,
      year: range[range.length - 1],
      month,
    });
  });

  it('should not cache if underlying service returns 400', async () => {
    const now = new Date();
    const month = now.getMonth();

    const url = 'https://www.gismeteo.ru/diary';

    const range = getYearsRange(month);
    nock(url).get(`/4248/${range[0]}/${month}/`).reply(200, okResult1);
    range.slice(1).forEach(y => nock(url).get(`/4248/${y}/${month}/`).reply(500));

    await cacheData(4248, month);

    const result = await weather().find({ cityId: 4248, month }).toArray();

    assert.equal(result.length, 1);
  });
});
