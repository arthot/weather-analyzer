import chai from 'chai';
import { convertApiResult } from '../../../../lib/services/city/convert-result';
import {
  failEmptyResult,
  okResultRu1,
  okResultRu2,
  okResultEn1,
  okEmptyResult,
} from '../../../utils/gismeteo-generator';

const { assert } = chai;

describe('Unit test: lib/services/city/convert-result.js', () => {
  it('should convert valid RU results', () => {
    assert.equal(convertApiResult(okResultRu1).length, 7);
    assert.equal(convertApiResult(okResultRu2).length, 7);
    assert.equal(convertApiResult(okEmptyResult).length, 0);
  });

  it('should convert valid EN results', () => {
    assert.equal(convertApiResult(okResultEn1).length, 7);
  });

  it('should convert failed results', () => {
    assert.equal(convertApiResult(failEmptyResult).length, 0);
  });

  it('should has all needed keys', () => {
    const [city] = convertApiResult(okResultEn1);

    assert.deepEqual(city, {
      country: {
        code: 'ES',
        name: 'Spain',
      },
      district: 'Galicia',
      id: 50101,
      kind: 'T',
      lang: 'en',
      name: 'Mos',
      subDistrict: null,
    });
  });
});
