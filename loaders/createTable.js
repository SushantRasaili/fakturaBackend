const { pgClient } = require("./pgsqlConnection");

const createTables = async () => {
  const client = await pgClient();

  const queries = `
    CREATE TYPE userRole AS ENUM ('ADMIN', 'USER');

    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      address VARCHAR(100),
      role userRole NOT NULL DEFAULT 'USER',
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      product VARCHAR(50) UNIQUE NOT NULL,
      inPrice INT NOT NULL,
      price INT NOT NULL,
      unit INT NOT NULL,
      stock INT,
      description VARCHAR(100) UNIQUE NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await client.query(queries);
    console.log("Tables 'users' and 'products' created successfully!");
  } catch (err) {
    console.log("Tables 'users' and 'products' created successfully!");
    console.error("Error creating tables:", err);
  }
};

module.exports = createTables;
