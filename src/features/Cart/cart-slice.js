import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postOrder = createAsyncThunk(
    '@@cart/post-order',
    (body, {
        extra: {client, api}
    }) => {
        return client.post(api.ALL_ORDERS, body)
    }
);

const initialState = {
    statusLoadOrder: 'idle',
    error: null,
    cartItems: [],
    totalCount: 0,
    lastOrderNumber: 0,
};

const cartSlice = createSlice({
    name: '@@cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.totalCount = (Number(state.totalCount) + Number(action.payload.price)).toFixed(2);
            console.log('add', state.totalCount);
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.totalCount = (Number(state.totalCount) - Number(action.payload.price)).toFixed(2);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postOrder.pending, (state) => {
                state.statusLoadOrder = 'loading';
                state.error = null;
            })
            .addCase(postOrder.rejected, (state, action) => {
                state.statusLoadOrder = 'rejected';
                state.error = action.payload || action.meta.error;
            })
            .addCase(postOrder.fulfilled, (state, action) => {
                state.statusLoadOrder = 'idle';
                state.totalCount = 0;
                state.cartItems = [];
                state.lastOrderNumber = action.payload.data.id;
            })
    }
});

export const cartReducer = cartSlice.reducer;
export const {addItemToCart, removeItemFromCart} = cartSlice.actions;

//selectors

export const selectAllCartItems = (state) => state.cart.cartItems;

export const selectTotalCount = (state) => state.cart.totalCount;
export const selectLastOrderNumber = (state) => state.cart.lastOrderNumber;
export const selectStatusLoading = (state) => state.cart.statusLoadOrder;