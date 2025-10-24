import { pgClient } from "./pgsqlConnection.js";

export const createTables = async () => {
  const client = await pgClient();

  const queries = `
  CREATE TYPE userRole AS ENUM ('ADMIN', 'USER');

  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    address VARCHAR(100),
    role userRole NOT NULL DEFAULT 'USER',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    articleNo INT UNIQUE NOT NULL,
    product VARCHAR(50) NOT NULL,
    inPrice INT NOT NULL,
    price INT NOT NULL,
    unit VARCHAR(25) NOT NULL,
    stock INT DEFAULT 0,
    description VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

    CREATE TABLE IF NOT EXISTS languages (
  id SERIAL PRIMARY KEY,
  language VARCHAR(40) UNIQUE NOT NULL,
  code TEXT UNIQUE NOT NULL,
  logo VARCHAR(100) NOT NULL,
  navbar  JSONB NOT NULL,
  login  JSONB NOT NULL,
  footer  JSONB NOT NULL,
  terms  JSONB NOT NULL,
  dashMenu  JSONB NOT NULL,
  productColumn  JSONB NOT NULL,
  productAction  JSONB NOT NULL
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
