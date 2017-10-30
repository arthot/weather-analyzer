import * as Knex from 'knex'
import * as objection from 'objection'

const knexConfig = require('../../knexfile');
const knex = Knex(knexConfig[process.env.NODE_ENV]);
objection.Model.knex(knex);

export = objection
