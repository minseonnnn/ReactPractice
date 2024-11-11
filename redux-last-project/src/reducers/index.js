import {combineReducers} from "redux";

import foodReducer from "./foodReducer";
import seoulReducer from "./seoulReducer";
import newsReducer from "./newsReducer";
import commentReducer from "./commentReducer";
import boardReducer from "./boardReducer";
export default combineReducers({
    foods:foodReducer,
    seouls:seoulReducer,
    news:newsReducer,
    comments:commentReducer,
    boards:boardReducer
})