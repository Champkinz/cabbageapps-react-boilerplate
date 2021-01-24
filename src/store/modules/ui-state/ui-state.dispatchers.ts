import { createAllDispatchers } from "../../store.utils";
import { UIStateSliceActions } from "./ui-state.slice";

export const {
  setSideBarCollapsed
} = createAllDispatchers(UIStateSliceActions);
