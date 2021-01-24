export function DeepAssign(targetRoot: any, sourceRoot: any) {
  function assign(target: any, source: any) {
    for (const k in source) {
      if (Array.isArray(source[k])) {
        target[k] = source[k];
      } else if (
        typeof source[k] == "object" &&
        source[k] !== null &&
        target[k] !== null &&
        target[k] !== undefined
      ) {
        assign(target[k], source[k]);
      } else {
        target[k] = source[k];
      }
    }
  }
  assign(targetRoot, sourceRoot);
}
