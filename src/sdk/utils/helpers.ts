import * as _ from "lodash";

export function changedKeys(oldObj: any, newObj: any, allowedKeys: any) {
  // get updated keys
  let keys = _.union(_.keys(oldObj), _.keys(newObj));
  let changedKeys = _.filter(keys, function(key) {
    return oldObj[key] !== newObj[key] && !allowedKeys.indexOf(key);
  });

  // filter the keys with allowed ones
  let validKeys = changedKeys.filter(k => {
    return allowedKeys.includes(k);
  });

  // create the valid update object
  let objToBeSend: any = {};
  for (const k of validKeys) {
    objToBeSend[k] = newObj[k];
  }

  console.log(objToBeSend);

  return objToBeSend;
}

export function serialize(obj: any) {
  let str = "";
  for (let key in obj) {
    if (str != "") {
      str += "&";
    }
    str += key + "=" + encodeURIComponent(obj[key]);
  }
  return str;
}

export type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T];
