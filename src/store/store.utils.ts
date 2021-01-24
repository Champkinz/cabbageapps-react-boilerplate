import { isSerializable } from "../utils/is-serializable";
import { store } from "./store";

export function createDispatcher<F extends Function>(action: F): F {
  return ((...args: any[]) => {
    // Patch for event being passed to arguments
    if (!isSerializable(args)) {
      const actionObj = action();
      // console.warn(`Non Serializable payload for action found in ${actionObj.type}; Omitting payload and dispatching`, args);
      store.dispatch(actionObj);
      return;
    }
    store.dispatch(action(...args));
    return;
  }) as any;
}

export function createAllDispatchers<T>(actions: T) {
  return Object.keys({ ...actions }).reduce(
    (acc, currentKey) => ({
      ...acc,
      [currentKey]: createDispatcher((actions as any)[currentKey])
    }),
    {} as T
  );
}

export function Normalise<T>(data: T[], key: string) {
  const resourceByIds: {
    [key: string]: T;
  } = {};
  const resourceList: string[] = [];
  for (const resource of data || []) {
    resourceList.push((resource as any)[key]);
    resourceByIds[(resource as any)[key]] = resource;
  }
  return [resourceByIds, resourceList] as [
    {
      [key: string]: T;
    },
    string[]
  ];
}
