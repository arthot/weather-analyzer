/**
 * Maps weather history record object to http interface
 *
 * @param {{ date: string, temperature: number, cloudiness: number, fallout: boolean, cityId: number }} history
 */
export function toHttpResult({ date, temperature, cloudiness, fallout, cityId }) {
  return { date, temperature, cloudiness, fallout, cityId };
}
