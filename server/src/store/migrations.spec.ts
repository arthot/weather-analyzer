import { expect } from 'chai'
import * as knex from 'knex'
import * as path from 'path'
import * as fs from 'fs'

let db: knex;
const DB_PATH = path.join(__dirname, '../..', Date.now() + '.sqlite3');

describe('db migrations', () => {

    before(async () => {
        db = knex({
            client: 'sqlite3',
            useNullAsDefault: true,
            connection: {
                filename: DB_PATH
            },
            migrations: {
                directory: path.join(__dirname, 'migrations'),
                tableName: '_migrations'
            }
        })
    })

    it('should migrate to the latest version', async () => {
        await db.migrate.latest();
    })

    it('should downgrade', async () => {
        await db.migrate.rollback();
    })

    after((done) => {
        db.destroy().then(() => fs.unlink(DB_PATH, done))
    })

})
