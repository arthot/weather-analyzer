import chai from 'chai';
import sinon from 'sinon';
import { getYearsRangeToUpdate } from '../../../lib/common/get-years-range-to-update.js';
import { YEARS_DEPTH } from '../../../lib/common/generate-years-range.js';

let clock;
const { assert } = chai;

describe('Unit test: lib/common/get-years-range-to-update.js', () => {
  afterEach(async () => {
    clock.restore();
  });

  it('should generate range for the current month if empty data', () => {
    clock = sinon.useFakeTimers(new Date(2019, 3, 3));

    const range = getYearsRangeToUpdate(4);

    assert.equal(range[0], 2019 - YEARS_DEPTH, 'Wrong start date');
    assert.equal(range[range.length - 1], 2019, 'Wrong end date');
  });

  it('should generate range for the current month if data exists', () => {
    clock = sinon.useFakeTimers(new Date(2019, 3, 25));

    const range = getYearsRangeToUpdate(4, new Date(2017, 3, 15));

    assert.equal(range[0], 2017, 'Wrong start date');
    assert.equal(range[range.length - 1], 2019, 'Wrong end date');
  });

  it('should generate range for the current month if data is downloaded', () => {
    clock = sinon.useFakeTimers(new Date(2019, 3, 31));

    const range = getYearsRangeToUpdate(4, new Date(2019, 3, 30));

    assert.equal(range.length, 0);
  });

  it('should generate range for the current month if data is not fully downloaded', () => {
    clock = sinon.useFakeTimers(new Date(2019, 3, 31));

    const range = getYearsRangeToUpdate(4, new Date(2019, 3, 25));

    assert.deepEqual(range, [2019]);
  });

  it('should generate range for the previous month if empty data', () => {
    clock = sinon.useFakeTimers(new Date(2019, 3, 3));

    const range = getYearsRangeToUpdate(3, null);

    assert.equal(range[0], 2019 - YEARS_DEPTH, 'Wrong start date');
    assert.equal(range[range.length - 1], 2019, 'Wrong end date');
  });

  it('should generate range for the previous month if data exists', () => {
    clock = sinon.useFakeTimers(new Date(2019, 3, 25));

    const range = getYearsRangeToUpdate(3, new Date(2017, 2, 15));

    assert.equal(range[0], 2017, 'Wrong start date');
    assert.equal(range[range.length - 1], 2019, 'Wrong end date');
  });

  it('should generate range for the next month if empty data', () => {
    clock = sinon.useFakeTimers(new Date(2019, 3, 3));

    const range = getYearsRangeToUpdate(5, null);

    assert.equal(range[0], 2019 - YEARS_DEPTH, 'Wrong start date');
    assert.equal(range[range.length - 1], 2018, 'Wrong end date');
  });

  it('should generate range for the next month if data exists', () => {
    clock = sinon.useFakeTimers(new Date(2019, 3, 25));

    const range = getYearsRangeToUpdate(5, new Date(2017, 4, 15));

    assert.equal(range[0], 2017, 'Wrong start date');
    assert.equal(range[range.length - 1], 2018, 'Wrong end date');
  });
});
