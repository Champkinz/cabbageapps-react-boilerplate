import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iInquiryTabsState } from "./InquiryTabChange.model";

export const initialState: iInquiryTabsState = {
  tab: {
    name: "",
    key: 1,
  },
};

const inquiryTabsStateSlice = createSlice({
  name: "uiInquiryState",
  initialState: initialState as iInquiryTabsState,
  reducers: {
    setInquiryTab(state, action: PayloadAction<{ key: number; name: string }>) {
      state.tab.key = action.payload.key;
      state.tab.name = action.payload.name;
    },
  },
});

export const inquiryTabsStateSliceReducers = inquiryTabsStateSlice.reducer;

export const inquiryTabsStateSliceActions = inquiryTabsStateSlice.actions;
