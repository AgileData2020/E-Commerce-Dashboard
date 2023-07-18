import { configureStore } from "@reduxjs/toolkit";

import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import sliceLogin from "../slices/auth/login";
;


/** Redux persist **/

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const persistConfig = {
    key: 'root', storage,
}
export const rootReducers = combineReducers({

    login: sliceLogin,

});
const persistedReducer = persistReducer(persistConfig, rootReducers)
export default configureStore({
    reducer: persistedReducer, devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
}) 