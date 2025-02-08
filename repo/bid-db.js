import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export function GetBidsByAuction(auctionId) {
    return knex("bid").select().where({ auction_id: auctionId });
}
