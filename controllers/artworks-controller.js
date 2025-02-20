import {
    GetArtworkById,
    GetArtworks,
    GetArtworksWithAuctionDetail,
} from "../repo/artworks-db.js";

const getAll = async (req, res) => {
    if (req.query.q) {
        if (req.query.q !== "main") {
            return res.status(422).json({
                message: "Unable to process parameter",
            });
        }

        try {
            const artworks = await GetArtworksWithAuctionDetail(29, 17);

            artworks.forEach((artwork) => {
                artwork.leading_bid_price = JSON.parse(
                    artwork.leading_bid_price
                );
            });

            res.status(200).json(artworks);
        } catch (error) {
            res.status(500).json({
                message: "Unable to get artworks",
                error,
            });
        }
    } else {
        try {
            const artworks = await GetArtworks();
            res.status(200).json(artworks);
        } catch (error) {
            res.status(500).json({
                message: "Unable to get artworks",
                error,
            });
        }
    }
};

const get = async (req, res) => {
    try {
        const artwork = await GetArtworkById(req.params.id);

        if (!artwork) {
            return res.status(404).json({
                message: `Artwork ID ${req.params.id} not found`,
            });
        }

        artwork.term_titles = JSON.parse(artwork.term_titles);

        res.status(200).json(artwork);
    } catch (error) {
        res.status(500).json({
            message: `Unable to get artwork ${req.params.id}`,
            error,
        });
    }
};

export { get, getAll };
