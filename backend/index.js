const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const booksRoute = require("./routes/books");
const commentsRoute = require("./routes/comments");

const PORT = process.env.DB_PORT;
const server = express();
server.use(express.json());
server.use(cors());
server.use("/", booksRoute);
server.use("/", commentsRoute);
server.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Db Connection Error"));
db.once("open", () => console.log("Db connected successfully"));
