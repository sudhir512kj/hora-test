import express from "express";

import * as usersController from "../controllers/users.server.controller";

const router = express.Router();

router
  .route("/")
  .post(usersController.userSignup)
  .get(usersController.getProfile)
  .get(usersController.userLogout);

export default router;
