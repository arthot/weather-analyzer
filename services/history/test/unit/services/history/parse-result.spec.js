import chai from 'chai';
import { parseResult } from '../../../../lib/services/history/parse-result';
import { okEmptyResult, okResult1, okResult2 } from '../../../utils/gismeteo-generator';

const { assert } = chai;

describe('Unit test: lib/services/history/parse-result.js', () => {
  it('should convert valid full month results', () => {
    assert.equal(parseResult(okResult1).length, 30);
  });

  it('should convert valid partial results', () => {
    assert.equal(parseResult(okResult2).length, 20);
  });

  it('should convert empty results', () => {
    assert.equal(parseResult(okEmptyResult).length, 0);
  });
});
