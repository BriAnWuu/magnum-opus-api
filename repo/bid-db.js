import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export function GetBid(id) {
    return knex("bid").select().where({ id: id }).first();
}

export function GetBidsByAuction(auctionId) {
    return knex("bid").select().where({ auction_id: auctionId });
}

export function InsertBid(auctionId, userId, amount) {
    return knex("bid").insert({
        auction_id: auctionId,
        user_id: userId,
        amount: amount,
    });
}
