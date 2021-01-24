import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iFinalNotesState } from "./FinalNotes.modal";

export const initialState: iFinalNotesState = {
  note: "",
};

const finalNotesSlice = createSlice({
  name: "finalNote",
  initialState: initialState as iFinalNotesState,
  reducers: {
    setFinalNotes(state, action: PayloadAction<string>) {
      state.note = action.payload;
    },
  },
});

export const finalNotesSliceReducers = finalNotesSlice.reducer;

export const finalNotesSliceActions = finalNotesSlice.actions;
