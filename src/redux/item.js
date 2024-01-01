import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload.items;
    },
  },
});

export const { getItems } = itemSlice.actions;
export const itemSliceReducer = itemSlice.reducer;
