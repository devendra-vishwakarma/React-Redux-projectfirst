import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
}

Object.freeze(STATUSES);

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setstatus(state, action) {
            state.status = action.payload;
        }
    }
})

export const { setProducts, setstatus } = productSlice.actions;
export default productSlice.reducer;




//thunks is middleware in react or normal function
// it will retun new funtion that's the flow of a thunk


export function fetchProduct() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setstatus(STATUSES.LOADING));

        
        axios.get("https://fakestoreapi.com/products")
            .then(result => {
                dispatch(setProducts(result.data));
                dispatch(setstatus(STATUSES.IDLE))
            })
            .catch(err => console.log(err))

    }
}