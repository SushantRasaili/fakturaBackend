import { pgClient } from "../../loaders/pgsqlConnection.js";
import ErrorResponse from "../../utils/index.js";

export const getProducts = async () => {
  const client = await pgClient();

  const products = await client.query(
    `SELECT * FROM products ORDER BY id DESC`
  );

  return products.rows;
};

export const updateProduct = async (body, productId) => {
  const allowedFields = [
    "articleno",
    "product",
    "inprice",
    "price",
    "unit",
    "stock",
    "description",
  ];
  const field = Object.keys(body)[0];
  const value = Object.values(body)[0];

  if (!allowedFields.includes(field))
    throw new ErrorResponse("Invalid field name");

  const client = await pgClient();
  await client.query(`UPDATE products SET ${field}=$1 WHERE id=$2`, [
    value,
    productId,
  ]);
};
