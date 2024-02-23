import { configureStore } from "@reduxjs/toolkit";
import slice from '../Utils/userSlice';

const store = configureStore({
    reducer: {
        a: slice
    }
})

export default store;