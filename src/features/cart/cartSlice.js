import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from 'axios'
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {

    }
})

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
            state.cartItems.filter(item => {
                if (item.id === payload) {
                    if (item.amount >= 10) {
                        return item;
                    } else {
                        return item.amount = item.amount + 1;
                    }

                }
                return item;
            })

        },
        //decrease
        decreaseAmount: (state, { payload }) => {
            state.cartItems.filter(item => {
                if (item.id === payload) {
                    if (item.amount === 1) {
                        return item;
                    } else {
                        return item.amount = item.amount - 1;
                    }
                }
                return item;
            })
        },
        //calculate totals
        calculateTotals: (state => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                //get amount of each item in every iteration and multiply it by price
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.total = total.toFixed(2);
            state.amount = amount;
        })
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action)
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export const { clearCart, removeItem, increaseAmount, decreaseAmount, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;