import { combineReducers } from "redux";
import authReducer from "./auth";
import todoReducer from "./todoReducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  firestore: firestoreReducer
});

// We call the combine function. This add my other reducers here, as well as expanding my app
export default rootReducer;
