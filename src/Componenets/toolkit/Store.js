import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from './Reducer'

const store = configureStore({
    reducer: {
        user: userDetailsReducer
    }
})

export default store

store.subscribe(() => {console.log(store.getState())})