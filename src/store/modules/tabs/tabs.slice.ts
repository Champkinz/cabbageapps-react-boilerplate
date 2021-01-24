import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iTabsState } from "./tabs.model";

export const initialState: iTabsState = {
  tab: {
    key: 1,
  },
};

const tabsStateSlice = createSlice({
  name: "uiState",
  initialState: initialState as iTabsState,
  reducers: {
    setTabKey(state, action: PayloadAction<number>) {
      state.tab.key = action.payload;
    },
  },
});

export const tabsStateSliceReducers = tabsStateSlice.reducer;

export const tabsStateSliceActions = tabsStateSlice.actions;
