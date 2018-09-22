import axios from "axios";

export const SEND_MESSAGE = "SEND_MESSAGE";

export function sendMessage(message) {
	let request = axios.post("/messages", message);

	return {
		type: SEND_MESSAGE,
		payload: request
	};
}
