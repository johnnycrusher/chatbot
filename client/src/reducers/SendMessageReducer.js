import { SEND_MESSAGE } from "../action/index";

export default function(state = {}, action) {
	switch (action.type) {
		case SEND_MESSAGE:
			return action.payload;
		default:
			return state;
	}
}
