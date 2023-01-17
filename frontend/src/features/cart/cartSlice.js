import { createSlice } from '@reduxjs/toolkit'

// initial state of the slice
const initialState = {
    cartItems: [],
    amount: 3,
    total: 3,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.total = 0
            state.amount = 0
        }
    }
})

export const { clearCart } = cartSlice.actions

export default cartSlice.reducer
