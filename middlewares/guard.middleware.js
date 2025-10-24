import ErrorResponse from "../utils/index.js";
import jwt from "jsonwebtoken";

const guard = () => {
  return async (req, _res, next) => {
    let accessToken;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Set accessToken from Bearer accessToken
      accessToken = req.headers.authorization.split(" ")[1];
    }

    // Make sure accessToken exists
    if (!accessToken) {
      return next(new ErrorResponse(["Not Authorized"], 401));
    }

    // Verify token

    jwt.verify(accessToken, process.env.JWT_KEY, (err, payload) => {
      if (err) {
        throw new ErrorResponse(["Invalid token"], 403);
      }

      req.id = payload.id;
      next();
    });
  };
};

export default guard;
