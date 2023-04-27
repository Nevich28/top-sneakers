import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadOrders = createAsyncThunk(
    '@@orders/load-orders',
    (_, {
        extra: {client, api}
    }) => {
        return client.get(api.ALL_ORDERS)
    }
);

const initialState = {
    status: 'idle',
    error: '',
    ordersList: [],
};

const ordersSlice = createSlice({
    name: '@@orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadOrders.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadOrders.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error;
            })
            .addCase(loadOrders.fulfilled, (state, action) => {
                state.status = 'idle';
                state.ordersList = action.payload.data;
            })
    }
});

export const ordersReducer = ordersSlice.reducer;

//selectors

export const selectAllOrders = (state) => state.orders.ordersList;
export const selectStatusLoading = (state) => state.orders.status;