import micro from 'micro';
import util from 'util';
import { connectDB, disconnectDB } from './mongo.js';
import { handler } from './app.js';
import { db, port } from './config/index.js';
import logger from './logger.js';
import pckg from '../package.json';

const { name, version } = pckg;

export const server = micro(handler);
const serverListen = util.promisify(server.listen).bind(server);
const serverClose = util.promisify(server.close).bind(server);

/**
 *
 * @returns {Promise.<void>}
 */
export async function startServer() {
  await connectDB(db);
  await serverListen(port);
  logger.info(name, { port, version });
}

/**
 *
 * @returns {Promise.<void>}
 */
export async function stopServer() {
  await serverClose();
  await disconnectDB();
}
