import { createAllDispatchers } from "../../store.utils";
import { iChangesListStateSliceActions } from "./ChangesList.slice";

export const { setChangesList } = createAllDispatchers(
  iChangesListStateSliceActions
);
