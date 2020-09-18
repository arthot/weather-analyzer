import chai from 'chai';
import sinon from 'sinon';
import { getYearsRange, YEARS_DEPTH } from '../../../lib/common/generate-years-range.js';

const { assert } = chai;
let clock;

describe('Unit test: lib/common/generate-years-range.js', () => {
  afterEach(async () => {
    clock.restore();
  });

  it('should generate range for the current month', () => {
    const now = new Date(2019, 3, 3);
    clock = sinon.useFakeTimers(now);

    const range = getYearsRange(4);

    assert.equal(range[0], 2019 - YEARS_DEPTH, 'Wrong start date');
    assert.equal(range[range.length - 1], 2019, 'Wrong end date');
  });

  it('should generate range for the previous month', () => {
    const now = new Date(2019, 3, 3);
    clock = sinon.useFakeTimers(now);

    const range = getYearsRange(3);

    assert.equal(range[0], 2019 - YEARS_DEPTH, 'Wrong start date');
    assert.equal(range[range.length - 1], 2019, 'Wrong end date');
  });

  it('should generate range for the next month', () => {
    const now = new Date(2019, 3, 3);
    clock = sinon.useFakeTimers(now);

    const range = getYearsRange(5);

    assert.equal(range[0], 2019 - YEARS_DEPTH, 'Wrong start date');
    assert.equal(range[range.length - 1], 2018, 'Wrong end date');
  });

  it('should generate range for the next month if it will be another year', () => {
    const now = new Date(2019, 11, 30);
    clock = sinon.useFakeTimers(now);

    const range = getYearsRange(1);

    assert.equal(range[0], 2019 - YEARS_DEPTH, 'Wrong start date');
    assert.equal(range[range.length - 1], 2019, 'Wrong end date');
  });
});
