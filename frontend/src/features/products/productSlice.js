import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
    products: [],
    isLoading: true,
}
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (param1, thunkAPI) => {
        try {
            // can also get param from if api need that
            // console.log(param1)
            // can can also access other features in the store
            // console.log(thunkAPI.getState())
            // we can dispatch action from other features too
            // thunkAPI.dispatch()
            const res = await axios(
                `${process.env.REACT_APP_BackendBaseUrl}/api/products`
            )
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterByCategories: (state, { payload }) => {
            state.products = state.products.filter((product) =>
                product.categories.includes(payload)
            )
        },
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = true
            // getting error on fail
            console.log(action.payload)
        },
    },
})

export default productSlice.reducer
