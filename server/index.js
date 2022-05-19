import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoute from "./controller/posts.js";
import getController from "./controller/posts.js";
import updateController from "./controller/posts.js";
import deleteController from "./controller/posts.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);
app.use(express.json());

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/posts", userRoute);
app.use("/posts", getController);
app.use("/posts/:id", updateController);
app.use("/posts", deleteController);

const connection = process.env.DB;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err));
