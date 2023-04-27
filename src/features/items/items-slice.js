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
    isAddItems: [],
    isFavorite: [],
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
        },
        addFavorite: (state, action) => {
            state.isFavorite.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.isFavorite = state.isFavorite.filter((item) => item !== action.payload)
        },
        clearAdd: (state) => {state.isAddItems=[]},
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
                state.status = 'idle';
                state.list = action.payload.data;
            })
    }
});

export const itemReducer = itemSlice.reducer;
export const {addItems, removeItems, addFavorite, removeFavorite, clearAdd} = itemSlice.actions;
//selectors
export const selectAllItems = (state) => state.items.list;
export const selectAllAddItems = (state) => state.items.isAddItems;
export const selectAllFavoriteItems = (state) => state.items.isFavorite;
export const selectStatus = (state) => state.items.status;

export const selectFilteredItems = (state, {search=''}) => {
    return state.items.list.filter(item => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))
}

export const selectFavoriteItems = (state) => {
    return state.items.list.filter(item => (
        state.items.isFavorite.indexOf(item.id) !== -1
    ))
}
