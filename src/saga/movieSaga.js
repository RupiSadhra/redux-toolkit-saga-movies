import { takeEvery, put, call, fork } from "redux-saga/effects";
import { getMovies, setMovies } from "../redux/slice/movieSlice";
import { fetchMovies } from "./api";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies(response.data));
    }
  } catch (err) {
    console.log(err);
  }
}

function* onLoadMovies() {
  yield takeEvery(getMovies, onLoadMoviesAsync);
}

export const movieSagas = [fork(onLoadMovies)];
