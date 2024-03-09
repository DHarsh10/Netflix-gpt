import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        moviesTrailer: null
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
          state.nowPlayingMovies = action.payload;
          return state;
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
            return state;
        },

        addMovieTrailer: (state, action) => {
          state.moviesTrailer = action.payload
          return state;
        }
      },
});;




export const { addNowPlayingMovies, addPopularMovies, addMovieTrailer } = movieSlice.actions;
export default movieSlice.reducer;