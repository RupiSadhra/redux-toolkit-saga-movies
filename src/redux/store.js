import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { movieReducer } from "./slice/movieSlice";
import rootSaga from "../saga/rootSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
