import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export function GetUser(id) {
    return knex("user").select().where({ id: id }).first();
}

export function UpdateUser(id, updatedUser) {
    return knex("user").where({ id: id }).update(updatedUser);
}
