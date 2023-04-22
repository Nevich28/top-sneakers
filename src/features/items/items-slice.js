import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadItems = createAsyncThunk(
    '@@items/load-items',
    (_, {
        extra: {client, api}
    }) => {
        return client.get(api.ALL_ITEMS)
    }
);

const initialState = {
    status: 'idle',
    error: '',
    list: [],
};

const itemSlice = createSlice({
    name: '@@items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadItems.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadItems.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error;
            })
            .addCase(loadItems.fulfilled, (state, action) => {
                state.status = 'received';
                state.list = action.payload.data;
            })
    }
});

export const itemReducer = itemSlice.reducer;

//selectors

export const selectAllItems = (state) => state.items.list;