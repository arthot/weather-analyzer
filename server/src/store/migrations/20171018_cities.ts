import * as Knex from 'knex';

export function up(knex: Knex) {
    return knex.schema.createTable('cities', table => {
        table.integer('id').notNullable();
        table.string('lang', 5).notNullable();
        table.string('name', 256);
        table.string('kind', 5);
        table.string('country', 256);
        table.string('district', 256);
        table.string('subDistrict', 256);

        table.primary(['id', 'lang']);
    })
}

export function down(knex: Knex) {
    return knex.schema.dropTable('cities')
}
