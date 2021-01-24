import { iStore } from "../../store.model";

export const selectLanguage = (store: iStore) => {
  return store.preferences.language;
};
