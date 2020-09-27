import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';
import { weather } from '../../../../lib/mongo.js';
import { startServer, stopServer } from '../../../../lib/server.js';
import { api } from '../../../utils/index.js';
import { getYearsRange } from '../../../../lib/common/generate-years-range.js';
import { okResult1 } from '../../../utils/gismeteo-generator.js';

const { assert } = chai;
chai.use(chaiAsPromised);

describe('Component test: GET /weather/:cityId/:month', () => {
  before(async () => {
    await startServer();
  });

  beforeEach(async () => {
    await weather().deleteMany({});
  });

  after(async function testSetup() {
    nock.cleanAll();
    await weather().deleteMany({});
    await stopServer();
  });

  it('should return 400 if month is not valid', async () => {
    await api.get('/weather/abc/12').set('Content-Type', 'application/json').expect(400);
  });

  it('should return 400 if city id is not valid', async () => {
    await api.get('/weather/123/abc').set('Content-Type', 'application/json').expect(400);
  });

  it('should return data for the current month', async () => {
    const now = new Date();
    const month = now.getMonth() + 1;

    const url = 'https://www.gismeteo.ru/diary';

    const range = getYearsRange(month);
    range.forEach(y => nock(url).get(`/4248/${y}/${month}/`).reply(200, okResult1));

    const { body } = await api
      .get(`/weather/4248/${month}`)
      .set('Content-Type', 'application/json')
      .expect(200);

    const [firstYear] = body;

    assert.equal(body.length, range.length);
    assert.deepOwnInclude(firstYear, { cityId: 4248, year: range[0], month });
    assert.isArray(firstYear.history);

    const [firstDay] = firstYear.history;

    assert.deepEqual(firstDay, { day: 1, temperature: 20, cloudiness: 1, fallout: false });
  });
});
