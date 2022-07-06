import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';

const reducer = configureStore({
    reducer: {covid: covidReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default reducer;