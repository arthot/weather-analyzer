import micro from 'micro';

const { send } = micro;

// const middleware = require('./middleware');

/**
 * @param {Request} req
 * @param {Response} res
 */
export const ping = (req, res) => send(res, 200, { ping: 'pong' });
