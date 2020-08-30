import mongodb from 'mongodb';

const { MongoClient } = mongodb;

/**
 * @typedef {import('mongodb').Db} Db
 * @typedef {import('mongodb').MongoClient} MongoClient
 * @typedef {import('mongodb').Collection<any>} CityCollection
 */

/**
 * @constant
 * @type {Db}
 */
let db;

/**
 * @constant
 * @type {MongoClient}
 */
let client;

/**
 * Initialize connection to mongo
 *
 * @param {{url: string, name: string, options: object}} config
 */
export const connectDB = async config => {
  const { uri, name, options } = config;
  client = await MongoClient.connect(uri, options);
  db = client.db(name);
};

/**
 * Disconnect from the db
 */
export const disconnectDB = async () => {
  if (client) {
    await client.close(true);
  }
  client = null;
  db = null;
};

/**
 * @returns {CityCollection}
 */
export const cities = () => db.collection('cities');
