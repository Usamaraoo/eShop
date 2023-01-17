import { createSlice } from '@reduxjs/toolkit'

// initial state of the slice
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.total = 0
            state.amount = 0
        },
        addItemToCart:(state,{payload})=>{
            console.log(payload)
            state.total +=1
        }
    }
})

export const { clearCart,addItemToCart } = cartSlice.actions

export default cartSlice.reducer
