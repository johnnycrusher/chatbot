const express = require("express");
const messages = require("./routes/messages");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", messages);

process.env.NODE_ENV = "production";
if (process.env.NODE_ENV === "production") {
	//render react on the root directory
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		//Send react build
		res.sendFile(
			path.join(path.resolve(__dirname, "client", "build", "index.html"))
		);
	});
}
// app.use("users", users);

app.listen("5000", () => console.log("Server started on port 5000"));
