import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import categorySlice from "./feater/categorySlice";
import authenSlice from "./feater/authenSlice";

const reducer = combineReducers({
    categorySlice,
    authenSlice,
});
const store = configureStore({
    reducer,
});
export default store;