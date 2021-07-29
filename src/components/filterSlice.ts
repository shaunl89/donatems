import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: []
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    update: (state, action) => {
      state.filters = action.payload;
    }
  }
});

export const { update } = filterSlice.actions;

export const selectFilters = state => state.filters.filters;

export default filterSlice.reducer;