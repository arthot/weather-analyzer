import 'reflect-metadata'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Knex from 'knex'

const knexConfig = require('../knexfile');

const knex = Knex(knexConfig.development);

const app = new Koa();

app.use(bodyParser());

app.listen(3003);

console.log('Application is up and running on port 3003');
