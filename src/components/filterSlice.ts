import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeFilters: [],
  selectionFilters: [],
  donationFilters: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateHomeFilters: (state, action) => {
      state.homeFilters = action.payload;
    },
    updateSelectionFilters: (state, action) => {
      state.selectionFilters = action.payload;
    },
    updateDonationFilters: (state, action) => {
      state.donationFilters = action.payload;
    }
  }
});

export const { updateHomeFilters, updateSelectionFilters, updateDonationFilters } = filterSlice.actions;

export const selectHomeFilters = state => state.filters.homeFilters;
export const selectSelectionFilters = state => state.filters.selectionFilters;
export const selectDonationFilters = state => state.filters.donationFilters;

export default filterSlice.reducer;