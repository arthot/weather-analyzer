import { cities, queries } from '../mongo';

/**
 * Searches for cached query with cities
 *
 * @param {string} lang
 * @param {string} query
 */
export async function searchByQuery(lang, query) {
  const cachedQuery = await queries().findOne({ lang, query });
  if (!cachedQuery) {
    return null;
  }

  const cts = await cities()
    .find({ lang, id: { $in: cachedQuery.cities } })
    .toArray();

  return cachedQuery.cities.map(id => cts.find(c => c.id === id)).filter(c => c);
}

/**
 * Caches query and related cities to the db
 *
 * @param {string} lang
 * @param {string} query
 * @param {Array} items
 */
export async function cacheSearch(lang, query, items) {
  const exists = await queries().findOne({ lang, query });
  if (exists) {
    return;
  }

  const now = Date.now();

  queries().insertOne({ query, lang, cities: items.map(i => i.id), createdAt: now });

  if (items.length) {
    cities().insertMany(
      items.map(i => ({ ...i, createdAt: now })),
      { ordered: false },
    );
  }
}

/**
 * Finds city by lang and id
 *
 * @param {string} lang
 * @param {number} id
 */
export function getById(lang, id) {
  return cities().findOne({ lang, id });
}
