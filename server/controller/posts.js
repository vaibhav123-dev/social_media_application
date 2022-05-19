import PostMessage from "../models/postMessages.js";
import mongoose from "mongoose";
import express from "express";
import pkg from "mongoose";
const { ObjectId } = pkg;

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).send(postMessage);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  console.log("body", req.body);
  try {
    const newPost = await PostMessage.create(req.body);
    res.status(201).send(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.patch("/", async (req, res) => {
  const { title, message, creator, selectedFile, tags, _id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${_id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: _id };

  await PostMessage.findByIdAndUpdate(_id, updatedPost, { new: true });

  res.json(updatedPost);
});

router.delete("/:id", async (req, res) => {
  const { _id } = { _id: req.params.id };
  const id = _id.trim();

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id:${_id}`);

  const post = await PostMessage.findByIdAndDelete(id);

  res.json({ message: "Post deleted successfully." });
});
export default router;
