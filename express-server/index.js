import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import SourceMapSupport from "source-map-support";
import bb from "express-busboy";

import tasksRoutes from "./routes/tasks.server.route";
import usersRoutes from "./routes/users.server.route";

const app = express();

bb.extend(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(passport.initialize());
// require("./config/passport");

const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/hora-test",
  {
    useMongoClient: true
  }
);

SourceMapSupport.install();

app.use("/api", tasksRoutes);
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  return res.end("Api working");
});

app.use((req, res, next) => {
  res.status(404).send("<h2 align=center>Page not found!!</h2>");
});

app.listen(port, () => {
  console.log(`App Server Listening on ${port}`);
});
