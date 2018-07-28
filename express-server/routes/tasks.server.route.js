import express from "express";

import * as tasksController from "../controllers/tasks.server.controller";

const router = express.Router();

router
  .route("/")
  .get(tasksController.getTasks)
  .post(tasksController.addTask)
  .put(tasksController.updateTask);

router
  .route("/:id")
  .get(tasksController.getTask)
  .delete(tasksController.deleteTask);

export default router;
