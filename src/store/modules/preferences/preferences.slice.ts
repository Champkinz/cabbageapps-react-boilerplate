import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AvailableLanguages } from "../../../locale/available-languages";
import { iPreferencesSlice } from "./preferences.model";

const PreferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    language: AvailableLanguages.ENGLISH,
  } as iPreferencesSlice,
  reducers: {
    setLanguage(state, { payload: language }: PayloadAction<AvailableLanguages>) {
      state.language = language;
    }
  }
});

export const PreferencesSliceReducers = PreferencesSlice.reducer;

export const PreferencesSliceActions = PreferencesSlice.actions;
