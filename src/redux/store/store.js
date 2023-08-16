import { configureStore } from "@reduxjs/toolkit";
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
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import sliceLogin from "../slices/auth/login";
import sliceCommon from "../slices/common";
const persistConfig = {
    key: 'root', storage,
}
export const rootReducers = combineReducers({

    login: sliceLogin,
    commonData: sliceCommon
});
const persistedReducer = persistReducer(persistConfig, rootReducers)
export default configureStore({
    reducer: persistedReducer, devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
}) 