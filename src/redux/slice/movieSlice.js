import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    movie: {},
  },
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies(state, action) {
      state.movieList = action.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const { getMovies, setMovies } = movieSlice.actions;
