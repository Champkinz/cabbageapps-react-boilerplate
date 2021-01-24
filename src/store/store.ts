import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Reducer,
} from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { useDispatch } from "react-redux";
import { createMigrate, persistReducer, persistStore } from "redux-persist";
import { iChangesListStateSliceReducers } from "./modules/ChangesList/ChangesList.slice";
import { finalNotesSliceReducers } from "./modules/FinalNotes/FinalNotes.slice";
import { inquiryTabsStateSliceReducers } from "./modules/InquiryTabChange/InquiryTabChange.slice";
import { PreferencesSliceReducers } from "./modules/preferences/preferences.slice";
import { tabsStateSliceReducers } from "./modules/tabs/tabs.slice";
import { UIStateSliceReducers } from "./modules/ui-state/ui-state.slice";
import { storage } from "./storage.browser";
import { storeMigrations } from "./store.migrations";
import { iStore } from "./store.model";
import { RegisterWatchers } from "./store.watchers";

export const history = createBrowserHistory();

// If Local Storage is null, fill it with empty object
// Fix for (autoRehydrate.js:54)
const persistKey = "root";
(() => {
  if (!localStorage.getItem(`persist:${persistKey}`)) {
    localStorage.setItem(`persist:${persistKey}`, "{}");
  }
})();

const rootPersistConfig = {
  key: persistKey,
  storage,
  // Note: Does not accept dot notation
  blacklist: ["auth"],
  version: 4,
  // whitelist: ["searchValue"],
  // stateReconciler: autoMergeLevel2 as any,
  migrate: createMigrate(storeMigrations as any, { debug: false }),
  transforms: [],
};

const rootReducer: Reducer<iStore> = combineReducers({
  uiState: UIStateSliceReducers,
  preferences: PreferencesSliceReducers,
  tabState: tabsStateSliceReducers,
  finalNote: finalNotesSliceReducers,
  inquiryTabState: inquiryTabsStateSliceReducers,
  changesList: iChangesListStateSliceReducers,
  router: connectRouter(history),
});

const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: rootPersistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(routerMiddleware(history)),
  devTools: true,
  enhancers: [],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

RegisterWatchers();
