const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const PostSchema = new mongoose.Schema({
  message: String,
  likes: { type: Number, default: 0 },
  createdAt: {type: Date, default: Date.now},
  comments: [CommentSchema], // Embed comments as a subdocument
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
