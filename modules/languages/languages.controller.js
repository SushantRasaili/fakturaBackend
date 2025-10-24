import { asyncHandler } from "../../middlewares/asyncHandler.middleware.js";
import * as languageService from "./languages.services.js";

export const getLanguageByCode = asyncHandler(async (req, res) => {
  console.log("Getting languages");
  const language = await languageService.getLanguageByCode(req.params.code);

  return res.status(200).json({
    success: true,
    data: language,
  });
});
