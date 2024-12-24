import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const reqBodyValid = (body) => {
    if (body.buyer === null || body.seller === null || body.artist === null || !body.watching) {
        return false;
    }
    return true;
}

const follow = async (req, res) => {
    // if (!reqBodyValid(req.body)) {
    //     return res.status(400).json({
    //         message: "Missing properties in request body"
    //     });
    // }

    try {
        const findUser = await knex("user")
            .where({ id: req.params.id });
        
        if (findUser.length === 0) {
            return res.status(404).json({
                message: `User ID ${req.params.id} not found`,
            })
        }

        const user = findUser[0];
        user.watching = JSON.parse(user.watching);
        if (!user.watching.includes(req.body.watching)) {
            user.watching.push(req.body.watching);
        }
        user.watching = JSON.stringify(user.watching);

        // find and update auction
        const findAuction = await knex("auction")
            .where({ id: req.body.watching })
            .first();

        findAuction.watchers = JSON.parse(findAuction.watchers);
        if (!findAuction.watchers.includes(+req.params.id)) {
            findAuction.watchers.push(+req.params.id);
        }
        findAuction.watchers = JSON.stringify(findAuction.watchers);

        // update user
        const rowsUpdated = await knex("user")
            .where({ id: req.params.id })
            .update(user);

        const userUpdated = await knex("user")
            .select()
            .where({ id: req.params.id })
            .first();

        // update auction
        const rowsAuctionUpdated = await knex("auction")
            .where({ id: req.body.watching })
            .update(findAuction);

        userUpdated.watching = JSON.parse(userUpdated.watching);

        res.status(200).json({...userUpdated, auction_updated: rowsAuctionUpdated});

    } catch (error) {
        res.status(500).json({
            message: `Unable to update user ${req.params.id}`,
            error,
        });
    }
}


export {
    follow
};

