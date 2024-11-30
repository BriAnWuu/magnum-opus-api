/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("artwork", (table) => {
        table.integer("id").unsigned().primary();
        table.string("title");
        table.integer("date_start").unsigned();
        table.integer("end_start").unsigned();
        table.string("artist_display");
        table.string("place_of_origin");
        table.string("description");
        table.string("dimensions");
        table.string("medium_display");
        table.integer("artist_id").unsigned();
        table.string("artist_title");
        table.string("term_titles");
        table.string("image_id");
        table.string("alt_text");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("artwork");
};
