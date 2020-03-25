import { combineReducers } from "redux";
import authReducer from "./auth";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer
});

// We call the combine function. This add my other reducers here, as well as expanding my app
export default rootReducer;
