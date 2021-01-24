export function justWait(time: number) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, time);
  });
}
