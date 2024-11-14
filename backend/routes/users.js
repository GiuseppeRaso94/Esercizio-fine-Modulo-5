const express = require("express");
const UsersModel = require("../models/UsersModel");
const users = express.Router();

users.post("/users/create", async (request, response, next) => {
  const newUser = new UsersModel(request.body);
  try {
    const userToSave = await newUser.save();
    response
      .status(201)
      .send({ statusCode: 201, message: "User saved succesfully", userToSave });
  } catch (e) {
    next(e);
  }
});

module.exports = users;
