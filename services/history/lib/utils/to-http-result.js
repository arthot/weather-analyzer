/**
 * Maps weather history record object to http interface
 *
 * @param {{ day: number, month: number, year: number, temperature: number, cloudiness: number, fallout: boolean, cityId: number }} historyRecord
 */
export function toHttpResult({ day, month, year, temperature, cloudiness, fallout, cityId }) {
  return { day, month, year, temperature, cloudiness, fallout, cityId };
}
