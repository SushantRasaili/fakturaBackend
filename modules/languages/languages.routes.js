import express from "express";
import * as languageController from "./languages.controller.js";

const languageRouter = express.Router();

languageRouter.get("/:code", languageController.getLanguageByCode);

export default languageRouter;
