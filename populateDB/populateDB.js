import { pgClient } from "../loaders/pgsqlConnection.js";

export const populateProducts = async () => {
  const client = await pgClient();

  const queries = `INSERT INTO products (articleno, product, inprice, price, unit, stock, description)
   VALUES
    (1123, 'Sony DSLR', 10304,11200,'pieces',50,'this is a test description'),
(1124, 'Iphone', 10304,11202,'pieces',50,'this is a test description'),
(1125, 'Samsung', 10333,11255,'pieces',40,'this is a test description'),
(1126, 'Headphone', 1033,1120,'pieces',100,'this is a test description'),
(1127, 'Earphone', 11123,11150,'pieces',70,'this is a test description') 
`;

  try {
    await client.query(queries);
    console.log("Table 'products' populated successfully!");
  } catch (err) {
    console.error("Error populating products", err);
  }
};
