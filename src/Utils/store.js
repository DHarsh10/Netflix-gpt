import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Utils/userSlice';

const store = configureStore({
    reducer: {
        userSlice: userSlice
    }
})

export default store;