/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {
      "id": 1,
      "buyer": false,
      "seller": true,
      "artist": false,
      "watching": "[40,26]"
    },
    {
      "id": 2,
      "buyer": false,
      "seller": true,
      "artist": true,
      "watching": "[1,19]"
    },
    {
      "id": 3,
      "buyer": false,
      "seller": true,
      "artist": true,
      "watching": "[28,30]"
    },
    {
      "id": 4,
      "buyer": false,
      "seller": true,
      "artist": false,
      "watching": "[8,3]"
    },
    {
      "id": 5,
      "buyer": false,
      "seller": true,
      "artist": true,
      "watching": "[12,27]"
    },
    {
      "id": 6,
      "buyer": false,
      "seller": true,
      "artist": false,
      "watching": "[50,30]"
    },
    {
      "id": 7,
      "buyer": false,
      "seller": true,
      "artist": true,
      "watching": "[34,11]"
    },
    {
      "id": 8,
      "buyer": false,
      "seller": true,
      "artist": true,
      "watching": "[13,42]"
    },
    {
      "id": 9,
      "buyer": false,
      "seller": true,
      "artist": true,
      "watching": "[31,44]"
    },
    {
      "id": 10,
      "buyer": false,
      "seller": true,
      "artist": true,
      "watching": "[40,23]"
    },
    {
      "id": 11,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[8,10]"
    },
    {
      "id": 12,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[21,24]"
    },
    {
      "id": 13,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[22,28]"
    },
    {
      "id": 14,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[45,11]"
    },
    {
      "id": 15,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[10,11]"
    },
    {
      "id": 16,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[43,38]"
    },
    {
      "id": 17,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[41,33]"
    },
    {
      "id": 18,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[21,49]"
    },
    {
      "id": 19,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[42,16]"
    },
    {
      "id": 20,
      "buyer": true,
      "seller": false,
      "artist": false,
      "watching": "[32,21]"
    }
  ]);
};
