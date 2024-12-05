import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const get = async (req, res) => {
    try {
        const auction = await knex("auction")
            .select()
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

