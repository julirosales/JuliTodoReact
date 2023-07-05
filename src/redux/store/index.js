import { createStore, combineReducers } from "redux";
import { toDosReducer } from "../reducers";

const rootReducers = combineReducers({
  toDos: toDosReducer,
});
const store = createStore(rootReducers, {});

/* console.log("hola", store.getState()); */
export { store };
