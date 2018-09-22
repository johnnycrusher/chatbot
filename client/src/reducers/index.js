import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SendMessageReducer from "./SendMessageReducer";

const rootReducer = combineReducers({
	form: formReducer,
	SendMessage: SendMessageReducer
});

export default rootReducer;
