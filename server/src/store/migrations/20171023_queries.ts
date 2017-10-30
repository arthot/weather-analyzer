import * as Knex from 'knex';

export function up(knex: Knex) {
    return knex.schema.createTable('queries', table => {
        table.increments('id').primary();
        table.string('query', 256).notNullable();
        table.string('lang', 5).notNullable();
        table.timestamp('date').notNullable().defaultTo(knex.fn.now());

        table.unique(['query', 'lang']);
    })
}

export function down(knex: Knex) {
    return knex.schema.dropTable('queries')
}
