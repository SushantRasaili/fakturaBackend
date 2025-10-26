import pkg from "pg";
const { Pool } = pkg;

let pool = null;
let client = null;

const createPool = () => {
  const newPool = new Pool({
    connectionString: process.env.POSTGRES_URI,
    max: 5,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 10000,
    ssl: { rejectUnauthorized: false }, // only if remote db
  });

  newPool.on("connect", () => {
    console.info("PostgreSQL :: Pool connection established 🚀");
  });

  newPool.on("error", (err) => {
    console.error("PostgreSQL :: Pool error ❌", err);
  });

  return newPool;
};

const reconnectPool = async () => {
  try {
    console.warn("PostgreSQL :: Reconnecting pool...");
    if (client) {
      client.release(true);
      client = null;
    }
    if (pool) {
      await pool.end();
    }

    pool = createPool();
    client = await pool.connect();

    client.on("error", (err) => {
      console.error("PostgreSQL :: Client lost connection ", err);
      reconnectPool();
    });

    console.info("PostgreSQL :: Reconnected successfully ");
  } catch (err) {
    console.error("PostgreSQL :: Reconnect failed, retrying in 3s...", err);
    setTimeout(reconnectPool, 3000);
  }
};

export const connectPostgres = async () => {
  if (!process.env.POSTGRES_URI) {
    throw new Error("POSTGRES_URI not provided 🚫");
  }

  if (!pool) {
    pool = createPool();
  }

  if (!client) {
    try {
      client = await pool.connect();

      client.on("error", (err) => {
        console.error("PostgreSQL :: Client error ", err);
        reconnectPool();
      });

      console.info("PostgreSQL :: Client ready 🟢");
    } catch (err) {
      console.error("PostgreSQL :: Initial connection failed ❌", err);
      await reconnectPool();
    }
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
  await reconnectPool();
  return client;
};
