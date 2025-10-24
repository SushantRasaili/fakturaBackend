import { pgClient } from "../../loaders/pgsqlConnection.js";

export const getLanguageByCode = async (code) => {
  const client = await pgClient();

  const language = await client.query(`SELECT * FROM languages WHERE code=$1`, [
    code,
  ]);

  return language.rows;
};
