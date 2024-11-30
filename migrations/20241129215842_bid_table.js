/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("bid", (table) => {
        table.increments("id").primary();
        table
            .integer("auction_id")
            .unsigned()
            .references("auction.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("user_id")
            .unsigned()
            .references("user.id")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.integer("amount").unsigned().notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("bid")
};