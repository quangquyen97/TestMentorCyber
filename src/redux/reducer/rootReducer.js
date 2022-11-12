import { combineReducers } from "redux";
import { getUserList } from "./getUserListReducer";

export const rootReducer = combineReducers({
    getUserList,
})