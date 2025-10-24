import { asyncHandler } from "../../middlewares/asyncHandler.middleware.js";
import * as productService from "./products.services.js";

export const getProducts = asyncHandler(async (_req, res) => {
  console.log("Getting products");
  const products = await productService.getProducts();

  return res.status(200).json({
    success: true,
    data: products,
  });
});
