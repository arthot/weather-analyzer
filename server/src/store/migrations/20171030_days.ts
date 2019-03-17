import * as Knex from 'knex';

export function up(knex: Knex) {
    return knex.schema.createTable('days', table => {
        table.increments('id').primary();
        table.string('date', 24).notNullable();
        table.float('temperature');
        table.float('cloudiness');
        table.boolean('fallout');
        table.float('chance');
        table.integer('cityId').notNullable();

        table.index(['cityId']);
    })
}

export function down(knex: Knex) {
    return knex.schema.dropTable('days')
}
