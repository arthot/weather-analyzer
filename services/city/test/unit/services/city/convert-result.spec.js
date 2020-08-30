import chai from 'chai';
import { convertApiResult } from '../../../../lib/services/city/convert-result';
import {
  failEmptyResult,
  okResultRu1,
  okResultRu2,
  okEmptyResult,
} from '../../../utils/gismeteo-generator';

const { assert } = chai;

describe('Unit test: lib/services/city/convert-result.js', () => {
  it('should convert valid result', () => {
    assert.equal(convertApiResult(okResultRu1).length, 7);
    assert.equal(convertApiResult(okResultRu2).length, 7);
    assert.equal(convertApiResult(okEmptyResult).length, 0);
    assert.equal(convertApiResult(failEmptyResult).length, 0);
  });
});
