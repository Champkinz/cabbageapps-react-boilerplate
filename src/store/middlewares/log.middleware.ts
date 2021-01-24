import { Action, AnyAction, Dispatch, Store } from "redux";

export const logger = (store: Store) => (next: Dispatch<AnyAction>) => (
  action: Action
) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
