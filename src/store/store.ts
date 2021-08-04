import { configureStore } from "@reduxjs/toolkit";
import filterReducer from '../components/filterSlice';
import chopeReducer from '../components/chopeSlice';

export default configureStore({
  reducer: {
    filters: filterReducer,
    chope: chopeReducer,
  }
});