import initKnex from "knex";
import configuration from "../knexfile.js";
import { update } from "./user-controller.js";
const knex = initKnex(configuration);

const reqBodyValid = (body) => {
    if (!body.auction_id || !body.user_id || !body.amount || !body.buyer || !body.watching) {
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

        // retrieve user profile
        const user = findUser[0];
        // check if update watch list is needed
        user.watching = JSON.parse(user.watching);
        if (!user.watching.includes(req.body.watching)) {
            user.watching.push(req.body.watching);
        }
        user.watching = JSON.stringify(user.watching);
        // clean data entry for update
        const updateUser = { 
            ...user,
            buyer: req.body.buyer,
        }

        // update user profile
        const rowsUpdated = await knex("user")
            .where({ id: req.body.user_id })
            .update(updateUser);

        
        const [ newBidId ] = await knex("bid").insert({
            auction_id: req.body.auction_id,
            user_id: req.body.user_id,
            amount: req.body.amount,
        });
        
        const newBid = await knex("bid")
            .select()
            .where({ id: newBidId })
            .first();

        res.status(201).json({...newBid, "users_updated": rowsUpdated});
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
