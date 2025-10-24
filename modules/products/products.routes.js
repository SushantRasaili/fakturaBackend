import express from "express";
import * as productController from "./products.controller.js";
import guard from "../../middlewares/guard.middleware.js";

const productRouter = express.Router();

productRouter.get("/", guard(), productController.getProducts);

export default productRouter;
