import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList: [],
        movie: {}
    },
    reducers: {
        
    }
});

export { movieReducer } from movieSlice.reducer;