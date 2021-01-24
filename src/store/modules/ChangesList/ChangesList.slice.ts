import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iChangesListState } from "./ChangesList.model";

export const initialState: iChangesListState = {
  customerDetails: {
    count: 0,
  },
  disableNotes: {
    count: 0,
  },
  guardianDetails: {
    count: 0,
  },
  nomineeDetails: {
    count: 0,
  },
  productDetails: {
    count: 0,
  },
  basicAccountDetails: {
    count: 0,
  },
  accountControl: {
    count: 0,
  },
  purposeDetails: {
    count: 0,
  },
  remarksOnAdditionalAccount: {
    count: 0,
  },
  sourceOfFunds: {
    count: 0,
  },
  statementDetails: {
    count: 0,
  },
  overdraftDetails: {
    count: 0,
  },
  recoveryAccountDetails: {
    count: 0,
  },
  checkbookDetails: {
    count: 0,
  },
  sweepInstructions: {
    count: 0,
  },
  notificationDetails: {
    count: 0,
  },
  alertingRules: {
    count: 0,
  },
  atmDetails: { count: 0 },
  documentDetails: { count: 0 },
  creditInterestDetails: { count: 0 },
  debitInterestDetails: { count: 0 },
};

const iChangesListStateSlice = createSlice({
  name: "iChangesListState",
  initialState: initialState as iChangesListState,
  reducers: {
    setChangesList(
      state,
      action: PayloadAction<{
        count: number;
        key:
          | "customerDetails"
          | "disableNotes"
          | "guardianDetails"
          | "nomineeDetails"
          | "productDetails"
          | "basicAccountDetails"
          | "accountControl"
          | "purposeDetails"
          | "remarksOnAdditionalAccount"
          | "sourceOfFunds"
          | "statementDetails"
          | "overdraftDetails"
          | "recoveryAccountDetails"
          | "checkbookDetails"
          | "sweepInstructions"
          | "notificationDetails"
          | "alertingRules"
          | "atmDetails"
          | "documentDetails"
          | "creditInterestDetails"
          | "debitInterestDetails";
      }>
    ) {
      // console.log("action.payload.key", action.payload.key);
      switch (action.payload.key) {
        case "disableNotes":
          state.disableNotes.count = action.payload.count;
          break;
        case "customerDetails":
          state.customerDetails.count = action.payload.count;
          break;
        case "guardianDetails":
          state.guardianDetails.count = action.payload.count;
          break;
        case "nomineeDetails":
          state.nomineeDetails.count = action.payload.count;
          break;
        case "productDetails":
          state.productDetails.count = action.payload.count;
          break;
        case "basicAccountDetails":
          state.basicAccountDetails.count = action.payload.count;
          break;
        case "accountControl":
          state.accountControl.count = action.payload.count;
          break;
        case "purposeDetails":
          state.purposeDetails.count = action.payload.count;
          break;
        case "remarksOnAdditionalAccount":
          state.remarksOnAdditionalAccount.count = action.payload.count;
          break;
        case "sourceOfFunds":
          state.sourceOfFunds.count = action.payload.count;
          break;
        case "statementDetails":
          state.statementDetails.count = action.payload.count;
          break;
        case "overdraftDetails":
          state.overdraftDetails.count = action.payload.count;
          break;
        case "recoveryAccountDetails":
          state.recoveryAccountDetails.count = action.payload.count;
          break;
        case "checkbookDetails":
          state.checkbookDetails.count = action.payload.count;
          break;
        case "sweepInstructions":
          state.sweepInstructions.count = action.payload.count;
          break;
        case "notificationDetails":
          state.notificationDetails.count = action.payload.count;
          break;
        case "alertingRules":
          state.alertingRules.count = action.payload.count;
          break;
        case "atmDetails":
          state.atmDetails.count = action.payload.count;
          break;
        case "documentDetails":
          state.documentDetails.count = action.payload.count;
          break;
        case "creditInterestDetails":
          state.creditInterestDetails.count = action.payload.count;
          break;
        case "debitInterestDetails":
          state.debitInterestDetails.count = action.payload.count;
          break;
      }
      // state.disableNotes.count = action.payload.count;
      // state = {
      //   ...state,
      //   ...{ [action.payload.key]: { count: action.payload.count } },
      // };
      // console.log("state", state);
    },
  },
});

export const iChangesListStateSliceReducers = iChangesListStateSlice.reducer;

export const iChangesListStateSliceActions = iChangesListStateSlice.actions;
