import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export function GetAuction(artworkId) {
    const fields = [
        "auction.id",
        "artwork_id",
        "owner_id",
        "open_at",
        "close_at",
        "ask_price",
        "leading_bid_price",
        "watchers",
        "title",
        "date_start",
        "date_end",
        "place_of_origin",
        "description",
        "dimensions",
        "medium_display",
        "provenance_text",
        "artist_title",
        "alt_text",
    ];

    return knex("auction")
        .join("artwork", "auction.artwork_id", "=", "artwork.id")
        .select(fields)
        .where({ artwork_id: artworkId })
        .first();
}
