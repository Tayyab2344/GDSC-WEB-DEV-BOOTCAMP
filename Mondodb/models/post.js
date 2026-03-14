import mongoose from "mongoose";

const postSchme = new mongoose.Schema({
  tittle: String,
  content: String,
  author: String,
});

const post = mongoose.model("post", postSchme);

export default post;
