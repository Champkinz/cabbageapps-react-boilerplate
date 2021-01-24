import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iUIState } from "./ui-state.model";

export const uiStore_initialState: iUIState = {
  sideBar: {
    isCollapsed: false,
  },
};

const UIStateSlice = createSlice({
  name: "uiState",
  initialState: uiStore_initialState,
  reducers: {
    setSideBarCollapsed(state, action: PayloadAction<boolean>) {
      state.sideBar.isCollapsed = action.payload;
    },
  },
});

export const UIStateSliceReducers = UIStateSlice.reducer;

export const UIStateSliceActions = UIStateSlice.actions;
