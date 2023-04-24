import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
};

const searchSlice = createSlice({
    name: '@@search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        clearSearch: () => initialState
    }
});

export const searchReducer = searchSlice.reducer;
export const {setSearch, clearSearch} = searchSlice.actions;

//select
export const selectSearch = (state) => state.search.search;