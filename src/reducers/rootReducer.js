import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
    ch: characterReducer,
    ui: uiReducer,
})