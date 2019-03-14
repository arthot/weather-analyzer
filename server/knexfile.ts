const path = require('path');

module.exports = {
    development: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: './db.sqlite3'
        },
        migrations: {
            directory: path.join(__dirname, 'src/store/migrations'),
            tableName: '_migrations'
        },
        pool: {
            afterCreate: (conn, cb) => {
                conn.run('PRAGMA foreign_keys = ON;PRAGMA journal_mode = WAL;', cb);
            }
        }
    },
    test: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: './db-test.sqlite3'
        },
        migrations: {
            directory: path.join(__dirname, 'src/store/migrations'),
            tableName: '_migrations'
        },
        pool: {
            afterCreate: (conn, cb) => {
                conn.run('PRAGMA foreign_keys = ON;PRAGMA journal_mode = WAL;', cb);
            }
        }
    },
    production: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: './db.sqlite3'
        },
        migrations: {
            directory: path.join(__dirname, 'src/store/migrations'),
            tableName: '_migrations'
        },
        pool: {
            afterCreate: (conn, cb) => {
                conn.run('PRAGMA foreign_keys = ON;PRAGMA journal_mode = WAL;', cb);
            }
        }
    }
};