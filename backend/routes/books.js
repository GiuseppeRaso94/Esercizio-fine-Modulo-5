const express = require("express");
const BooksModel = require("../models/BooksModel");
const books = express.Router();

books.get("/books", async (request, response) => {
  const { page, pageSize = 7 } = request.query;
  try {
    const books = await BooksModel.find()
      .sort({ title: 1 })
      .limit(pageSize)
      .skip((page - 1) * pageSize)
      .populate("comments");

    const totalBooks = await BooksModel.countDocuments();
    const totalPages = Math.ceil(totalBooks / pageSize);

    if (books.length === 0) {
      return response.status(404).send({ message: "No books found" });
    }
    response.status(200).send({
      statusCode: 200,
      totalPages: totalPages,
      count: totalBooks,
      books,
    });
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
