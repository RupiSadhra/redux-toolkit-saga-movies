import { takeEvery, put, call, fork } from "redux-saga/effects";
import { getMovies, setMovies, setError } from "../redux/slice/movieSlice";
import { fetchMovies } from "./api";

function* onLoadMoviesAsync(action) {
  try {
    const movieName = action.payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies(response.data));
    }
    if (response.data.Response === "False") {
      yield put(setError("Failed to fetch movies"));
    }
  } catch (err) {
    console.log(err);
    yield put(setError());
  }
}

function* onLoadMovies() {
  yield takeEvery(getMovies, onLoadMoviesAsync);
}

export const movieSagas = [fork(onLoadMovies)];
