const express = require("express");
const login = express.Router();
const bcrypt = require("bcrypt");
const UsersModel = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

login.post("/login", async (request, response, next) => {
  try {
    const user = await UsersModel.findOne({ email: request.body.email });
    if (!user) {
      return response.status(404).send({
        statusCode: 404,
        message: "User not found with the given email",
      });
    }
    const isPasswordValid = await bcrypt.compare(
      request.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return response
        .status(401)
        .send({ statusCode: 401, message: "Email or password not valid!" });
    }
    const token = jwt.sign(
      { email: user.email, password: user.password },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    response
      .header("authorization", token)
      .status(200)
      .send({ statusCode: 200, message: "Login successfully", token });
  } catch (error) {
    next(error);
  }
});

module.exports = login;
