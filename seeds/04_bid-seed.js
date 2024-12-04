/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('bid').del()
  await knex('bid').insert([
    {
      "id": 1,
      "auction_id": 46,
      "user_id": 12,
      "amount": 1200
    },
    {
      "id": 2,
      "auction_id": 36,
      "user_id": 15,
      "amount": 4700
    },
    {
      "id": 3,
      "auction_id": 16,
      "user_id": 17,
      "amount": 6200
    },
    {
      "id": 4,
      "auction_id": 8,
      "user_id": 14,
      "amount": 5300
    },
    {
      "id": 5,
      "auction_id": 38,
      "user_id": 17,
      "amount": 8400
    },
    {
      "id": 6,
      "auction_id": 49,
      "user_id": 12,
      "amount": 2400
    },
    {
      "id": 7,
      "auction_id": 13,
      "user_id": 15,
      "amount": 9000
    },
    {
      "id": 8,
      "auction_id": 12,
      "user_id": 13,
      "amount": 8200
    },
    {
      "id": 9,
      "auction_id": 36,
      "user_id": 18,
      "amount": 4800
    },
    {
      "id": 10,
      "auction_id": 45,
      "user_id": 19,
      "amount": 3200
    },
    {
      "id": 11,
      "auction_id": 50,
      "user_id": 19,
      "amount": 3400
    },
    {
      "id": 12,
      "auction_id": 26,
      "user_id": 18,
      "amount": 3200
    },
    {
      "id": 13,
      "auction_id": 23,
      "user_id": 14,
      "amount": 3000
    },
    {
      "id": 14,
      "auction_id": 8,
      "user_id": 18,
      "amount": 5400
    },
    {
      "id": 15,
      "auction_id": 42,
      "user_id": 18,
      "amount": 9500
    },
    {
      "id": 16,
      "auction_id": 11,
      "user_id": 12,
      "amount": 6100
    },
    {
      "id": 17,
      "auction_id": 27,
      "user_id": 14,
      "amount": 1700
    },
    {
      "id": 18,
      "auction_id": 41,
      "user_id": 20,
      "amount": 9600
    },
    {
      "id": 19,
      "auction_id": 38,
      "user_id": 17,
      "amount": 8500
    },
    {
      "id": 20,
      "auction_id": 37,
      "user_id": 17,
      "amount": 6700
    },
    {
      "id": 21,
      "auction_id": 7,
      "user_id": 11,
      "amount": 9000
    },
    {
      "id": 22,
      "auction_id": 29,
      "user_id": 11,
      "amount": 9400
    },
    {
      "id": 23,
      "auction_id": 25,
      "user_id": 19,
      "amount": 5500
    },
    {
      "id": 24,
      "auction_id": 18,
      "user_id": 11,
      "amount": 7100
    },
    {
      "id": 25,
      "auction_id": 1,
      "user_id": 12,
      "amount": 1400
    },
    {
      "id": 26,
      "auction_id": 15,
      "user_id": 11,
      "amount": 2000
    },
    {
      "id": 27,
      "auction_id": 49,
      "user_id": 11,
      "amount": 2500
    },
    {
      "id": 28,
      "auction_id": 47,
      "user_id": 15,
      "amount": 9000
    },
    {
      "id": 29,
      "auction_id": 8,
      "user_id": 13,
      "amount": 5500
    },
    {
      "id": 30,
      "auction_id": 37,
      "user_id": 13,
      "amount": 6800
    },
    {
      "id": 31,
      "auction_id": 29,
      "user_id": 15,
      "amount": 9500
    },
    {
      "id": 32,
      "auction_id": 47,
      "user_id": 18,
      "amount": 9100
    },
    {
      "id": 33,
      "auction_id": 19,
      "user_id": 12,
      "amount": 6000
    },
    {
      "id": 34,
      "auction_id": 49,
      "user_id": 18,
      "amount": 2600
    },
    {
      "id": 35,
      "auction_id": 39,
      "user_id": 18,
      "amount": 5500
    },
    {
      "id": 36,
      "auction_id": 35,
      "user_id": 12,
      "amount": 8800
    },
    {
      "id": 37,
      "auction_id": 29,
      "user_id": 19,
      "amount": 9600
    },
    {
      "id": 38,
      "auction_id": 39,
      "user_id": 16,
      "amount": 5600
    },
    {
      "id": 39,
      "auction_id": 31,
      "user_id": 18,
      "amount": 2500
    },
    {
      "id": 40,
      "auction_id": 16,
      "user_id": 16,
      "amount": 6300
    },
    {
      "id": 41,
      "auction_id": 18,
      "user_id": 14,
      "amount": 7200
    },
    {
      "id": 42,
      "auction_id": 39,
      "user_id": 12,
      "amount": 5700
    },
    {
      "id": 43,
      "auction_id": 1,
      "user_id": 14,
      "amount": 1500
    },
    {
      "id": 44,
      "auction_id": 28,
      "user_id": 17,
      "amount": 6300
    },
    {
      "id": 45,
      "auction_id": 9,
      "user_id": 11,
      "amount": 4000
    },
    {
      "id": 46,
      "auction_id": 24,
      "user_id": 18,
      "amount": 5700
    },
    {
      "id": 47,
      "auction_id": 22,
      "user_id": 14,
      "amount": 1100
    },
    {
      "id": 48,
      "auction_id": 39,
      "user_id": 12,
      "amount": 5800
    },
    {
      "id": 49,
      "auction_id": 21,
      "user_id": 11,
      "amount": 6700
    },
    {
      "id": 50,
      "auction_id": 46,
      "user_id": 11,
      "amount": 1300
    }
  ]);
};
