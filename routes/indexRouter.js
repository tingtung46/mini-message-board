const { Router } = require("express");
const indexRouter = Router();
const usersController = require("../controller/usersController");

indexRouter.get("/", usersController.userListGet);

indexRouter.get("/new", usersController.createMsgGet);
indexRouter.post("/new", usersController.createMsgPost);

indexRouter.get("/message/:id", usersController.showMsg);

module.exports = indexRouter;
