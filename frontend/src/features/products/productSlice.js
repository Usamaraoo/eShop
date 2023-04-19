import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
    products: [],
    categories:[],
    allProducts: [],
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
                `/api/products`
            )
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

export const getCategories = createAsyncThunk(
    'products/getCategories',
    async (param1, thunkAPI) => {
        try {
            const res = await axios(
                `/api/categories`
            )
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

export const addProduct = createAsyncThunk(
'/products/add', async (product,thunkAPI)=>{
    try {
         const res = await axios.post(
            `/api/products`,
            { ...product })
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
            if (payload === 'all') {
                state.products = state.allProducts
            } else {
                state.products = state.allProducts.filter((product) =>
                    product.category.includes(payload)
                )
            }
        },
    },
    extraReducers: {
        // Get products
        [getProducts.pending]: (state) => {
            state.isLoading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload
            state.allProducts = action.payload
        },
        [getProducts.rejected]: (state, action) => {
            state.isLoading = true
            // getting error on fail
            console.log(action.payload)
        },
        // Add 
        [addProduct.pending]:(state)=>{
            state.isLoading= true
        },
        [addProduct.fulfilled]:(state)=>{
            // do something on fulfilled
            state.isLoading = false
            alert('Product added')
        },
        [addProduct.rejected]:(state)=>{
            state.isLoading = false
            
        },
        //  Get Categories
        [getCategories.pending]:(state)=>{
            state.isLoading= true
        },
        [getCategories.fulfilled]:(state,action)=>{
            // do something on fulfilled
            state.isLoading = false
            state.categories = action.payload
        },
        [getCategories.rejected]:(state)=>{
            state.isLoading = false
        }
    },
})

export const { filterByCategories } = productSlice.actions

export default productSlice.reducer
