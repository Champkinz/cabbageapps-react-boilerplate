import { createAllDispatchers } from "../../store.utils";
import { tabsStateSliceActions } from "./tabs.slice";

export const { setTabKey } = createAllDispatchers(tabsStateSliceActions);
