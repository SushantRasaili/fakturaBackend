import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ErrorResponse from "../../utils/index.js";
import { pgClient } from "../../loaders/pgsqlConnection.js";

export const login = async (body) => {
  const { email } = body;
  const userpassword = body.password;

  const client = await pgClient();

  const users = await client.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);

  const user = users.rows[0];

  if (!user) throw new ErrorResponse(["User not found"], 400);

  const verified = await bcrypt.compare(userpassword, user.password);

  if (!verified) throw new ErrorResponse(["Invalid credentials"], 400);

  const accessToken = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
    expiresIn: "1d",
  });

  const { password, ...userRes } = user;

  return { accessToken, user: userRes };
};
