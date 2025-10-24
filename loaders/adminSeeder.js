import { pgClient } from "./pgsqlConnection.js";
import bcrypt from "bcrypt";

export const seedAdmins = async () => {
  const client = await pgClient();
  try {
    const users = await client.query(
      "SELECT * FROM users WHERE email=$1 AND role =$2",
      ["johnAdmin@gmail.com", "ADMIN"]
    );

    const userCount = users.rowCount;

    const rounds = 10;
    const hash = await bcrypt.hash("admin", rounds);

    console.log({ userCount });

    if (userCount === 0) {
      await client.query(
        "INSERT INTO users (name, email, password, role, address) VALUES ($1,$2,$3,$4,$5) ",
        ["John Andre", "johnAdmin@gmail.com", hash, "ADMIN", "Storfjord"]
      );
    } else console.log("Admin already seeded");
  } catch (err) {
    console.error(`Error while seeding admin: ${err}`);
  }
};
