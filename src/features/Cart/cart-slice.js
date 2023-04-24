import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalCount: 0
};

const cartSlice = createSlice({
    name: '@@cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.totalCount = Number(state.totalCount) + Number(action.payload.price);
            console.log('add', state.totalCount);
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.totalCount = Number(state.totalCount) - Number(action.payload.price);
            console.log('del', state.totalCount);
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {addItemToCart, removeItemFromCart} = cartSlice.actions;

//selectors

export const selectAllCartItems = (state) => state.cart.cartItems;

export const selectTotalCount = (state) => state.cart.totalCount;