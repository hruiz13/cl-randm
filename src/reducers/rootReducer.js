import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";
import { infoReducer } from "./infoReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
    ch: characterReducer,
    ui: uiReducer,
    in: infoReducer
})