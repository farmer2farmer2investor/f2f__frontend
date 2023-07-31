import { combineReducers } from "redux";

import authReducer from "./AuthReducer.js";
import postReducer from "./PostReducer.js";
import userReducer from "./UserReducer.js"

export const reducers = combineReducers({ authReducer, postReducer, userReducer });