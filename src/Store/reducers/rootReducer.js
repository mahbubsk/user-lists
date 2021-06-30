import { combineReducers } from "redux";
import demoReducer         from "./demoReducer";
import userReducer         from "./userReducer";
import commentReducer      from "./commentReducer";
import productReducer       from "./productReducer";

const rootReducer = combineReducers({
    demo:demoReducer,
    user:userReducer,
    comment:commentReducer,
    product:productReducer
})

export default rootReducer;