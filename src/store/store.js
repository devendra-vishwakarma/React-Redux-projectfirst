import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./cartSlice"
import ProductSlice from "./ProductSlice";
const store = configureStore({
    reducer:{
        cart:cartReduce,
        product:ProductSlice
    }
})
export default store;