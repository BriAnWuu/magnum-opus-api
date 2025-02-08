import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export function GetAuctionByArtwork(artworkId) {
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

export function GetAuctionById(id) {
    return knex("auction").select().where({ id: id }).first();
}

export function UpdateAuction(id, updatedAuction) {
    return knex("auction").where({ id: id }).update(updatedAuction);
}

export function GetAuctionSocket(id) {
    return knex("auction")
        .join("artwork", "auction.artwork_id", "=", "artwork.id")
        .select("auction.id", "watchers", "leading_bid_price", "title")
        .where("auction.id", id)
        .first();
}
