const express = require("express");
const BooksModel = require("../models/BooksModel");
const books = express.Router();

books.get("/books", async (request, response) => {
  try {
    const books = await BooksModel.find().populate("comments");
    if (books.length === 0) {
      return response.status(404).send({ message: "No books found" });
    }
    response.status(200).send({ statusCode: 200, books });
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

books.get("/books/:id", async (request, response) => {
  try {
    const book = await BooksModel.findById(request.params.id).populate(
      "comments"
    );
    if (!book) {
      return response.status(404).send({ message: "No books found" });
    }
    response.status(200).send({ statusCode: 200, book });
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

books.patch("/books/updateModel", async (request, response) => {
  await BooksModel.updateMany(
    {
      comments: { $exists: false },
    },
    { $set: { comments: [] } }
  );
});

module.exports = books;
