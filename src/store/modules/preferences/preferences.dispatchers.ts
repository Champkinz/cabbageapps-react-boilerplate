import { createAllDispatchers } from "../../store.utils";
import { PreferencesSliceActions } from "./preferences.slice";

export const { setLanguage } = createAllDispatchers(PreferencesSliceActions);
