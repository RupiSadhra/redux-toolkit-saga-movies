import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList: [],
        movie: {}
    },
    reducers: {
        setMovies (state, action) {
            state.movieList = action.payload;
        }
    }
});

export const movieReducer = movieSlice.reducer;
export const { setMovies } = movieSlice.actions;