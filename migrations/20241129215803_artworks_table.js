/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("artwork", (table) => {
        table.integer("id").unsigned().primary();
        table.string("title");
        table.integer("date_start");
        table.integer("date_end");
        table.string("artist_display");
        table.string("place_of_origin");
        table.string("description", 1000);
        table.string("dimensions");
        table.string("medium_display", 1000);
        table.string("credit_line");
        table.string("provenance_text", 3000);
        table.string("artwork_type_title");
        table.integer("artist_id").unsigned();
        table.string("artist_title");
        table.string("term_titles", 1000);
        table.string("image_id");
        table.string("alt_text", 1000);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("artwork");
};
