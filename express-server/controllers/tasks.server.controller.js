import mongoose from "mongoose";

import Tasks from "../models/tasks.server.model";

export const getTasks = (req, res) => {
  Tasks.find().exec((err, tasks) => {
    if (err) {
      return res.json({ success: false, message: "Some error" });
    }

    return res.json({
      success: true,
      message: "Tasks fetched successfully",
      tasks
    });
  });
};

export const addTask = (req, res) => {
  const newTask = new Tasks(req.body);
  newTask.save((err, task) => {
    if (err) {
      return res.json({
        success: false,
        message: "Some Error"
      });
    }

    return res.json({
      success: true,
      message: "Task added successfully",
      task
    });
  });
};

export const updateTask = (req, res) => {
  Tasks.findOneAndUpdate(
    { _id: req.body.id },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        return res.json({ success: false, message: "Some Error", error: err });
      }

      console.log(task);
      return res.json({ success: true, message: "Updated successfully", task });
    }
  );
};

export const getTask = (req, res) => {
  Tasks.find({ _id: req.params.id }).exec((err, task) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }
    if (task.length) {
      return res.json({
        success: true,
        message: "Task fetched by id successfully",
        task
      });
    } else {
      return res.json({
        success: false,
        message: "Task with the given id not found"
      });
    }
  });
};

export const deleteTask = (req, res) => {
  Tasks.findByIdAndRemove(req.params.id, (err, task) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }
    return res.json({
      success: true,
      message: task.taskName + " deleted successfully"
    });
  });
};
