import { pgClient } from "../../loaders/pgsqlConnection.js";

export const getProducts = async () => {
  const client = await pgClient();

  const products = await client.query(`SELECT * FROM products`);

  return products.rows;
};
