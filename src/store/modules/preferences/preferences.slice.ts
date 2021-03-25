import { createSlice } from "@reduxjs/toolkit";

const PreferencesSlice = createSlice({
  name: "preferences",
  initialState: {},
  reducers: {},
});

export const PreferencesSliceReducers = PreferencesSlice.reducer;

export const PreferencesSliceActions = PreferencesSlice.actions;
