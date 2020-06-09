import {combineReducers} from "redux";
import bookmarkReduser from "./bookmark-reduser";

const rootReducer = combineReducers({
    posts: bookmarkReduser
});

export default rootReducer;
