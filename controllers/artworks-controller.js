import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);


const getAll = async (req, res) => {
    try {
        let fields = [];
        let artworks;

        if (req.query.q === "main") {
            fields = [
                "artwork.id",
                "title",
                "date_start",
                "date_end",
                "artist_display",
                "place_of_origin",
                "description",
                "dimensions",
                "medium_display",
                "credit_line",
                "alt_text",
                "open_at",
                "close_at",
                "ask_price",
                "leading_bid_price"
            ];

            artworks = await knex("artwork")
                .join("auction", "artwork.id", "=", "auction.artwork_id")
                .select(fields)
                .offset(2)
                .limit(17);
            
            artworks.forEach((artwork) => {
                artwork.leading_bid_price = JSON.parse(artwork.leading_bid_price);
            });

        } else {
            fields = [
                "id",
                "title",
                "date_end",
                "artist_title",
                "alt_text"
            ];

            artworks = await knex("artwork").select(fields);
        }

        
        res.status(200).json(artworks);
    } catch (error) {
        res.status(500).json({
            message: "Unable to get artworks",
            error,
        });
    }
}


const get = async (req, res) => {
    try {
        const artwork = await knex("artwork")
            .select()
            .where({ id: req.params.id })
            .first();

        artwork.term_titles = JSON.parse(artwork.term_titles);
        
        res.status(200).json(artwork);
    } catch (error) {
        res.status(500).json({
            message: `Unable to get artwork ${req.params.id}`,
            error,
        });
    }
}


export {
    get,
    getAll
};
