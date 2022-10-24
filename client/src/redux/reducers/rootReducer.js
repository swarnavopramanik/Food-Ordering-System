import { combineReducers } from "redux";

// reducers or storage units
import auth from "./auth/auth.reducer";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;