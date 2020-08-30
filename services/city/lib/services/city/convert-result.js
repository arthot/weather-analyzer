const CityRegex = new RegExp('[C,M,T]');

/**
 * Filters out unknown object types
 *
 * @param {{kind: string}} city
 */
const filterOutUnknownTypes = city => city.kind && CityRegex.test(city.kind);

/**
 * Maps Gismeteo response items to City type
 *
 * @param {object} city
 */
const mapCityApiItem = city => ({
  id: city.id,
  lang: city.lang,
  name: city.name,
  kind: city.kind,
  country: { code: city.country_code, name: city.country_name },
  district: city.district_name,
  subDistrict: city.sub_district_name,
});

/**
 * Converts Gismeteo API result to array of City
 *
 * @param {{total: number, items: []}} data
 */
export const convertApiResult = data =>
  data.total === 0 ? [] : data.items.filter(filterOutUnknownTypes).map(mapCityApiItem);
