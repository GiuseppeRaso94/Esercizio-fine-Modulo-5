const bcrypt = require("bcrypt");

users.post("/users/create", async (request, response, next) => {
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = bcrypt.hash(request.body.password,salt);
  //   const newUser = new UserModel({ ...request.body, password: hashedPassword });
  //   try {
  //     const userToSave = await newUser.save();
  //     response
  //       .status(201)
  //       .send({ statusCode: 201, message: "User saved succesfully", userToSave });
  //   } catch (e) {
  //     next(e);
  //   }
});
