/**
 * @description Access a sub-property of an object safely
 */
export const GetSafely = <T>(fun: () => T, fallback?: T) => {
  let value: T = null as any;
  try {
    value = fun();
  } catch (e) {
    //Ignore Error
  }
  return value === null || value === undefined ? fallback : value;
};
