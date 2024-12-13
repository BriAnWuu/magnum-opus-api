import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const get = async (req, res) => {
    try {
        const auction = await knex("auction")
            .join("artwork", "auction.artwork_id", "=", "artwork.id")
            .select(
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
                "alt_text"
            )
            .where({ artwork_id: req.params.artworkId })
            .first();
        
        auction.leading_bid_price = JSON.parse(auction.leading_bid_price);
        auction.watchers = JSON.parse(auction.watchers);

        res.status(200).json(auction);
    } catch (error) {
        res.status(500).json({
            message: `Unable to get auction ${req.params.artworkId}`,
            error,
        });
    }
}


const getBids = async (req, res) => {
    try {
        const bids = await knex("bid")
            .select()
            .where({ auction_id: req.params.id });
        
        res.status(200).json(bids);
    } catch (error) {
        res.status(500).json({
            message: `Unable to get auction ${req.params.id}`,
            error,
        });
    }
}


export {
    get,
    getBids
};

