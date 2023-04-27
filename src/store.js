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
import { cartReducer } from "./features/Cart/cart-slice";
import { searchReducer } from "./features/search/search-slice";
import { ordersReducer } from "./features/orders/order-slice";

import * as api from './config';

const rootReducer = combineReducers({
    items: itemReducer, 
    cart: cartReducer,
    search: searchReducer,
    orders: ordersReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['orders']
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