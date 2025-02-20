import { GetAuctionByArtwork } from "../repo/auction-db.js";
import { GetBidsByAuction } from "../repo/bid-db.js";

const getAuctionByArtworkId = async (req, res) => {
    if (!req.query.artworkId) {
        return res.status(404).json({
            message: "Query param Artwork ID missing",
        });
    }

    try {
        const auction = await GetAuctionByArtwork(req.query.artworkId);

        if (!auction) {
            return res.status(404).json({
                message: `Auction of artwork ID ${req.query.artworkId} not found`,
            });
        }

        auction.leading_bid_price = JSON.parse(auction.leading_bid_price);
        auction.watchers = JSON.parse(auction.watchers);

        res.status(200).json(auction);
    } catch (error) {
        res.status(500).json({
            message: `Unable to get auction of artwork ID ${req.query.artworkId}`,
            error,
        });
    }
};

const getBids = async (req, res) => {
    try {
        const bids = await GetBidsByAuction(req.params.id);

        res.status(200).json(bids);
    } catch (error) {
        res.status(500).json({
            message: `Unable to get bids for auction ID ${req.params.id}`,
            error,
        });
    }
};

export { getAuctionByArtworkId, getBids };
