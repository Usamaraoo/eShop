import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// initial state
const initialState = {
    products: [],
    isLoading: true,
}
export const getProducts = createAsyncThunk('products/getProducts', () => {
    return fetch(`${process.env.REACT_APP_BackendBaseUrl}/api/products`)
        .then((res) => res.json())
        .catch((err) => console.log(err))
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            console.log(action)
            state.isLoading = false
            state.products = action.payload
        },
        [getProducts.rejected]: (state) => {
            state.isLoading = true
        },
    },
})

export default productSlice.reducer
