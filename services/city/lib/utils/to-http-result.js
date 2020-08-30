/**
 * Maps City object to http interface
 *
 * @param {{ country: object, district: string, id: number, kind: string, lang: string, name: string, subDistrict: string }} city
 */
export function toHttpResult({ country, district, id, kind, lang, name, subDistrict }) {
  return { country, district, id, kind, lang, name, subDistrict };
}
