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

export const updateProduct = asyncHandler(async (req, res) => {
  console.log("Updating product");
  await productService.updateProduct(req.body, req.params.productId);

  return res.status(200).json({
    success: true,
  });
});
