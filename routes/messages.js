const express = require("express");
const router = express.Router();

let conversation = [];

router.get("/messages", (req, res) => {
	res.send(conversation);
});

router.post("/messages", (req, res) => {
	let message = {
		ip: req.ip,
		timestamp: new Date(),
		user: req.body.username,
		text: req.body.text
	};
	conversation.push(message);
	res.json(message);
});

module.exports = router;
