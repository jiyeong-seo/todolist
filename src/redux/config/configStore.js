import { createStore } from "redux";
import { combineReducers } from "redux";

// module을 store에 연결
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter: counter,
});
const store = createStore(rootReducer);

export default store;
