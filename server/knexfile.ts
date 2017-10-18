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
        }
    }
};