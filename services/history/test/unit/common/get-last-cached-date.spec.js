import chai from 'chai';
import { getLastCachedDate } from '../../../lib/common/get-last-cached-date.js';

const { assert } = chai;

describe('Unit test: lib/common/get-last-cached-date.js', () => {
  it('should get null if no last record', () => {
    assert.isNull(getLastCachedDate(null));
  });

  it('should get max date', () => {
    const record = {
      cityId: 123,
      year: 2019,
      month: 3,
      history: [
        {
          day: 2,
        },
        {
          day: 1,
        },
      ],
    };

    const result = getLastCachedDate(record);

    assert.deepEqual(result, new Date(2019, 2, 2));
  });

  it('should get null if no values in history', () => {
    const record = {
      cityId: 123,
      year: 2019,
      month: 3,
      history: [],
    };

    assert.isNull(getLastCachedDate(record));
  });
});
