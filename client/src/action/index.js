import axios from "axios";

export const SEND_MESSAGE = "SEND_MESSAGE";
export const GET_MESSAGE = "GET_MESSAGE";

export function sendMessage(message) {
	let request = axios.post("/messages", message);

	return {
		type: SEND_MESSAGE,
		payload: request
	};
}
export function getMessage() {
	let request = axios.get("/messages");
	return {
		type: GET_MESSAGE,
		payload: request
	};
}
