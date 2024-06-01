import { combineReducers, createStore } from "redux";
import { puerTeaReducer } from "./puerTea-reducer";

const rootReducer = combineReducers({
  puer: puerTeaReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
