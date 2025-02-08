import { GetAuctionById, UpdateAuction } from "../repo/auction-db.js";
import { GetBid, InsertBid } from "../repo/bid-db.js";
import { GetUser, UpdateUser } from "../repo/user-db.js";

const reqBodyValid = (body) => {
    if (
        !body.auction_id ||
        !body.user_id ||
        !body.amount ||
        !body.buyer ||
        !body.watching
    ) {
        return false;
    }
    return true;
};

const postBid = async (req, res) => {
    if (!reqBodyValid(req.body)) {
        return res.status(422).json({
            message: "Missing properties in request body",
        });
    }

    try {
        const auction = await GetAuctionById(req.body.auction_id);

        if (!auction) {
            return res.status(404).json({
                message: `Auction ID ${req.body.auction_id} does not exist`,
            });
        }

        // Check amount valid
        auction.leading_bid_price = JSON.parse(auction.leading_bid_price);
        const bidLen = auction.leading_bid_price.length - 1;
        if (auction.leading_bid_price[bidLen] >= req.body.amount) {
            return res.status(422).json({
                message: `New bid has to be higher than current price`,
            });
        }

        const user = await GetUser(req.body.user_id);
        if (!user) {
            return res.status(404).json({
                message: `User ID ${req.body.user_id} does not exist`,
            });
        }

        // check if update watch list is needed
        user.watching = JSON.parse(user.watching);
        if (!user.watching.includes(req.body.watching)) {
            user.watching.push(req.body.watching);
        }
        user.watching = JSON.stringify(user.watching);
        // clean data entry for update
        const updatedUser = {
            ...user,
            buyer: req.body.buyer,
        };

        // update user profile
        const userRowsUpdated = await UpdateUser(req.body.user_id, updatedUser);

        // update auction data
        auction.leading_bid_price.push(req.body.amount);
        auction.leading_bid_price = JSON.stringify(auction.leading_bid_price);
        const auctionRowsUpdated = await UpdateAuction(
            req.body.auction_id,
            auction
        );

        // insert new bid
        const [newBidId] = await InsertBid(
            req.body.auction_id,
            req.body.user_id,
            req.body.amount
        );
        const newBid = await GetBid(newBidId);

        res.status(201).json({
            ...newBid,
            users_updated: userRowsUpdated,
            auction_updated: auctionRowsUpdated,
        });
    } catch (error) {
        res.status(500).json({
            message: `Unable to bid on artwork ${req.body.auction_id}`,
            error,
        });
    }
};

export { postBid };
