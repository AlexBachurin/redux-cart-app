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
        }
        //increase
        //decrease
    }
})

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;