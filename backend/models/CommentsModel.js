const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    rate: { type: Number, required: true },
    commentAuthor: { type: String, required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "booksModel" },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("commentsModel", CommentSchema, "comments");
