const router = require("express").Router();

const authController = require("./auth.controller");

const authRouter = router();

authRouter.post("/login", authController.login);

module.exports = authRouter;
