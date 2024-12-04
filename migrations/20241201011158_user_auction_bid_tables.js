/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments("id").primary();
        table.boolean("buyer").notNullable();
        table.boolean("seller").notNullable();
        table.boolean("artist").notNullable();
        table.string("watching").defaultTo("[]");
        table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("auction", (table) => {
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
            .onDelete("RESTRICT");
        table.bigInteger("open_at").unsigned().notNullable();
        table.bigInteger("close_at").unsigned().notNullable();
        table.integer("ask_price").unsigned().notNullable();
        table.string("leading_bid_price").notNullable();
        table.string("watchers").notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable("bid", (table) => {
        table.increments("id").primary();
        table
            .integer("auction_id")
            .unsigned()
            .references("auction.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        table
            .integer("user_id")
            .unsigned()
            .references("user.id")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        table.integer("amount").unsigned().notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("bid").dropTable("auction").dropTable("user");
};