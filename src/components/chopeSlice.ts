import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chopeCount: 5,
};

export const chopeSlice = createSlice({
  name: 'chope',
  initialState,
  reducers: {
    updateChopeCount: (state, action) => {
      state.chopeCount = action.payload;
    },
  }
});

export const { updateChopeCount } = chopeSlice.actions;

export const selectChopeCount = state => state.chope.chopeCount;

export default chopeSlice.reducer;