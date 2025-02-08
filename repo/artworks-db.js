import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export function GetArtworksWithAuctionDetail(offset, limit) {
    const fields = [
        "artwork.id",
        "title",
        "date_start",
        "date_end",
        "artist_display",
        "place_of_origin",
        "description",
        "dimensions",
        "medium_display",
        "credit_line",
        "alt_text",
        "open_at",
        "close_at",
        "ask_price",
        "leading_bid_price",
    ];

    return knex("artwork")
        .join("auction", "artwork.id", "=", "auction.artwork_id")
        .select(fields)
        .offset(offset)
        .limit(limit);
}

export function GetArtworks() {
    const fields = ["id", "title", "date_end", "artist_title", "alt_text"];

    return knex("artwork").select(fields);
}

export function GetArtworkById(id) {
    return knex("artwork").select().where({ id: id }).first();
}
