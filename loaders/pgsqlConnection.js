import pkg from "pg";
const { Pool } = pkg;

let pool = null;
let client = null;

export const connectPostgres = async () => {
  if (!process.env.POSTGRES_URI) {
    throw new Error("POSTGRES_URI not provided 🚫");
  }

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.POSTGRES_URI,
    });

    pool.on("connect", () => {
      console.info("PostgreSQL :: Connection successful 🚀");
    });

    pool.on("error", (err) => {
      console.error("PostgreSQL :: Connection error ❌", err);
      process.exit(-1);
    });
  }

  if (!client) {
    client = await pool.connect();
    console.info("PostgreSQL :: Client ready 🟢");
  }

  return client;
};

export const disconnectPostgres = async () => {
  if (client) {
    client.release();
    console.info("PostgreSQL :: Client released 🔵");
  }

  if (pool) {
    await pool.end();
    console.info("PostgreSQL :: Pool closed 🔴");
  }

  client = null;
  pool = null;
};

//get pg client
export const pgClient = async () => {
  if (client) return client;
  console.info("PostgreSQL :: Creating new client connection 🚀");
  return connectPostgres();
};
