import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import categorySlice from "./feater/categorySlice";
import authenSlice from "./feater/authenSlice";
import productSlice from "./feater/productSlice";
import cartsSlice from "./feater/cartsSlice";

const reducer = combineReducers({
    categorySlice,
    authenSlice,
    productSlice,
    cartsSlice,
});
const store = configureStore({
    reducer,
});
export default store;