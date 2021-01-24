import { store } from "../../store";

export const selectSideBarIsCollapsed = () =>
  store.getState().uiState.sideBar.isCollapsed;

export const persistorSelector = () => store.getState()._persist;
