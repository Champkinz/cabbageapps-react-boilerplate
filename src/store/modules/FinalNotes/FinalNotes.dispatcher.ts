import { createAllDispatchers } from "../../store.utils";
import { finalNotesSliceActions } from "./FinalNotes.slice";

export const { setFinalNotes } = createAllDispatchers(finalNotesSliceActions);
