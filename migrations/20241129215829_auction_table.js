/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("auction", (table) => {
        table.increments("id").primary();
        table
            .integer("artwork_id")
            .unsigned()
            .references("artwork.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("owner_id")
            .unsigned()
            .references("user.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.timestamp("open_at").notNullable();
        table.timestamp("close_at").notNullable();
        table.integer("ask_price").notNullable();
        table.integer("leading_bid_price").notNullable;
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("auction");
};