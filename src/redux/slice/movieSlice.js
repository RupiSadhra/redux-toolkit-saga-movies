import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    movie: "",
    requestFail: false,
    requestFailMessage: "",
  },
  reducers: {
    getMovies(state, action) {
      state.movie = action.payload;
    },
    setMovies(state, action) {
      state.requestFail = false;
      state.movieList = action.payload;
    },
    setError(state, action) {
      state.requestFail = true;
      state.requestFailMessage = action.payload;
    },
  },
});

export const movieReducer = movieSlice.reducer;
export const { getMovies, setMovies, setError } = movieSlice.actions;
