import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductStore";

const store = configureStore({ reducer: { productReducer } });

export default store;
