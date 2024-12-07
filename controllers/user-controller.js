import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const reqBodyValid = (body) => {
    if (body.buyer === null || body.seller === null || body.artist === null || !body.watching) {
        return false;
    }
    return true;
}

const update = async (req, res) => {
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


        const rowsUpdated = await knex("user")
            .where({ id: req.params.id })
            .update(user);

        const userUpdated = await knex("user")
            .select()
            .where({ id: req.params.id })
            .first();

        userUpdated.watching = JSON.parse(userUpdated.watching);

        res.status(200).json(userUpdated);

    } catch (error) {
        res.status(500).json({
            message: `Unable to update user ${req.params.id}`,
            error,
        });
    }
}


export {
    update
};

