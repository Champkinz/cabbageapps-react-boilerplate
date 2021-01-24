export const replacePath = (path: string, value: string) => {
  const temp = path.split("/");
  temp[temp.length - 1] = value;
  return temp.join("/");
};
