import { legacy_createStore } from "redux";
import { userReducer } from "./reducer";

export const store = legacy_createStore(userReducer);