import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const reqBodyValid = (body) => {
    if (!body.auction_id || !body.user_id || !body.amount) {
        return false;
    }
    return true;
}

const postBid = async (req, res) => {
    if (!reqBodyValid(req.body)) {
        return res.status(400).json({
            message: "Missing properties in request body"
        });
    }
    
    try {
        const findAuction = await knex("auction")
            .where({ id: req.body.auction_id });
        if (findAuction.length === 0) {
            return res.status(400).json({
                message: `Auction ID ${req.body.auction_id} does not exist`
            })
        }

        // Check amount valid
        findAuction[0].leading_bid_price = JSON.parse(findAuction[0].leading_bid_price);
        const bidLen = findAuction[0].leading_bid_price.length - 1;
        if (findAuction[0].leading_bid_price[bidLen] >= req.body.amount) {
            return res.status(400).json({
                message: `New bid has to be higher than current price`
            })
        }

        const findUser = await knex("user")
            .where({ id: req.body.user_id });
        if (findUser.length === 0) {
            return res.status(400).json({
                message: `User ID ${req.body.user_id} does not exist`
            })
        }


        const [ newBidId ] = await knex("bid").insert(req.body);
        const newBid = await knex("bid")
            .select()
            .where({ id: newBidId })
            .first();

        res.status(201).json(newBid);
    } catch (error) {
        res.status(500).json({
            message: `Unable to bid on artwork ${req.body.auction_id}`,
            error,
        });
    }
}


export {
    postBid
};
