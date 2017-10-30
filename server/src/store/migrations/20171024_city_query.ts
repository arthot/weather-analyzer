import * as Knex from 'knex';

export function up(knex: Knex) {
    return knex.schema.createTable('city_query', table => {
        table.integer('cityId').notNullable().references('cities.id').onDelete('CASCADE');
        table.integer('queryId').notNullable().references('query.id').onDelete('CASCADE');
        table.integer('order').notNullable().defaultTo(0);

        table.primary(['cityId', 'queryId']);
    })
}

export function down(knex: Knex) {
    return knex.schema.dropTable('city_query')
}
