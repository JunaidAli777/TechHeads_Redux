import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const itemExists = state.find(item => item.id === product.id)
            if (itemExists) {
                itemExists.quantity += 1
            } else {
                state.push({ ...product, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            return state.filter(item => item.id !== id)
        },
        handleQtyChange: (state, action) => {
            const { id, newQty } = action.payload;
            if (newQty <= 0) {
                return state.filter(item => item.id !== id)
            } else {
                const item = state.find(item => item.id === id)
                item.quantity = newQty
            }
        },
        emptyCart: () => {
            return []
        }
    }
})

export const { addToCart, removeFromCart, handleQtyChange, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;