import { ErrorResponse } from "../../utils";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const login = async (body) => {
  const { username } = body;
  const userpassword = body.password;

  const users = await pgClient.query(`SELECT * FROM users WHERE username=$1`, [
    username,
  ]);

  console.log({ users });

  const user = result.rows[0];

  if (!user) throw new ErrorResponse(["User not found"], 400);

  const verified = await bcrypt.compare(userpassword, user.password);

  if (!verified) throw new ErrorResponse(["Invalid credentials"], 400);

  const accessToken = jwt.sign({ id: _id, user }, process.env.JWT_KEY, {
    expiresIn: "1d",
  });

  return { accessToken, user };
};

module.exports = { login };
