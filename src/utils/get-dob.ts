export function getDob(date: string) {
  let d = new Date(date);

  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
