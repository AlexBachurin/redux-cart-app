import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //clear cart
        clearCart: (state) => {
            state.cartItems = [];
        },
        //remove single item, destructure payload right away
        removeItem: (state, { payload }) => {
            console.log(payload)
            const filtered = state.cartItems.filter(item => item.id !== payload);
            state.cartItems = [...filtered];
        },
        //increase
        increaseAmount: (state, { payload }) => {
            const filtered = state.cartItems.filter(item => {
                if (item.id === payload) {
                    if (item.amount >= 10) {
                        return item;
                    } else {
                        return item.amount = item.amount + 1;
                    }

                }
                return item;
            })
            state.cartItems = [...filtered]
        },
        //decrease
        decreaseAmount: (state, { payload }) => {
            const filtered = state.cartItems.filter(item => {
                if (item.id === payload) {
                    if (item.amount === 1) {
                        return item;
                    } else {
                        return item.amount = item.amount - 1;
                    }
                }
                return item;
            })
            state.cartItems = [...filtered]
        }
    }
})

export const { clearCart, removeItem, increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;