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
    isAddItems: []
};

const itemSlice = createSlice({
    name: '@@items',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.isAddItems.push(action.payload);
        },
        removeItems: (state, action) => {
            state.isAddItems = state.isAddItems.filter((item) => item !== action.payload)
        }
    },
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
export const {addItems, removeItems} = itemSlice.actions;
//selectors

export const selectAllItems = (state) => state.items.list;
export const selectAllAddItems = (state) => state.items.isAddItems;
export const selectFilteredItems = (state, {search=''}) => {
    return state.items.list.filter(item => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))
}
// export const selectVisibleCountries = (state, {search = '', region = ''}) => {
//     return state.countries.list.filter(country => (
//         country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
//     ))
// }