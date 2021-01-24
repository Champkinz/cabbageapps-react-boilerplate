import { debounce } from "lodash";
import watch from "redux-watch";
import { persistorSelector } from "./modules/ui-state/ui-state.selectors";
import { store } from "./store";

type SelectorFunction<T> = () => T;
type WatchCallback<T> = (newVal?: T, oldVal?: T, objectPath?: string) => void;
export function TypedWatch<T>(
  selector: SelectorFunction<T>
): (callback: WatchCallback<T>) => () => any {
  return watch(selector);
}

export const RegisterWatchers = () => {
  /**
   *
   * Initiate
   *
   */

  const onStateRehydrate = debounce((newVal, oldVal, objectPath) => {
    // Write functions that needs to be firing when store initiated
  }, 200);

  /**
   *
   * Watchers
   *
   */

  const persistStateWatcher = TypedWatch(persistorSelector)(onStateRehydrate);

  store.subscribe(() => {
    // Add Watchers Here
    persistStateWatcher();
  });
};
