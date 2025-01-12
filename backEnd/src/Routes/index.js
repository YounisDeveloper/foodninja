const express = require("express");
const rootRouter = express.Router();

const users = require("./user_routes/user_route");
rootRouter.use("/", users);
module.exports = rootRouter;
