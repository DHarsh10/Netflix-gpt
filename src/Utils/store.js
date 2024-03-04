import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Utils/userSlice';
import movieSlice from '../Utils/moviesSlice';

const store = configureStore({
    reducer: {
        userSlice: userSlice,
        movieSlice: movieSlice
    }
})

export default store;