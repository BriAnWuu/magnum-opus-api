import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);




const getAll = async (req, res) => {
    try {
        const artworks = await knex("artwork")
            .select(
                "id",
                "title",
                "date_end",
                "artist_title",
                "image_id",
                "alt_text"
            );
        
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
