import { configureStore } from "@reduxjs/toolkit";
import filterReducer from '../components/filterSlice';

export default configureStore({
  reducer: {
    filters: filterReducer
  }
});