import { RouterState } from "connected-react-router";
import { iChangesListState } from "./modules/ChangesList/ChangesList.model";
import { iFinalNotesState } from "./modules/FinalNotes/FinalNotes.modal";
import { iInquiryTabsState } from "./modules/InquiryTabChange/InquiryTabChange.model";
import { iPreferencesSlice } from "./modules/preferences/preferences.model";
import { iTabsState } from "./modules/tabs/tabs.model";
import { iUIState } from "./modules/ui-state/ui-state.model";
export interface iStore {
  uiState: iUIState;
  preferences: iPreferencesSlice;
  router: RouterState;
  tabState: iTabsState;
  finalNote: iFinalNotesState;
  inquiryTabState: iInquiryTabsState;
  changesList: iChangesListState;
}
