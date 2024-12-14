import auctionData from "../data/auction-data.js";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('auction').del()
  await knex('auction').insert(auctionData);
};
