import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import covidReducer from './covid/covidSlice';

const store = configureStore({
  reducer: { covid: covidReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
