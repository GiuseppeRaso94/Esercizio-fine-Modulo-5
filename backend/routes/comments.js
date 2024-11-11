const express = require("express");
const CommentsModel = require("../models/CommentsModel");
const comments = express.Router();

comments.get("/comments", async (request, response) => {
  try {
    const comments = await CommentsModel.find();
    if (comments.length === 0) {
      return response.status(404).send({ message: "No comments found" });
    }
    response.status(200).send({ statusCode: 200, comments });
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

comments.get("/comments/:id", async (request, response) => {
  try {
    const comment = await CommentsModel.findById(request.params.id);
    if (!comment) {
      return response.status(404).send({ message: "No comments found" });
    }
    response.status(200).send({ statusCode: 200, comment });
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

comments.post("/comments/create", async (request, response) => {
  const newComment = new CommentsModel({
    comment: request.body.comment,
    rate: Number(request.body.rate),
    commentAuthor: request.body.commentAuthor,
  });
  try {
    const savedComment = await newComment.save();
    response.status(201).send({
      statusCode: 201,
      message: "Comment saved successfully",
      savedComment,
    });
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

comments.patch("/comments/update/:id", async (request, response) => {
  const { id } = request.params;
  const commentExist = await CommentsModel.findById(id);
  if (!commentExist) {
    return response.status(404).send({
      statusCode: 404,
      message: "No comments found with the given id",
    });
  }
  try {
    const updatedCommentData = request.body;
    const options = { new: true };
    const result = await CommentsModel.findByIdAndUpdate(
      id,
      updatedCommentData,
      options
    );
    response.status(200).send({
      statusCode: 200,
      message: "Comment updated successfully",
      result,
    });
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

comments.delete("/comments/delete/:commentId", async (request, response) => {
  const { commentId } = request.params;
  const deletedComment = await CommentsModel.findByIdAndDelete(commentId);
  if (!deletedComment) {
    return response.status(404).send({
      statusCode: 404,
      message: "No comments found with the given id",
    });
  }
  try {
    response.status(200).send({
      statusCode: 200,
      message: "Comment with the given id successfully deleted",
      deletedComment,
    });
  } catch {
    response.status(500).send({ message: e.message });
  }
});

module.exports = comments;