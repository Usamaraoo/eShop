import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'

// initial state of the slice
const initialState =localStorage.getItem("localCart") === null ? {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}:JSON.parse(localStorage.getItem("localCart") )

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.total = 0
            state.amount = 0
            state.cartItems = []
        },
        addItemToCart: (state, { payload }) => {
            let add = true
            // checking if item aleady exists in the cart
            state.cartItems.forEach((item) => {
                // if exits than just update the quantity
                if (item.title === payload.title) {
                    add = false
                    // user cannot add more than five items
                    if (item.quantity + 1 <= 5) {
                        item.quantity += 1
                        item.price += payload.price
                        state.total += 1
                        state.amount += payload.price
                    }
                }
            })
            //  new item adding to state
            if (add) {
                state.cartItems.push({
                    ...payload,
                    quantity: 1,
                    actualPrice: payload.price,
                })
                state.total += 1
                state.amount += payload.price
            }
            localStorage.setItem('localCart', JSON.stringify(state));
        },
        updateItemQuantity: (state, actions) => {
            const { quantity, title } = actions.payload
            state.cartItems.forEach((item) => {
                if (item.title === title) {
                    // checking quantity should not be 0 and more than 5
                    if (item.quantity + quantity >= 1 && item.quantity + quantity <= 5) {
                        item.quantity = item.quantity + quantity
                        item.price += item.actualPrice * quantity
                        state.amount += item.actualPrice * quantity
                        state.total += quantity
                    }
                }
            })
            localStorage.setItem('localCart', JSON.stringify(state));

        },
        removeItem: (state, { payload }) => {
            const { slug, price, quantity } = payload
            state.cartItems = state.cartItems.filter((item) => item.slug !== slug)
            state.amount -= price
            state.total -= quantity
            localStorage.setItem('localCart', JSON.stringify(state));
        
        },
    },
})

export const { clearCart, addItemToCart, updateItemQuantity, removeItem } =
    cartSlice.actions

export default cartSlice.reducer
