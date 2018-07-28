import mongoose from "mongoose";

var Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  taskName: String,
  taskDesc: String,
  status: { type: String, default: "not completed" },
  category: { type: String, default: "None" },
  rating: Number
});

export default mongoose.model("Tasks", Schema);
