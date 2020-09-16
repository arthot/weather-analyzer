import cheerio from 'cheerio';

import logger from '../../logger';

/**
 * Checks if gismeteo page has no data
 *
 * @param {Cherio} tds
 * @returns {boolean}
 */
const isEmpty = tds => !tds.length || tds.eq(1).html().includes('img/still');

/**
 * Parses day of the month
 *
 * @param {Cherio} tds
 * @returns {number}
 */
const parseDay = tds => parseInt(tds.eq(0).text(), 10);

/**
 * Parses temperature
 *
 * @param {Cherio} tds
 * @returns {number}
 */
const parseTemperature = tds => parseFloat(tds.eq(1).text());

/**
 * Parses cloudiness
 *
 * @param {Cherio} tds
 * @returns {number}
 */
const parseCloudiness = tds => {
  const value = tds.eq(3).html();

  if (value.includes('sun.png')) return 0;
  if (value.includes('sunc.png')) return 0.25;
  if (value.includes('suncl.png')) return 0.5;

  return 1;
};

/**
 * Parses fallout
 *
 * @param {Cherio} tds
 * @returns {string}
 */
const parseFallout = tds => !!tds.eq(4).html().trim();

/**
 * Parses Gismeteo history page
 *
 * @param {string} page
 */
export function parseResult(page) {
  const $ = cheerio.load(page);
  const nodes = $('div[id="data_block"] table>tbody>tr');

  return nodes
    .toArray()
    .map(tr => {
      try {
        const tds = $(tr).find('td');

        if (isEmpty(tds)) return null;

        return {
          day: parseDay(tds),
          temperature: parseTemperature(tds),
          cloudiness: parseCloudiness(tds),
          fallout: parseFallout(tds),
        };
      } catch (e) {
        logger.error(e, $(tr).html());
        return null;
      }
    })
    .filter(d => d)
    .sort((a, b) => (a.date > b.date ? 1 : -1));
}
