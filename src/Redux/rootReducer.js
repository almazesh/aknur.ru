import { combineReducers } from "redux";
import LangsReducer from "./LangRedux/reducer";

export const rootReducer = combineReducers({
    Lang: LangsReducer
})