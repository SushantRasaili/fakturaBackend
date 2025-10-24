import { asyncHandler } from "../../middlewares/asyncHandler.middleware.js";
import * as authService from "./auth.services.js";

export const login = asyncHandler(async (req, res) => {
  const { body } = req;

  const { user, accessToken } = await authService.login(body);

  return res.status(200).json({
    success: true,
    data: {
      user,
      accessToken,
    },
  });
});
