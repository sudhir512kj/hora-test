import mongoose from "mongoose";

var Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConf: {
    type: String,
    required: true
  }
});

export default mongoose.model("Users", Schema);
