/** @typedef {import('../services/db').HistoryRecord} HistoryRecord */

/**
 * Maps weather history record object to http interface
 *
 * @param {HistoryRecord} historyRecord
 */
export function toHttpResult({ month, year, cityId, history }) {
  return {
    month,
    year,
    cityId,
    history: history.map(({ day, temperature, cloudiness, fallout }) => ({
      day,
      temperature,
      cloudiness,
      fallout,
    })),
  };
}
