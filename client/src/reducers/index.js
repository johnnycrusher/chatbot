import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SendMessageReducer from "./SendMessageReducer";
import GetMessageReducer from "./GetMessageReducer";

const rootReducer = combineReducers({
	form: formReducer,
	SendMessage: SendMessageReducer,
	GetMessage: GetMessageReducer
});

export default rootReducer;
