import chai from 'chai';
import dateFns from 'date-fns';
import { getYearsRange, YEARS_DEPTH } from '../../../lib/common/generate-years-range';

const { assert } = chai;

describe('Unit test: lib/services/history/parse-result.js', () => {
  it('should generate range for the current month', () => {
    const month = new Date().getMonth() + 1;

    const range = getYearsRange(month);

    assert.equal(range[range.length - 1], new Date().getFullYear());
    assert.equal(range[0], new Date().getFullYear() - YEARS_DEPTH);
  });

  it('should generate range for the previous month', () => {
    const month = new Date().getMonth();

    const range = getYearsRange(month);

    assert.equal(range[range.length - 1], dateFns.addMonths(new Date(), -1).getFullYear());
    assert.equal(range[0], new Date().getFullYear() - YEARS_DEPTH);
  });

  it('should generate range for the next month', () => {
    const month = new Date().getMonth() + 2;

    const range = getYearsRange(month);

    assert.equal(range[range.length - 1], dateFns.addMonths(new Date(), 1).getFullYear() - 1);
    assert.equal(range[0], new Date().getFullYear() - YEARS_DEPTH);
  });
});
