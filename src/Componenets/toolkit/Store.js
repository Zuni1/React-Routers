import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from './Reducer'

import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};
  
const persistedReducer = persistReducer(persistConfig, userDetailsReducer)
  
export const store = configureStore({
    reducer: {user: persistedReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
  
export const persistor = persistStore(store)
  