const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    rate: { type: Number, required: true },
    commentAuthor: { type: String, required: true },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("commentsModel", CommentSchema, "comments");
