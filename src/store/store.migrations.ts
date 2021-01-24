import produce from "immer";
import { DeepAssign } from "../utils/deep-assign";
import { iStore } from "./store.model";

export const storeMigrations: {
  [version: number]: (state: iStore) => iStore;
} = {
  0: state => produce(state, draft => {
    DeepAssign(draft, {
      // ..Changes
    });
  })
};