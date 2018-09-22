const express = require("express");
const messages = require("./routes/messages");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", messages);
// app.use("users", users);

app.listen("5000", () => console.log("Server started on port 5000"));
