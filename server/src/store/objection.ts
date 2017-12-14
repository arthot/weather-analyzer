import * as Knex from 'knex'
import * as objection from 'objection'
import { config } from 'src/utils/config'

const knexConfig = require('../../knexfile');
const knex = Knex(knexConfig[config.env]);
objection.Model.knex(knex);

export = objection
