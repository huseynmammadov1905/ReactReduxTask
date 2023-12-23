import { configureStore } from "@reduxjs/toolkit";
import goodReducer from "../features/goodsSlice"

export const store = configureStore({
    reducer:{
        goodReducer
    }
})