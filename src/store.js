import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import {persistStore,
    persistReducer,
    FLUSH, 
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import { itemReducer } from "./features/items/items-slice";

import * as api from './config';

const rootReducer = combineReducers({
    items: itemReducer,
    // controls: controlsReducer,
    // countries: countryReducer,
    // details: detailsReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['items']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [
              FLUSH,
              REHYDRATE,
              PAUSE,
              PERSIST,
              PURGE,
              REGISTER,
            ]
          },
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        // serializableCheck: false,
    })
})

export const persistor = persistStore(store);