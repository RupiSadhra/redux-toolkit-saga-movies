import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import movieReducer  from "./slice/movieSlice";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
 
const store = configureStore({
    reducer: {
        movie: movieReducer
    },
    middleware: sagaMiddleware
});

//sagaMiddleware.run(rootSaga);

export default store;